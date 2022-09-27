---
title: REST
description: TODO
---

This page is work in progress.


## Endpoints

Each service exposed by Animeshon has a public endpoint described in both its protobuf definitions and its gRPC documentation. The endpoint is the same as the endpoint used for gRPC communication.

All endpoints support only connections over TLS through HTTP/1.0, HTTP/1.1, HTTP/2, or HTTP/3.

## Transcoding

All requests delivered to gRPC endpoints with a JSON payload will automatically be transcoded to gRPC requests internally.

## Client Libraries

Animeshon provides official gRPC client libraries for each public service in several programming languages.

Please read the [Supported Client Libraries](/libraries/welcome) documentation for more information.

## Definitions

The REST services definitions can be found in the [Animeshon APIs](https://github.com/animeapis/animeapis) and [OpenAPI specification for Animeshon APIs](https://github.com/animeapis/openapi-specification) repositories.

## Known Issues

This paragraph lists known issues for REST endpoints.

### gRPC streaming is only partially supported

All gRPC streaming requests must be delivered as an array of messages and all responses will be provided as an array of messages only when all operations have been completed. This is a known limitation of the REST protocol which has no support for data streaming.