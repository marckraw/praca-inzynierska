# Dockerfile for BACKEND container
FROM node:latest

RUN mkdir -p /backend
WORKDIR /backend

ADD /backend /backend

VOLUME ["/backend"]

RUN ls -l

EXPOSE 8080
CMD npm install && npm run start:watch && npm run test
