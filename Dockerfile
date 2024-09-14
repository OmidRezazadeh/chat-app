FROM node:20-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./  

RUN npm install

COPY . .

CMD ["npx", "nodemon", "app.js"]
