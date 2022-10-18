---
title: GraphQL
description: TODO
---

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools. [Source](https://graphql.org/)

## Clients

Any programming language capable of making a POST request supports GraphQL. There are also numerous client libraries to ease the task of manage requests and responses against a GraphQL endpoint.

To name some of the most common and popular:

- Javascript [Relay](https://relay.dev/)

- React [Apollo](https://github.com/SerialLain3170/AwesomeAnimeResearch)

- iOS [Apollo](https://www.apollographql.com/docs/ios)

- Kotlin [Apollo](https://www.apollographql.com/docs/kotlin)

- Multilanguage [graphql.org](https://graphql.org/code/)


## Endpoint

There is a single unified endpoint for Animeshon GraphQL queries and mutations: [https://animeshon.com/graphql](https://animeshon.com/graphql).

## Services

All services available in Animeshon are stitched together through a gateway. The gateway acts as a unified graph for all underlying services exposed by Animeshon.

## Definitions

GraphQL definitions are automatically generated from protobuf service definitions and can be found in the [Animeshon GraphQL Schema](https://github.com/animeapis/graphql-schema) repository. The generated definitions are subsequently stitched inside the gateway.

## Rate Limiting and Quotas

Rate limiting and quotas are applied as if stitched requests were performed directly against the service responsible for it.

_Example: Requesting 10 images through GraphQL is equivalent to sending 10 separate requests to the Image API and will be throttled accordingly once the limit is reached._

Please read the [Rate-Limiting](/policies/rate-limiting) and [Quotas](/policies/quotas) documentation for more information.
