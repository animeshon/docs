---
title: Overview
description: Overview for Image.
---

# Image documentation

The `Image` service is responsible for storing, organizing, transforming, and accessing images. The Image API is also the backbone of several other services offered by Animeshon as it acts as a centralized and secure storage for all image files.

## Storage

Images are securely stored inside Animeshon cloud infrastructure. All images are encrypted in transit and at rest, Additionally, depending on the purpose of the images and their confidentiality and use, images could be encrypted through user-assigned custom assymmetric keys. This ensures a high degree of content privacy and access security.

## Organization

Images are organized in albums that are in turn managed by users or organizations. Albums are collections of images and cannot be nested - an album cannot contain another album. IAM policies cannot be assigned to individual images but must be applied to album resources.

## Transformation

Basic transformations can be applied to images such as thumbnails generation and format conversion. Additionally, blurring might be automatically applied to images that cannot be legally served due to regional restrictions such as juvenile or violent content in explicit contexts.

## Access

Access to images stored in the Image service is governed by the IAM policies assigned to the album where they are contained and executed by our Content Delivery Network (CDN).

_Learn more about access control through dedicated [quickstarts](docs/quickstarts/generate-thumbnails) and [samples](docs/samples/get-image-route)._
