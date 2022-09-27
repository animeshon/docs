---
title: GraphQL
description: TODO
---

This page is work in progress.

## Endpoint

There is a single unified endpoint for Animeshon GraphQL queries and mutations: `https://animeshon.com/graphql`.

## Services

All services available in Animeshon are stitched together through a gateway. The gateway acts as a unified graph for all underlying services exposed by Animeshon.

## Definitions

GraphQL definitions are automatically generated from protobuf service definitions and can be found in the [Animeshon GraphQL Schema](https://github.com/animeapis/graphql-schema) repository. The generated definitions are subsequently stitched inside the gateway.

## Rate Limiting and Quotas

Rate limiting and quotas are applied as if stitched requests were performed directly against the service responsible for it.

_Example: Requesting 10 images through GraphQL is equivalent to sending 10 separate requests to the Image API and will be throttled accordingly once the limit is reached._

Please read the [Rate-Limiting](/policies/rate-limiting) and [Quotas](/policies/quotas) documentation for more information.
