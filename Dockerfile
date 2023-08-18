FROM denoland/deno:ubuntu-1.35.2 AS build

WORKDIR /app
COPY ./demo .
RUN apk add --no-cache yarn npm
WORKDIR /app/demo
RUN yarn
RUN yarn build

FROM denoland/deno:ubuntu-1.35.2

WORKDIR /app
COPY ./server-example .
COPY --from=build /app/dist ./assets

EXPOSE 8080

CMD deno run -A server.ts