"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const react_i18next_1 = require("react-i18next");
const Form_js_1 = __importDefault(require("./Form.js"));
const formStore_js_1 = __importDefault(require("../stores/formStore.js"));
const FidbeeModal = (props) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const resetForm = (0, formStore_js_1.default)(s => s.reset);
    const onCancel = () => {
        props.onClose();
        resetForm();
    };
    return (react_1.default.createElement(material_1.Dialog, { open: props.open, onClose: props.onClose, fullWidth: true, maxWidth: "xs" },
        react_1.default.createElement(material_1.DialogTitle, null, t `modal.title`),
        react_1.default.createElement(material_1.DialogContent, null,
            react_1.default.createElement(Form_js_1.default, { startCapture: props.startCapture })),
        react_1.default.createElement(material_1.DialogActions, null,
            react_1.default.createElement(material_1.Button, { onClick: onCancel }, t `modal.cancel`),
            react_1.default.createElement(material_1.Button, { variant: "contained", onClick: props.onSend }, t `modal.send`))));
};
exports.default = FidbeeModal;
