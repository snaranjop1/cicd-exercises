FROM node:lts-alpine3.14

WORKDIR /students-app

COPY app/ .

RUN npm install

ENV PORT=8000

ENTRYPOINT [ "npm", "start"]