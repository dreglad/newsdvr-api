FROM node:11-slim

WORKDIR /usr/src/app

COPY src ./src
COPY package.json ./
COPY yarn.lock ./
RUN touch ./.env

RUN yarn install

EXPOSE 4000

CMD [ "yarn", "start" ]
