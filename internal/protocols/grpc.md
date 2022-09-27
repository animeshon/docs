---
title: gRPC
description: TODO
---

This page is work in progress.

## Endpoints

Each service exposed by Animeshon has a public endpoint described in both its protobuf definitions and its gRPC documentation. The endpoint is the same as the endpoint used for REST communication.

All endpoints support only connections over TLS through HTTP/2 or HTTP/3. If connections over HTTP/1.0 or HTTP/1.1 are needed please use the [REST Clients](/protocols/rest) instead.

## Client Libraries

Animeshon provides official gRPC client libraries for each public service in several programming languages.

Please read the [Supported Client Libraries](/libraries/welcome) documentation for more information.

## Definitions

The protobuf services definitions can be found in the [Animeshon APIs](https://github.com/animeapis/animeapis) repository.

## Known Issues

This paragraph lists known issues for gRPC endpoints.

### gRPC streaming terminated by RST_STREAM

If encounter the following error while communicating with Animeshon APIs through a gRPC stream please know that this is a known limitation.

```
stream terminated by RST_STREAM with error code: INTERNAL_ERROR
```

gRPC streaming is limited to **60 seconds** due to internal limitations of _Google Cloud Load Balancer_ and _Google Ingress GCE_. Only internal services deployed in the Animeshon cloud infrastructure can bypass this limitation via internal network communication.