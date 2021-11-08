import i18n from "i18next";
import LanguageDetectorModule from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from '../locales/en';
import ru from '../locales/ru';

i18n.use(LanguageDetectorModule).use(initReactI18next).init({
  fallbackLng: 'en',
  debug: true,
  resources: {
    en: {
      translation: en,
    },
    ru: {
      translation: ru
    }
  }
})

export default i18n