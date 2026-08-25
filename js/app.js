/* ==========================================================================
   APP ENGINE — ОАО ENERGO GROUP (ENERGO) & ENERGO CABLES
   Universal Engine: Identical Header, Full Technical Modals, Premium Animations
   ========================================================================== */

const App = {
  currentSlide: 1,
  totalSlides: 5,
  slideTimer: null,

  /* ── Path Resolver ────────────────────────────────────────────────────── */
  getPrefix: function() {
    const p = window.location.pathname;
    if (p.includes('/catalog/kabel-') || p.includes('/catalog/silovoy') ||
        p.includes('/catalog/bronirovannyy') || p.includes('/catalog/vysokovoltnyy') ||
        p.includes('/catalog/kontrolnyy') || p.includes('/catalog/sip') ||
        p.includes('/catalog/spec')) {
      return '../../';
    } else if (p.includes('/catalog/') || p.includes('/news/') || p.includes('/team/')) {
      return '../';
    }
    return '';
  },

  /* ── Bootstrap ────────────────────────────────────────────────────────── */
  init: function() {
    this.injectScrollProgress();
    this.startSlideTimer();
    this.renderCableCategories();
    this.initScrollReveal();
    this.initTitleReveal();
  },

  /* ── Scroll Progress Bar ──────────────────────────────────────────────── */
  injectScrollProgress: function() {
    const bar = document.createElement('div');
    bar.className = 'scroll-progress';
    bar.id = 'scrollProgress';
    document.body.prepend(bar);

    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const pct = maxScroll > 0 ? (scrolled / maxScroll) * 100 : 0;
      bar.style.width = pct + '%';
    }, { passive: true });
  },

  /* ── Bi-directional Scroll Reveal Engine (Scroll UP & DOWN) ─────────────── */
  initScrollReveal: function() {
    let lastScrollY = window.scrollY;
    let scrollDirection = 'down';

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY + 3) {
        scrollDirection = 'down';
        document.body.classList.remove('scrolling-up');
        document.body.classList.add('scrolling-down');
      } else if (currentScrollY < lastScrollY - 3) {
        scrollDirection = 'up';
        document.body.classList.remove('scrolling-down');
        document.body.classList.add('scrolling-up');
      }
      lastScrollY = currentScrollY;
    }, { passive: true });

    const selectors = [
      '.blue-item-card',
      '.service-card',
      '.news-item-row',
      '.feature-item',
      '.team-member-card',
      '.energo-catalog-row',
      '.spec-feature-card',
      '.column',
      '.energo-title-block',
      '.product-card',
      '.about-grid-card',
      '[data-reveal]'
    ];

    const allElements = document.querySelectorAll(selectors.join(', '));
    if (!allElements.length) return;

    allElements.forEach((el) => {
      if (!el.classList.contains('scroll-reveal-item')) {
        el.classList.add('scroll-reveal-item');
      }
      const parent = el.parentElement;
      if (parent) {
        const siblings = Array.from(parent.children).filter(c => c.matches(selectors.join(', ')));
        const idx = siblings.indexOf(el);
        if (idx > -1) {
          const delay = (idx % 6) * 0.08;
          el.style.setProperty('--reveal-delay', `${delay}s`);
        }
      }
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (scrollDirection === 'up') {
            entry.target.classList.add('reveal-from-top');
          } else {
            entry.target.classList.remove('reveal-from-top');
          }
          entry.target.classList.add('revealed');
          if (entry.target.classList.contains('energo-title-block')) {
            entry.target.classList.add('visible');
          }
        } else {
          const rect = entry.boundingClientRect;
          if (rect.top > window.innerHeight) {
            entry.target.classList.remove('revealed', 'reveal-from-top');
          } else if (rect.bottom < 0) {
            entry.target.classList.remove('revealed');
            entry.target.classList.add('reveal-from-top');
          }
          if (entry.target.classList.contains('energo-title-block')) {
            entry.target.classList.remove('visible');
          }
        }
      });
    }, { threshold: 0.1, rootMargin: '20px 0px -20px 0px' });

    allElements.forEach(el => observer.observe(el));
  },

  /* ── Title Underline Reveal ───────────────────────────────────────────── */
  initTitleReveal: function() {
    const blocks = document.querySelectorAll('.energo-title-block');
    if (!blocks.length) return;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        } else {
          e.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.2 });

    blocks.forEach(b => obs.observe(b));
  },

  /* ── Slider ───────────────────────────────────────────────────────────── */
  startSlideTimer: function() {
    const slider = document.getElementById('heroSlider');
    if (!slider) return;
    this.slideTimer = setInterval(() => this.nextSlide(), 5000);
  },

  showSlide: function(index) {
    document.querySelectorAll('.slider-slide-item').forEach(el => el.classList.remove('active'));
    const target = document.getElementById(`slide${index}`);
    if (target) target.classList.add('active');
    this.currentSlide = index;
  },

  nextSlide: function() {
    let n = this.currentSlide + 1;
    if (n > this.totalSlides) n = 1;
    this.showSlide(n);
  },

  prevSlide: function() {
    let n = this.currentSlide - 1;
    if (n < 1) n = this.totalSlides;
    this.showSlide(n);
  },

  /* ── Cable Categories Render ──────────────────────────────────────────── */
  renderCableCategories: function() {
    const grid = document.getElementById('cableCategoriesGrid');
    if (!grid || !industrialData?.cableCategories) return;

    const prefix = this.getPrefix();
    grid.innerHTML = industrialData.cableCategories.map((cat, i) => `
      <div class="blue-item-card" data-reveal data-delay="${(i * 0.07).toFixed(2)}">
        <div class="blue-item-img">
          <img src="${prefix}${cat.image}" alt="${cat.name}" loading="lazy">
        </div>
        <div class="blue-item-body">
          <a href="${prefix}${cat.url}" class="blue-item-title">${cat.name}</a>
          <a href="${prefix}${cat.url}" class="blue-item-moreinf">Подробнее</a>
        </div>
      </div>
    `).join('');

    // Trigger observer for dynamically added cards
    this.initScrollReveal();
  },

  /* ── Universal Full Technical Datasheet Modal ─────────────────────────── */
  openModal: function(query) {
    const modal = document.getElementById('quickModal');
    const head  = document.getElementById('modalHeadTitle');
    const body  = document.getElementById('modalDynamicBody');
    const prefix = this.getPrefix();

    const q = (query || '').trim();
    const ql = q.toLowerCase();

    // Priority 1: exact id match in cables
    let item = null;
    if (industrialData.cables) {
      item = industrialData.cables.find(c => c.id === q);
    }
    // Priority 2: exact id match in services
    if (!item && industrialData.services) {
      item = industrialData.services.find(s => s.id === q);
    }
    // Priority 3: exact mark match (case-insensitive)
    if (!item && industrialData.cables) {
      item = industrialData.cables.find(c => c.mark.toLowerCase() === ql);
    }
    // Priority 4: mark contains query
    if (!item && industrialData.cables) {
      item = industrialData.cables.find(c => c.mark.toLowerCase().includes(ql));
    }
    // Priority 5: query contains mark
    if (!item && industrialData.cables) {
      item = industrialData.cables.find(c => ql.includes(c.mark.toLowerCase()));
    }
    // Priority 6: all significant words match
    if (!item && industrialData.cables) {
      const words = ql.split(/\s+/).filter(w => w.length > 2);
      if (words.length) {
        item = industrialData.cables.find(c =>
          words.every(w => c.mark.toLowerCase().includes(w))
        );
      }
    }
    // Priority 7: services title partial
    if (!item && industrialData.services) {
      item = industrialData.services.find(s =>
        s.title.toLowerCase().includes(ql) || ql.includes(s.title.toLowerCase().substring(0, 12))
      );
    }

    const itemTitle   = item ? (item.mark || item.title) : q || 'Техническая информация';
    const itemImage   = item ? `${prefix}${item.image}`  : `${prefix}assets/images/cable_vvg.jpg`;
    const itemBadge   = item ? (item.badge || 'ГОСТ РФ') : 'Сертифицировано';
    const itemSummary = item ? (item.summary || item.description || '') : 'Официальная продукция завода с гарантией качества.';

    if (head) {
      head.innerHTML = `<i class="fas fa-certificate" style="color:#5dade2;margin-right:7px;"></i>${itemTitle}`;
    }

    // Specs rows
    let specsHtml = '';
    if (item?.specs && Object.keys(item.specs).length) {
      specsHtml = Object.entries(item.specs).map(([k, v]) => `
        <tr>
          <td style="padding:10px 16px;font-weight:700;color:#1e293b;width:42%;background:#f8fafc;border-right:1px solid #e4ecf3;font-size:0.86rem;">${k}</td>
          <td style="padding:10px 16px;color:#334155;font-size:0.86rem;font-family:'JetBrains Mono',monospace;">${v}</td>
        </tr>
      `).join('');
    } else {
      specsHtml = `
        <tr><td style="padding:10px 16px;font-weight:700;background:#f8fafc;border-right:1px solid #e4ecf3;">Стандарт</td><td style="padding:10px 16px;">ГОСТ РФ / ТУ предприятия</td></tr>
        <tr><td style="padding:10px 16px;font-weight:700;background:#f8fafc;border-right:1px solid #e4ecf3;">Сертификация</td><td style="padding:10px 16px;">ТР ЕАЭС 043/2017, ТР ТС 004/2011</td></tr>
        <tr><td style="padding:10px 16px;font-weight:700;background:#f8fafc;border-right:1px solid #e4ecf3;">Гарантийный срок</td><td style="padding:10px 16px;">До 5 лет надёжной эксплуатации</td></tr>
      `;
    }

    if (body) {
      body.innerHTML = `
        <!-- Hero Row: Image + Summary -->
        <div style="display:flex;gap:20px;margin-bottom:22px;align-items:flex-start;background:linear-gradient(135deg,#f0f6fb,#e8f2fa);padding:18px;border-radius:10px;border:1px solid #ccd8e4;">
          <img src="${itemImage}" alt="${itemTitle}"
               style="width:180px;height:125px;object-fit:cover;border-radius:8px;border:2px solid #ccd8e4;flex-shrink:0;box-shadow:0 4px 14px rgba(13,39,68,.14);"
               onerror="this.src='${prefix}assets/images/cable_vvg.jpg'">
          <div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px;">
              <span style="background:#eff6ff;color:#1d4ed8;font-size:0.76rem;font-weight:800;padding:4px 12px;border-radius:100px;border:1px solid #93c5fd;">
                <i class="fas fa-check-circle"></i> ${itemBadge}
              </span>
              <span style="background:#fff1f1;color:#b91c1c;font-size:0.76rem;font-weight:800;padding:4px 12px;border-radius:100px;border:1px solid #fca5a5;">
                <i class="fas fa-fire-alt"></i> Огнестойкость 180 мин
              </span>
              <span style="background:#f0fdf4;color:#15803d;font-size:0.76rem;font-weight:800;padding:4px 12px;border-radius:100px;border:1px solid #86efac;">
                <i class="fas fa-warehouse"></i> В наличии на складе
              </span>
            </div>
            <h4 style="font-size:1.18rem;color:#0d2744;margin-bottom:8px;font-weight:900;font-family:'Outfit',sans-serif;">${itemTitle}</h4>
            <p style="font-size:0.87rem;color:#5b7083;line-height:1.5;">${itemSummary}</p>
          </div>
        </div>

        <!-- Specs Table -->
        <h4 style="font-size:0.93rem;color:#1e293b;margin-bottom:10px;font-weight:800;display:flex;align-items:center;gap:7px;border-bottom:2px solid #1e5c9a;padding-bottom:6px;">
          <i class="fas fa-list-alt" style="color:#1e5c9a;"></i> Полные технические характеристики (паспорт завода):
        </h4>
        <table style="width:100%;border-collapse:collapse;margin-bottom:22px;background:#ffffff;border:1px solid #e4ecf3;border-radius:8px;overflow:hidden;box-shadow:0 2px 10px rgba(13,39,68,.07);">
          <tbody>${specsHtml}</tbody>
        </table>

        <!-- RFQ Form -->
        <div style="background:linear-gradient(135deg,#f8fafc,#eef4fb);padding:20px;border-radius:10px;border:1px solid #ccd8e4;border-top:4px solid #1e5c9a;">
          <h4 style="font-size:0.98rem;color:#0d2744;margin-bottom:14px;font-weight:800;display:flex;align-items:center;gap:7px;">
            <i class="fas fa-paper-plane" style="color:#1e5c9a;"></i> Запросить расчёт стоимости / выставить счёт:
          </h4>
          <form onsubmit="App.submitInquiry(event)">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:13px;margin-bottom:13px;">
              <div>
                <label style="font-size:0.79rem;font-weight:700;color:#334155;display:block;margin-bottom:4px;">Организация / ФИО</label>
                <input type="text" class="search-bar-input" required placeholder="ПАО Интер РАО" style="width:100%;">
              </div>
              <div>
                <label style="font-size:0.79rem;font-weight:700;color:#334155;display:block;margin-bottom:4px;">Телефон</label>
                <input type="tel" class="search-bar-input" required placeholder="+7 / +998 ..." style="width:100%;">
              </div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:13px;margin-bottom:18px;">
              <div>
                <label style="font-size:0.79rem;font-weight:700;color:#334155;display:block;margin-bottom:4px;">Email</label>
                <input type="email" class="search-bar-input" placeholder="info@company.ru" style="width:100%;">
              </div>
              <div>
                <label style="font-size:0.79rem;font-weight:700;color:#334155;display:block;margin-bottom:4px;">Марка / Количество</label>
                <input type="text" class="search-bar-input" value="${itemTitle}" style="width:100%;">
              </div>
            </div>
            <div style="display:flex;justify-content:flex-end;gap:10px;">
              <button type="button" class="btn btn-blue-outline" onclick="App.closeModal()">Закрыть</button>
              <button type="submit" class="btn btn-primary">
                <i class="fas fa-check"></i> Отправить запрос
              </button>
            </div>
          </form>
        </div>
      `;
    }

    if (modal) {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  },

  closeModal: function() {
    const modal = document.getElementById('quickModal');
    if (modal) modal.classList.remove('open');
    document.body.style.overflow = '';
  },

  submitInquiry: function(e) {
    e.preventDefault();
    this.closeModal();
    this.showToast('✓ Запрос принят! Менеджер свяжется с вами в течение 30 минут.');
  },

  /* ── About & Info Modals ──────────────────────────────────────────────── */
  openAboutModal: function(tab) {
    const modal = document.getElementById('quickModal');
    const head  = document.getElementById('modalHeadTitle');
    const body  = document.getElementById('modalDynamicBody');
    if (!modal || !head || !body) return;

    if (tab === 'licenses') {
      head.innerHTML = '<i class="fas fa-certificate" style="color:#5dade2;margin-right:7px;"></i>Разрешительные документы и лицензии';
      body.innerHTML = `
        <div style="padding:10px 0;">
          <h4 style="font-size:1.1rem;color:#0d2744;font-weight:800;margin-bottom:14px;">Сертификаты и разрешения ENERGO GROUP</h4>
          <p style="font-size:0.9rem;color:#475569;line-height:1.6;margin-bottom:18px;">Предприятие обладает полным пакетом лицензий и сертификатов соответствия на выполнение ремонтных работ и производство кабельной продукции.</p>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:20px;">
            <div style="padding:14px;background:#f8fafc;border:1px solid #e2e8f0;border-left:4px solid #22c55e;border-radius:8px;">
              <strong style="color:#0f172a;display:block;margin-bottom:4px;"><i class="fas fa-shield-alt" style="color:#22c55e;"></i> ГОСТ 31565-2012</strong>
              <span style="font-size:0.84rem;color:#64748b;">Сертификат пожарной безопасности на кабели ОПС (FRLS, FRHF)</span>
            </div>
            <div style="padding:14px;background:#f8fafc;border:1px solid #e2e8f0;border-left:4px solid #1e5c9a;border-radius:8px;">
              <strong style="color:#0f172a;display:block;margin-bottom:4px;"><i class="fas fa-industry" style="color:#1e5c9a;"></i> ТР ТС 004/2011</strong>
              <span style="font-size:0.84rem;color:#64748b;">Безопасность низковольтного оборудования и силовых кабелей</span>
            </div>
            <div style="padding:14px;background:#f8fafc;border:1px solid #e2e8f0;border-left:4px solid #f39c12;border-radius:8px;">
              <strong style="color:#0f172a;display:block;margin-bottom:4px;"><i class="fas fa-award" style="color:#f39c12;"></i> ISO 9001:2015</strong>
              <span style="font-size:0.84rem;color:#64748b;">Система менеджмента качества в проектировании и ремонте</span>
            </div>
            <div style="padding:14px;background:#f8fafc;border:1px solid #e2e8f0;border-left:4px solid #7c3aed;border-radius:8px;">
              <strong style="color:#0f172a;display:block;margin-bottom:4px;"><i class="fas fa-file-signature" style="color:#7c3aed;"></i> Лицензия Ростехнадзора</strong>
              <span style="font-size:0.84rem;color:#64748b;">Эксплуатация и ремонт опасных производственных объектов</span>
            </div>
          </div>
          <div style="text-align:right;">
            <button class="btn btn-primary" onclick="App.closeModal()">Понятно</button>
          </div>
        </div>
      `;
    } else if (tab === 'social') {
      head.innerHTML = '<i class="fas fa-heart" style="color:#e74c3c;margin-right:7px;"></i>Социальная политика';
      body.innerHTML = `
        <div style="padding:10px 0;">
          <h4 style="font-size:1.1rem;color:#0d2744;font-weight:800;margin-bottom:14px;">Социальная ответственность ENERGO GROUP</h4>
          <p style="font-size:0.9rem;color:#475569;line-height:1.6;margin-bottom:16px;">Главная ценность ENERGO GROUP — наши сотрудники и экологическая безопасность окружающей среды.</p>
          <ul style="line-height:1.8;color:#334155;font-size:0.9rem;padding-left:20px;margin-bottom:20px;">
            <li>100% официальное трудоустройство, расширенный медицинский полис для персонала;</li>
            <li>Регулярное повышение квалификации инженеров и мастеров на базе ведущих технических вузов;</li>
            <li>Экологические стандарты: замкнутый цикл очистки газов при обжиге и утилизация отходов изоляции;</li>
            <li>Поддержка молодых специалистов и практикантов электротехнических специальностей.</li>
          </ul>
          <div style="text-align:right;">
            <button class="btn btn-primary" onclick="App.closeModal()">Понятно</button>
          </div>
        </div>
      `;
    } else {
      head.innerHTML = '<i class="fas fa-history" style="color:#5dade2;margin-right:7px;"></i>История и профиль предприятия';
      body.innerHTML = `
        <div style="padding:10px 0;">
          <h4 style="font-size:1.1rem;color:#0d2744;font-weight:800;margin-bottom:14px;">О компании ENERGO GROUP</h4>
          <p style="font-size:0.9rem;color:#475569;line-height:1.6;margin-bottom:14px;"><strong>ООО «ENERGO GROUP»</strong> — ведущее производственно-инжиниринговое предприятие в области ремонта высоковольтных электрических машин, турбогенераторов, трансформаторов и комплексных поставок кабельной продукции.</p>
          <p style="font-size:0.9rem;color:#475569;line-height:1.6;margin-bottom:18px;">Предприятие располагает производственной базой свыше 12 000 м², современными цехами вакуумно-нагнетательной пропитки (ВНП), станочным парком с ЧПУ и собственной сертифицированной электротехнической лабораторией.</p>
          <div style="display:flex;gap:10px;justify-content:flex-end;">
            <a href="${this.getPrefix()}team/azizov.html" class="btn btn-blue-outline" onclick="App.closeModal()"><i class="fas fa-users"></i> Наша команда</a>
            <button class="btn btn-primary" onclick="App.closeModal()">Закрыть</button>
          </div>
        </div>
      `;
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  },

  /* ── Interactive Sitemap Modal ────────────────────────────────────────── */
  openSitemapModal: function() {
    const modal = document.getElementById('quickModal');
    const head  = document.getElementById('modalHeadTitle');
    const body  = document.getElementById('modalDynamicBody');
    if (!modal || !head || !body) return;

    const p = this.getPrefix();
    head.innerHTML = '<i class="fas fa-sitemap" style="color:#5dade2;margin-right:7px;"></i>Карта сайта ENERGO';
    body.innerHTML = `
      <div style="padding:10px 0;">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px;">
          <div>
            <h5 style="font-size:0.95rem;font-weight:800;color:#0d2744;border-bottom:2px solid #1e5c9a;padding-bottom:5px;margin-bottom:10px;">Каталог Кабеля</h5>
            <ul style="list-style:none;padding:0;margin:0;line-height:1.9;font-size:0.88rem;">
              <li><a href="${p}catalog/kabel-dlya-sistem-pozharnoy-i-okhrannoy-signalizatsii/index.html" style="color:#1e5c9a;text-decoration:none;"><i class="fas fa-angle-right" style="margin-right:6px;"></i>Кабели ОПС (FRLS, FRHF)</a></li>
              <li><a href="${p}catalog/silovoy-kabel/index.html" style="color:#1e5c9a;text-decoration:none;"><i class="fas fa-angle-right" style="margin-right:6px;"></i>Силовые кабели (ВВГнг-LS)</a></li>
              <li><a href="${p}catalog/bronirovannyy-kabel/index.html" style="color:#1e5c9a;text-decoration:none;"><i class="fas fa-angle-right" style="margin-right:6px;"></i>Бронированные кабели (ВБбШв)</a></li>
              <li><a href="${p}catalog/vysokovoltnyy-kabel/index.html" style="color:#1e5c9a;text-decoration:none;"><i class="fas fa-angle-right" style="margin-right:6px;"></i>Высоковольтные кабели (АПвПуг)</a></li>
              <li><a href="${p}catalog/kontrolnyy-kabel/index.html" style="color:#1e5c9a;text-decoration:none;"><i class="fas fa-angle-right" style="margin-right:6px;"></i>Контрольные кабели (КВВГнг)</a></li>
              <li><a href="${p}catalog/sip-provod/index.html" style="color:#1e5c9a;text-decoration:none;"><i class="fas fa-angle-right" style="margin-right:6px;"></i>Провода СИП (СИП-4)</a></li>
            </ul>
          </div>
          <div>
            <h5 style="font-size:0.95rem;font-weight:800;color:#0d2744;border-bottom:2px solid #1e5c9a;padding-bottom:5px;margin-bottom:10px;">Разделы и Услуги</h5>
            <ul style="list-style:none;padding:0;margin:0;line-height:1.9;font-size:0.88rem;">
              <li><a href="${p}index.html#services-grid" style="color:#1e5c9a;text-decoration:none;"><i class="fas fa-angle-right" style="margin-right:6px;"></i>Услуги завода и ремонт</a></li>
              <li><a href="${p}catalog/spec-oborudovanie/index.html" style="color:#1e5c9a;text-decoration:none;"><i class="fas fa-angle-right" style="margin-right:6px;"></i>Спецоборудование РИФЖ</a></li>
              <li><a href="${p}index.html#news" style="color:#1e5c9a;text-decoration:none;"><i class="fas fa-angle-right" style="margin-right:6px;"></i>Новости компании</a></li>
              <li><a href="${p}team/azizov.html" style="color:#1e5c9a;text-decoration:none;"><i class="fas fa-angle-right" style="margin-right:6px;"></i>Наша команда: Азизов Б.Р.</a></li>
              <li><a href="${p}team/karimova.html" style="color:#1e5c9a;text-decoration:none;"><i class="fas fa-angle-right" style="margin-right:6px;"></i>Наша команда: Каримова Н.А.</a></li>
              <li><a href="${p}index.html#contacts" style="color:#1e5c9a;text-decoration:none;"><i class="fas fa-angle-right" style="margin-right:6px;"></i>Контакты и реквизиты</a></li>
            </ul>
          </div>
        </div>
        <div style="text-align:right;">
          <button class="btn btn-primary" onclick="App.closeModal()">Закрыть</button>
        </div>
      </div>
    `;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  },

  /* ── Live Search Filter ───────────────────────────────────────────────── */
  liveFilter: function(val) {
    const q = (val || '').toLowerCase();
    document.querySelectorAll('.blue-item-card, .energo-catalog-row').forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(q) ? '' : 'none';
    });
  },

  handleSearch: function() {
    const q = document.getElementById('searchInput')?.value;
    this.liveFilter(q);
  },

  toggleLang: function() {
    this.showToast("Интерфейс: Русский / O'zbekcha / English");
  },

  /* ── Toast ────────────────────────────────────────────────────────────── */
  showToast: function(msg) {
    let c = document.getElementById('toastContainer');
    if (!c) {
      c = document.createElement('div');
      c.id = 'toastContainer';
      c.className = 'toast-container';
      document.body.appendChild(c);
    }
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = `<i class="fas fa-check-circle" style="color:#22c55e;font-size:1rem;"></i><span>${msg}</span>`;
    c.appendChild(t);
    setTimeout(() => {
      t.style.opacity = '0';
      setTimeout(() => t.remove(), 300);
    }, 3500);
  }
};

/* ── Close modal on overlay click ──────────────────────────────────────── */
document.addEventListener('click', (e) => {
  const modal = document.getElementById('quickModal');
  if (e.target === modal) App.closeModal();
});

/* ── Close modal on Escape key ──────────────────────────────────────────── */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') App.closeModal();
});

document.addEventListener('DOMContentLoaded', () => App.init());
