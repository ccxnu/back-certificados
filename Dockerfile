 FROM ghcr.io/puppeteer/puppeteer22.8.1

 ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
     PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci
COPY . .
CMD ["node", "server.js"]