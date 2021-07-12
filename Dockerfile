FROM node:12-alpine as build
WORKDIR /app

COPY ./player-archive /app

RUN yarn
RUN yarn run build

# # stage 2
FROM node:12-alpine
WORKDIR /express-server
COPY ./express-server /express-server
COPY --from=build /app/build /express-server/dist/web-app

RUN yarn
RUN yarn run build

EXPOSE 80

CMD ["node","./dist/server.js"]