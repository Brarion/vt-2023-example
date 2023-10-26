FROM node:14.18.2

WORKDIR /

COPY ["package.json", "tsconfig.json", ".env", "./"]

COPY . .

RUN yarn install

CMD yarn node ./dist/start