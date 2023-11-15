import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem("language") || "ar",
    fallbackLng: "ar",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
