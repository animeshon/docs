FROM node:14-alpine AS dependencies

WORKDIR /build

COPY package*.json ./

RUN npm install

# ----------------------------------------------------------------
FROM node:14-alpine as builder

WORKDIR /build

COPY --from=dependencies /build /build
COPY . .

RUN npm run build

# ----------------------------------------------------------------
FROM nginx:alpine

ENV PORT 8080
ENV HOST 0.0.0.0

COPY --from=builder /build/build /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.template
COPY docker-entrypoint.sh /docker-entrypoint.sh

ENTRYPOINT [ "/docker-entrypoint.sh" ]
CMD [ "nginx", "-g", "daemon off;" ]