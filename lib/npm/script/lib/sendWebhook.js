"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendWebhook = void 0;
const formStore_js_1 = __importDefault(require("../stores/formStore.js"));
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const sendWebhook = async (options) => {
    const { projectName, webhookUrl } = options;
    const errors = [];
    formStore_js_1.default.setState({ errors: [] });
    const { comment, email, screenCapture, allowAnonymous } = formStore_js_1.default.getState();
    const url = globalThis.location.href;
    const datetime = new Date().toISOString();
    if (!comment)
        errors.push("noComment");
    if (!email && !allowAnonymous)
        errors.push("noEmail");
    else if (email && !EMAIL_REGEX.test(email))
        errors.push("badEmail");
    if (errors.length > 0) {
        formStore_js_1.default.setState({ errors });
        throw new Error("Form error(s)");
    }
    try {
        await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                comment,
                email,
                screenCapture,
                url,
                projectName,
                datetime,
            }),
        });
        formStore_js_1.default.getState().reset();
    }
    catch (error) {
        console.error(error);
        formStore_js_1.default.setState({ errors: ["webhookFetch"] });
        throw error;
    }
};
exports.sendWebhook = sendWebhook;
