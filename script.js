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
    featuredEyebrow: "DESCUBRE ESTOS AMBIENTES",
    featuredTitle: "Primeros paisajes del proyecto",
    featuredText:
      "Una muestra visual de los primeros sonidos del proyecto. Explora cada ambiente y continúa la experiencia en el canal.",
    featuredOceanTag: "Océano",
    featuredOceanTitle: "Océano y ballenas",
    featuredOceanText:
      "Calma profunda, oleaje amplio y un fondo marino que invita a bajar el ritmo.",
    featuredRainTag: "Lluvia",
    featuredRainTitle: "Lluvia y piano",
    featuredRainText:
      "Descanso suave, gotas regulares y una atmósfera tranquila para desacelerar.",
    featuredCafeTag: "Cafetería",
    featuredCafeTitle: "Café y música suave",
    featuredCafeText:
      "Concentración cálida, ritmo lento y el murmullo justo para mantenerse presente.",
    channelEyebrow: "Visita el canal",
    channelTitle: "Escucha más en YouTube",
    channelText:
      "Explora más sonidos relajantes, sesiones largas y nuevos ambientes para acompañar tus momentos de calma.",
    channelButton: "Ir al canal de YouTube",
    contactEyebrow: "CONTACTO",
    contactTitle: "Conecta conmigo",
    contactText:
      "Si tienes sugerencias, ideas para nuevos ambientes o quieres explorar más proyectos, no dudes en contactarme.",
    contactEmailButton: "Enviar email",
    contactGithubButton: "GitHub",
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
    featuredEyebrow: "DISCOVER THESE AMBIENCES",
    featuredTitle: "Early sounds from the project",
    featuredText:
      "A visual sample of the project's first soundscapes. Explore each ambience and continue the experience on the channel.",
    featuredOceanTag: "Ocean",
    featuredOceanTitle: "Ocean and whales",
    featuredOceanText:
      "Deep calm, open waves, and a marine backdrop that helps everything slow down.",
    featuredRainTag: "Rain",
    featuredRainTitle: "Rain and piano",
    featuredRainText:
      "Soft rest, steady drops, and a quiet atmosphere made for easing into stillness.",
    featuredCafeTag: "Cafe",
    featuredCafeTitle: "Cafe and soft music",
    featuredCafeText:
      "Warm focus, slow rhythm, and just enough ambient motion to stay present.",
    channelEyebrow: "Visit the channel",
    channelTitle: "Listen to more on YouTube",
    channelText:
      "Explore more relaxing sounds, long sessions, and new ambiences to support your calmer moments.",
    channelButton: "Go to the YouTube channel",
    contactEyebrow: "CONTACT",
    contactTitle: "Connect with me",
    contactText:
      "If you have suggestions, ideas for new ambiences, or want to explore more projects, feel free to get in touch.",
    contactEmailButton: "Send email",
    contactGithubButton: "GitHub",
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
