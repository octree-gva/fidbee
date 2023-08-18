import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, } from "@mui/material";
import { useTranslation } from "react-i18next";
import Form from "./Form.js";
import useFormStore from "../stores/formStore.js";
const FidbeeModal = (props) => {
    const { t } = useTranslation();
    const resetForm = useFormStore(s => s.reset);
    const onCancel = () => {
        props.onClose();
        resetForm();
    };
    return (React.createElement(Dialog, { open: props.open, onClose: props.onClose, fullWidth: true, maxWidth: "xs" },
        React.createElement(DialogTitle, null, t `modal.title`),
        React.createElement(DialogContent, null,
            React.createElement(Form, { startCapture: props.startCapture })),
        React.createElement(DialogActions, null,
            React.createElement(Button, { onClick: onCancel }, t `modal.cancel`),
            React.createElement(Button, { variant: "contained", onClick: props.onSend }, t `modal.send`))));
};
export default FidbeeModal;
