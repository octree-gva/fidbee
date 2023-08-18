import React from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import useFormStore from "../stores/formStore.js";

type Props = {
  startCapture: () => void;
};

const Form = (props: Props) => {
  const { t } = useTranslation();

  const comment = useFormStore(s => s.comment);
  const email = useFormStore(s => s.email);
  const screenCapture = useFormStore(s => s.screenCapture);
  const errors = useFormStore(s => s.errors);
  const set = useFormStore(s => s.set);

  return (
    <>
      <Stack spacing={2} py={1}>
        <TextField
          fullWidth
          label={t`form.comment`}
          value={comment}
          onChange={event => set({ comment: event.target.value })}
          multiline
          rows={4}
          error={errors.includes("noComment")}
        />
        <TextField
          fullWidth
          label={t`form.email`}
          value={email}
          onChange={event => set({ email: event.target.value })}
          error={errors.includes("noEmail") || errors.includes("badEmail")}
        />
        {!screenCapture && (
          <Button variant="outlined" onClick={props.startCapture}>
            {t`form.capture`}
          </Button>
        )}
        {screenCapture && (
          <Box border="1px solid #fafafa" width="auto" height="10rem">
            <img
              src={screenCapture}
              alt="Screen capture"
              width="100%"
              height="100%"
              style={{ objectFit: "cover" }}
            />
          </Box>
        )}
      </Stack>
      {errors.map(error => (
        <Typography color="error" key={error} variant="body2">
          {t(`error.${error}`)}
        </Typography>
      ))}
    </>
  );
};

export default Form;
