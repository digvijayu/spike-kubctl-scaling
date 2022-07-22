FROM node:16.15
RUN mkdir -p /app
WORKDIR /app
COPY . .

EXPOSE 3000

RUN npm install --production

CMD [ "npm", "start" ]
