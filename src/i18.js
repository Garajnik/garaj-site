// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Ресурсы с переводами
const resources = {
  en: {
    translation: {
      HelloThere: "Hello there!",
      welcomeScreen:
        "Right now this page is blank, I'll fill it in later. You can see what you want via the buttons at the top 👆.",
      resume: "Resume",
      portfolio: "Portfolio",
    },
  },
  ru: {
    translation: {
      HelloThere: "Добро пожаловать!",
      welcomeScreen:
        "Сейчас эта страничка пустая, я заполню её позже. Вы можете посмотреть, что хотите через кнопки сверху 👆.",
      resume: "Резюме",
      portfolio: "Портфолио",
    },
  },
};

// Инициализация i18next
i18n
  .use(LanguageDetector) // Автоматическое определение языка
  .use(initReactI18next) // Интеграция с React
  .init({
    resources, // Ресурсы с переводами
    fallbackLng: "en", // Язык по умолчанию, если определение не сработает
    interpolation: {
      escapeValue: false, // Отключаем экранирование, так как React уже безопасно обрабатывает строки
    },
  });

export default i18n;
