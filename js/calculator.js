/* ==========================================================================
   ENGINEERING CALCULATOR - ENERGOVO / ENERGO-CABLE INDUSTRIAL PLATFORM
   Formulas strictly according to PUE 7th edition, GOST 31996, and IEC 60502-1
   ========================================================================== */

const ElectricalCalculator = {
  // Standard metric cross sections (mm²)
  standardSections: [1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240, 300, 400, 500, 630],

  // Permissible continuous current I_dd (A) for 3-core cables in air (PUE Tab. 1.3.4 & 1.3.5)
  ampacityCopper: {
    1.5: 19, 2.5: 27, 4: 38, 6: 46, 10: 70, 16: 85, 25: 115, 35: 135,
    50: 175, 70: 215, 95: 260, 120: 300, 150: 350, 185: 405, 240: 480,
    300: 550, 400: 660, 500: 770, 630: 900
  },
  ampacityAluminum: {
    1.5: 14, 2.5: 20, 4: 29, 6: 36, 10: 55, 16: 65, 25: 90, 35: 105,
    50: 135, 70: 165, 95: 200, 120: 230, 150: 270, 185: 310, 240: 370,
    300: 420, 400: 510, 500: 600, 630: 700
  },

  // Specific conductivity gamma m/(Ohm*mm²)
  gammaCopper: 56,
  gammaAluminum: 34,

  // Approximate weight per km (kg/km) for 4-core copper & aluminum cables
  weightTableCopper: {
    1.5: 140, 2.5: 190, 4: 280, 6: 380, 10: 580, 16: 850, 25: 1300, 35: 1700,
    50: 2300, 70: 3100, 95: 4200, 120: 5200, 150: 6300, 185: 7800, 240: 10200,
    300: 12500, 400: 16000, 500: 20500, 630: 26000
  },
  weightTableAluminum: {
    1.5: 90, 2.5: 120, 4: 170, 6: 220, 10: 320, 16: 450, 25: 650, 35: 850,
    50: 1100, 70: 1450, 95: 1900, 120: 2350, 150: 2850, 185: 3500, 240: 4500,
    300: 5600, 400: 7200, 500: 9100, 630: 11500
  },

  /**
   * Main calculation function
   * @param {Object} params { powerKW, voltageV, lengthM, cosPhi, allowableLossPct, conductorMat }
   */
  calculate: function(params) {
    const P = Math.max(0.1, parseFloat(params.powerKW) || 10);
    const U = parseFloat(params.voltageV) || 380;
    const L = Math.max(1, parseFloat(params.lengthM) || 50);
    const cosPhi = Math.min(1.0, Math.max(0.6, parseFloat(params.cosPhi) || 0.85));
    const maxLoss = Math.max(0.5, parseFloat(params.allowableLossPct) || 5.0);
    const mat = params.conductorMat === 'al' ? 'al' : 'cu';

    const isThreePhase = U >= 380;
    const gamma = mat === 'cu' ? this.gammaCopper : this.gammaAluminum;
    const ampacityMap = mat === 'cu' ? this.ampacityCopper : this.ampacityAluminum;
    const weightMap = mat === 'cu' ? this.weightTableCopper : this.weightTableAluminum;

    // 1. Calculate Rated Current (Amperes)
    let currentA = 0;
    if (isThreePhase) {
      // I = P * 1000 / (sqrt(3) * U * cosPhi)
      currentA = (P * 1000) / (Math.sqrt(3) * U * cosPhi);
    } else {
      // Single Phase: I = P * 1000 / (U * cosPhi)
      currentA = (P * 1000) / (U * cosPhi);
    }

    // 2. Determine Minimum Cross-Section by Thermal Ampacity (I <= I_dd)
    let thermalSection = this.standardSections[this.standardSections.length - 1];
    for (let s of this.standardSections) {
      if (ampacityMap[s] >= currentA) {
        thermalSection = s;
        break;
      }
    }

    // 3. Determine Minimum Cross-Section by Allowable Voltage Drop (Delta U% <= maxLoss)
    let voltageDropSection = this.standardSections[this.standardSections.length - 1];
    for (let s of this.standardSections) {
      let dU_volts = 0;
      if (isThreePhase) {
        // Delta U = (P * 1000 * L) / (gamma * S * U)
        dU_volts = (P * 1000 * L) / (gamma * s * U);
      } else {
        // Delta U = (2 * P * 1000 * L) / (gamma * S * U)
        dU_volts = (2 * P * 1000 * L) / (gamma * s * U);
      }
      let dU_pct = (dU_volts / U) * 100;
      if (dU_pct <= maxLoss) {
        voltageDropSection = s;
        break;
      }
    }

    // Recommended section is the max of thermal and voltage drop requirements
    const chosenSection = Math.max(thermalSection, voltageDropSection);

    // 4. Calculate Exact Metrics for Chosen Section
    let finalDropVolts = 0;
    if (isThreePhase) {
      finalDropVolts = (P * 1000 * L) / (gamma * chosenSection * U);
    } else {
      finalDropVolts = (2 * P * 1000 * L) / (gamma * chosenSection * U);
    }
    const finalDropPct = (finalDropVolts / U) * 100;

    // Power Loss in line (kW)
    // Delta P = 3 * I^2 * R = (P^2 * 1000 * L) / (gamma * S * U^2) (for 3 phase)
    let powerLossKW = 0;
    if (isThreePhase) {
      powerLossKW = (Math.pow(P, 2) * 1000 * L) / (gamma * chosenSection * Math.pow(U, 2));
    } else {
      powerLossKW = (2 * Math.pow(P, 2) * 1000 * L) / (gamma * chosenSection * Math.pow(U, 2));
    }

    // 5. Total Cable Weight & Drum Packaging
    const weightPerKm = weightMap[chosenSection] || 1000;
    const totalGrossKg = (weightPerKm * (L / 1000)) + 60; // +60kg for wooden drum

    let drumType = "Барабан №10 (Деревянный ГОСТ 5151-79)";
    if (L > 500 || totalGrossKg > 1500) drumType = "Барабан №18 (Усиленный)";
    else if (L > 300 || totalGrossKg > 800) drumType = "Барабан №14 (ГОСТ 5151-79)";
    else if (L > 100 || totalGrossKg > 300) drumType = "Барабан №12 (ГОСТ 5151-79)";

    // Suggested Cable Grade Brand
    let cableGradeName = "";
    if (mat === 'cu') {
      if (U >= 6000) {
        cableGradeName = `ПвПг 3x${chosenSection} (XLPE 6-10 kV)`;
      } else {
        cableGradeName = isThreePhase ? `ВВГнг(А)-LS 4x${chosenSection}` : `ВВГнг(А)-LS 3x${chosenSection}`;
      }
    } else {
      if (U >= 6000) {
        cableGradeName = `АПвПуг 3x${chosenSection} (XLPE 6-10 kV)`;
      } else {
        cableGradeName = isThreePhase ? `АВВГнг(А) 4x${chosenSection}` : `АВВГнг(А) 3x${chosenSection}`;
      }
    }

    return {
      currentA: currentA.toFixed(1),
      recommendedSection: chosenSection,
      cableGradeName: cableGradeName,
      dropVolts: finalDropVolts.toFixed(2),
      dropPct: finalDropPct.toFixed(2),
      powerLossKW: powerLossKW.toFixed(3),
      powerLossPct: ((powerLossKW / P) * 100).toFixed(2),
      isDropSafe: finalDropPct <= maxLoss,
      drumType: drumType,
      totalGrossKg: Math.round(totalGrossKg),
      rawParams: { P, U, L, cosPhi, maxLoss, mat, chosenSection }
    };
  }
};
