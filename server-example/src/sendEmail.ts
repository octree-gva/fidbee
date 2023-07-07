import { SMTPClient, SendConfig } from "https://deno.land/x/denomailer/mod.ts";
import { html } from "https://deno.land/x/html/mod.ts";
import "https://deno.land/std@0.193.0/dotenv/load.ts";

const emailTo =
  Deno.env.get("SMTP_RECEIVER") || Deno.env.get("SMTP_SENDER") || "";

export default (payload: FeedbackPayload) =>
  sendEmail({
    to: emailTo,
    subject: `New feedback by Fidbee for project ${payload.projectName}`,
    html: formatEmailContent(payload),
  });

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
      hostname: Deno.env.get("SMTP_HOST") || "",
      port: parseInt(Deno.env.get("SMTP_PORT") || "587"),
      tls: Deno.env.get("SMTP_TLS") === "true",
      auth: {
        username: Deno.env.get("SMTP_USERNAME") || "",
        password: Deno.env.get("SMTP_PASSWORD") || "",
      },
    },
  });

  try {
    console.log(`Send email notification to ${emailTo}`);
    const response = await client.send({
      ...config,
      from: Deno.env.get("SMTP_SENDER") || "sender@example.org",
    });

    await client.close();
    return response;
  } catch (error) {
    await client.close();
    console.error(error);
  }
};
