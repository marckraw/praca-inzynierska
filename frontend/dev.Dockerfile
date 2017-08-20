# Dockerfile for FRONTEND container
FROM node:latest

RUN mkdir -p /frontend
WORKDIR /frontend

ADD /frontend /frontend

VOLUME ["/frontend"]

RUN ls -l

EXPOSE 3000
EXPOSE 9876
CMD yarn && yarn start
