import i18n from "i18next";
import { initReactI18next } from "react-i18next";
//import languageDetector from "i18next-browser-languagedetector";

import translationEN from "./local/en.json";
import translationar from "./local/ar.json";

const resources = {
  en: {
    translation:  translationEN
    
    
  },
  ar: {
    translation: translationar
      
   
  }
};

i18n
//.use(languageDetector)
  .use(initReactI18next) 
  .init({
    resources,
    lng: "ar", 
    interpolation: {
      escapeValue: false 
    },
    react: {
        useSuspense:false
    }
  });

  export default i18n;