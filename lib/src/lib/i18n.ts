import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      button: "Support",
    },
  },
  fr: {
    translation: {
      button: "Support",
      "modal.title": "Signaler un bug",
      "modal.cancel": "Annuler",
      "modal.send": "Soumettre",
      "form.comment": "Description du bug",
      "form.email": "Email de contact",
      "form.capture": "Prendre une capture d'écran",
      "error.noComment": "Merci de décrire le bug rencontré",
      "error.noEmail": "Merci de fournir un email de contact",
      "error.badEmail": "Merci de vérifier l'email",
      "error.webhookFetch":
        "Une erreur est survenue lors de l'envoi du message. Si le problème persiste, merci de nous contacter par email.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
