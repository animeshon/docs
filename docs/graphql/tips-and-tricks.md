---
id: tips-and-tricks
title: Tips and Tricks
---

## @cascade directive for smart filters
The `@cascade` directive is a built-in directive of [Dgraph](https://dgraph.io/) ([Link to Doc](https://dgraph.io/docs/graphql/queries/cascade)).
It allows to prune all results which do not satisfy some costraints.

It's very usefull to solve the "problem" described in the [Detabesu Quickstarts](/docs/detabesu/quickstarts#local-scope-lookup).

Quick summary:
It's possible to filter only once we reach the node containing the field we want to filter. 

:::warning

The following example shows a basic example of how the @cascade directive could be used.

:::

`Lets suppose that you want to retreive all FEMALE characters for a given anime.` 

```graphql title="Query"
{
    getAnime(id: SOME_ANIME_ID) {
        starring {
            character (filter: {gender: {eq: "FEMALE"}}){
                name
                gender
                ... other required fields ...
            }
        }
    }
}
```

```graphql title="Response" {19-21}
{
   "data":{
      "getAnime":[
         {
            "starring":[
               {
                  "character":{
                     "name":"Sakura",
                     "gender":"FEMALE"
                  }
               },
               {
                  "character":{
                     "name":"Miko",
                     "gender":"FEMALE"
                  }
               },
               {
                  "character":{
                     
                  }
               }
            ]
         }
      ]
   }
}
```

As shown by the highlighted block in the previous result, the result contains empty characters, which represent MALE characters. In order to avoid such a behaviour it is possible to use the `@cascade` directive to prune the undesired empty results:

```graphql title="Query with cascade"
{
    getAnime(id: SOME_ANIME_ID) {
        starring @cascade(fields: ["character"]){
            character (filter: {gender: {eq: "FEMALE"}}) @cascade(fields: ["name"]){
                name
                gender
                ... whatever field i need
            }
        }
    }
}
```

```graphql title="Response"
{
   "data":{
      "getAnime":[
         {
            "starring":[
               {
                  "character":{
                     "name":"Sakura",
                     "gender":"FEMALE"
                  }
               },
               {
                  "character":{
                     "name":"Miko",
                     "gender":"FEMALE"
                  }
               }
            ]
         }
      ]
   }
}
```

The second `cascade` tells the server to discard and remove `character` which do not have the field `name` (because of the filter we apply, we already know that all **MALE** characters are returned withouth a name)

The first `cascade` tells the server to prune all results `starring` which do not have the field `character` (and because of the first `cascade` filter we applied, all `starring` containing **MALE** characters won't have the `character` field).

