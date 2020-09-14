---
id: concepts
title: Concepts
---

## Oracolo Architecture

Oracolo is the result of the combination of *three* different components. Each component provide **search capability** for a ***specific domain*** and can be used as standalone services.

The components synergize with eachoter providing the best and most complete search experience possible, potentially covering every single use-case of the Japanese Multimedia Industry.

![Oracolo Architecture](assets/search-engine-architecture.svg)

### Ashen - Inverse video/image search for Anime
[Ashen](/docs/ashen/introduction) is the component responsable for the **indexing** and **search** by image or video for the `Anime` domain.

:::note

Given Ashen's potetial the application domain might be extended to `Visual Novels`, Coves, Fan Art, ... in the future.

:::

### Ashen Grey - Inverse image search for Black & White Content
[Ashen Grey](/docs/ecosystem/roadmap) is a specialized version of [Ashen](/docs/ashen/introduction) optimized for **black & white** content. It responsable for the **indexing** and **search** by image for all  those content distirbuted as black & white paper like `Manga` or `Doujinshi`.

### Fulltext Search Engine
A fulltext search engine powered by [Elastisearch](https://www.elastic.co/). This component is responsable for every text query submitted to the system.

