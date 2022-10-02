---
title: Overview
description: Overview for Knowledge.
---

# Knowledge documentation

The `Knowledge` service is responsible for managing community contribution on Animeshon's **Knowledge Base**. 
Through this service we allow the community to mutate, update, correct and improve the data in our system.

Contributions have then to be approved by moderators which can review, verify, and perform changes to the modification proposed by the user.
The process is designed to allow both parties to tune the contribution until it meets our internal policies rather than discard/approve in one shot.

`Knowledge` is built on top of a virtualized Git system developed internally by Animeshon's Team which guarantees versioning, partial approval and correction of the contributions proposed by the community.

When a contribution is approved, all changes are forwarded to the competent services and then reflected in the Knowledge Base DataGraph.

## Semantic
`Knowledge` operates on our structured representation of Resources and relations between Resources. Therefore to propose/edit contributions the semantics we designed and implemented must be respected for Knowledge to understand the proposed changes to the **Knowledge Base**.

There are mainly 2 **verbs** accepted by Knowledge:
- `additions`
- `deletions`

First noticeable thing is that Knowledge does not allow users to implicitly `modify` the Knowledge base. Every operation has to be decoupled into `something has to be removed` and later `something has to be added`.

EG: If someone wants to change the relations between **Luffy** and **One piece** because it was mistakenly inserted as **SUPPORT** character, he first has to declare the intent to `delete` the tuple `[One Piece-SUPPORT-Luffy]` and then declare the intent to add the tuple `[One Piece-MAIN-Luffy]`.

:::tip

Knowledge **always** performs `deletions` before `additions`

:::

## Declarative Syntax Tree
Edits are expressed using a tree (or graph) representation of the Resource we want to change.

The above **verbs** are lists of `Entry Entities` or `Roots`. Only `Top Layer Resources` such as **Anime**, **Light Novel**, **Graphic Novel**, **Visual Novel**, **Person**, **Character**, **Organization**, **Canonical**, **Chapter**, **Episode**, **Universe**, **Game Release** can be roots.

Trees can carry single edits or more complex sets of changes.
While changing a Resource we can attach more changes to the same `Root` or divide each change to a different `Root` with the same `Resource name`

In the example above the user would have to build 2 different trees attached to the proper **verb**

`deletions` of `[One Piece-SUPPORT-Luffy]`
```
One Piece
 └─<cast>
     └─SUPPORT
     └─Luffy
```
`additions` of `[One Piece-MAIN-Luffy]`
```
One Piece
 └─<cast>
     └─MAIN
     └─Luffy
```

If we would like to also add `[One Piece-MAIN-Zoro]` and `One Piece-SUPPORT-Sanji]` in the same contribution, the **trees** attached to the **verbs** could look like

`deletions` of `[One Piece-SUPPORT-Luffy]`
```
One Piece
 └─<cast>
     └─SUPPORT
     └─Luffy
```
`additions` of `[One Piece-(MAIN-Luffy)(MAIN-Zoro)(SUPPORT-Sanji)]`
```
One Piece
 └─<cast>
     └─MAIN
     └─Luffy
 └─<cast>
     └─MAIN
     └─Zoro
 └─<cast>
     └─SUPPORT
     └─Sanji
```

or

`deletions` of `[One Piece-SUPPORT-Luffy]`
```
One Piece
 └─<cast>
     └─SUPPORT
     └─Luffy
```
`additions` of `[One Piece-MAIN-Luffy][One Piece-MAIN-Zoro][One Piece-SUPPORT-Sanji]`
```
One Piece
 └─<cast>
     └─MAIN
     └─Luffy
```
```
One Piece
 └─<cast>
     └─MAIN
     └─Zoro
```
```
One Piece
 └─<cast>
     └─SUPPORT
     └─Sanji
```