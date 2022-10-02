---
title: Overview
description: Overview for Cross-Reference.
---

# Cross-Reference documentation

The `Cross-Reference` service is responsible for managing the cross-referencing across different data providers, one of which is Animeshon.

It is one of the most important services in the whole system since the links created by `Cross-Reference` determine the final shape of the **Knowledge Base**. The more and more accurate cross-references are created, the more the system knows how to interconnect the entities during the aggregation and inference process of the raw data ingested.

## Cross-references
Crossreferences are links between data coming from different providers but referring to the same entity.
Data can be _fully cross-referenced_ if it matches 1:1 the cluster of data linked by the Crossreference, or _partially cross-referenced_ if it matches only partially the cluster of data linked.

```
crossreferences/a123
 ------- full match
 └─provider1/animes/abc
 └─provider2/animes/xyz
 └─animeshon/animes/a123
 ------- partial match
 └─provider3/animes/000
```
```
crossreferences/b123
 ------- full match
 └─animeshon/animes/b123
 ------- partial match
 └─provider3/animes/000
```
```
 crossreferences/c123
 ------- full match
 └─animeshon/animes/c123
 └─provider3/animes/000
```

## Animeshon as provider
Cross-references are links between data clusters, or entities, coming from different providers.
Animeshon itself is a data provider and its entities are therefore listed in every cross-reference created.

The cross-reference `resource name` determines the final entity in the Knowledge Base and matches 1:1 the Animeshon's `resource name`.


:::tip

When a cross-reference between 2 external data providers is created, the system automatically generates Animeshon's entries

:::

:::tip

When a cross-reference an Animeshon's entity and an external provider is created, the cross-reference `resource name` **must** match the Animeshon's `resource name`

:::


## Constraints
- Only so-called `Top Layer Resources` such as **Anime**, **Light Novel**, **Graphic Novel**, **Visual Novel**, **Person**, **Character**, **Organization**, **Canonical**, **Chapter**, **Episode**, **Universe**, **Game Release** are handled by the service.
- Each Entity **can** be _fully cross-referenced_ only to a single cross-reference.
- Each Entity **might** be _partially cross-referenced_ to many cross-references.

:::warning

If an Entity is not _fully cross-referenced_ to any cross-reference, the cluster of data associated will not be attached to any entity in the Knowledge Base and it serves only as a bridge between different data providers

:::