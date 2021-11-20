FROM node:14 AS Production

ENV  DB_USER="test" DB_PWD="12345" DB_NAME="sample_todolist" JWT_SIGN="save" SOCKET_ORIGIN="http://5.181.217.243/:3000" PORT=5000

WORKDIR /usr/src/api

COPY package.json . 
COPY package-lock.json .

RUN npm install

COPY . . 

RUN npm run build

CMD ["sh", "-c","npm run start"]
