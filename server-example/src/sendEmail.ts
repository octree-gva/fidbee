import { SMTPClient, SendConfig } from "https://deno.land/x/denomailer/mod.ts";
import { html } from "https://deno.land/x/html/mod.ts";
import { load } from "https://deno.land/std@0.193.0/dotenv/mod.ts";

const envs = await load({ allowEmptyValues: true, examplePath: "" });

const emailTo = envs["SMTP_RECEIVER"] || envs["SMTP_SENDER"] || "";

export default (payload: FeedbackPayload) => {
  if (emailTo)
    sendEmail({
      to: emailTo,
      subject: `New feedback by Fidbee for project ${payload.projectName}`,
      html: formatEmailContent(payload),
    });
};

const formatEmailContent = (payload: FeedbackPayload) => html`<div>
  <p>You received a new feedback by Fidbee:</p>
  <div>
    <p><strong>Email: </strong>${payload.email}</p>
    <p><strong>Project: </strong>${payload.projectName}</p>
    <p><strong>URL: </strong>${payload.url}</p>
    <p><strong>Datetime: </strong>${payload.datetime}</p>
    <p><strong>Comment: </strong>${payload.comment}</p>
  </div>
  ${payload.screenCapture
    ? `<div>
    <img src="${payload.screenCapture}" alt="Screen capture" />
  </div>`
    : ""}
</div>`;

const sendEmail = async (config: Omit<SendConfig, "from">) => {
  const client = new SMTPClient({
    connection: {
      hostname: envs["SMTP_HOST"] || "",
      port: parseInt(envs["SMTP_PORT"] || "587"),
      tls: envs["SMTP_TLS"] === "true",
      auth: {
        username: envs["SMTP_USERNAME"] || "",
        password: envs["SMTP_PASSWORD"] || "",
      },
    },
  });

  try {
    console.log(`Send email notification to ${emailTo}`);
    const response = await client.send({
      ...config,
      from: envs["SMTP_SENDER"] || "sender@example.org",
    });

    await client.close();
    return response;
  } catch (error) {
    await client.close();
    console.error(error);
  }
};
