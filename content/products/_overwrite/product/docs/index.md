---
title: Overview
description: Overview for Product.
---

# Product documentation

The `Product` service is responsible for the management of physical and digital goods.

**_The `Product` service is in pre-alpha stage which means that the product is in early-stage development and some features might be missing, broken or behave unexpectedly._**

### Products

The only products currently supported are digital chapters.

## Digital chapters

Digital chapters represent the digital version of a chapter and are composed by pages, in the format of images, and a product language. Digital chapters can be associated with light novels or graphic novels from the Animeshon Graph Knowledge Base through a new [Release](/release/docs).

Upon creation of a new product, a new album will be allocated where all the pages must be uploaded as images. The newly created album is system-managed and cannot be updated or deleted manually, its entire lifecyle is managed by its parent product.

## IAM and product visibility

Products can not be made publicly available through IAM permissions. The visibility of products is completely managed through releases, which means that whenever a product should be made available to the public a new release must be created.
