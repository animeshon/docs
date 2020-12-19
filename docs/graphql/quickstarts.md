---
id: quickstarts
title: Quickstarts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


GraphQL is planned to be the only and main Gateway to access Animeshon's functionalities.
This section will cover the setup, the usage and the best practice to connect and start benefit from **Animeshon GraphQL endpoints**.

## Introduction
Animeshon's GraphQL endpoint points to a gateway which forwards all the queries to the right services.
The clien will always contact the same endpoint to perform any kind of operation, reducing the complexity of applications which integrate our ecosystem.

:::warning

Right now the Gateway acts as a dispatcher, which means that different service's answer have to be manually handled to continue the resolution in other service.
EG:
When searching a content using [Oracolo](/docs/orcaolo/introduction)'s full-text search query `querySearch`, the client has to manually process the response and query [Detabesu](/docs/detabesu/introduction)'s queries to get the information.

Following the [Roadmap](/docs/graphql/roadmap) the gateway will become a federated schema, hiding this extra step from the client and allowing it to build complete queries.

::: 

### Recommended reading
1. If you are not familiar with GraphQL we suggest you to read the [How To GraphQL](https://www.howtographql.com/) to get a better insight of the technology.
2. Being a big portion of our infrastructure built on top of [Dgraph](https://dgraph.io/), we suggest you to read their [documentation](https://dgraph.io/docs/graphql/) to lear more in depth about their specifications, directives, and best practice.

### Schema documentation
The schema is self documented and the documentation is available through any *Playground* service or application:

* [Animeshon Playground](https://api.animeshon.com/graphql)
* [Insomnia](https://insomnia.rest/)
* [Postman](https://www.postman.com/)

We also provide a [standalone documentation](/docs/schema/schema).

:::caution

The standalone documentation might be removed at any time, not being essential and quite messy

::: 

------

## Test on Playground
The easiest way to get hands on our GraphQL interface and starting familiarize with them is to navigate to our [GraphQL Playground](https://api.animeshon.com/graphql) and get started building some queries.

## Get Started
It's possible to connect to the GraphQL endpoint `https://api.animeshon.com/graphql` using whatever GraphQL client you are familiar with. 

### HTTP Rerquest
GraphQL queries are simply POST request to the endpoint and is therefore possible to send query and get data even without a client by senting plain HTTP request:

```js
curl \
-X POST \
-H "Content-Type: application/json" \
--data '{ "query": "{ getAnime(id: "some_ids") { ... your fields } }" }' \
https://api.animeshon.com/graphql
```

### Using a client
There are planty of Clients available in the GraphQL ecosystem, each programming language has it's own implementation nad therefore is impossible to cover them all.
Regardless your thecnological stack, the process is always the same: get the client, provide `https://api.animeshon.com/graphql` as endpoint where to connect, start querying.


Example list of clients:

* [Apollo Client](https://www.apollographql.com/docs/react/get-started/) (JS, React)


:::warning

The list is not a recommendetion, just a showcase of existing clients. The list might be modified in the future.
Not listed client are **perfectly compatible**!

:::

:::caution

As soon as the [Authentication and Authorization](/docs/oauth2/introduction) infratructure is ready, it might become mondatory to provide a JWT token or other identification tokens to be allowed to connect to the endpoint.

:::


## Query response
When sending a query, the endpoint answer with a data structure which match the provided query structure.
Is then responsability of the consuming application deserialize the response in some meaningful structure.


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
At this point the integrating client has to deserialize the response before using it


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
  // apollo returns a structure result.INNER_QUERY_NAME(in this case queryAnime).data.[...]
  .then(result => return result.queryAnime.data);

   // decompose the variable
   const {names: {text}, descriptions: {text}} = result;
   // do things

```

</TabItem>
</Tabs>

:::info

SDKs will be soon available

:::