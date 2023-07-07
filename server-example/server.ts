import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import sendEmail from "./src/sendEmail.ts";

const PORT = 4000;
const app = new Application();

app.use((ctx, next) => {
  ctx.response.headers.set("Access-Control-Allow-Origin", "*");
  ctx.response.headers.set(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  return next();
});

app.addEventListener("listen", ({ port }) => {
  console.log(`🚀 Running on ${port}`);
});

const router = new Router();

router.post("/", async ctx => {
  const body = await ctx.request.body({ type: "json" });
  const payload: FeedbackPayload = await body.value;
  const hasScreenCapture = !!payload.screenCapture;
  // const userAgent = ctx.request.headers.get("user-agent");
  console.log(
    `✉️  New message received from ${payload.email}: ${payload.comment} ${
      hasScreenCapture ? "(with screen capture)" : ""
    }`
  );
  sendEmail(payload);
  ctx.response.body = "OK!";
});

app.use(router.routes());
app.use(router.allowedMethods());
await app.listen({ port: PORT });
