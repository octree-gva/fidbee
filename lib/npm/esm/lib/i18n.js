import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
const resources = {
    en: {
        translation: {
            button: "Support",
            "modal.title": "Report a bug",
            "modal.cancel": "Cancel",
            "modal.send": "Submit",
            "form.comment": "Bug description",
            "form.email": "Contact email",
            "form.capture": "Take a screenshot",
            "sent.confirmation": "Thank you, your submission has been sent.",
            "error.noComment": "Please provide a description of the encountered bug.",
            "error.noEmail": "Please provide a contact email.",
            "error.badEmail": "Please check the email format.",
            "error.webhookFetch": "An error occurred while sending the message. If the issue persists, please contact us via email.",
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
            "sent.confirmation": "Merci, votre message a bien été envoyé.",
            "error.noComment": "Merci de décrire le bug rencontré",
            "error.noEmail": "Merci de fournir un email de contact",
            "error.badEmail": "Merci de vérifier l'email",
            "error.webhookFetch": "Une erreur est survenue lors de l'envoi du message. Si le problème persiste, merci de nous contacter par email.",
        },
    },
};
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
    resources,
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
    detection: {
        order: [
            "navigator",
            "querystring",
            "cookie",
            "localStorage",
            "sessionStorage",
            "htmlTag",
            "path",
            "subdomain",
        ],
    },
});
export default i18n;
