import React from "react";
interface Props {
    projectName: string;
    webhookUrl: string;
    userEmail?: string;
    allowAnonymous?: boolean;
}
declare const Fidbee: (props: Props) => React.JSX.Element;
export default Fidbee;
