---
id: quickstarts
title: Quickstarts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


GraphQL is planned to be the only API Gateway available to developers for accessing Animeshon functionalities.
This section will cover the setup, basic use and best practices of the **Animeshon GraphQL APIs**.

## Introduction
The GraphQL APIs of Animeshon are exposed through a gateway which forwards all the queries to the right services.

The client will always have to contact the same endpoint in order to perform any kind of operation, reducing the complexity of applications and services which are integrating with the Animeshon Ecosystem.

:::warning

Right now the Gateway acts as a dispatcher, which means that the answers from different services have to be manually handled to continue the resolution of the resources in other services.

Example:
While searching a content using [Oracolo](/docs/oracolo/introduction) Full-Text Search query `querySearch`, the client has to manually process the response and query [Detabesu](/docs/detabesu/introduction) to fetch more useful information about the search results.

As stated in the [Roadmap](/docs/graphql/roadmap), the gateway will become a federated schema, therefore hiding this extra step from the client and allowing it to build complete queries in a single request.

::: 

### Recommended reading
1. If you are not familiar with GraphQL we suggest you to read the [How To GraphQL](https://www.howtographql.com/) to get a better insight of the technology.
2. As a big portion of our infrastructure is built on top of [Dgraph](https://dgraph.io/), we suggest you to read their [documentation](https://dgraph.io/docs/graphql/) as well in order to learn about their definitions, directives, and best practices more in details.

### Schema documentation
The schema is self-documented and the documentation is available through any GraphQL client that support introspection and generated documentation:

* [Animeshon Playground](https://play.animeshon.com/)
* [Insomnia](https://insomnia.rest/)
* [Postman](https://www.postman.com/)

We also provide a [standalone documentation](/docs/schema/schema).

:::caution

The standalone documentation might be removed in the future, not being essential and sometimes even confusing.

::: 

------

## Test on Playground
The easiest way to get familiar with our GraphQL APIs is to visit our [GraphQL Playground](https://play.animeshon.com/) and play with GraphQL queries from there.

## Get Started
It's possible to connect to the GraphQL endpoint `https://api.animeshon.com/graphql` using whatever GraphQL client you are familiar with. 

### HTTP Rerquest
GraphQL queries are simple POST requests to an endpoint and it is therefore possible to send queries and fetch data even without a client by sending plain HTTP request:

```js
curl \
-X POST \
-H "Content-Type: application/json" \
--data '{ "query": "{ getAnime(id: "some_ids") { ... your fields } }" }' \
https://api.animeshon.com/graphql
```

### Using a client
There are planty of clients available in the GraphQL ecosystem, each programming language has its own implementation and therefore it is impossible to cover them all.

The good news is that regardless of your thecnological stack, the process is always the same: get the client, provide `https://api.animeshon.com/graphql` as the endpoint, and start querying.


Example list of clients:

* [Apollo Client](https://www.apollographql.com/docs/react/get-started/) (JS, React)


:::warning

The list is not a recommendation, just a showcase of existing clients. The list might be modified in the future.
GraphQL clients not available in the list are potentially **fully compatible** with Animeshon!

:::

:::caution

As soon as the [Authentication and Authorization](/docs/oauth2/introduction) infratructure is ready, it might become mondatory to provide a JWT token or other identification tokens to be allowed to connect to the endpoint.

:::


## Query response
After sending a query, the endpoint answers with a data structure which match the provided query structure.
Is the responsability of the consumer client to deserialize the response into a meaningful structure.


```graphql title="Query"
query {
  queryAnime(first:1) {
    names {
      text
    }
  	descriptions {
      text
    }
  }
}

```

```graphql title="Response"
{
  "data": {
    "queryAnime": [
      {
        "names": [
          {
            "text": "Fuusen no Doratarou"
          },
          {
            "text": "フーセンのドラ太郎"
          },
          {
            "text": "Fuusen no Doratarou"
          }
        ],
        "descriptions": [
          {
            "text": "After many years of wandering, Tarou returns to Cat Island to meet his sister, Sakura, who has stayed with their adoptive parents. Though his family is pleased to see him, they all come to realise that the long separation has seen them grow into different people.\n\nSource: The Anime Encyclopedia"
          }
        ]
      }
    ]
  }
}
```

At this point the client has to deserialize the response before consuming the output:


<Tabs
  defaultValue="js"
  values={[
    { label: 'JavaScript + Apollo', value: 'js', },
  ]
}>
<TabItem value="js">

```js title="Example"
import { gql } from '@apollo/client';

// const client = ...

const data = client
  .query({
    query: gql`
      query SomeFancyName {
        queryAnime(first:1) {
            names {
                text
        }
        descriptions {
                text
            }
        }
    }
    `
  })
  // apollo returns a structure result.<INNER_QUERY_NAME>(in this case queryAnime).data.[...]
  .then(result => return result.queryAnime.data);

   // decompose the variable
   const {names: {text}, descriptions: {text}} = result;
   // ... do things ...

```

</TabItem>
</Tabs>

:::info

An SDK for different languages will be automatically generated in the future, for the moment you will need to implement the types required by your application or service.

:::