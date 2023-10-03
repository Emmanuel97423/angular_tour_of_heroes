# Stage 1: build angular dev
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
RUN npm install -g @angular/cli
COPY . .
EXPOSE 4200
CMD [ "ng", "serve", "--host", "0.0.0.0"]


