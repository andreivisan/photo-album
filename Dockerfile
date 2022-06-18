FROM node:17.7.2

WORKDIR /

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "server"]

