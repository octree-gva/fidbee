import formStore from "../stores/formStore";

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

interface Options {
  projectName: string;
  webhookUrl: string;
}

export const sendWebhook = async (options: Options) => {
  const { projectName, webhookUrl } = options;
  const errors: string[] = [];
  formStore.setState({ errors: [] });
  const { comment, email, screenCapture } = formStore.getState();
  const url = window.location.href;
  const datetime = new Date().toISOString();

  if (!comment) errors.push("noComment");
  if (!email) errors.push("noEmail");
  else if (!EMAIL_REGEX.test(email)) errors.push("badEmail");

  if (errors.length > 0) {
    formStore.setState({ errors });
    throw new Error("Form error(s)");
  }

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment,
        email,
        screenCapture,
        url,
        projectName,
        datetime,
      }),
    });

    formStore.getState().reset();
  } catch (error) {
    console.error(error);
    formStore.setState({ errors: ["webhookFetch"] });
    throw error;
  }
};
