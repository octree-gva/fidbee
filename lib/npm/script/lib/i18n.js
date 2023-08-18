"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const i18next_1 = __importDefault(require("i18next"));
const react_i18next_1 = require("react-i18next");
const i18next_browser_languagedetector_1 = __importDefault(require("i18next-browser-languagedetector"));
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
i18next_1.default
    .use(i18next_browser_languagedetector_1.default)
    .use(react_i18next_1.initReactI18next)
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
exports.default = i18next_1.default;
