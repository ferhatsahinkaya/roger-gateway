FROM node:12

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Add docker-compose-wait tool -------------------
ENV WAIT_VERSION 2.7.2
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait
RUN chmod +x /wait

CMD ["node", "server.js"]