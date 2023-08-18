import React from "react";
interface Props {
    open: boolean;
    onClose: () => void;
    onSend: () => void;
    startCapture: () => void;
}
declare const FidbeeModal: (props: Props) => React.JSX.Element;
export default FidbeeModal;
