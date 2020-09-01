---
id: SearchResult
title: SearchResult
---

SearchResult represents the result of a search query.

### JSON representation

```json
{
    "crossreferences": {
        string : object (CrossReference)
    },
    "distance": float,
    "frameTimeMs": integer,
    "queryTimeMs": integer
}
```

### Fields

| Field | Description |
|---|---|
| crossreferences[string] | **object ([CrossReference](/docs/ashen/reference/rest/v1beta2/CrossReference))**<br />A map of providers and the resources they refer to.<br />Currently supported providers include `anidb.net` and `thetvdb.com`. Support for provider `animeshon.com` is planned for this version. |
| distance | **float**<br />The distance from the matched image. |
| frameTimeMs | **integer**<br />The time in milliseconds elapsed from the beginning of the episode at which the frame matched the search request. |
| queryTimeMs | **integer**<br />The total query time in milliseconds. |

