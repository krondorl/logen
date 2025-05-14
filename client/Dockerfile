FROM node:24-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npx", "vite", "preview", "--host", "0.0.0.0", "--port", "4173"]