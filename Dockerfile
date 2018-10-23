FROM node:8.12-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json package.json

RUN yarn \
    && yarn cache clean

COPY . .

RUN yarn build \
    && yarn global add serve

EXPOSE 5000

CMD ["serve", "-s", "build"]