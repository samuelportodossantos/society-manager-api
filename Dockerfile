FROM node:16.16.0-alpine3.16
WORKDIR /usr/app
COPY package.json ./
COPY . .
RUN npm i
CMD [ "npm", "run", "dev" ]