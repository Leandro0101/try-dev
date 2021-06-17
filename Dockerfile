FROM node:14

WORKDIR /home/trydev_api

COPY package.json .
COPY yarn.lock .
COPY dist .

RUN yarn install --prod

CMD yarn start
