# FROM node:alpine

# WORKDIR /home/trydev_api

# COPY package.json .
# COPY yarn.lock .

# RUN yarn install

# COPY . .

# CMD yarn dev

FROM node:alpine

WORKDIR /home/trydev_api

COPY package.json .
COPY yarn.lock .
COPY dist .
RUN yarn install
CMD yarn start
