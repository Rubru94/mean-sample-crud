FROM node:16

WORKDIR /express-app

ADD . /express-app

RUN npm install && npm run build

EXPOSE 3000

CMD ["npm", "start"]