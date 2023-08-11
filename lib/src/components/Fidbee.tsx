import { ScreenCapture } from "react-screen-capture";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { useEffect, useReducer, useState } from "react";
import { useTranslation } from "react-i18next";
import FidbeeModal from "./Modal";
import useFormStore from "../stores/formStore";
import { sendWebhook } from "../lib/sendWebhook";
import html2canvas from "html2canvas";

interface Props {
  projectName: string;
  webhookUrl: string;
  userEmail?: string;
  allowAnonymous?: boolean;
}

const Fidbee = (props: Props) => {
  const { projectName, webhookUrl, userEmail, allowAnonymous } = props;
  const { t } = useTranslation();
  const [modalIsOpen, toggleModal] = useReducer(i => !i, false);
  const [isCapturing, setIsCapturing] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const setForm = useFormStore(s => s.set);

  useEffect(() => {
    setForm({ email: userEmail, allowAnonymous });
  }, [userEmail, allowAnonymous, setForm]);

  const onClickCapture = (desktopCallback: () => void) => {
    const isTouchDevice = "ontouchstart" in document.documentElement;
    setIsCapturing(true);

    if (isTouchDevice) {
      setTimeout(async () => {
        const canvas = await html2canvas(document.body);
        const base64image = canvas.toDataURL("image/png");
        setForm({ screenCapture: base64image });
        setIsCapturing(false);
      }, 500);
    } else desktopCallback();
  };

  const onEndCapture = (url: string) => {
    setForm({ screenCapture: url });
    setIsCapturing(false);
    return null;
  };

  const handleSend = async () => {
    try {
      await sendWebhook({ projectName, webhookUrl });
      toggleModal();
      setShowConfirmation(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* @ts-ignore */}
      <ScreenCapture onEndCapture={onEndCapture}>
        {({ onStartCapture }: { onStartCapture: () => void }) => (
          <>
            <Button
              size="small"
              variant="contained"
              color="inherit"
              onClick={toggleModal}
              sx={{
                position: "fixed",
                right: 0,
                bottom: 128,
                transform: "rotate(-90deg) translateX(100%) translateY(0px)",
                transformOrigin: "100% 100% 0px",
              }}
            >{t`button`}</Button>
            <FidbeeModal
              open={modalIsOpen && !isCapturing}
              onClose={toggleModal}
              onSend={handleSend}
              startCapture={() => onClickCapture(onStartCapture)}
            />
          </>
        )}
      </ScreenCapture>
      <Snackbar
        open={showConfirmation}
        autoHideDuration={6000}
        onClose={() => setShowConfirmation(false)}
        message={t`sent.confirmation`}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      />
    </>
  );
};

export default Fidbee;
