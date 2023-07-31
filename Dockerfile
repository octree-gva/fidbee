FROM node:alpine AS build

WORKDIR /app
COPY . .
RUN yarn
WORKDIR /app/lib
RUN yarn build
WORKDIR /app/demo
RUN yarn build

FROM denoland/deno:ubuntu-1.35.2

WORKDIR /app
COPY ./server-example .
COPY --from=build /app/demo/dist ./assets

EXPOSE 8080

CMD deno run -A server.ts