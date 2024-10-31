FROM node:alpine

WORKDIR /angular-app

COPY . /angular-app

RUN npm install -g @angular/cli

RUN npm install

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]
