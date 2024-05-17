FROM ghcr.io/puppeteer/puppeteer22.8.1

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable
ENV DB_HOST=localhost
ENV DB_USER=root
ENV DB_PORT=3306
ENV DB_PASSWORD=root
ENV DB_NAME=certikke
ENV QR_URI=http://localhost:4000

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci
COPY . .
CMD ["node", "server.js"]
