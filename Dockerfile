FROM node:14.19.0 as builder
ARG NODE_ENV
WORKDIR /app/builder
COPY . .
RUN npm i
