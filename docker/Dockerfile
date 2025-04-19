FROM node:23-alpine:23 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli@latest

COPY . .-Si

RUN ng cache clean
RUN npm run build

FROM nginx:1.25

COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build app/dist/my-portfolio-v2/browser /usr/share/nginx/html/my-portfolio-v2

EXPOSE 80