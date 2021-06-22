FROM node:14-alpine AS appbuild

WORKDIR /home/trydev_api
COPY package.json ./
COPY yarn.lock ./
COPY ormconfig.js ./
COPY .env ./
RUN yarn install
COPY ./dist ./dist

FROM node:14-alpine

WORKDIR /home/trydev_api
COPY --from=appbuild /home/trydev_api/ .
CMD yarn start