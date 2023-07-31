This is a server example for webhook consumption using [Deno](https://deno.land/).

## Configure

You need to provider SMTP credentials throught environment variables
in order to send email notifications on new messages.

```bash
cp .env.example .env
vi .env # Or your favorite editor
```

## Run

Then, use Deno and appropriate permissions to start server.

```bash
deno run --allow-net --allow-read --allow-env server.ts
```

Server now runs on http://localhost:8080.
