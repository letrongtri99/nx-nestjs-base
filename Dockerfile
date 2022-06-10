FROM node:14.19.0-alpine as builder
RUN apk add g++ make py3-pip
ARG NODE_ENV
WORKDIR /app
COPY . .
RUN npm i
