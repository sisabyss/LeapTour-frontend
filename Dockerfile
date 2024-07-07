# syntax = docker/dockerfile:experimental
FROM node:18 AS builder

WORKDIR /src
COPY ./ ./

RUN npm config set -g registry https://registry.npm.taobao.org

RUN npm install
RUN npm run build

FROM --platform=${BUILDPLATFORM:-linux/amd64,linux/arm64} ghcr.io/rookie-luochao/nginx-runner:latest

COPY --from=builder /src/dist /app
