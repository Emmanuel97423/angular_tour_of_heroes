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

