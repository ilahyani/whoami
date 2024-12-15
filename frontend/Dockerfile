FROM node:20

WORKDIR /app

COPY . .

RUN apt-get update && apt-get upgrade -y

RUN npm install -g npm@latest

RUN npm install -f

CMD ["npm", "run", "dev"]