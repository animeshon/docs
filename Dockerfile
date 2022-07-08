################################################################################
# Install Yarn dependencies only.
################################################################################
FROM node:17-alpine AS dependencies

WORKDIR /workspace

COPY package.json package.json
COPY yarn.lock yarn.lock

COPY content/build/package.json content/build/package.json

COPY content/libraries/package.json content/libraries/package.json
COPY content/libraries/go/documentation/package.json content/libraries/go/documentation/package.json

COPY content/products/package.json content/products/package.json
COPY content/products/image/documentation/package.json content/products/image/documentation/package.json

COPY content/tutorials/package.json content/tutorials/package.json

COPY .yarn .yarn
COPY .yarnrc.yml .yarnrc.yml

RUN yarn install

################################################################################
# Build the whole project as static HTML files.
################################################################################
FROM node:17-alpine as builder

WORKDIR /workspace

RUN apk add --no-cache git

COPY . .
COPY --from=dependencies /workspace .

ENV LIBRARIES go/documentation
ENV PRODUCTS image/documentation

RUN yarn build

################################################################################
# Prepare NGINX to serve the static website.
################################################################################
FROM nginx:alpine

ENV PORT 8080
ENV HOST 0.0.0.0

COPY --from=builder /workspace/build /usr/share/nginx/html

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

CMD [ "nginx", "-g", "daemon off;" ]
