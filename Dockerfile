FROM node:14.15 as builder
WORKDIR /ui
COPY package*.json /ui/
RUN npm install
RUN  npm install -g @angular/cli@14.0.0
COPY ./ /ui/
RUN npm run build --prod

FROM nginx:alpine
COPY --from=builder /ui/dist/645-assn3-ui /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf


