FROM node:gallium-bullseye-slim

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

COPY src/ ./src/

RUN pnpm i --frozen-lockfile --dev

RUN pnpm sass:build

RUN rm -rf ./node_modules/

RUN pnpm i --frozen-lockfile --prod

EXPOSE 8080

CMD [ "pnpm", "docker" ]
