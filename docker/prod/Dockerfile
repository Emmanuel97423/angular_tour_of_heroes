<<<<<<< HEAD
# Stage 1 install angular app
FROM node:18-alpine AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build


#stage 2 launch on nginx
FROM nginx:alpine
COPY --from=build /app/dist/angular-tour-of-heroes/ /usr/share/nginx/html
EXPOSE 80
=======
# Stage 1: build angular dev
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
RUN npm install -g @angular/cli
COPY . .
EXPOSE 4200
CMD [ "ng", "serve", "--host", "0.0.0.0"]

>>>>>>> develop

