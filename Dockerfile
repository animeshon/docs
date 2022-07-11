################################################################################
# Install Yarn dependencies only.
################################################################################
FROM node:17-alpine AS dependencies

WORKDIR /workspace

# Root
COPY package.json package.json
COPY yarn.lock yarn.lock

# Build
COPY content/build/package.json content/build/package.json

# Libraries
COPY content/libraries/package.json content/libraries/package.json

COPY content/libraries/go/documentation/package.json content/libraries/go/documentation/package.json

# Products
COPY content/products/package.json content/products/package.json

COPY content/products/bridge/documentation/package.json content/products/bridge/documentation/package.json
COPY content/products/credentials/documentation/package.json content/products/credentials/documentation/package.json
COPY content/products/crossrefs/documentation/package.json content/products/crossrefs/documentation/package.json
COPY content/products/iam/documentation/package.json content/products/iam/documentation/package.json
COPY content/products/identity/documentation/package.json content/products/identity/documentation/package.json
COPY content/products/image/documentation/package.json content/products/image/documentation/package.json
COPY content/products/knowledge/documentation/package.json content/products/knowledge/documentation/package.json
COPY content/products/library/documentation/package.json content/products/library/documentation/package.json
COPY content/products/multimedia/documentation/package.json content/products/multimedia/documentation/package.json
COPY content/products/payment/documentation/package.json content/products/payment/documentation/package.json
COPY content/products/product/documentation/package.json content/products/product/documentation/package.json
COPY content/products/release/documentation/package.json content/products/release/documentation/package.json
COPY content/products/resourcemanager/documentation/package.json content/products/resourcemanager/documentation/package.json
COPY content/products/tracker/documentation/package.json content/products/tracker/documentation/package.json
COPY content/products/vision/documentation/package.json content/products/vision/documentation/package.json
COPY content/products/webcache/documentation/package.json content/products/webcache/documentation/package.json
COPY content/products/webpage/documentation/package.json content/products/webpage/documentation/package.json
COPY content/products/websearch/documentation/package.json content/products/websearch/documentation/package.json

# Tutorials
COPY content/tutorials/package.json content/tutorials/package.json

# Yarn
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
ENV PRODUCTS bridge/documentation,credentials/documentation,crossrefs/documentation,iam/documentation,identity/documentation,image/documentation,knowledge/documentation,library/documentation,multimedia/documentation,payment/documentation,product/documentation,release/documentation,resourcemanager/documentation,tracker/documentation,vision/documentation,webcache/documentation,webpage/documentation,websearch/documentation

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
