FROM node:12-alpine

WORKDIR /dittybox/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8398

CMD [ "node", "dist/main" ]
