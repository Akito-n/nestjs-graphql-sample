FROM node:14.5

RUN npm i -g @nestjs/cli
RUN npm install mysql --save

WORKDIR /app
COPY package*.json /app/

RUN yarn
CMD [ "npm", "run", "start:dev"]
