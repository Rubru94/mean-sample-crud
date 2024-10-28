FROM node:16

WORKDIR /express/

ADD . /express/

RUN npm install && npm run build

EXPOSE 3000

CMD ["npm", "start"]