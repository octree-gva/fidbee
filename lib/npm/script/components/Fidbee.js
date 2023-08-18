"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_screen_capture_1 = require("react-screen-capture");
const material_1 = require("@mui/material");
const react_1 = __importStar(require("react"));
const react_i18next_1 = require("react-i18next");
const html2canvas_1 = __importDefault(require("html2canvas"));
const Modal_js_1 = __importDefault(require("./Modal.js"));
const formStore_js_1 = __importDefault(require("../stores/formStore.js"));
const sendWebhook_js_1 = require("../lib/sendWebhook.js");
const Fidbee = (props) => {
    const { projectName, webhookUrl, userEmail, allowAnonymous } = props;
    const { t } = (0, react_i18next_1.useTranslation)();
    const [modalIsOpen, toggleModal] = (0, react_1.useReducer)(i => !i, false);
    const [isCapturing, setIsCapturing] = (0, react_1.useState)(false);
    const [showConfirmation, setShowConfirmation] = (0, react_1.useState)(false);
    const setForm = (0, formStore_js_1.default)(s => s.set);
    (0, react_1.useEffect)(() => {
        setForm({ email: userEmail, allowAnonymous });
    }, [userEmail, allowAnonymous, setForm]);
    const onClickCapture = (desktopCallback) => {
        const isTouchDevice = "ontouchstart" in document.documentElement;
        setIsCapturing(true);
        if (isTouchDevice) {
            setTimeout(async () => {
                const canvas = await (0, html2canvas_1.default)(document.body);
                const base64image = canvas.toDataURL("image/png");
                setForm({ screenCapture: base64image });
                setIsCapturing(false);
            }, 500);
        }
        else
            desktopCallback();
    };
    const onEndCapture = (url) => {
        setForm({ screenCapture: url });
        setIsCapturing(false);
        return null;
    };
    const handleSend = async () => {
        try {
            await (0, sendWebhook_js_1.sendWebhook)({ projectName, webhookUrl });
            toggleModal();
            setShowConfirmation(true);
        }
        catch (error) {
            console.error(error);
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_screen_capture_1.ScreenCapture, { onEndCapture: onEndCapture }, ({ onStartCapture }) => (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(material_1.Button, { size: "small", variant: "contained", color: "inherit", onClick: toggleModal, sx: {
                    position: "fixed",
                    right: 0,
                    bottom: 128,
                    transform: "rotate(-90deg) translateX(100%) translateY(0px)",
                    transformOrigin: "100% 100% 0px",
                } }, t `button`),
            react_1.default.createElement(Modal_js_1.default, { open: modalIsOpen && !isCapturing, onClose: toggleModal, onSend: handleSend, startCapture: () => onClickCapture(onStartCapture) })))),
        react_1.default.createElement(material_1.Snackbar, { open: showConfirmation, autoHideDuration: 6000, onClose: () => setShowConfirmation(false), message: t `sent.confirmation`, anchorOrigin: { horizontal: "right", vertical: "bottom" } })));
};
exports.default = Fidbee;
