const translations = {
  es: {
    brand: "Relax Sounds",
    brandNote: "Biblioteca de ambientes relajantes",
    languageLabel: "Idioma",
    themeLight: "Modo claro",
    themeDark: "Modo oscuro",
    eyebrow: "Sonidos para bajar el ritmo",
    heroTitle: "Encuentra un momento de calma en cualquier lugar",
    heroSubtitle:
      "Una colección simple de ambientes relajantes para estudiar, descansar o desconectarte del ruido diario.",
    cta: "Explorar sonidos",
    oceanTag: "Océano",
    oceanTitle: "Brisa marina",
    oceanText:
      "Olas suaves y viento costero para crear una atmósfera abierta, tranquila y constante.",
    rainTag: "Lluvia",
    rainTitle: "Tarde lluviosa",
    rainText:
      "Gotas regulares y fondo tenue para concentrarte mejor o acompañar una pausa silenciosa.",
    cafeTag: "Cafetería",
    cafeTitle: "Rincón de café",
    cafeText:
      "Murmullo ambiente, tazas y movimiento ligero para sentir un espacio cálido y familiar.",
    themeToggleLabel: "Cambiar tema",
    languageSelectLabel: "Seleccionar idioma"
  },
  en: {
    brand: "Relax Sounds",
    brandNote: "Ambient focus library",
    languageLabel: "Language",
    themeLight: "Light mode",
    themeDark: "Dark mode",
    eyebrow: "Sounds to slow things down",
    heroTitle: "Find a calm moment wherever you are",
    heroSubtitle:
      "A simple collection of relaxing ambiences for studying, resting, or stepping away from daily noise.",
    cta: "Explore sounds",
    oceanTag: "Ocean",
    oceanTitle: "Sea breeze",
    oceanText:
      "Soft waves and coastal wind to create an open, peaceful, and steady atmosphere.",
    rainTag: "Rain",
    rainTitle: "Rainy afternoon",
    rainText:
      "Regular drops and a soft background to help you focus or support a quiet pause.",
    cafeTag: "Cafe",
    cafeTitle: "Coffee corner",
    cafeText:
      "Ambient chatter, cups, and gentle motion to evoke a warm and familiar space.",
    themeToggleLabel: "Switch theme",
    languageSelectLabel: "Choose language"
  }
};

const storageKeys = {
  language: "relax-landing-language",
  theme: "relax-landing-theme"
};

const languageSelect = document.querySelector("#language-select");
const themeToggle = document.querySelector("#theme-toggle");
const themeToggleLabel = document.querySelector(".theme-toggle__label");
const themeToggleIcon = document.querySelector(".theme-toggle__icon");
const translatedNodes = document.querySelectorAll("[data-i18n]");

function applyLanguage(language) {
  const selectedLanguage = translations[language] ? language : "es";
  const content = translations[selectedLanguage];

  document.documentElement.lang = selectedLanguage;
  translatedNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (content[key]) {
      node.textContent = content[key];
    }
  });

  languageSelect.value = selectedLanguage;
  languageSelect.setAttribute("aria-label", content.languageSelectLabel);
  themeToggle.setAttribute("aria-label", content.themeToggleLabel);
  updateThemeToggle(document.body.dataset.theme || "light", selectedLanguage);
  localStorage.setItem(storageKeys.language, selectedLanguage);
}

function updateThemeToggle(theme, language) {
  const content = translations[language];
  const isDark = theme === "dark";

  themeToggleLabel.textContent = isDark ? content.themeDark : content.themeLight;
  themeToggleIcon.textContent = isDark ? "☾" : "☀";
}

function applyTheme(theme) {
  const selectedTheme = theme === "dark" ? "dark" : "light";
  const language = languageSelect.value || "es";

  document.body.dataset.theme = selectedTheme;
  updateThemeToggle(selectedTheme, language);
  localStorage.setItem(storageKeys.theme, selectedTheme);
}

const preferredLanguage = localStorage.getItem(storageKeys.language) || "es";
const preferredTheme = localStorage.getItem(storageKeys.theme) || "light";

applyLanguage(preferredLanguage);
applyTheme(preferredTheme);

languageSelect.addEventListener("change", (event) => {
  applyLanguage(event.target.value);
});

themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
});
