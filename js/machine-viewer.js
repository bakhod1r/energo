/* ==========================================================================
   MACHINE VIEWER & BLUEPRINT INSPECTOR - ENERGOVO / ENERGO PLATFORM
   Interactive SVG isometric rendering with clickable telemetry hotspots
   ========================================================================== */

const MachineInspector = {
  currentMachineId: "vpi",

  machines: {
    vpi: {
      id: "vpi",
      name_uz: "VPI Vakuum-Bosimli Singdirish Avtoklavi",
      name_ru: "Установка Вакуумно-Нагнетательной Пропитки (ВНП)",
      name_en: "VPI Vacuum-Pressure Impregnation Autoclave",
      model: "РИФЖ 681591.030-VPI",
      svg: `
        <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <!-- Background Grid & Floor -->
          <defs>
            <radialGradient id="vpiGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#00e5ff" stop-opacity="0.25"/>
              <stop offset="100%" stop-color="#070c16" stop-opacity="0"/>
            </radialGradient>
            <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#1e293b"/>
              <stop offset="50%" stop-color="#0f172a"/>
              <stop offset="100%" stop-color="#020617"/>
            </linearGradient>
          </defs>
          <ellipse cx="300" cy="310" rx="220" ry="60" fill="url(#vpiGlow)"/>
          
          <!-- Base Platform -->
          <path d="M120 310 L300 360 L480 310 L300 260 Z" fill="#0d1829" stroke="#00e5ff" stroke-width="1.5"/>
          
          <!-- Main Autoclave Tank Cylinder -->
          <cylinder>
            <path d="M200 130 C200 100 400 100 400 130 L400 280 C400 310 200 310 200 280 Z" fill="url(#metalGrad)" stroke="#00e5ff" stroke-width="2"/>
            <ellipse cx="300" cy="130" rx="100" ry="25" fill="#1e293b" stroke="#00e5ff" stroke-width="2"/>
            <ellipse cx="300" cy="115" rx="85" ry="20" fill="#0f172a" stroke="#ff9800" stroke-width="2"/>
          </cylinder>
          
          <!-- Hydraulic Arm & Hoses -->
          <path d="M400 130 Q460 160 440 240 L410 240" fill="none" stroke="#ff9800" stroke-width="4" stroke-dasharray="6 3"/>
          <rect x="430" y="230" width="40" height="70" rx="6" fill="#162540" stroke="#00e5ff" stroke-width="1.5"/>
          
          <!-- Vacuum Pump Unit -->
          <rect x="130" y="240" width="60" height="50" rx="4" fill="#0f172a" stroke="#00e5ff" stroke-width="1.5"/>
          <circle cx="160" cy="265" r="16" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
          <path d="M160 255 L160 275 M150 265 L170 265" stroke="#00e5ff" stroke-width="2"/>
          <path d="M190 260 L200 260" stroke="#38bdf8" stroke-width="4"/>

          <!-- Pressure Gauges & Valves -->
          <circle cx="280" cy="90" r="12" fill="#08101d" stroke="#ef4444" stroke-width="2"/>
          <line x1="280" y1="90" x2="286" y2="84" stroke="#ef4444" stroke-width="2"/>
          <circle cx="320" cy="90" r="12" fill="#08101d" stroke="#22c55e" stroke-width="2"/>
          <line x1="320" y1="90" x2="326" y2="84" stroke="#22c55e" stroke-width="2"/>

          <!-- PLC SCADA Console -->
          <polygon points="100,180 150,170 150,220 100,230" fill="#1e293b" stroke="#00e5ff" stroke-width="1.5"/>
          <rect x="110" y="180" width="30" height="20" fill="#0284c7"/>
        </svg>
      `,
      hotspots: [
        {
          id: "hp-lid",
          top: "24%",
          left: "50%",
          number: "1",
          title_uz: "Gidravlik Qulfli Germetik Qopqoq",
          title_ru: "Герметичная Крышка с Гидрозамками",
          title_en: "Hermetic Lid with Hydraulic Locking",
          desc_uz: "0.6 MPa (6 bar) ortiqcha bosimga bardosh beruvchi ftoroplast qistirmali va avtomatik xavfsizlik klapaniga ega og'ir qopqoq.",
          desc_ru: "Массивная крышка с байонетным затвором и фторопластовым уплотнением. Выдерживает избыточное давление азота до 0.6 МПа.",
          desc_en: "Heavy-duty autoclave head with bayonet locking ring, PTFE seal, and dual safety relief valves tested to 0.6 MPa overpressure."
        },
        {
          id: "hp-vac",
          top: "62%",
          left: "26%",
          number: "2",
          title_uz: "Ikki Bosqichli Vakuum Agregati",
          title_ru: "Двухступенчатая Вакуумная Система",
          title_en: "Two-Stage High-Vacuum Booster",
          desc_uz: "Chulg'am ichidagi barcha havo va namlikni 0.08 mbar gacha so'rib oluvchi Roots rotatsion vakuum nasosi.",
          desc_ru: "Комбинация пластинчато-роторного и бустерного насоса Рутса. Достигает глубокого остаточного давления 0.08 мбар (10 Па).",
          desc_en: "Roots rotary booster pump achieving deep vacuum of 0.08 mbar to completely eliminate air pockets and moisture in slot insulation."
        },
        {
          id: "hp-plc",
          top: "48%",
          left: "20%",
          number: "3",
          title_uz: "Siemens PLC SCADA Boshqaruv Paneli",
          title_ru: "Шкаф Управления с ПЛК Siemens SCADA",
          title_en: "Siemens PLC SCADA Control Center",
          desc_uz: "Singdirish harorati, qovushqoqlik, vakuum va bosim davrlarini real vaqtda avtomatik boshqaruvchi sensorli ekran.",
          desc_ru: "Автоматический контроль циклов 'вакуум-пропитка-давление-слив' с архивацией термограмм и давления по протоколам ГОСТ.",
          desc_en: "Fully automated recipe manager controlling vacuum hold, compound injection, nitrogen pressurization, and thermal curing cycles."
        },
        {
          id: "hp-tank",
          top: "55%",
          left: "72%",
          number: "4",
          title_uz: "Monomat Kompaundi Saqlash Baki",
          title_ru: "Бак Хранения и Подготовки Компаунда",
          title_en: "Compound Mixing & Storage Reservoir",
          desc_uz: "Epoksid smolasining polimerizatsiyasini oldini olish uchun suvli sovutish ko'ylagi va doimiy aralashtirgich bilan ta'minlangan.",
          desc_ru: "Емкость с водяной рубашкой охлаждения (+15°C) и непрерывной циркуляцией для сохранения жизнеспособности компаунда.",
          desc_en: "Chilled reservoir (+15°C) with continuous low-shear agitation to preserve Class H epoxy resin pot life for up to 12 months."
        }
      ]
    },

    winder: {
      id: "winder",
      name_uz: "Tezkor Universal Chulg'am O'rash Stanogi",
      name_ru: "Станок Намоточный Быстроходный с ЧПУ",
      name_en: "High-Speed Universal CNC Coil Winder",
      model: "РИФЖ 045119.009",
      svg: `
        <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <!-- Background Base -->
          <rect x="80" y="240" width="440" height="50" rx="8" fill="#0f172a" stroke="#00e5ff" stroke-width="2"/>
          <line x1="80" y1="265" x2="520" y2="265" stroke="#1e293b" stroke-width="2"/>

          <!-- Headstock & Spindle (Left) -->
          <rect x="120" y="120" width="110" height="120" rx="6" fill="#13233f" stroke="#00e5ff" stroke-width="2"/>
          <circle cx="230" cy="180" r="30" fill="#1e293b" stroke="#f59e0b" stroke-width="3"/>
          <path d="M230 180 L290 180" stroke="#f59e0b" stroke-width="8"/>

          <!-- Winding Mandrel (Center) -->
          <rect x="290" y="150" width="90" height="60" rx="4" fill="#0d1829" stroke="#38bdf8" stroke-width="2"/>
          <line x1="300" y1="150" x2="300" y2="210" stroke="#eab308" stroke-width="2"/>
          <line x1="320" y1="150" x2="320" y2="210" stroke="#eab308" stroke-width="2"/>
          <line x1="340" y1="150" x2="340" y2="210" stroke="#eab308" stroke-width="2"/>
          <line x1="360" y1="150" x2="360" y2="210" stroke="#eab308" stroke-width="2"/>

          <!-- Tailstock (Right) -->
          <rect x="410" y="150" width="70" height="90" rx="4" fill="#13233f" stroke="#00e5ff" stroke-width="2"/>
          <polygon points="410,180 380,180 395,170 395,190" fill="#f59e0b"/>

          <!-- CNC Touchscreen Panel -->
          <rect x="130" y="60" width="60" height="45" rx="4" fill="#0284c7" stroke="#ffffff" stroke-width="1.5"/>
          <line x1="160" y1="105" x2="160" y2="120" stroke="#00e5ff" stroke-width="3"/>

          <!-- Wire Tensioner Feeder Carriage -->
          <rect x="270" y="80" width="50" height="40" rx="4" fill="#1e293b" stroke="#22c55e" stroke-width="2"/>
          <circle cx="285" cy="100" r="6" fill="#f59e0b"/>
          <circle cx="305" cy="100" r="6" fill="#f59e0b"/>
          <path d="M295 100 L320 150" stroke="#eab308" stroke-width="2" stroke-dasharray="3 2"/>
        </svg>
      `,
      hotspots: [
        {
          id: "hp-spindle",
          top: "45%",
          left: "35%",
          number: "1",
          title_uz: "Chastotaviy Boshqariladigan Shpindel",
          title_ru: "Высокомоментный Шпиндель с ПЧ",
          title_en: "High-Torque VFD Spindle",
          desc_uz: "0 dan 1200 ayl/daq gacha silliq tezlanish va to'xtash imkonini beruvchi 5.5 kW li Delta VFD boshqaruvli shpindel.",
          desc_ru: "Шпиндельный узел с бесступенчатым регулированием 0-1200 об/мин, плавным пуском и динамическим торможением.",
          desc_en: "Heavy spindle driven by 5.5 kW motor with frequency inverter, providing 180 N·m torque for both fine and flat copper wires."
        },
        {
          id: "hp-feeder",
          top: "22%",
          left: "50%",
          number: "2",
          title_uz: "Pnevmatik Sim Tortish Mexanizmi",
          title_ru: "Пневматический Натяжитель Провода",
          title_en: "Pneumatic Wire Tensioner & Guide",
          desc_uz: "Sim emaliga zarar yetkazmasdan doimiy taranglikni saqlab turuvchi keramika halqali pnevmatik yo'naltirgich.",
          desc_ru: "Механизм регулируемого натяжения с полированными керамическими роликами, исключающими повреждение эмалевой изоляции.",
          desc_en: "Precision tensioner with polished ceramic guide eyes ensuring zero micro-scratches on wire enamel during high-speed winding."
        },
        {
          id: "hp-cnc",
          top: "18%",
          left: "26%",
          number: "3",
          title_uz: "Raqamli Qadam Hisoblagich (CNC)",
          title_ru: "ЧПУ Контроллер со Счетчиком Витков",
          title_en: "CNC Programmable Turn Counter",
          desc_uz: "Har bir guruh uchun o'ramlar sonini aniq hisoblovchi va berilgan qiymatda avtomatik to'xtatuvchi optik sensorli ekran.",
          desc_ru: "Сенсорная панель управления с памятью на 100 программ намотки, автоостановом и функцией укладки по слоям.",
          desc_en: "Digital touchscreen terminal with 100-program memory, optical encoder feedback, and layer-by-layer automated pitch pitch control."
        }
      ]
    },

    bearing_heater: {
      id: "bearing_heater",
      name_uz: "Induksion Podshipnik Qizdirgich",
      name_ru: "Индукционный Нагреватель Подшипников",
      name_en: "Industrial Induction Bearing Heater",
      model: "РИФЖ 681591.011",
      svg: `
        <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <!-- Stand Platform -->
          <rect x="140" y="260" width="320" height="50" rx="8" fill="#0f172a" stroke="#ff3d00" stroke-width="2"/>
          
          <!-- Transformer Core & Yoke (U-Core) -->
          <path d="M200 260 L200 130 L400 130 L400 260 Z" fill="none" stroke="#334155" stroke-width="32" stroke-linejoin="round"/>
          <rect x="184" y="114" width="232" height="32" rx="4" fill="#475569" stroke="#f59e0b" stroke-width="2"/>

          <!-- Bearing (Ring) placed on horizontal yoke -->
          <ellipse cx="300" cy="130" rx="60" ry="25" fill="#1e293b" stroke="#00e5ff" stroke-width="4"/>
          <ellipse cx="300" cy="130" rx="35" ry="14" fill="#0b1322" stroke="#00e5ff" stroke-width="2"/>
          <!-- Heat Radiance Glow -->
          <ellipse cx="300" cy="130" rx="75" ry="32" fill="none" stroke="#ff3d00" stroke-width="2" stroke-dasharray="4 4"/>

          <!-- Magnetic Probe (PT100) on bearing -->
          <circle cx="330" cy="120" r="6" fill="#ef4444"/>
          <path d="M330 120 Q370 80 430 160" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="3 2"/>

          <!-- Microcontroller Front Display -->
          <rect x="230" y="270" width="140" height="30" rx="4" fill="#020617" stroke="#00e5ff" stroke-width="1.5"/>
          <text x="300" y="290" fill="#00e5ff" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">110°C / AUTO</text>
        </svg>
      `,
      hotspots: [
        {
          id: "hp-yoke",
          top: "28%",
          left: "50%",
          number: "1",
          title_uz: "Olinuvchi Magnit O'zagi (Yoke)",
          title_ru: "Съемный Сердечник (Ярмо)",
          title_en: "Removable Induction Magnetic Yoke",
          desc_uz: "Turli diametrdagi (20 mm dan 450 mm gacha) podshipniklarni tez o'rnatish uchun almashtiriladigan transformator po'latli magnit o'zagi.",
          desc_ru: "Набор сменных ярм из кремнистой электротехнической стали для подшипников разного внутреннего диаметра.",
          desc_en: "High-grade silicon steel laminated crossbars allowing rapid mounting of bearings from Ø 20mm to Ø 450mm."
        },
        {
          id: "hp-probe",
          top: "28%",
          left: "58%",
          number: "2",
          title_uz: "Magnitli Harorat Datchigi (PT100)",
          title_ru: "Магнитная Термопара Контроля",
          title_en: "Magnetic Temperature Probe",
          desc_uz: "Podshipnikning ichki halqasiga yopishib, haroratni 110°C yoki 120°C ga yetganda qizdirishni avtomatik to'xtatuvchi sensor.",
          desc_ru: "Магнитный датчик с термопарой PT100. Предотвращает перегрев подшипника выше безопасных 120°C.",
          desc_en: "Magnetic surface probe constantly monitoring inner ring temperature with automatic temperature hold and over-temperature safety cut-out."
        },
        {
          id: "hp-demag",
          top: "68%",
          left: "50%",
          number: "3",
          title_uz: "Avtomatik Magnitsizlantirish Tizimi",
          title_ru: "Блок Автоматического Размагничивания",
          title_en: "Automatic Demagnetization Cycle",
          desc_uz: "Qizdirish yakunlanganda podshipnikda metall qirindilari yopishib qolmasligi uchun qoldiq magnit maydonini 2 A/sm dan kamaytirish.",
          desc_ru: "Авторазмагничивание до уровня менее 2 А/см в конце цикла, защищающее подшипник от притяжения металлической пыли.",
          desc_en: "Built-in auto-demagnetizing circuit reducing residual magnetic field to under 2 A/cm to prevent metallic debris attraction during operation."
        }
      ]
    }
  },

  init: function() {
    this.renderMachine(this.currentMachineId);
  },

  selectMachine: function(machineId) {
    if (this.machines[machineId]) {
      this.currentMachineId = machineId;
      this.renderMachine(machineId);
    }
  },

  renderMachine: function(machineId) {
    const machine = this.machines[machineId];
    const canvas = document.getElementById("inspectorCanvas");
    const detailsPanel = document.getElementById("inspectorDetails");
    const currentLang = window.currentLanguage || 'uz';

    if (!canvas || !detailsPanel) return;

    // Render SVG
    canvas.innerHTML = `
      <div class="inspector-controls-bar">
        <button class="inspector-tab-btn ${machineId === 'vpi' ? 'active' : ''}" onclick="MachineInspector.selectMachine('vpi')">VPI 681591.030</button>
        <button class="inspector-tab-btn ${machineId === 'winder' ? 'active' : ''}" onclick="MachineInspector.selectMachine('winder')">CNC 045119.009</button>
        <button class="inspector-tab-btn ${machineId === 'bearing_heater' ? 'active' : ''}" onclick="MachineInspector.selectMachine('bearing_heater')">HEATER 681591.011</button>
      </div>
      ${machine.svg}
      ${machine.hotspots.map(hp => `
        <div class="inspector-hotspot" id="${hp.id}" style="top: ${hp.top}; left: ${hp.left};" onclick="MachineInspector.selectHotspot('${machineId}', '${hp.id}')">
          ${hp.number}
        </div>
      `).join('')}
    `;

    // Default select first hotspot
    if (machine.hotspots.length > 0) {
      this.selectHotspot(machineId, machine.hotspots[0].id);
    }
  },

  selectHotspot: function(machineId, hotspotId) {
    const machine = this.machines[machineId];
    const hp = machine.hotspots.find(h => h.id === hotspotId);
    const detailsPanel = document.getElementById("inspectorDetails");
    const currentLang = window.currentLanguage || 'uz';

    // Highlight hotspot element
    document.querySelectorAll(".inspector-hotspot").forEach(el => el.classList.remove("active"));
    const activeEl = document.getElementById(hotspotId);
    if (activeEl) activeEl.classList.add("active");

    if (hp && detailsPanel) {
      const title = hp[`title_${currentLang}`] || hp.title_uz;
      const desc = hp[`desc_${currentLang}`] || hp.desc_uz;
      const machName = machine[`name_${currentLang}`] || machine.name_uz;

      detailsPanel.innerHTML = `
        <span class="machine-model-badge">${machine.model}</span>
        <h3>${machName}</h3>
        <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 20px;">
          ${currentLang === 'uz' ? 'Texnologik uzellar va avtomatlashtirish parametrlarini ko\'rish:' : currentLang === 'ru' ? 'Параметры и конструкция технологических узлов:' : 'Engineering assembly and telemetry specs:'}
        </p>
        
        <div class="hotspot-info-card animate-fade-in">
          <h4><i class="fas fa-microchip"></i> ${hp.number}. ${title}</h4>
          <p>${desc}</p>
        </div>

        <div style="margin-top: auto; padding-top: 16px; border-top: 1px solid var(--border-glass);">
          <button class="btn btn-outline btn-sm" style="width: 100%;" onclick="App.openMachineryFromInspector('${machine.id}')">
            <i class="fas fa-file-invoice"></i> ${currentLang === 'uz' ? 'Texnik Pasport & Chizma' : currentLang === 'ru' ? 'Открыть Паспорт и Чертёж' : 'Open Technical Blueprint'}
          </button>
        </div>
      `;
    }
  }
};
