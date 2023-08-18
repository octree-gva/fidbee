"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const react_i18next_1 = require("react-i18next");
const formStore_js_1 = __importDefault(require("../stores/formStore.js"));
const Form = (props) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const comment = (0, formStore_js_1.default)(s => s.comment);
    const email = (0, formStore_js_1.default)(s => s.email);
    const screenCapture = (0, formStore_js_1.default)(s => s.screenCapture);
    const errors = (0, formStore_js_1.default)(s => s.errors);
    const set = (0, formStore_js_1.default)(s => s.set);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.Stack, { spacing: 2, py: 1 },
            react_1.default.createElement(material_1.TextField, { fullWidth: true, label: t `form.comment`, value: comment, onChange: event => set({ comment: event.target.value }), multiline: true, rows: 4, error: errors.includes("noComment") }),
            react_1.default.createElement(material_1.TextField, { fullWidth: true, label: t `form.email`, value: email, onChange: event => set({ email: event.target.value }), error: errors.includes("noEmail") || errors.includes("badEmail") }),
            !screenCapture && (react_1.default.createElement(material_1.Button, { variant: "outlined", onClick: props.startCapture }, t `form.capture`)),
            screenCapture && (react_1.default.createElement(material_1.Box, { border: "1px solid #fafafa", width: "auto", height: "10rem" },
                react_1.default.createElement("img", { src: screenCapture, alt: "Screen capture", width: "100%", height: "100%", style: { objectFit: "cover" } })))),
        errors.map(error => (react_1.default.createElement(material_1.Typography, { color: "error", key: error, variant: "body2" }, t(`error.${error}`))))));
};
exports.default = Form;
