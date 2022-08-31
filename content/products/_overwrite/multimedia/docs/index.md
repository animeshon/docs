---
title: Overview
description: Overview for Multimedia.
---

# Multimedia documentation

The `Multimedia` service is responsible for the management of all abstract multimedia resources. Physical and digital goods are managed by other services and APIs such as the [Product](/product/docs) service.

## Resources and Hierarchy

The top-level resources include the following:

- Anime (animated stories in the format of japanese cartoons)
- Graphic Novels (comics-style stories like Manga, Manhwa, Manhua, an so on)
- Light Novels (book-style stories with few images)
- Visual Novels (interactive stories in the format of videogames)

Second-level resources include the following:

- Chapters (parent resources can be graphic and light novels)
- Episodes (parent resources can only be anime)

```
Anime
 └─Episodes
Light Novels
 └─Chapters
Graphic Novels
 └─Chapters
Visual Novels
```

Resources like ONA, OVA, Movies and so on are sub-types of Anime resources. Resources like Manga, Manhwa, Manhua and so on are sub-types of Graphic Novels resources.

## Reconciliation with the graph knowledge-base

All resources stored in the Multimedia service are exported to the graph knowledge-base, sometimes data stored in the service can fall out of sync with the knowledge-base, this is why manual reconciliation of resources is possible to ensure that the state in the graph is up-to-date.

_Insight: Multimedia is the source-of-truth for all the resources listed above. This means that it is possible to completely rebuild the entire graph knowledge-base from scratch at any time._
