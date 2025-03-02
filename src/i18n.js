import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React",
      "Hello": "Hello",
      "Full Stack Developer in growth.": "Full Stack Developer in growth."
    }
  },
  es: {
    translation: {
      "Welcome to React": "Bienvenido a React",
      "Hello": "¡Hola!",
      "Full Stack Developer in growth.": "Desarrollador full stack en crecimiento."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Idioma predeterminado
    interpolation: {
      escapeValue: false // React ya protege contra XSS
    }
  });

export default i18n;
