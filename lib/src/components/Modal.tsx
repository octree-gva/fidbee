import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { useTranslation } from "react-i18next";
import Form from "./Form";
import useFormStore from "../stores/formStore";

interface Props {
  open: boolean;
  onClose: () => void;
  onSend: () => void;
  startCapture: () => void;
}

const FidbeeModal = (props: Props) => {
  const { t } = useTranslation();
  const resetForm = useFormStore(s => s.reset);

  const onCancel = () => {
    props.onClose();
    resetForm();
  };

  return (
    <Dialog open={props.open} onClose={props.onClose} fullWidth maxWidth="xs">
      <DialogTitle>{t`modal.title`}</DialogTitle>
      <DialogContent>
        <Form startCapture={props.startCapture} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>{t`modal.cancel`}</Button>
        <Button
          variant="contained"
          onClick={props.onSend}
        >{t`modal.send`}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default FidbeeModal;
