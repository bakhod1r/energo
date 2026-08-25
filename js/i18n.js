/* ==========================================================================
   i18n TRANSLATIONS - ENERGOVO / ENERGO-CABLE INDUSTRIAL PLATFORM
   Full multi-language support for Uzbek (UZ), Russian (RU), and English (EN)
   ========================================================================== */

const i18nData = {
  uz: {
    // Nav
    nav_home: "Bosh sahifa",
    nav_catalog: "Katalog",
    nav_calc: "Kabel Kalkulyatori",
    nav_inspector: "3D Uskuna Modeli",
    nav_services: "Xizmatlar",
    nav_cases: "Loyihalar",
    nav_contacts: "Aloqa",
    nav_rfq_cart: "Buyurtma Savati",
    
    // Hero
    hero_pill: "Sanoat Elektrotexnikasi & Kabel Mahsulotlari Zavodi",
    hero_title: "Yuqori Quvvatli Kabel & Sanoat Elektromashina Texnologiyalari",
    hero_subtitle: "Katta quvvatli turbogeneratorlar, elektr dvigatellar va 110 kV gacha bo'lgan kuchli kabellarni ishlab chiqarish, ta'mirlash va yetkazib berish bo'yicha yetakchi kompleks.",
    hero_btn_catalog: "Katalogga O'tish",
    hero_btn_calc: "Kabelni Hisoblash",
    hero_stat_exp: "Yillik Tajriba",
    hero_stat_mw: "MVA Jami Quvvat",
    hero_stat_skus: "Kabel & Stanok Turlari",
    hero_stat_gost: "GOST & ISO Sertifikatlangan",
    telemetry_status: "Zavod Ish Rejimi: 100% Onlayn",
    telemetry_vpi_pressure: "VPI Avtoklav Bosimi",
    telemetry_winding_speed: "Chulg'am Aylanish Tezligi",
    telemetry_iso_resistance: "Izolyatsiya Qarshiligi",
    telemetry_voltage_class: "Kuchlanish Sinfi",
    
    // Catalog Main
    catalog_tag: "MAHSULOTLAR VA USKUNALAR",
    catalog_title: "Interaktiv Sanoat Katalogi",
    catalog_desc: "Kuchli sanoat kabellari, elektrodvigatel ta'mirlash sexlari uchun maxsus uskunalar va ehtiyot qismlar",
    tab_cables: "Kabel & O'tkazgichlar (GOST)",
    tab_machinery: "Sex Uskunalari & Stanoklar (RIFZh)",
    
    // Filters
    filter_title: "Parametrik Filtr",
    filter_reset: "Tozalash",
    filter_cable_type: "Kabel Turi",
    filter_conductor: "O'tkazgich Moddasi",
    filter_conductor_cu: "Mis (Cu)",
    filter_conductor_al: "Alyuminiy (Al)",
    filter_voltage: "Kuchlanish (kV)",
    filter_cross_section: "Kesim yuzi (mm²)",
    filter_fire_safety: "Yong'in xavfsizligi",
    filter_machinery_cat: "Uskuna Kategoriyasi",
    filter_power_range: "Quvvat Oralig'i",
    filter_search_placeholder: "Marka, GOST yoki RIFZh kodi bo'yicha qidiring...",
    sort_by: "Saralash:",
    sort_default: "Ommabopligi bo'yicha",
    sort_power_asc: "Quvvat: Kichikdan kattaga",
    sort_power_desc: "Quvvat: Kattadan kichikka",
    
    // Product Card
    btn_details: "Batafsil / Texnik Pasport",
    btn_add_rfq: "Savatga Qo'shish",
    badge_in_stock: "Omborda bor",
    badge_order: "Buyurtma asosida",
    badge_rifzh: "RIFZh Chizma",
    
    // Calculator
    calc_tag: "ELEKTR MUHANDISLIK HISOBI",
    calc_title: "Kabel Kesimi va Kuchlanish Pasayishi Kalkulyatori",
    calc_desc: "PUE va GOST 31996 me'yorlariga asosan quvvat, uzunlik va ruxsat etilgan yo'qotish bo'yicha aniq kabel tanlash",
    calc_power_label: "Yuklama Quvvati (kW)",
    calc_voltage_label: "Tizim Kuchlanishi",
    calc_length_label: "Trassa Uzunligi (m)",
    calc_cos_label: "Quvvat Koeffitsienti (cos φ)",
    calc_loss_label: "Ruxsat etilgan Yo'qotish (%)",
    calc_cond_label: "O'tkazgich Turi",
    calc_results_title: "Hisoblangan Muhandislik Parametrlari",
    calc_rec_cable: "Tavsiya etiladigan Kabel Markasi:",
    calc_calc_current: "Nominal Tok (I)",
    calc_volt_drop: "Kuchlanish Pasayishi (ΔU)",
    calc_volt_loss_pct: "Yo'qotish Foizi",
    calc_power_loss: "Faol Quvvat Yo'qotilishi",
    calc_drum_recommendation: "Tavsiya qilinadigan Baraban Turi:",
    calc_total_weight: "Kabelning Umumiy Og'irligi:",
    btn_add_calc_to_rfq: "Hisoblangan Kabelni Buyurtmaga Qo'shish",
    
    // Machine Inspector
    inspector_tag: "INTERAKTIV 3D TEXNOLOGIYA",
    inspector_title: "Sex Texnologik Uskunalari Inspeksiyasi",
    inspector_desc: "Stanoklar va avtoklavlarning ichki tuzilishi, gidravlika va boshqaruv bloklarini o'rganing",
    hotspot_click_hint: "Interaktiv nuqtalarni bosib tarkibiy qismlarni ko'ring",
    
    // Before / After
    slider_tag: "SIFAT KAFOLATI VA NATIJA",
    slider_title: "Stator Chulg'amini Qayta Tiklash Natijasi",
    slider_desc: "Kuygan va izolyatsiyasi buzilgan 6kV statorning Class H monolit vakuumli singdirishdan keyingi holati",
    slider_before: "Ta'mirdan Oldin (Kuygan)",
    slider_after: "Ta'mirdan Keyin (Yangilangan)",
    
    // Services
    services_tag: "ZAVOD SERVIS XIZMATLARI",
    services_title: "Sanoat Elektromashinalarini Mukammal Ta'mirlash",
    services_desc: "Turbogeneratorlar, yuqori kuchlanishli transformatorlar va rotorni dinamik balanslash",
    
    // Cases
    cases_tag: "AMALGA OSHIRILGAN LOYIHALAR",
    cases_title: "Katta Energetika Obyektlari",
    
    // RFQ Drawer & Modal
    rfq_title: "Buyurtma & Tijorat Taklifi (KP)",
    rfq_empty: "Savatda hozircha mahsulot yo'q. Katalogdan qo'shing!",
    rfq_total_items: "Jami Mahsulotlar:",
    btn_generate_kp: "Rasmiy Tijorat Taklifini Olish (PDF/KP)",
    btn_clear_cart: "Savatni Tozalash",
    kp_modal_title: "Rasmiy Tijorat Taklifi (Kompaniya Blankasida)",
    btn_print: "Chop Etish (Print)",
    btn_send_tg: "Telegram orqali jo'natish",
    
    // Footer & Certs
    cert_iso: "ISO 9001:2015 Xalqaro Sifat Boshqaruvi",
    cert_gost: "GOST 31996-2012 Davlat Standarti",
    cert_uz: "O'zstandart Muvofiqlik Sertifikati",
    cert_rostekhnadzor: "Sanoat Xavfsizligi Ruxsatnomasi",
    footer_about: "Kompaniya Haqida",
    footer_catalog: "Katalog Bo'limlari",
    footer_contacts: "Bog'lanish",
    footer_address: "Toshkent sh., Sanoat hududi, 4-bino",
    footer_phone: "+998 (71) 200-45-88 / +998 (71) 200-10-10",
    footer_email: "info@energovo-energo.uz / info@energo.uz",
    footer_rights: "Barcha huquqlar himoyalangan. ENERGOVO & ENERGO INDUSTRIAL 2026."
  },

  ru: {
    // Nav
    nav_home: "Главная",
    nav_catalog: "Каталог",
    nav_calc: "Калькулятор Кабеля",
    nav_inspector: "3D Модель Оборудования",
    nav_services: "Услуги",
    nav_cases: "Проекты",
    nav_contacts: "Контакты",
    nav_rfq_cart: "Корзина Запроса (КП)",
    
    // Hero
    hero_pill: "Завод промышленной электротехники и кабельной продукции",
    hero_title: "Силовые Кабели и Высоковольтное Электроремонтное Оборудование",
    hero_subtitle: "Комплексное производство, поставка кабелей до 110 кВ и изготовление станков для ремонта турбогенераторов, тяговых двигателей и трансформаторов.",
    hero_btn_catalog: "Перейти в Каталог",
    hero_btn_calc: "Рассчитать Кабель",
    hero_stat_exp: "Лет на Рынке",
    hero_stat_mw: "МВА Суммарная Мощность",
    hero_stat_skus: "Позиций Кабеля и Станков",
    hero_stat_gost: "ГОСТ и ISO Сертификация",
    telemetry_status: "Статус Завода: 100% Онлайн",
    telemetry_vpi_pressure: "Давление ВНП Автоклава",
    telemetry_winding_speed: "Скорость Намоточного Шпинделя",
    telemetry_iso_resistance: "Сопротивление Изоляции",
    telemetry_voltage_class: "Класс Напряжения",
    
    // Catalog Main
    catalog_tag: "ПРОДУКЦИЯ И ОБОРУДОВАНИЕ",
    catalog_title: "Интерактивный Каталог Предприятия",
    catalog_desc: "Кабельно-проводниковая продукция по ГОСТ и спецоборудование для электроремонтных цехов",
    tab_cables: "Кабельная Продукция (ГОСТ)",
    tab_machinery: "Оборудование для Цехов (РИФЖ)",
    
    // Filters
    filter_title: "Параметрический Фильтр",
    filter_reset: "Сбросить",
    filter_cable_type: "Тип Кабеля",
    filter_conductor: "Материал Жилы",
    filter_conductor_cu: "Медь (Cu)",
    filter_conductor_al: "Алюминий (Al)",
    filter_voltage: "Напряжение (кВ)",
    filter_cross_section: "Сечение (мм²)",
    filter_fire_safety: "Пожаробезопасность",
    filter_machinery_cat: "Категория Оборудования",
    filter_power_range: "Диапазон Мощности",
    filter_search_placeholder: "Поиск по марке, ГОСТ или чертежу РИФЖ...",
    sort_by: "Сортировка:",
    sort_default: "По популярности",
    sort_power_asc: "Мощность: по возрастанию",
    sort_power_desc: "Мощность: по убыванию",
    
    // Product Card
    btn_details: "Паспорт / Чертёж",
    btn_add_rfq: "В Запрос (КП)",
    badge_in_stock: "В наличии на складе",
    badge_order: "Под заказ (от 5 дней)",
    badge_rifzh: "Чертёж РИФЖ",
    
    // Calculator
    calc_tag: "ИНЖЕНЕРНЫЙ ЭЛЕКТРОРАСЧЕТ",
    calc_title: "Калькулятор Сечения Кабеля и Падения Напряжения",
    calc_desc: "Точный инженерный подбор марки кабеля по мощности, длине трассы и допустимым потерям в соответствии с ПУЭ и ГОСТ 31996",
    calc_power_label: "Мощность Нагрузки (кВт)",
    calc_voltage_label: "Напряжение Сети",
    calc_length_label: "Длина Кабельной Трассы (м)",
    calc_cos_label: "Коэффициент Мощности (cos φ)",
    calc_loss_label: "Допустимые Потери (%)",
    calc_cond_label: "Материал Проводника",
    calc_results_title: "Расчётные Инженерные Показатели",
    calc_rec_cable: "Рекомендуемая Марка Кабеля:",
    calc_calc_current: "Расчётный Ток (I)",
    calc_volt_drop: "Падение Напряжения (ΔU)",
    calc_volt_loss_pct: "Потери в Линии",
    calc_power_loss: "Потери Активной Мощности",
    calc_drum_recommendation: "Рекомендуемый Кабельный Барабан:",
    calc_total_weight: "Масса Кабеля Брутто:",
    btn_add_calc_to_rfq: "Добавить Расчёт в Заказ",
    
    // Machine Inspector
    inspector_tag: "ИНТЕРАКТИВНЫЙ 3D ЧЕРТЕЖ",
    inspector_title: "Инспекция Технологического Оборудования",
    inspector_desc: "Изучите компоновку, гидравлику и автоматику станков и установок вакуумно-нагнетательной пропитки",
    hotspot_click_hint: "Нажимайте на интерактивные точки на схеме для просмотра узлов",
    
    // Before / After
    slider_tag: "КОНТРОЛЬ КАЧЕСТВА И РЕЗУЛЬТАТ",
    slider_title: "Результат Ремонта Обмотки Статора",
    slider_desc: "Сравнение сгоревшего статора 6 кВ и восстановленного с монолитной изоляцией класса нагревостойкости H (180°C)",
    slider_before: "До Ремонта (Сгоревший)",
    slider_after: "После Ремонта (Модернизированный)",
    
    // Services
    services_tag: "СЕРВИСНЫЕ УСЛУГИ ЗАВОДА",
    services_title: "Капитальный Ремонт Электромашин",
    services_desc: "Ремонт турбогенераторов, гидрогенераторов, роторов и диагностика частичных разрядов",
    
    // Cases
    cases_tag: "ВЫПОЛНЕННЫЕ ПРОЕКТЫ",
    cases_title: "Объекты Большой Энергетики",
    
    // RFQ Drawer & Modal
    rfq_title: "Смета и Коммерческое Предложение",
    rfq_empty: "В корзине запроса пока пусто. Выберите кабели или оборудование из каталога!",
    rfq_total_items: "Всего Позиций:",
    btn_generate_kp: "Сформировать Официальное КП (PDF)",
    btn_clear_cart: "Очистить Корзину",
    kp_modal_title: "Официальное Коммерческое Предложение",
    btn_print: "Распечатать (Печать)",
    btn_send_tg: "Отправить в Telegram",
    
    // Footer & Certs
    cert_iso: "Сертификация ISO 9001:2015",
    cert_gost: "Соответствие ГОСТ 31996-2012",
    cert_uz: "Сертификат Соответствия Узстандарт",
    cert_rostekhnadzor: "Лицензия Ростехнадзора",
    footer_about: "О Предприятии",
    footer_catalog: "Разделы Каталога",
    footer_contacts: "Контакты Отделов",
    footer_address: "г. Москва / г. Ташкент, Промзона",
    footer_phone: "+998 (71) 200-10-10 / +998 (71) 200-10-11",
    footer_email: "info@energo.uz / sales@energo.uz",
    footer_rights: "Все права защищены. ОАО ENERGO & CABLE INDUSTRIAL 2026."
  },

  en: {
    // Nav
    nav_home: "Home",
    nav_catalog: "Catalog",
    nav_calc: "Cable Calculator",
    nav_inspector: "3D Machine Inspector",
    nav_services: "Services",
    nav_cases: "Projects",
    nav_contacts: "Contacts",
    nav_rfq_cart: "RFQ Quote Cart",
    
    // Hero
    hero_pill: "Industrial Electrical Engineering & Cable Manufacturing",
    hero_title: "High-Voltage Industrial Cables & Heavy Electrical Machinery",
    hero_subtitle: "Turnkey production and overhaul of turbo/hydro-generators, custom stator winding machines, and certified power cables up to 110 kV.",
    hero_btn_catalog: "Explore Catalog",
    hero_btn_calc: "Cable Sizing Tool",
    hero_stat_exp: "Years of Engineering",
    hero_stat_mw: "MVA Total Capacity",
    hero_stat_skus: "Cable & Machine SKUs",
    hero_stat_gost: "IEC & ISO Certified",
    telemetry_status: "Plant Status: 100% Operational",
    telemetry_vpi_pressure: "VPI Autoclave Pressure",
    telemetry_winding_speed: "Winding Spindle RPM",
    telemetry_iso_resistance: "Insulation Resistance",
    telemetry_voltage_class: "Voltage Class",
    
    // Catalog Main
    catalog_tag: "PRODUCTS & MACHINERY",
    catalog_title: "Interactive Industrial Catalog",
    catalog_desc: "Engineered power cables, stator rewinding equipment, and workshop machine systems",
    tab_cables: "Cables & Conductors (GOST / IEC)",
    tab_machinery: "Workshop Machinery (RIFZh Series)",
    
    // Filters
    filter_title: "Parametric Filters",
    filter_reset: "Reset All",
    filter_cable_type: "Cable Category",
    filter_conductor: "Conductor Material",
    filter_conductor_cu: "Copper (Cu)",
    filter_conductor_al: "Aluminum (Al)",
    filter_voltage: "Voltage Rating (kV)",
    filter_cross_section: "Cross Section (mm²)",
    filter_fire_safety: "Fire Safety Rating",
    filter_machinery_cat: "Equipment Category",
    filter_power_range: "Power Rating (kW)",
    filter_search_placeholder: "Search by brand, standard, or RIFZh drawing...",
    sort_by: "Sort by:",
    sort_default: "Most Popular",
    sort_power_asc: "Power: Low to High",
    sort_power_desc: "Power: High to Low",
    
    // Product Card
    btn_details: "Datasheet & Blueprint",
    btn_add_rfq: "Add to RFQ",
    badge_in_stock: "In Stock (Ready)",
    badge_order: "Custom Order (5-10 Days)",
    badge_rifzh: "RIFZh Blueprint",
    
    // Calculator
    calc_tag: "ELECTRICAL ENGINEERING SUITE",
    calc_title: "Cable Sizing & Voltage Drop Calculator",
    calc_desc: "Accurate physical calculation according to IEC 60502 and GOST 31996 for power lines and motor feeders",
    calc_power_label: "Active Load (kW)",
    calc_voltage_label: "Operating Voltage",
    calc_length_label: "Feeder Length (m)",
    calc_cos_label: "Power Factor (cos φ)",
    calc_loss_label: "Allowable Drop (%)",
    calc_cond_label: "Conductor Material",
    calc_results_title: "Engineered Specifications",
    calc_rec_cable: "Recommended Cable Grade:",
    calc_calc_current: "Design Current (I)",
    calc_volt_drop: "Voltage Drop (ΔU)",
    calc_volt_loss_pct: "Line Drop Percentage",
    calc_power_loss: "Active Power Loss",
    calc_drum_recommendation: "Recommended Spool Drum:",
    calc_total_weight: "Estimated Gross Weight:",
    btn_add_calc_to_rfq: "Add Sized Cable to RFQ",
    
    // Machine Inspector
    inspector_tag: "3D SCHEMATIC INSPECTOR",
    inspector_title: "Industrial Machine Engineering Breakdown",
    inspector_desc: "Inspect vacuum-pressure impregnation chambers, automated CNC coil winders, and induction heaters",
    hotspot_click_hint: "Click on interactive hotspots to inspect components",
    
    // Before / After
    slider_tag: "QUALITY PROOF & PERFORMANCE",
    slider_title: "Stator Overhaul & Rewinding Benchmark",
    slider_desc: "Comparative inspection of damaged high-voltage stator vs Class H vacuum-impregnated rewound stator",
    slider_before: "Before Repair (Burnt)",
    slider_after: "After Overhaul (Modernized)",
    
    // Services
    services_tag: "FIELD & FACTORY SERVICES",
    services_title: "Heavy Electrical Overhauls",
    services_desc: "Turnkey turbo/hydro-generator rehabilitation, transformer rewinding, and vibration diagnostics",
    
    // Cases
    cases_tag: "PROVEN TRACK RECORD",
    cases_title: "Major Power Infrastructure Projects",
    
    // RFQ Drawer & Modal
    rfq_title: "Official Request for Quotation (RFQ)",
    rfq_empty: "Your quote cart is empty. Add products from the catalog!",
    rfq_total_items: "Total Items:",
    btn_generate_kp: "Generate Formal Commercial Offer (PDF)",
    btn_clear_cart: "Clear Cart",
    kp_modal_title: "Formal Commercial Quotation",
    btn_print: "Print Document",
    btn_send_tg: "Send via Telegram",
    
    // Footer & Certs
    cert_iso: "ISO 9001:2015 Quality Management",
    cert_gost: "GOST 31996-2012 Compliance",
    cert_uz: "UzStandard Certificate of Conformity",
    cert_rostekhnadzor: "Industrial Safety License",
    footer_about: "About Us",
    footer_catalog: "Catalog Sections",
    footer_contacts: "Key Contacts",
    footer_address: "Tashkent, Industrial Zone 'Yakkasaroy', St. Temiryo'lchilar 14",
    footer_phone: "+998 (71) 200-10-10 / +998 (71) 200-10-11",
    footer_email: "info@energo.uz / sales@energo.uz",
    footer_rights: "All rights reserved. ООО «ENERGO GROUP» 2026."
  }
};
