FROM node:14-alpine AS appbuild

WORKDIR /home/trydev_api
COPY . .
RUN yarn build
RUN yarn install

FROM node:14-alpine

WORKDIR /home/trydev_api

COPY --from=appbuild /home/trydev_api/yarn.lock ./yarn.lock
COPY --from=appbuild /home/trydev_api/package.json ./package.json
COPY --from=appbuild /home/trydev_api/.env ./env
COPY --from=appbuild /home/trydev_api/ormconfig.js ./ormconfig.js
COPY --from=appbuild /home/trydev_api/queue-config.js ./queue-config.js 
COPY --from=appbuild /home/trydev_api/dist ./dist

CMD yarn start