FROM node:lts-alpine
# make the 'app' folder the current working directory
ENV ROOT /var/www/ath-ex
RUN mkdir -p $ROOT
WORKDIR $ROOT

COPY . .
RUN npm install

ARG TO
ENV TO=$TO

EXPOSE 3000
CMD [ "node", "app.js" ]
