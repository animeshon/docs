---
id: CrossReference
title: CrossReference
---

CrossReference reperesents a cross-reference between a provider and its resources.

### JSON representation


```json
{
    "animeId": string,
    "episodeIds": [
        string
    ]
}
```

### Fields

| Field | Description |
|---|---|
| animeId | **string**<br />Identifier of the Anime according to the provider. |
| episodeIds[] | **string**<br />Identifiers of the Episodes according to the provider. |