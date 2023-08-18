import React from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import useFormStore from "../stores/formStore.js";
const Form = (props) => {
    const { t } = useTranslation();
    const comment = useFormStore(s => s.comment);
    const email = useFormStore(s => s.email);
    const screenCapture = useFormStore(s => s.screenCapture);
    const errors = useFormStore(s => s.errors);
    const set = useFormStore(s => s.set);
    return (React.createElement(React.Fragment, null,
        React.createElement(Stack, { spacing: 2, py: 1 },
            React.createElement(TextField, { fullWidth: true, label: t `form.comment`, value: comment, onChange: event => set({ comment: event.target.value }), multiline: true, rows: 4, error: errors.includes("noComment") }),
            React.createElement(TextField, { fullWidth: true, label: t `form.email`, value: email, onChange: event => set({ email: event.target.value }), error: errors.includes("noEmail") || errors.includes("badEmail") }),
            !screenCapture && (React.createElement(Button, { variant: "outlined", onClick: props.startCapture }, t `form.capture`)),
            screenCapture && (React.createElement(Box, { border: "1px solid #fafafa", width: "auto", height: "10rem" },
                React.createElement("img", { src: screenCapture, alt: "Screen capture", width: "100%", height: "100%", style: { objectFit: "cover" } })))),
        errors.map(error => (React.createElement(Typography, { color: "error", key: error, variant: "body2" }, t(`error.${error}`))))));
};
export default Form;
