const regions = {
  almaty: { kk: "Алматы", ru: "Алматы", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 43.2389, lon: 76.8897 },
  astana: { kk: "Астана", ru: "Астана", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 51.1605, lon: 71.4704 },
  shymkent: { kk: "Шымкент", ru: "Шымкент", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 42.3417, lon: 69.5901 },
  aktobe: { kk: "Ақтөбе", ru: "Актобе", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 50.2839, lon: 57.167 },
  karaganda: { kk: "Қарағанды", ru: "Караганда", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 49.8047, lon: 73.1094 },
  taraz: { kk: "Тараз", ru: "Тараз", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 42.9, lon: 71.3667 },
  pavlodar: { kk: "Павлодар", ru: "Павлодар", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 52.2873, lon: 76.9674 },
  oskemen: { kk: "Өскемен", ru: "Усть-Каменогорск", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 49.9483, lon: 82.6285 },
  semey: { kk: "Семей", ru: "Семей", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 50.4111, lon: 80.2275 },
  atyrau: { kk: "Атырау", ru: "Атырау", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 47.1167, lon: 51.8833 },
  kostanay: { kk: "Қостанай", ru: "Костанай", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 53.2198, lon: 63.6354 },
  kyzylorda: { kk: "Қызылорда", ru: "Кызылорда", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 44.8488, lon: 65.4823 },
  oral: { kk: "Орал", ru: "Уральск", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 51.2333, lon: 51.3667 },
  petropavl: { kk: "Петропавл", ru: "Петропавловск", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 54.8728, lon: 69.143 },
  aktau: { kk: "Ақтау", ru: "Актау", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 43.6532, lon: 51.1975 },
  turkistan: { kk: "Түркістан", ru: "Туркестан", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 43.2973, lon: 68.2518 },
  kokshetau: { kk: "Көкшетау", ru: "Кокшетау", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 53.2833, lon: 69.3833 },
  taldykorgan: { kk: "Талдықорған", ru: "Талдыкорган", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 45.0156, lon: 78.3739 },
  ekibastuz: { kk: "Екібастұз", ru: "Экибастуз", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 51.7298, lon: 75.3266 },
  rudny: { kk: "Рудный", ru: "Рудный", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 52.9594, lon: 63.1206 },
  zhezkazgan: { kk: "Жезқазған", ru: "Жезказган", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 47.7833, lon: 67.7 },
  temirtau: { kk: "Теміртау", ru: "Темиртау", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 50.0549, lon: 72.9646 },
  balkhash: { kk: "Балқаш", ru: "Балхаш", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 46.8481, lon: 74.995 },
  satbayev: { kk: "Сәтбаев", ru: "Сатпаев", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 47.9, lon: 67.5333 },
  kentau: { kk: "Кентау", ru: "Кентау", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 43.5167, lon: 68.5167 },
  kaskelen: { kk: "Қаскелең", ru: "Каскелен", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 43.2, lon: 76.62 },
  kulsary: { kk: "Құлсары", ru: "Кульсары", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 46.9833, lon: 54.0167 },
  ridder: { kk: "Риддер", ru: "Риддер", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 50.3441, lon: 83.5129 },
  zhanaozen: { kk: "Жаңаөзен", ru: "Жанаозен", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 43.3378, lon: 52.8553 },
  shakhtinsk: { kk: "Шахтинск", ru: "Шахтинск", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 49.7089, lon: 72.5928 },
  stepnogorsk: { kk: "Степногорск", ru: "Степногорск", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 52.3506, lon: 71.8814 },
  saran: { kk: "Саран", ru: "Сарань", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 49.7908, lon: 72.8374 },
  aksu: { kk: "Ақсу", ru: "Аксу", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 52.0333, lon: 76.9167 },
  konaev: { kk: "Қонаев", ru: "Конаев", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 43.8833, lon: 77.0833 },
  arys: { kk: "Арыс", ru: "Арысь", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 42.43, lon: 68.8 },
  baikonur: { kk: "Байқоңыр", ru: "Байконур", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 45.6167, lon: 63.3167 },
  talgar: { kk: "Талғар", ru: "Талгар", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 43.3035, lon: 77.2409 },
  esik: { kk: "Есік", ru: "Есик", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 43.35, lon: 77.4667 },
  ayagoz: { kk: "Аягөз", ru: "Аягоз", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 47.9714, lon: 80.4392 },
  shu: { kk: "Шу", ru: "Шу", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 43.5983, lon: 73.7614 },
  arkalyk: { kk: "Арқалық", ru: "Аркалык", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 50.2486, lon: 66.9114 },
  lisakovsk: { kk: "Лисаковск", ru: "Лисаковск", countryKk: "Қазақстан", countryRu: "Казахстан", lat: 52.5369, lon: 62.4936 }
};

const labels = {
  kk: {
    active: "Белсенді",
    modeAuto: "Авто",
    modeManual: "Қолмен",
    modeEco: "Үнемдеу",
    on: "Қосулы",
    off: "Өшірулі",
    today: "Бүгін",
    saved: "Өзгерістер сақталды",
    savedBody: "Қолмен енгізілген ақпарат барлық панельдерге қолданылды және жүйе журналына жазылды.",
    manualNeeded: "Қолмен режим қажет",
    manualNeededBody: "Ақпараттарды өзгерту үшін алдымен режимді “Қолмен” күйіне ауыстырыңыз.",
    weatherError: "Ауа райы дерегі алынбады",
    apiCheck: "API параметрлерін тексеріңіз.",
    manualLock: "Қолмен басқару режимін таңдағанда ғана өзгертуге болады.",
    water: "Су қоры",
    soil: "Топырақ ылғалдылығы",
    solar: "Күн энергиясы",
    rain: "Бүгінгі жауын",
    temp: "Температура",
    humidity: "Ылғалдылық",
    wind: "Жел",
    rainChance: "Жаңбыр ықтималдығы",
    unitRain: "мм",
    unitSpeed: "м/с",
    unitEnergy: "кВт·сағ",
    unitLiters: "л",
    journalManual: "Қолмен енгізілген деректер жаңартылды",
    journalModule: "Модуль күйі өзгертілді",
    journalMode: "Басқару режимі өзгертілді",
    journalWeather: "Ауа райы деректері жаңартылды",
    waterSaved: "Үнемделген су",
    surfaceRunoff: "Беткі ағын",
    energyToday: "Энергия",
    zone: "Аймақ",
    openSection: "Бөлімге өту",
    nav: ["Басты панель", "Жауын мониторингі", "Ауа райы болжамы", "Автоматты суару", "Су деңгейі", "Күн энергиясы", "Ішкі / сыртқы модульдер", "Аналитика", "Жүйе журналы", "Автор байланысы", "Параметрлер"]
  },
  ru: {
    active: "Активна",
    modeAuto: "Авто",
    modeManual: "Ручной",
    modeEco: "Экономия",
    on: "Включено",
    off: "Выключено",
    today: "Сегодня",
    saved: "Изменения сохранены",
    savedBody: "Введенные вручную данные применены ко всем панелям и записаны в журнал.",
    manualNeeded: "Нужен ручной режим",
    manualNeededBody: "Чтобы изменить данные, сначала переключите режим на “Ручной”.",
    weatherError: "Не удалось получить погоду",
    apiCheck: "Проверьте параметры API.",
    manualLock: "Изменения доступны только в ручном режиме.",
    water: "Запас воды",
    soil: "Влажность почвы",
    solar: "Солнечная энергия",
    rain: "Осадки сегодня",
    temp: "Температура",
    humidity: "Влажность",
    wind: "Ветер",
    rainChance: "Вероятность дождя",
    unitRain: "мм",
    unitSpeed: "м/с",
    unitEnergy: "кВт·ч",
    unitLiters: "л",
    journalManual: "Ручные данные обновлены",
    journalModule: "Состояние модуля изменено",
    journalMode: "Режим управления изменен",
    journalWeather: "Погодные данные обновлены",
    waterSaved: "Экономия воды",
    surfaceRunoff: "Поверхностный сток",
    energyToday: "Энергия",
    zone: "Зона",
    openSection: "Перейти в раздел",
    nav: ["Главная панель", "Мониторинг осадков", "Прогноз погоды", "Автополив", "Уровень воды", "Солнечная энергия", "Внутр. / внешн. модули", "Аналитика", "Журнал системы", "Контакты автора", "Параметры"]
  }
};

const defaults = {
  region: "almaty",
  provider: "openmeteo",
  mode: "Авто",
  language: "kk",
  theme: "dark",
  customBackgroundType: "color",
  customBackgroundColor: "#0b1525",
  customBackgroundGradient: "",
  customBackgroundPhoto: "",
  apiKey: "",
  endpoint: "",
  metrics: {
    water: 62,
    soil: 48,
    solar: 285,
    rain: 12.4,
    humidity: 55,
    wind: 3,
    temp: 18,
    insideTemp: 23.7,
    waterTemp: 17.3,
    pressure: 1012,
    uv: 2,
    aqi: 28,
    waterQuality: "Жақсы",
    rainChance: 40,
    waterSaved: 542.3,
    runoff: 31,
    energy: 2.45
  },
  modules: { rain: true, filter: true, solar: true, irrigation: true },
  zones: ["Аймақ 1", "Аймақ 2", "Аймақ 3"],
  journal: []
};

const state = loadState();
normalizeState();
const sections = Array.from(document.querySelectorAll(".view"));
const navItems = Array.from(document.querySelectorAll(".nav-item"));
const dialog = document.getElementById("infoDialog");
const dialogContent = document.getElementById("dialogContent");
let chartRegion = null;
let lastMeteoChartData = null;
let cityCharts = {
  solarDash: { values: [], labels: [] },
  solarDetail: { values: [], labels: [] },
  waterDetail: { values: [], labels: [] }
};
const tooltip = document.createElement("div");
tooltip.className = "chart-tooltip";
document.body.appendChild(tooltip);

let forecast = [
  ["Бүгін", "🌧", "18°", "40%"],
  ["Ертең", "🌥", "20°", "20%"],
  ["Сейсенбі", "🌧", "22°", "10%"],
  ["Сәрсенбі", "☀", "24°", "0%"],
  ["Бейсенбі", "☀", "26°", "0%"],
  ["Жұма", "☀", "25°", "10%"],
  ["Сенбі", "🌤", "23°", "30%"]
];

const zoneState = [
  { name: 1, active: true },
  { name: 2, active: true },
  { name: 3, active: false }
];

const copy = {
  about: {
    kk: ["ARQUENIX дипломдық жобасы", "Бұл сайт дипломдық жоба негізінде әзірленген жаңбыр суын жинау, сүзу, сақтау және автоматтандырылған суару жүйесінің прототиптік платформасы болып табылады."],
    ru: ["Дипломный проект ARQUENIX", "Этот сайт является прототипной платформой системы сбора, фильтрации, хранения дождевой воды и автоматизированного полива, разработанной на основе дипломного проекта."]
  },
  rain: {
    kk: ["Жауын көлемін тіркеу", "Tipping bucket жауынөлшегіші жауын мөлшерін нақты уақыт режимінде тіркейді."],
    ru: ["Регистрация осадков", "Цифровой дождемер tipping bucket фиксирует количество осадков в реальном времени."]
  },
  forecast: {
    kk: ["Ауа райын болжау", "Болжам модулі жауын ықтималдығы, температура және ылғалдылық арқылы суару шешімін жоспарлайды."],
    ru: ["Прогноз погоды", "Модуль прогноза учитывает вероятность дождя, температуру и влажность для планирования полива."]
  },
  irrigation: {
    kk: ["Автоматты суару", "Қолмен режимде суару аймақтарын жеке қосып немесе өшіруге болады."],
    ru: ["Автополив", "В ручном режиме зоны полива можно включать и выключать отдельно."]
  },
  solar: {
    kk: ["Күн энергиясы мониторингі", "Күн панелі тазарту блогы мен сорғының энергия қажеттілігін азайтады."],
    ru: ["Мониторинг солнечной энергии", "Солнечная панель снижает энергопотребление блока очистки и насоса."]
  },
  water: {
    kk: ["Су деңгейі сенсорлары", "Су деңгейі модулі цистернадағы резервті және суаруға жарамдылықты көрсетеді."],
    ru: ["Датчики уровня воды", "Модуль уровня воды показывает запас в цистерне и пригодность для полива."]
  },
  modules: {
    kk: ["Ішкі / сыртқы модульдер", "Температура, ылғалдылық, жел және ауа сапасы RainGrid алгоритмдерін толықтырады."],
    ru: ["Внутренние / внешние модули", "Температура, влажность, ветер и качество воздуха дополняют алгоритмы RainGrid."]
  },
  journal: {
    kk: ["Жүйе журналы", "Журнал маңызды оқиғаларды, қолмен енгізілген өзгерістерді және API жаңартуларын тіркейді."],
    ru: ["Журнал системы", "Журнал фиксирует важные события, ручные изменения и обновления API."]
  }
};

const sectionDialogMap = {
  rain: "rain",
  forecast: "forecast",
  irrigation: "irrigation",
  solar: "solar",
  water: "water",
  modules: "modules",
  journal: "journal"
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem("raingrid-state") || "{}");
    const loaded = {
      ...defaults,
      ...saved,
      metrics: { ...defaults.metrics, ...(saved.metrics || {}) },
      modules: { ...defaults.modules, ...(saved.modules || {}) },
      zones: Array.isArray(saved.zones) ? saved.zones : [...defaults.zones],
      journal: Array.isArray(saved.journal) ? saved.journal : []
    };
    if (saved.customPhotoInSession) {
      const photo = sessionStorage.getItem("raingrid-photo");
      if (photo) loaded.customBackgroundPhoto = photo;
    }
    return loaded;
  } catch {
    return structuredClone(defaults);
  }
}

function saveState() {
  try {
    const photo = state.customBackgroundPhoto;
    const payload = { ...state };
    if (photo && photo.length > 80000) {
      sessionStorage.setItem("raingrid-photo", photo);
      payload.customBackgroundPhoto = "";
      payload.customPhotoInSession = true;
    } else {
      sessionStorage.removeItem("raingrid-photo");
      payload.customPhotoInSession = false;
    }
    localStorage.setItem("raingrid-state", JSON.stringify(payload));
  } catch {
    const payload = { ...state, customBackgroundPhoto: "", customPhotoInSession: false };
    localStorage.setItem("raingrid-state", JSON.stringify(payload));
  }
}

function normalizeState() {
  if (!["Авто", "Қолмен", "Үнемдеу"].includes(state.mode)) state.mode = "Авто";
  if (!["kk", "ru"].includes(state.language)) state.language = "kk";
  if (!["dark", "green", "light", "narxoz", "custom"].includes(state.theme)) state.theme = "dark";
  if (!["color", "photo"].includes(state.customBackgroundType)) state.customBackgroundType = "color";
  if (!state.customBackgroundColor) state.customBackgroundColor = "#0b1525";
  if (!state.customBackgroundGradient) state.customBackgroundGradient = "";
  if (!state.customBackgroundPhoto) state.customBackgroundPhoto = "";
  if (typeof state.customPhotoInSession !== "boolean") state.customPhotoInSession = false;
  if (state.customBackground) {
    if (state.customBackground.startsWith("data:image") && !state.customBackgroundPhoto) {
      state.customBackgroundType = "photo";
      state.customBackgroundPhoto = state.customBackground;
    } else if (state.customBackground.startsWith("linear-gradient") && !state.customBackgroundGradient) {
      state.customBackgroundType = "color";
      state.customBackgroundGradient = state.customBackground;
    } else if (state.customBackground.startsWith("#")) {
      state.customBackgroundType = "color";
      state.customBackgroundColor = state.customBackground;
    }
    delete state.customBackground;
  }
  if (!regions[state.region]) state.region = "almaty";
}

function getActiveCustomBackground() {
  if (state.customBackgroundType === "photo" && state.customBackgroundPhoto) {
    return `linear-gradient(rgba(5, 12, 20, 0.68), rgba(5, 12, 20, 0.86)), url("${state.customBackgroundPhoto}") center/cover fixed`;
  }
  return state.customBackgroundGradient.trim() || state.customBackgroundColor || "#0b1525";
}

function applyCustomThemePanel() {
  const panel = document.getElementById("customThemePanel");
  const isCustom = state.theme === "custom";
  if (panel) panel.hidden = !isCustom;
  if (!isCustom) return;

  const isColor = state.customBackgroundType === "color";
  const colorPanel = document.getElementById("customColorPanel");
  const photoPanel = document.getElementById("customPhotoPanel");
  if (colorPanel) colorPanel.hidden = !isColor;
  if (photoPanel) photoPanel.hidden = isColor;

  document.querySelectorAll("#customBgTypeControl button").forEach((button) => {
    button.classList.toggle("active", button.dataset.customBg === state.customBackgroundType);
  });

  setValue("customBgInput", state.customBackgroundGradient || "");
  setValue("customColorInput", state.customBackgroundColor || "#0b1525");
}

function t(key) {
  return labels[state.language]?.[key] ?? labels.kk[key] ?? key;
}

function setText(selector, value) {
  const node = document.querySelector(selector);
  if (node) node.textContent = value;
}

function setAllText(selector, value) {
  document.querySelectorAll(selector).forEach((node) => node.textContent = value);
}

function setAllHtml(selector, value) {
  document.querySelectorAll(selector).forEach((node) => node.innerHTML = value);
}

function setValue(id, value) {
  const node = document.getElementById(id);
  if (node) node.value = value;
}

function populateRegionSelect() {
  const select = document.getElementById("regionSelect");
  if (!select) return;
  const current = state.region;
  select.innerHTML = Object.entries(regions)
    .map(([key, region]) => `<option value="${key}">${state.language === "ru" ? region.ru : region.kk}</option>`)
    .join("");
  select.value = regions[current] ? current : "almaty";
}

function setLabelText(inputId, text) {
  const input = document.getElementById(inputId);
  const label = input?.closest("label");
  if (!label) return;
  const textNode = Array.from(label.childNodes).find((node) => node.nodeType === Node.TEXT_NODE);
  if (textNode) textNode.textContent = text;
}

function initLucideIcons() {
  if (window.lucide?.createIcons) window.lucide.createIcons();
}

function closeSidebar() {
  document.body.classList.remove("sidebar-open");
  const overlay = document.getElementById("sidebarOverlay");
  const toggle = document.getElementById("sidebarToggle");
  if (overlay) overlay.hidden = true;
  if (toggle) toggle.setAttribute("aria-expanded", "false");
}

function openSidebar() {
  document.body.classList.add("sidebar-open");
  const overlay = document.getElementById("sidebarOverlay");
  const toggle = document.getElementById("sidebarToggle");
  if (overlay) overlay.hidden = false;
  if (toggle) toggle.setAttribute("aria-expanded", "true");
}

function showSection(id) {
  sections.forEach((section) => section.classList.toggle("active", section.id === id));
  navItems.forEach((item) => item.classList.toggle("active", item.dataset.section === id));
  if (location.hash !== `#${id}`) {
    history.replaceState(null, "", `#${id}`);
  }
  closeSidebar();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent = now.toLocaleTimeString(state.language === "ru" ? "ru-RU" : "kk-KZ", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  document.getElementById("date").textContent = now.toLocaleDateString(state.language === "ru" ? "ru-RU" : "kk-KZ", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}

function formatNumber(value, digits = 1) {
  const normalized = Number(value);
  if (Number.isInteger(normalized)) return String(normalized);
  return normalized.toFixed(digits).replace(".", ",");
}

function calculateDerivedMetrics() {
  const m = state.metrics;
  m.water = clamp(m.water, 0, 100);
  m.soil = clamp(m.soil, 0, 100);
  m.humidity = clamp(m.humidity, 0, 100);
  m.rainChance = clamp(m.rainChance, 0, 100);
  m.rain = Math.max(0, Number(m.rain) || 0);
  m.solar = Math.max(0, Number(m.solar) || 0);
  m.temp = Number(m.temp) || 0;
  m.insideTemp = Number(m.insideTemp) || Number((m.temp + 5).toFixed(1));
  m.waterTemp = Number(m.waterTemp) || Number((m.temp - 1).toFixed(1));
  m.pressure = clamp(m.pressure || 1012, 850, 1100);
  m.uv = clamp(m.uv || 2, 0, 12);
  m.aqi = clamp(m.aqi || 28, 0, 500);
  m.waterQuality = String(m.waterQuality || (m.aqi > 100 ? "Орташа" : "Жақсы"));
  m.wind = Math.max(0, Number(m.wind) || 0);

  m.energy = Number((m.solar * 0.0086).toFixed(2));
  m.waterSaved = Number((m.water * 6.4 + m.rain * 9.5 + m.soil * 1.2).toFixed(1));
  m.runoff = clamp(Math.round(8 + m.rain * 1.7 + m.water * 0.24), 5, 88);
  m.autonomy = clamp(Math.round(35 + m.solar / 6.5 - m.wind * 1.3), 10, 100);
  m.waterVolume = Math.round(m.water * 30);
  m.rainRate = Number(Math.max(0.1, m.rain / 18).toFixed(1));
  m.monthRain = Number((m.rain * 3.9).toFixed(1));
  m.filterPower = Math.round(m.solar * 0.32);
  m.pumpPower = Math.round(m.solar * 0.39);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, Number(value) || 0));
}

function addJournal(message) {
  const time = new Date().toLocaleTimeString("kk-KZ", { hour: "2-digit", minute: "2-digit" });
  state.journal.unshift({ time, message });
  state.journal = state.journal.slice(0, 12);
  saveState();
  renderJournal();
}

function renderJournal() {
  const fallback = [
    { time: "15:42", kk: "Суару жүйесі автоматты режимде қосылды", ru: "Система полива включена в автоматическом режиме" },
    { time: "15:35", kk: "Tipping bucket сенсоры 0.3 мм жауын тіркеді", ru: "Датчик tipping bucket зафиксировал 0.3 мм осадков" },
    { time: "15:20", kk: "Резервуар деңгейі 62% болды", ru: "Уровень резервуара составил 62%" },
    { time: "15:10", kk: "Күн панелі қуаты 270 W-қа жетті", ru: "Мощность солнечной панели достигла 270 W" }
  ];
  const items = state.journal.length
    ? state.journal.map((item) => ({ time: item.time, text: item.message }))
    : fallback.map((item) => ({ time: item.time, text: state.language === "ru" ? item.ru : item.kk }));
  const html = items.map((item) => `<li><time>${item.time}</time><span>${item.text}</span></li>`).join("");
  document.querySelectorAll(".timeline").forEach((list) => {
    list.innerHTML = html;
  });
}

function weatherCodeToIcon(code) {
  if ([0, 1].includes(code)) return "☀";
  if ([2, 3].includes(code)) return "🌤";
  if ([45, 48].includes(code)) return "🌫";
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return "🌧";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "❄";
  if ([95, 96, 99].includes(code)) return "⛈";
  return "☁";
}

function renderForecast(targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = forecast.map(([day, icon, temp, rain]) => `
    <div class="forecast-day">
      <span>${day}</span>
      <div class="icon">${icon}</div>
      <strong>${temp}</strong>
      <span>💧 ${rain}</span>
    </div>
  `).join("");
  renderAiSuggestions();
}

function getTomorrowRainChance() {
  if (forecast.length < 2) return Number(state.metrics.rainChance || 0);
  return Number(String(forecast[1][3] || "0").replace("%", "")) || 0;
}

function suggestedIrrigationTime() {
  const soil = Number(state.metrics.soil || 48);
  const hour = soil < 40 ? 5 : soil < 52 ? 6 : 7;
  const minute = soil < 45 ? 15 : 30;
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function buildAiSuggestions() {
  const m = state.metrics;
  const ru = state.language === "ru";
  const region = regions[state.region] || regions.almaty;
  const city = ru ? region.ru : region.kk;
  const tomorrowRain = getTomorrowRainChance();
  const irrigationTime = suggestedIrrigationTime();
  const suggestions = [];

  if (tomorrowRain < 30 && m.soil < 58) {
    suggestions.push({
      priority: 1,
      kk: `Ертең ${city} қаласында жауын ықтималдығы ${tomorrowRain}% — төмен. Топырақ ылғалдылығы ${m.soil}% болғандықтан суару ${irrigationTime}-ға жоспарланды.`,
      ru: `Завтра в городе ${city} вероятность дождя ${tomorrowRain}% — низкая. При влажности почвы ${m.soil}% полив запланирован на ${irrigationTime}.`
    });
  } else if (tomorrowRain >= 50) {
    suggestions.push({
      priority: 1,
      kk: `Ертең жауын ықтималдығы ${tomorrowRain}%. Автоматты суару 24 сағатқа кейінге шегерілді — табиғи ылғалдану жеткілікті.`,
      ru: `Завтра вероятность дождя ${tomorrowRain}%. Автополив отложен на 24 часа — естественного увлажнения достаточно.`
    });
  } else {
    suggestions.push({
      priority: 2,
      kk: `Ертең жауын ықтималдығы ${tomorrowRain}%. Суару кестесі топырақ (${m.soil}%) және цистерна (${m.water}%) деңгейіне қарай түзетіледі.`,
      ru: `Завтра вероятность дождя ${tomorrowRain}%. График полива корректируется по почве (${m.soil}%) и цистерне (${m.water}%).`
    });
  }

  if (m.water < 35) {
    suggestions.push({
      priority: 1,
      kk: `Су қоры ${m.water}% — төмен шек. Жаңбыр суын жинау режимі белсенді, ауыз су тұтынуын азайту ұсынылады.`,
      ru: `Запас воды ${m.water}% — ниже порога. Рекомендуется активировать сбор дождевой воды и снизить расход питьевой воды.`
    });
  } else if (m.water > 82) {
    suggestions.push({
      priority: 2,
      kk: `Цистерна ${m.water}% толы. Келесі 48 сағатта суару ұзақтығын 15%-ға қысқарту мүмкін.`,
      ru: `Цистерна заполнена на ${m.water}%. В ближайшие 48 часов можно сократить длительность полива на 15%.`
    });
  }

  if (m.soil < 42) {
    suggestions.push({
      priority: 1,
      kk: `Топырақ ылғалдылығы ${m.soil}% — критикалықға жақын. Бүгін қосымша 10–15 мин суару қажет.`,
      ru: `Влажность почвы ${m.soil}% — близка к критической. Сегодня нужен дополнительный полив 10–15 мин.`
    });
  }

  if (m.rain >= 8) {
    suggestions.push({
      priority: 2,
      kk: `Бүгін ${formatNumber(m.rain)} мм жауын тіркелді. Жинау жүйесі резервті ${Math.round(m.water * 0.6)} л-ға дейін толықтыра алады.`,
      ru: `Сегодня зафиксировано ${formatNumber(m.rain)} мм осадков. Система сбора может пополнить резерв примерно на ${Math.round(m.water * 0.6)} л.`
    });
  }

  if (m.solar >= 280 && m.autonomy >= 65) {
    suggestions.push({
      priority: 3,
      kk: `Күн панелі ${m.solar} W өндіріп, автономия ${m.autonomy}%. Сорғы мен УФ-блок күн энергиясымен қамтамасызланады.`,
      ru: `Солнечная панель выдает ${m.solar} W, автономность ${m.autonomy}%. Насос и УФ-блок обеспечиваются солнечной энергией.`
    });
  } else if (m.solar < 140) {
    suggestions.push({
      priority: 2,
      kk: `Күн энергиясы төмен (${m.solar} W). Суару сорғысының жұмыс уақытын күндіз 11:00–15:00 аралығына шектеу ұсынылады.`,
      ru: `Солнечная энергия низкая (${m.solar} W). Рекомендуется ограничить работу насоса полива интервалом 11:00–15:00.`
    });
  }

  if (m.aqi > 80) {
    suggestions.push({
      priority: 2,
      kk: `Ауа сапасы AQI ${Math.round(m.aqi)} — жоғарылау. Сыртқы модульдердің сүзу циклі жиілікті іске қосылады.`,
      ru: `Качество воздуха AQI ${Math.round(m.aqi)} — повышено. У внешних модулей усиливается цикл фильтрации.`
    });
  }

  if (state.mode === "Үнемдеу") {
    suggestions.push({
      priority: 3,
      kk: `Үнемдеу режимі қосулы: суару 20%-ға азайтылды, жаңбыр жинау басымдық алды.`,
      ru: `Режим экономии включен: полив сокращен на 20%, приоритет у сбора дождевой воды.`
    });
  } else if (state.mode === "Қолмен") {
    suggestions.push({
      priority: 4,
      kk: `Қолмен басқару режимі: AI тек кеңес береді, нақты шешімді сіз қабылдайсыз.`,
      ru: `Ручной режим: AI только советует, окончательное решение принимаете вы.`
    });
  }

  if (m.wind >= 8) {
    suggestions.push({
      priority: 3,
      kk: `Жел ${formatNumber(m.wind)} м/с — күшті. Сыртқы сенсорлардың оқуы ылғалдылық пен жауын деректерімен тексеріледі.`,
      ru: `Ветер ${formatNumber(m.wind)} м/с — сильный. Показания внешних датчиков сверяются с данными о влажности и осадках.`
    });
  }

  return suggestions
    .sort((a, b) => a.priority - b.priority)
    .filter((item, index, list) => list.findIndex((entry) => entry.kk === item.kk) === index);
}

function renderAiSuggestions() {
  const ru = state.language === "ru";
  const suggestions = buildAiSuggestions();
  const dashList = document.getElementById("aiSuggestionsDashList");
  const detailList = document.getElementById("aiSuggestionsDetailList");
  const dashItems = suggestions.slice(0, 3);
  const detailItems = suggestions.slice(0, 5);

  const renderList = (element, items) => {
    if (!element) return;
    element.innerHTML = items.length
      ? items.map((item) => `<li>${ru ? item.ru : item.kk}</li>`).join("")
      : `<li>${ru ? "Данных пока недостаточно для рекомендации." : "Ұсыныс беру үшін деректер жеткіліксіз."}</li>`;
  };

  renderList(dashList, dashItems);
  renderList(detailList, detailItems);
  setText("#aiSuggestionsDash strong", ru ? "AI-рекомендация" : "AI ұсынысы");
  setText("#aiSuggestionsDetail strong", ru ? "Решение алгоритма" : "Алгоритм шешімі");
}

function renderZones(targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = zoneState.map((zone, index) => `
    <div class="zone">
      <span>💧 ${state.zones[index] || `${t("zone")} ${index + 1}`}</span>
      <strong class="badge ${zone.active ? "" : "off"}">${zone.active ? t("on") : t("off")}</strong>
      <label class="switch">
        <input type="checkbox" data-zone="${index}" ${zone.active ? "checked" : ""} ${state.mode === "Қолмен" ? "" : "disabled"}>
        <span></span>
      </label>
    </div>
  `).join("");
}

function applyLanguage() {
  const navLabels = labels[state.language].nav;
  const ru = state.language === "ru";
  populateRegionSelect();
  navItems.forEach((item, index) => {
    const label = item.querySelector(".nav-label");
    if (label && navLabels[index]) label.textContent = navLabels[index];
  });
  translateStaticInterface();
  setText(".status-pill span", ru ? "Статус системы:" : "Жүйе статусы:");
  setText(".status-pill strong", t("active"));
  setText(".about-box h2", ru ? "О системе" : "Жүйе туралы");
  setText(".about-box p", ru
    ? "Этот сайт является прототипной платформой системы сбора, фильтрации, хранения дождевой воды и автоматизированного полива, разработанной на основе дипломного проекта."
    : "Бұл сайт дипломдық жоба негізінде әзірленген жаңбыр суын жинау, сүзу, сақтау және автоматтандырылған суару жүйесінің прототиптік платформасы болып табылады.");
  const authorNodes = document.querySelectorAll(".authors strong");
  if (authorNodes[0]) authorNodes[0].textContent = ru ? "Главный автор:" : "Басты автор:";
  if (authorNodes[1]) authorNodes[1].textContent = ru ? "Соавторы:" : "Қосымша авторлар:";
  if (authorNodes[2]) authorNodes[2].textContent = ru ? "Научный руководитель:" : "Ғылыми жетекші:";
  setText("#dashboard-title", ru ? "Сервисы и разделы" : "Қызметтер мен бөлімдер");
  setAllText("[data-section-link='dashboard']", ru ? "Вернуться к панели" : "Панельге қайту");
  setAllText(".service-card button", ru ? "Открыть" : "Ашу");
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (t(key)) node.textContent = t(key);
  });
  setText("label[for='regionSelect']", ru ? "Город" : "Қала");
  setText("label[for='providerSelect']", ru ? "Провайдер данных" : "Дерек провайдері");
  setText("label[for='languageSelect']", ru ? "Язык сайта" : "Сайт тілі");
  setText("label[for='themeSelect']", ru ? "Фон / тема" : "Фон / тақырып");
  setText("#customBgTypeLabel", ru ? "Тип своего фона" : "Өз фон түрі");
  setText("#customBgTypeControl [data-custom-bg='color']", ru ? "Цвет / gradient" : "Түс / gradient");
  setText("#customBgTypeControl [data-custom-bg='photo']", ru ? "Фото" : "Фото");
  setText("label[for='customBgInput']", ru ? "CSS gradient (необязательно)" : "CSS gradient (міндетті емес)");
  setText("label[for='customColorInput']", ru ? "Любой цвет" : "Кез келген түс");
  setText("label[for='customPhotoInput']", ru ? "Фон через фото" : "Фото арқылы фон");
  setText("#customPhotoHint", ru ? "Можно загрузить JPG, PNG или WEBP." : "JPG, PNG немесе WEBP жүктей аласыз.");
  const metricsHint = document.querySelector("#manualMetricsPanel .muted");
  if (metricsHint) {
    metricsHint.textContent = ru
      ? "Измените значения и нажмите «Сохранить изменения»."
      : "Сандарды өзгертіңіз, содан кейін «Өзгерісті сақтау» батырмасын басыңыз.";
  }
  const manualNotes = document.querySelectorAll(".manual-only .muted");
  if (manualNotes[0]) manualNotes[0].textContent = ru ? "Чтобы включать или выключать модули, переключите режим на “Ручной”." : "Модульдерді қосу немесе өшіру үшін режимді “Қолмен” күйіне ауыстырыңыз.";
  setText("#modeControl [data-mode='Авто']", t("modeAuto"));
  setText("#modeControl [data-mode='Қолмен']", t("modeManual"));
  setText("#modeControl [data-mode='Үнемдеу']", t("modeEco"));
  setManualFormLabels();
  setModuleAndNoticeLabels();
  setZoneEditorLabels();
  setSelectOptionLabels();
  document.documentElement.lang = state.language;
  updateChartCityLabels();
  renderAiSuggestions();
  initLucideIcons();
  updateClock();
}

function translateStaticInterface() {
  const ru = state.language === "ru";
  const pairs = [
    ["RainGrid басқару орталығы", "Центр управления RainGrid"],
    ["Жоба негізі", "О проекте"],
    ["Жауын көлемін тіркеу", "Регистрация осадков"],
    ["Ауа райын болжау", "Прогноз погоды"],
    ["Автоматты суару", "Автополив"],
    ["Күн энергиясы мониторингі", "Мониторинг солнечной энергии"],
    ["Су деңгейі сенсорлары", "Датчики уровня воды"],
    ["Ішкі / сыртқы модульдер", "Внутренние / внешние модули"],
    ["Жүйе көрсеткіштері", "Показатели системы"],
    ["Жүйе журналы", "Журнал системы"],
    ["Автор байланысы", "Контакты автора"],
    ["Барлығын көру", "Смотреть все"],
    ["Мобильдік қосымша", "Мобильное приложение"],
    ["Жауын көлемі", "Количество осадков"],
    ["Қазір", "Сейчас"],
    ["Бүгін", "Сегодня"],
    ["Ай бойы", "За месяц"],
    ["AI ұсынысы", "AI-рекомендация"],
    ["Топырақ ылғалдылығы", "Влажность почвы"],
    ["Суару ұзақтығы", "Длительность полива"],
    ["Келесі суару", "Следующий полив"],
    ["Күн энергиясы", "Солнечная энергия"],
    ["Қуат", "Мощность"],
    ["Бүгінгі өндіріс", "Выработка сегодня"],
    ["Автономия", "Автономность"],
    ["Су деңгейі", "Уровень воды"],
    ["Су қорының динамикасы", "Динамика запаса воды"],
    ["Сүзу сатылары", "Этапы фильтрации"],
    ["Энергетикалық автономия", "Энергетическая автономность"],
    ["Күн панелі өндірісі", "Выработка солнечной панели"],
    ["Энергия балансы", "Энергетический баланс"],
    ["Аналитика", "Аналитика"],
    ["Су үнемі", "Экономия воды"],
    ["Беткі ағын", "Поверхностный сток"],
    ["Энергия", "Энергия"],
    ["Пилоттық аймақтар", "Пилотные зоны"],
    ["Оқиғалар тарихы", "История событий"],
    ["Басқару параметрлері", "Параметры управления"],
    ["Параметрлер", "Параметры"],
    ["Режим", "Режим"],
    ["Аймақты таңдау", "Выбор региона"],
    ["Ауа райы дерек көзі", "Источник данных погоды"],
    ["Ақпараттарды өзгерту", "Изменение данных"],
    ["Тіл және көрініс", "Язык и оформление"],
    ["Модульдерді қолмен басқару", "Ручное управление модулями"],
    ["Хабарландырулар", "Уведомления"],
    ["Ауа райын жаңарту", "Обновить погоду"],
    ["Өзгерісті сақтау", "Сохранить изменения"],
    ["Жауын сенсоры", "Датчик осадков"],
    ["Сүзу блогы", "Блок фильтрации"],
    ["Күн панелі", "Солнечная панель"],
    ["Су деңгейі төмендегенде ескерту", "Предупреждать при низком уровне воды"],
    ["Жауын тіркелгенде хабарлау", "Уведомлять при регистрации осадков"],
    ["API қатесі болса журналға жазу", "Записывать ошибку API в журнал"],
    ["Қолмен режимде суару аймақтарын және модульдерді өзіңіз қосып-өшіре аласыз.", "В ручном режиме можно самостоятельно включать и выключать зоны полива и модули."],
    ["Қала өзгерсе, координата мен ауа райы деректері жаңартылады.", "При смене города обновляются координаты и погодные данные."],
    ["Google үшін ресми Weather API key қажет. Kazhydromet үшін JSON endpoint немесе өз proxy серверіңіз енгізіледі.", "Для Google нужен официальный Weather API key. Для Kazhydromet укажите JSON endpoint или собственный proxy-сервер."],
    ["Таңдалған тіл мен фон браузер жадында сақталады.", "Выбранный язык и фон сохраняются в памяти браузера."],
    ["Tuking bucket жауынөлшегіші арқылы нақты уақыттағы жауын мөлшерін бақылау.", "Контроль количества осадков в реальном времени через дождемер tipping bucket."],
    ["Tipping bucket жауынөлшегіші арқылы нақты уақыттағы жауын мөлшерін бақылау.", "Контроль количества осадков в реальном времени через дождемер tipping bucket."],
    ["Жауын ықтималдығы мен суару кестесін жоспарлауға арналған болжам.", "Прогноз для планирования вероятности дождя и графика полива."],
    ["Топырақ ылғалдылығы мен ауа райына сүйенген интеллектуалды суару.", "Интеллектуальный полив на основе влажности почвы и погоды."],
    ["Күн панельдерінің қуаты, өндірісі және автономия деңгейін қадағалау.", "Отслеживание мощности, выработки и автономности солнечных панелей."],
    ["Цистернадағы су деңгейін, сапасын және резерв көлемін талдау.", "Анализ уровня, качества и резерва воды в цистерне."],
    ["Температура, ылғалдылық, жел және ауа сапасы параметрлерін бақылау.", "Мониторинг температуры, влажности, ветра и качества воздуха."],
    ["Орталықтандырылған ауыз суға түсетін жүктемені азайту.", "Снижение нагрузки на централизованную питьевую воду."],
    ["Нөсерлік су тасқыны қаупін төмендетуге көмектеседі.", "Помогает снизить риск ливневого подтопления."],
    ["Күн энергиясы арқылы автономды жұмыс істеу.", "Автономная работа за счет солнечной энергии."],
    ["Тұрғын үй кешендері, университет кампустары, мектептер, саябақтар және қоғамдық нысандар.", "Жилые комплексы, университетские кампусы, школы, парки и общественные объекты."],
    ["Аймақты таңдау", "Выбор региона"],
    ["Ауа райы дерек көзі", "Источник данных о погоде"],
    ["Ақпараттарды өзгерту", "Изменение данных"],
    ["Тіл және көрініс", "Язык и внешний вид"],
    ["Модульдерді қолмен басқару", "Ручное управление модулями"],
    ["Хабарландырулар", "Уведомления"],
    ["Өзгерісті сақтау", "Сохранить изменения"],
    ["Ауа райын жаңарту", "Обновить погоду"],
    ["Сайт тілі", "Язык сайта"],
    ["Фон / тақырып", "Фон / тема"]
    ,["Авторлармен байланыс", "Связь с авторами"],
    ["Байланыс және хабарласу", "Контакты и связь"],
    ["Автор парақшасына өту", "Перейти на страницу автора"],
    ["Instagram ашу", "Открыть Instagram"],
    ["87766193034 нөміріне хабарлама жіберу", "Отправить сообщение на номер 87766193034"],
    ["WhatsApp жазу", "Написать в WhatsApp"],
    ["Жоба бойынша ұсыныс немесе сұрақ жіберу", "Отправить предложение или вопрос по проекту"],
    ["Қоңырау шалу", "Позвонить"],
    ["Фото арқылы фон", "Фон через фото"],
    ["Кез келген түс", "Любой цвет"]
  ];
  const map = new Map();
  pairs.forEach(([kk, russian]) => map.set(ru ? kk : russian, ru ? russian : kk));
  document.querySelectorAll("h1,h2,h3,p,span,dt,button,option,label.field-label").forEach((node) => {
    const current = node.textContent.trim();
    if (map.has(current)) node.textContent = map.get(current);
  });
}

function setManualFormLabels() {
  const ru = state.language === "ru";
  setLabelText("waterLevelInput", ru ? "Запас воды, %" : "Су қоры, %");
  setLabelText("soilInput", ru ? "Влажность почвы, %" : "Топырақ ылғалдылығы, %");
  setLabelText("solarInput", ru ? "Солнечная энергия, W" : "Күн энергиясы, W");
  setLabelText("rainInput", ru ? "Осадки сегодня, мм" : "Бүгінгі жауын, мм");
  setLabelText("tempInput", ru ? "Температура, °C" : "Температура, °C");
  setLabelText("insideTempInput", ru ? "Внутренняя температура, °C" : "Ішкі температура, °C");
  setLabelText("humidityInput", ru ? "Влажность, %" : "Ылғалдылық, %");
  setLabelText("windInput", ru ? "Ветер, м/с" : "Жел, м/с");
  setLabelText("rainChanceInput", ru ? "Вероятность дождя, %" : "Жауын ықтималдығы, %");
  setLabelText("waterTempInput", ru ? "Температура воды, °C" : "Су температурасы, °C");
  setLabelText("pressureInput", ru ? "Давление, hPa" : "Ауа қысымы, hPa");
  setLabelText("uvInput", ru ? "UV индекс" : "UV индексі");
  setLabelText("aqiInput", ru ? "AQI" : "AQI");
  setLabelText("waterQualityInput", ru ? "Качество воды" : "Су сапасы");
}

function setModuleAndNoticeLabels() {
  const ru = state.language === "ru";
  setCheckboxLabel("rain", ru ? "Датчик осадков" : "Жауын сенсоры");
  setCheckboxLabel("filter", ru ? "Блок фильтрации" : "Сүзу блогы");
  setCheckboxLabel("solar", ru ? "Солнечная панель" : "Күн панелі");
  setCheckboxLabel("irrigation", ru ? "Автополив" : "Автоматты суару");
  const noticePanel = Array.from(document.querySelectorAll(".panel")).find((panel) => panel.querySelector("h2")?.textContent.trim() === (ru ? "Уведомления" : "Хабарландырулар"));
  const noticeLabels = noticePanel ? noticePanel.querySelectorAll(".check-row") : [];
  if (noticeLabels[0]) setCheckRowText(noticeLabels[0], ru ? "Предупреждать при низком уровне воды" : "Су деңгейі төмендегенде ескерту");
  if (noticeLabels[1]) setCheckRowText(noticeLabels[1], ru ? "Уведомлять при регистрации осадков" : "Жауын тіркелгенде хабарлау");
  if (noticeLabels[2]) setCheckRowText(noticeLabels[2], ru ? "Записывать ошибку API в журнал" : "API қатесі болса журналға жазу");
}

function setCheckboxLabel(module, text) {
  const input = document.querySelector(`.module-toggle[data-module='${module}']`);
  const label = input?.closest("label");
  if (label) setCheckRowText(label, text);
}

function setCheckRowText(label, text) {
  const input = label.querySelector("input");
  label.textContent = "";
  if (input) label.appendChild(input);
  label.append(` ${text}`);
}

function setSelectOptionLabels() {
  const ru = state.language === "ru";
  const provider = document.getElementById("providerSelect");
  if (provider) {
    provider.options[0].textContent = ru ? "Точные данные: Open-Meteo" : "Нақты дерек: Open-Meteo";
    provider.options[1].textContent = "Google Weather API";
    provider.options[2].textContent = "Kazhydromet endpoint";
    provider.options[3].textContent = ru ? "Ручной ввод" : "Қолмен енгізу";
  }
  const language = document.getElementById("languageSelect");
  if (language) {
    language.options[0].textContent = "Қазақша";
    language.options[1].textContent = "Русский";
  }
  const theme = document.getElementById("themeSelect");
  if (theme) {
    theme.options[0].textContent = ru ? "Темно-синий" : "Қара көк";
    theme.options[1].textContent = ru ? "Экологический зеленый" : "Экологиялық жасыл";
    theme.options[2].textContent = ru ? "Светлый режим" : "Жарық режим";
    theme.options[3].textContent = ru ? "Фон университета Нархоз" : "Нархоз университеті";
    theme.options[4].textContent = ru ? "Свой фон" : "Өз фоным";
  }
}

function setZoneEditorLabels() {
  const ru = state.language === "ru";
  document.querySelectorAll(".zone-name-input").forEach((input, index) => {
    setLabelText(input.id || assignZoneInputId(input, index), ru ? `Название зоны ${index + 1}` : `Аймақ ${index + 1} атауы`);
  });
}

function assignZoneInputId(input, index) {
  input.id = `zoneNameInput${index}`;
  return input.id;
}

function applyMetrics() {
  calculateDerivedMetrics();
  const { metrics } = state;
  const region = regions[state.region] || regions.almaty;
  const country = state.language === "ru" ? region.countryRu : region.countryKk;
  const city = state.language === "ru" ? region.ru : region.kk;
  const energy = metrics.energy;
  const waterSaved = metrics.waterSaved;
  const runoff = metrics.runoff;
  const rainChance = Number(metrics.rainChance || 0);

  document.body.dataset.theme = state.theme;
  if (state.theme === "custom") {
    document.body.style.setProperty("--custom-bg", getActiveCustomBackground());
  } else {
    document.body.style.removeProperty("--custom-bg");
  }
  setText("#weatherLocation", `${city}, ${country}`);
  setText("#weatherTemp", `${formatNumber(metrics.temp)}°C`);
  setText("#weatherIcon", metrics.rain > 0 || rainChance > 45 ? "🌧" : "🌤");
  setText("#humidityTop", `${Math.round(metrics.humidity)}%`);
  setText("#windTop", `${formatNumber(metrics.wind)} ${t("unitSpeed")}`);
  setText("#rainChanceTop", `${rainChance}%`);
  setText("#soilValue", `${metrics.soil}%`);
  setText("#soilRangeValue", `${metrics.soil}%`);
  setText("#summaryRain", `${formatNumber(metrics.rain)} ${t("unitRain")}`);
  setText("#summaryWater", `${metrics.water}%`);
  setText("#summarySolar", `${metrics.solar} W`);
  setText("#summarySavedWater", `${formatNumber(waterSaved)} л`);
  setText(".tank strong", `${metrics.water}%`);
  setText("#analyticsWaterSaved", `${formatNumber(waterSaved)} л`);
  setText("#analyticsRunoff", `−${Math.round(runoff)}%`);
  setText("#analyticsEnergy", `${formatNumber(energy, 2)} кВт·сағ`);
  setText("#rainRateValue", `${formatNumber(metrics.rainRate)} мм/сағ`);
  setText("#rainTodayValue", `${formatNumber(metrics.rain)} мм`);
  setText("#rainMonthValue", `${formatNumber(metrics.monthRain)} мм`);
  setText("#rainRateDetail", `${formatNumber(metrics.rainRate)} мм/сағ`);
  setText("#rainDailyDetail", `${formatNumber(metrics.rain)} мм`);
  setText("#rainPulseDetail", state.journal[0]?.time || new Date().toLocaleTimeString("kk-KZ", { hour: "2-digit", minute: "2-digit" }));
  setText("#solarPowerValue", `${metrics.solar} W`);
  setText("#solarEnergyValue", `${formatNumber(energy, 2)} кВт·сағ`);
  setText("#solarAutonomyValue", `${metrics.autonomy}%`);
  setText("#solarPowerDetail", `${metrics.solar} W`);
  setText("#filterPowerDetail", `${metrics.filterPower} W`);
  setText("#pumpPowerDetail", `${metrics.pumpPower} W`);
  setText("#carbonFootprintDetail", metrics.solar > 220 ? (state.language === "ru" ? "Низкий" : "Төмен") : (state.language === "ru" ? "Средний" : "Орташа"));
  setAllText("[data-live='temp']", `${formatNumber(metrics.temp)}°C`);
  setAllText("[data-live='humidity']", `${metrics.humidity}%`);
  setAllText("[data-live='wind']", `${formatNumber(metrics.wind)} ${t("unitSpeed")}`);
  setText("#outsideTempValue", `${formatNumber(metrics.temp)}°C`);
  setText("#insideTempValue", `${formatNumber(metrics.insideTemp)}°C`);
  setText("#waterTempValue", `${formatNumber(metrics.waterTemp)}°C`);
  setText("#pressureValue", `${Math.round(metrics.pressure)} hPa`);
  setText("#uvValue", `${formatNumber(metrics.uv)}`);
  setText("#uvDashValue", `${formatNumber(metrics.uv)}`);
  setText("#aqiValue", `${Math.round(metrics.aqi)} AQI`);
  setText("#aqiDashValue", `${Math.round(metrics.aqi)}`);
  setText("#modulesHumidityValue", `${Math.round(metrics.humidity)}%`);
  setText("#modulesWindValue", `${formatNumber(metrics.wind)} ${t("unitSpeed")}`);
  setText("#waterQualityValue", metrics.waterQuality);

  const soilRange = document.getElementById("soilRange");
  if (soilRange && document.activeElement !== soilRange) soilRange.value = metrics.soil;
  const systemSwitch = document.getElementById("systemSwitch");
  if (systemSwitch) systemSwitch.checked = Boolean(state.modules.irrigation);

  const tankFill = document.querySelector(".tank-fill");
  if (tankFill) tankFill.style.height = `${metrics.water}%`;

  const metricInputs = {
    waterLevelInput: metrics.water,
    soilInput: metrics.soil,
    solarInput: metrics.solar,
    rainInput: metrics.rain,
    tempInput: metrics.temp,
    insideTempInput: metrics.insideTemp,
    humidityInput: metrics.humidity,
    windInput: metrics.wind,
    rainChanceInput: metrics.rainChance,
    waterTempInput: metrics.waterTemp,
    pressureInput: metrics.pressure,
    uvInput: metrics.uv,
    aqiInput: metrics.aqi,
    waterQualityInput: metrics.waterQuality
  };
  Object.entries(metricInputs).forEach(([id, value]) => {
    const input = document.getElementById(id);
    if (input && document.activeElement !== input) input.value = value;
  });

  setValue("regionSelect", state.region);
  setValue("providerSelect", state.provider);
  setValue("apiKeyInput", state.apiKey);
  setValue("endpointInput", state.endpoint);
  setValue("languageSelect", state.language);
  setValue("themeSelect", state.theme);
  applyCustomThemePanel();
  document.querySelectorAll(".zone-name-input").forEach((input, index) => {
    input.value = state.zones[index] || `${t("zone")} ${index + 1}`;
  });
  document.querySelectorAll(".module-toggle").forEach((input) => {
    input.checked = Boolean(state.modules[input.dataset.module]);
  });
  document.querySelectorAll("#modeControl button").forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === state.mode);
  });

  applyModeState();
  applyModuleState();
  renderZones("zones");
  renderZones("zonesLarge");
  renderCharts();
  renderAiSuggestions();
}

function applyModuleState() {
  const mapping = {
    rain: { opens: ["[data-open='rain']"], sections: ["#rain"], panels: ["#rainChart", "#rainDetailChart"] },
    solar: { opens: ["[data-open='solar']"], sections: ["#solar"], panels: ["#solarChart", "#solarDetailChart"] },
    irrigation: { opens: ["[data-open='irrigation']"], sections: ["#irrigation"], panels: [".irrigation-card"] },
    filter: { opens: ["[data-open='water']"], sections: ["#water"], panels: [".water-card", "#waterChart"] }
  };

  Object.entries(mapping).forEach(([module, config]) => {
    const disabled = !state.modules[module];
    config.opens.forEach((selector) => {
      document.querySelectorAll(selector).forEach((node) => node.classList.toggle("module-disabled", disabled));
    });
    config.sections.forEach((selector) => {
      document.querySelectorAll(selector).forEach((node) => node.classList.toggle("module-disabled", disabled));
    });
    config.panels.forEach((selector) => {
      document.querySelectorAll(selector).forEach((node) => {
        const panel = node.closest(".panel") || node;
        panel.classList.toggle("module-disabled", disabled);
      });
    });
  });
}

function applyModeState() {
  const isManual = state.mode === "Қолмен";
  document.querySelectorAll(".manual-only").forEach((panel) => {
    panel.classList.toggle("locked", !isManual);
    panel.dataset.lockNote = t("manualLock");
    panel.querySelectorAll("input, button, select").forEach((control) => {
      control.disabled = !isManual;
    });
  });
  document.getElementById("systemSwitch")?.toggleAttribute("disabled", !isManual);
}

async function refreshWeather() {
  if (state.provider === "manual") {
    await fetchCityCharts();
    renderForecast("forecastRow");
    renderForecast("forecastLarge");
    return;
  }

  try {
    if (state.provider === "openmeteo") await fetchOpenMeteo();
    if (state.provider === "google") await fetchGoogleWeather();
    if (state.provider === "kazhydromet") await fetchKazhydromet();
    if (state.provider !== "openmeteo") await fetchCityCharts();
    saveState();
    applyMetrics();
    renderForecast("forecastRow");
    renderForecast("forecastLarge");
    addJournal(t("journalWeather"));
  } catch (error) {
    showNotice(t("weatherError"), error.message || t("apiCheck"));
  }
}

async function fetchOpenMeteo() {
  const region = regions[state.region] || regions.almaty;
  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.search = new URLSearchParams({
    latitude: region.lat,
    longitude: region.lon,
    current: "temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation,rain,weather_code",
    hourly: "precipitation,shortwave_radiation",
    daily: "weather_code,temperature_2m_max,precipitation_probability_max,precipitation_sum",
    timezone: "auto",
    past_days: "7",
    forecast_days: "7"
  });
  const response = await fetch(url);
  if (!response.ok) throw new Error("Open-Meteo сұранысы орындалмады.");
  const data = await response.json();
  state.metrics.temp = Math.round(data.current.temperature_2m);
  state.metrics.humidity = Math.round(data.current.relative_humidity_2m);
  state.metrics.wind = Math.round(data.current.wind_speed_10m);
  state.metrics.rain = Number((data.current.rain ?? data.current.precipitation ?? state.metrics.rain).toFixed(1));
  state.metrics.rainChance = Number(data.daily.precipitation_probability_max[0] ?? state.metrics.rainChance);
  applyClimateProfile();
  updateCityChartsFromMeteo(data);
  const locale = state.language === "ru" ? "ru-RU" : "kk-KZ";
  forecast = data.daily.time.map((date, index) => [
    index === 0 ? t("today") : new Date(date).toLocaleDateString(locale, { weekday: "short" }),
    weatherCodeToIcon(data.daily.weather_code[index]),
    `${Math.round(data.daily.temperature_2m_max[index])}°`,
    `${data.daily.precipitation_probability_max[index] ?? 0}%`
  ]);
}

async function fetchGoogleWeather() {
  if (!state.apiKey) throw new Error("Google Weather API үшін API key енгізіңіз.");
  const region = regions[state.region] || regions.almaty;
  const currentUrl = new URL("https://weather.googleapis.com/v1/currentConditions:lookup");
  currentUrl.search = new URLSearchParams({
    key: state.apiKey,
    "location.latitude": region.lat,
    "location.longitude": region.lon,
    unitsSystem: "METRIC"
  });
  const response = await fetch(currentUrl);
  if (!response.ok) throw new Error("Google Weather API сұранысы орындалмады.");
  const data = await response.json();
  state.metrics.temp = Math.round(data.temperature?.degrees ?? state.metrics.temp);
  state.metrics.humidity = Math.round(data.relativeHumidity ?? state.metrics.humidity);
  state.metrics.wind = Math.round(data.wind?.speed?.value ?? state.metrics.wind);
  applyClimateProfile();
}

async function fetchKazhydromet() {
  if (!state.endpoint) throw new Error("Kazhydromet үшін JSON endpoint немесе proxy мекенжайын енгізіңіз.");
  const response = await fetch(state.endpoint);
  if (!response.ok) throw new Error("Kazhydromet endpoint сұранысы орындалмады.");
  const data = await response.json();
  state.metrics.temp = Math.round(data.temp ?? data.temperature ?? state.metrics.temp);
  state.metrics.humidity = Math.round(data.humidity ?? state.metrics.humidity);
  state.metrics.wind = Math.round(data.wind ?? data.windSpeed ?? state.metrics.wind);
  state.metrics.rain = Number(data.rain ?? data.precipitation ?? state.metrics.rain);
  state.metrics.rainChance = Number(data.rainChance ?? data.precipitationProbability ?? state.metrics.rainChance);
  applyClimateProfile();
}

function applyClimateProfile() {
  const region = regions[state.region] || regions.almaty;
  const southFactor = clamp((48 - region.lat) * 4, -18, 26);
  const dryWest = region.lon < 58 ? 12 : 0;
  const mountain = ["almaty", "taldykorgan", "talgar", "esik", "oskemen", "ridder"].includes(state.region) ? 8 : 0;
  const rainChance = Number(state.metrics.rainChance || 0);
  const rain = Number(state.metrics.rain || 0);
  const humidity = Number(state.metrics.humidity || 50);
  state.metrics.soil = clamp(Math.round(28 + humidity * 0.38 + rain * 3 + mountain * 0.4 - dryWest), 12, 92);
  state.metrics.water = clamp(Math.round(38 + rainChance * 0.28 + rain * 4 + humidity * 0.14 + mountain - dryWest * 0.5), 8, 96);
  state.metrics.solar = clamp(Math.round(230 + southFactor * 5 + (100 - rainChance) * 1.35 - humidity * 0.55), 80, 520);
  state.metrics.insideTemp = Number((Number(state.metrics.temp) + 5.2).toFixed(1));
  state.metrics.waterTemp = Number((Number(state.metrics.temp) - 1.4).toFixed(1));
  state.metrics.pressure = Math.round(1008 + (region.lat - 45) * 0.8 - Number(state.metrics.wind || 0) * 0.6);
  state.metrics.uv = clamp(Math.round(2 + southFactor / 8 + (100 - rainChance) / 35), 0, 11);
  state.metrics.aqi = clamp(Math.round(24 + dryWest * 1.2 + Number(state.metrics.wind || 0) * 2 + (100 - humidity) * 0.18), 8, 160);
  state.metrics.waterQuality = state.metrics.aqi > 100 ? "Орташа" : "Жақсы";
  calculateDerivedMetrics();
}

function showNotice(title, body) {
  if (!dialog) return;
  dialog.classList.remove("mobile-dialog");
  dialogContent.innerHTML = `<div class="dialog-body"><h2>${title}</h2><p>${body}</p></div>`;
  dialog.showModal();
}

function showInfoDialog(key) {
  if (!dialog) return;
  const item = copy[key];
  if (!item) return;
  const [title, body] = item[state.language] || item.kk;
  const section = sectionDialogMap[key];
  const action = section
    ? `<button type="button" class="ghost-button full dialog-go" data-section-link="${section}">${t("openSection")}</button>`
    : "";
  dialog.classList.remove("mobile-dialog");
  dialogContent.innerHTML = `<div class="dialog-body"><h2>${title}</h2><p>${body}</p>${action}</div>`;
  dialog.showModal();
}

function shortwaveToPanelW(radiation) {
  const panelM2 = 1.75;
  const efficiency = 0.2;
  return Math.round(Math.max(0, Number(radiation) || 0) * panelM2 * efficiency);
}

function alignSeriesToAnchor(series, anchor) {
  if (!series.length) return series;
  const last = series[series.length - 1];
  if (!last) return [...series];
  const factor = Number(anchor) / last;
  return series.map((value) => Math.round(Math.max(0, value * factor)));
}

function buildWaterLevelSeries(precipAmounts, anchorWater) {
  const amounts = precipAmounts.map((value) => Math.max(0, Number(value) || 0));
  if (!amounts.length) return [anchorWater];
  const levels = new Array(amounts.length);
  levels[amounts.length - 1] = anchorWater;
  for (let index = amounts.length - 2; index >= 0; index -= 1) {
    const delta = amounts[index + 1] * 2.8;
    levels[index] = clamp(Math.round(levels[index + 1] - delta), 8, 96);
  }
  return levels;
}

function formatChartLabels(times, mode, count) {
  const locale = state.language === "ru" ? "ru-RU" : "kk-KZ";
  return times.slice(-count).map((time) => {
    const date = new Date(time);
    if (mode === "hour") {
      return date.toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit" });
    }
    return date.toLocaleDateString(locale, { weekday: "short", day: "numeric" });
  });
}

function sliceMeteoSeries(data) {
  const today = new Date().toISOString().slice(0, 10);
  const hourlyTimes = data.hourly?.time || [];
  const hourlyEnd = hourlyTimes.findIndex((time) => time.slice(0, 10) > today);
  const hourlyLimit = hourlyEnd === -1 ? hourlyTimes.length : hourlyEnd;
  const dailyTimes = data.daily?.time || [];
  const dailyEnd = dailyTimes.findIndex((time) => time.slice(0, 10) > today);
  const dailyLimit = dailyEnd === -1 ? dailyTimes.length : dailyEnd + 1;

  return {
    hourlyTimes: hourlyTimes.slice(0, hourlyLimit),
    radiation: (data.hourly?.shortwave_radiation || []).slice(0, hourlyLimit).map(shortwaveToPanelW),
    dailyTimes: dailyTimes.slice(0, dailyLimit),
    dailyPrecip: (data.daily?.precipitation_sum || []).slice(0, dailyLimit)
  };
}

function buildCityChartsFromMeteo(data) {
  const series = sliceMeteoSeries(data);
  const solarDetailCount = Math.min(24, series.radiation.length);
  const solarDashCount = Math.min(12, series.radiation.length);
  const waterDetailCount = Math.min(8, series.dailyPrecip.length);
  const solarDetailValues = alignSeriesToAnchor(series.radiation.slice(-solarDetailCount), state.metrics.solar);
  const solarDashValues = alignSeriesToAnchor(series.radiation.slice(-solarDashCount), state.metrics.solar);
  const waterDetailValues = buildWaterLevelSeries(series.dailyPrecip.slice(-waterDetailCount), state.metrics.water);

  return {
    solarDash: {
      values: solarDashValues,
      labels: formatChartLabels(series.hourlyTimes, "hour", solarDashCount)
    },
    solarDetail: {
      values: solarDetailValues,
      labels: formatChartLabels(series.hourlyTimes, "hour", solarDetailCount)
    },
    waterDetail: {
      values: waterDetailValues,
      labels: formatChartLabels(series.dailyTimes, "day", waterDetailCount)
    }
  };
}

function buildFallbackCityCharts(region) {
  const solar = Number(state.metrics.solar) || 285;
  const water = Number(state.metrics.water) || 62;
  const latFactor = clamp((48 - region.lat) * 0.08, -1.2, 1.6);
  const solarPattern = [0.04, 0.08, 0.14, 0.24, 0.38, 0.52, 0.7, 0.86, 1, 0.9, 0.78, 0.58];
  const solarDashValues = alignSeriesToAnchor(solarPattern.map((factor) => Math.round(solar * factor * (1 + latFactor * 0.08))), solar);
  const solarDetailValues = alignSeriesToAnchor(
    [...solarPattern, ...solarPattern].map((factor, index) => Math.round(solar * factor * (0.92 + (index % 4) * 0.04))),
    solar
  );
  const precipPattern = [0.2, 1.4, 0.5, 2.2, 0.8, 3.1, 1.2, 0.4].map((value) => value * (1 + latFactor * 0.12));
  return {
    solarDash: { values: solarDashValues, labels: [] },
    solarDetail: { values: solarDetailValues.slice(-24), labels: [] },
    waterDetail: { values: buildWaterLevelSeries(precipPattern, water), labels: [] }
  };
}

function updateCityChartsFromMeteo(data) {
  lastMeteoChartData = data;
  cityCharts = buildCityChartsFromMeteo(data);
  chartRegion = state.region;
  updateChartCityLabels();
  renderCharts();
}

function rebuildCityChartsFromCache() {
  if (!lastMeteoChartData || chartRegion !== state.region) return;
  cityCharts = buildCityChartsFromMeteo(lastMeteoChartData);
  renderCharts();
}

async function fetchCityCharts() {
  const region = regions[state.region] || regions.almaty;
  try {
    const url = new URL("https://api.open-meteo.com/v1/forecast");
    url.search = new URLSearchParams({
      latitude: region.lat,
      longitude: region.lon,
      hourly: "precipitation,shortwave_radiation",
      daily: "precipitation_sum",
      timezone: "auto",
      past_days: "7",
      forecast_days: "1"
    });
    const response = await fetch(url);
    if (!response.ok) throw new Error("Open-Meteo chart request failed");
    updateCityChartsFromMeteo(await response.json());
  } catch {
    lastMeteoChartData = null;
    cityCharts = buildFallbackCityCharts(region);
    chartRegion = state.region;
    updateChartCityLabels();
    renderCharts();
  }
}

function updateChartCityLabels() {
  const region = regions[state.region] || regions.almaty;
  const city = state.language === "ru" ? region.ru : region.kk;
  const label = `— ${city}`;
  setText("#solarChartCity", label);
  setText("#solarDetailChartCity", label);
  setText("#waterChartCity", label);
}

function getCityChartSeries() {
  if (chartRegion === state.region && cityCharts.solarDash.values.length) {
    return cityCharts;
  }
  const region = regions[state.region] || regions.almaty;
  return buildFallbackCityCharts(region);
}

function drawBars(canvasId, values, colorA = "#2477ff", colorB = "#3db7ff") {
  const canvas = document.getElementById(canvasId);
  if (!canvas || !values.length) return;
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const max = Math.max(...values, 1) * 1.2;
  ctx.clearRect(0, 0, width, height);
  ctx.strokeStyle = "rgba(151,181,212,0.15)";
  ctx.lineWidth = 1;
  for (let i = 0; i < 5; i += 1) {
    const y = 24 + i * ((height - 48) / 4);
    ctx.beginPath();
    ctx.moveTo(36, y);
    ctx.lineTo(width - 16, y);
    ctx.stroke();
  }
  const gap = 8;
  const barWidth = (width - 58 - gap * values.length) / values.length;
  values.forEach((value, index) => {
    const h = ((height - 58) * value) / max;
    const x = 42 + index * (barWidth + gap);
    const y = height - 24 - h;
    const gradient = ctx.createLinearGradient(0, y, 0, height);
    gradient.addColorStop(0, colorB);
    gradient.addColorStop(1, colorA);
    ctx.fillStyle = gradient;
    ctx.roundRect(x, y, barWidth, h, 4);
    ctx.fill();
  });
}

function drawLines(canvasId, values, color = "#3db7ff") {
  const canvas = document.getElementById(canvasId);
  if (!canvas || !values.length) return;
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const series = values.length === 1 ? [values[0], values[0]] : values;
  const max = Math.max(...series, 1) * 1.18;
  const min = Math.min(...series) * 0.8;
  ctx.clearRect(0, 0, width, height);
  ctx.strokeStyle = "rgba(151,181,212,0.15)";
  for (let i = 0; i < 5; i += 1) {
    const y = 24 + i * ((height - 48) / 4);
    ctx.beginPath();
    ctx.moveTo(36, y);
    ctx.lineTo(width - 16, y);
    ctx.stroke();
  }
  ctx.beginPath();
  series.forEach((value, index) => {
    const x = 42 + index * ((width - 70) / Math.max(series.length - 1, 1));
    const y = height - 24 - ((value - min) / (max - min || 1)) * (height - 58);
    if (index) ctx.lineTo(x, y);
    else ctx.moveTo(x, y);
  });
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.stroke();
}

function renderCharts() {
  const rain = Number(state.metrics.rain);
  const charts = getCityChartSeries();
  const rainSeries = [0.2, 0.5, 0.7, 0.1, 0.25, 0.1, rain / 18, rain / 12, rain / 9, rain / 8, rain / 10, rain / 27].map((v) => Number(Math.max(0, v).toFixed(2)));
  drawBars("rainChart", rainSeries);
  drawBars("rainDetailChart", rainSeries);
  drawLines("solarChart", charts.solarDash.values, "#41d64b");
  drawLines("solarDetailChart", charts.solarDetail.values, "#41d64b");
  drawLines("waterChart", charts.waterDetail.values, "#3db7ff");
  bindChartTooltip("rainChart", rainSeries, t("unitRain"));
  bindChartTooltip("rainDetailChart", rainSeries, t("unitRain"));
  bindChartTooltip("solarChart", charts.solarDash.values, "W", charts.solarDash.labels);
  bindChartTooltip("solarDetailChart", charts.solarDetail.values, "W", charts.solarDetail.labels);
  bindChartTooltip("waterChart", charts.waterDetail.values, "%", charts.waterDetail.labels);
}

function bindChartTooltip(canvasId, values, unit, labels = []) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  canvas.dataset.values = JSON.stringify(values);
  canvas.dataset.unit = unit;
  canvas.dataset.labels = JSON.stringify(labels);
}

function showChartTooltip(event) {
  const canvas = event.target.closest("canvas");
  if (!canvas?.dataset.values) return;
  const values = JSON.parse(canvas.dataset.values);
  const rect = canvas.getBoundingClientRect();
  const ratio = (event.clientX - rect.left) / rect.width;
  const index = clamp(Math.round(ratio * (values.length - 1)), 0, values.length - 1);
  const labels = JSON.parse(canvas.dataset.labels || "[]");
  const tooltip = getTooltip();
  const prefix = labels[index] || `${index + 1}`;
  tooltip.textContent = `${prefix}: ${formatNumber(values[index], 2)} ${canvas.dataset.unit || ""}`;
  tooltip.style.left = `${event.clientX + 12}px`;
  tooltip.style.top = `${event.clientY + 12}px`;
  tooltip.style.display = "block";
}

function hideChartTooltip() {
  const tooltip = document.querySelector(".chart-tooltip");
  if (tooltip) tooltip.style.display = "none";
}

function getTooltip() {
  let tooltip = document.querySelector(".chart-tooltip");
  if (!tooltip) {
    tooltip = document.createElement("div");
    tooltip.className = "chart-tooltip";
    document.body.appendChild(tooltip);
  }
  return tooltip;
}

CanvasRenderingContext2D.prototype.roundRect ??= function roundRect(x, y, w, h, r) {
  this.beginPath();
  this.moveTo(x + r, y);
  this.arcTo(x + w, y, x + w, y + h, r);
  this.arcTo(x + w, y + h, x, y + h, r);
  this.arcTo(x, y + h, x, y, r);
  this.arcTo(x, y, x + w, y, r);
  this.closePath();
};

document.addEventListener("click", (event) => {
  const navLink = event.target.closest("[data-section]");
  const sectionLink = event.target.closest("[data-section-link]");
  const openButton = event.target.closest("[data-open]");
  const modeButton = event.target.closest("#modeControl button");
  const customBgButton = event.target.closest("#customBgTypeControl button");

  if (navLink) {
    event.preventDefault();
    showSection(navLink.dataset.section);
  }
  if (sectionLink) {
    if (dialog?.open) {
      dialog.classList.remove("mobile-dialog");
      dialog.close();
    }
    showSection(sectionLink.dataset.sectionLink);
  }
  if (modeButton) {
    state.mode = modeButton.dataset.mode;
    saveState();
    addJournal(`${t("journalMode")}: ${modeButton.textContent}`);
    applyMetrics();
  }
  if (customBgButton) {
    state.customBackgroundType = customBgButton.dataset.customBg;
    state.theme = "custom";
    saveState();
    applyMetrics();
  }
  if (openButton) {
    if (!dialog) return;
    if (openButton.dataset.open === "mobile") {
      dialog.classList.add("mobile-dialog");
      dialogContent.innerHTML = `<div class="dialog-body mobile-preview"><iframe src="mobile-app.html" title="ARQUENIX Mobile" loading="lazy"></iframe></div>`;
      dialog.showModal();
      return;
    }
    showInfoDialog(openButton.dataset.open);
  }
});

document.addEventListener("mousemove", (event) => {
  if (event.target.tagName === "CANVAS" && event.target.dataset.values) {
    const values = JSON.parse(event.target.dataset.values || "[]");
    if (!values.length) return;
    const index = Math.min(values.length - 1, Math.max(0, Math.floor((event.offsetX / event.target.clientWidth) * values.length)));
    const labels = JSON.parse(event.target.dataset.labels || "[]");
    const tooltip = getTooltip();
    const prefix = labels[index] || `${index + 1}`;
    tooltip.textContent = `${prefix}: ${formatNumber(values[index])} ${event.target.dataset.unit || ""}`;
    tooltip.style.left = `${event.clientX + 12}px`;
    tooltip.style.top = `${event.clientY + 12}px`;
    tooltip.style.display = "block";
  } else {
    hideChartTooltip();
  }
});

document.addEventListener("change", (event) => {
  if (event.target.id === "regionSelect") {
    state.region = event.target.value;
    chartRegion = null;
    if (state.provider !== "manual") {
      refreshWeather();
    } else {
      applyClimateProfile();
      fetchCityCharts();
    }
  }
  if (event.target.id === "providerSelect") state.provider = event.target.value;
  if (event.target.id === "apiKeyInput") state.apiKey = event.target.value.trim();
  if (event.target.id === "endpointInput") state.endpoint = event.target.value.trim();
  if (event.target.id === "languageSelect") {
    state.language = event.target.value;
    applyLanguage();
  }
  if (event.target.id === "themeSelect") state.theme = event.target.value;
  if (event.target.id === "customColorInput") {
    state.customBackgroundColor = event.target.value;
    state.customBackgroundType = "color";
    state.theme = "custom";
  }
  if (event.target.id === "customBgInput") {
    state.customBackgroundGradient = event.target.value.trim();
    state.customBackgroundType = "color";
    state.theme = "custom";
  }
  if (event.target.id === "customPhotoInput" && event.target.files?.[0]) {
    const reader = new FileReader();
    reader.onload = () => {
      state.customBackgroundPhoto = String(reader.result);
      state.customBackgroundType = "photo";
      state.theme = "custom";
      saveState();
      applyMetrics();
    };
    reader.readAsDataURL(event.target.files[0]);
    return;
  }
  if (event.target.classList.contains("zone-name-input") && state.mode === "Қолмен") {
    const index = Number(event.target.dataset.zoneName);
    state.zones[index] = event.target.value.trim() || `${t("zone")} ${index + 1}`;
    addJournal(`${t("zone")} ${index + 1}: ${state.zones[index]}`);
  }
  if (event.target.classList.contains("module-toggle") && state.mode === "Қолмен") {
    state.modules[event.target.dataset.module] = event.target.checked;
    addJournal(`${t("journalModule")}: ${event.target.parentElement.textContent.trim()}`);
  }
  if (event.target.dataset.zone && state.mode === "Қолмен") {
    const index = Number(event.target.dataset.zone);
    zoneState[index].active = event.target.checked;
    addJournal(`${t("zone")} ${zoneState[index].name}: ${event.target.checked ? t("on") : t("off")}`);
  }
  saveState();
  applyMetrics();
});

document.querySelector(".dialog-close")?.addEventListener("click", () => {
  dialog.classList.remove("mobile-dialog");
  dialog.close();
});
dialog?.addEventListener("close", () => dialog.classList.remove("mobile-dialog"));
document.getElementById("refreshWeather")?.addEventListener("click", refreshWeather);
document.getElementById("saveMetrics")?.addEventListener("click", () => {
  const previous = { ...state.metrics };
  state.metrics.water = Number(document.getElementById("waterLevelInput").value);
  state.metrics.soil = Number(document.getElementById("soilInput").value);
  state.metrics.solar = Number(document.getElementById("solarInput").value);
  state.metrics.rain = Number(document.getElementById("rainInput").value);
  state.metrics.temp = Number(document.getElementById("tempInput").value);
  state.metrics.insideTemp = Number(document.getElementById("insideTempInput").value);
  state.metrics.humidity = Number(document.getElementById("humidityInput").value);
  state.metrics.wind = Number(document.getElementById("windInput").value);
  state.metrics.rainChance = Number(document.getElementById("rainChanceInput").value);
  state.metrics.waterTemp = Number(document.getElementById("waterTempInput").value);
  state.metrics.pressure = Number(document.getElementById("pressureInput").value);
  state.metrics.uv = Number(document.getElementById("uvInput").value);
  state.metrics.aqi = Number(document.getElementById("aqiInput").value);
  state.metrics.waterQuality = document.getElementById("waterQualityInput").value.trim() || state.metrics.waterQuality;
  calculateDerivedMetrics();
  state.mode = "Қолмен";
  state.provider = "manual";
  const changed = Object.keys(state.metrics)
    .filter((key) => previous[key] !== state.metrics[key])
    .slice(0, 6)
    .join(", ");
  saveState();
  applyMetrics();
  rebuildCityChartsFromCache();
  addJournal(`${t("journalManual")}: ${changed || "OK"}`);
  showNotice(t("saved"), t("savedBody"));
});

document.getElementById("sidebarToggle")?.addEventListener("click", openSidebar);
document.getElementById("sidebarClose")?.addEventListener("click", closeSidebar);
document.getElementById("sidebarOverlay")?.addEventListener("click", closeSidebar);
window.addEventListener("resize", () => {
  if (window.innerWidth > 980) closeSidebar();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeSidebar();
});

document.getElementById("soilRange")?.addEventListener("input", (event) => {
  if (state.mode !== "Қолмен") return;
  state.metrics.soil = Number(event.target.value);
  saveState();
  applyMetrics();
});

document.getElementById("systemSwitch")?.addEventListener("change", (event) => {
  if (state.mode !== "Қолмен") {
    event.target.checked = Boolean(state.modules.irrigation);
    showNotice(t("manualNeeded"), t("manualNeededBody"));
    return;
  }
  state.modules.irrigation = event.target.checked;
  saveState();
  applyMetrics();
  addJournal(`${t("journalModule")}: ${state.modules.irrigation ? t("on") : t("off")}`);
});

const initialSection = location.hash.replace("#", "");
if (initialSection && document.getElementById(initialSection)?.classList.contains("view")) {
  showSection(initialSection);
}

applyLanguage();
initLucideIcons();
updateClock();
setInterval(updateClock, 1000);
renderJournal();
applyMetrics();
renderForecast("forecastRow");
renderForecast("forecastLarge");
if (state.provider !== "manual" && state.mode !== "Қолмен") {
  refreshWeather();
} else {
  fetchCityCharts();
}
