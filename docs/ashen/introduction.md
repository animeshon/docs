---
id: introduction
title: Introduction
---

Ashen is currently available at the public address [source.animeshon.com](https://source.animeshon.com/).

![Ashen Preview](/img/docs/ashen-preview.jpeg)

## Overview

***Ashen*** is an image and video reverse search engine built on top of [perceptual hashing](https://en.wikipedia.org/wiki/Perceptual_hashing) technologies. Its implementation implementation is a rewritten and optimized version of the search engine in use by [trace.moe](https://trace.moe/). Ashen provides the core functionalities in use by [Oracolo](/docs/search-engine/introduction) for image and video searches.


:::warning Supported Content

Ashen is currently providing core funtionalities for image and video search **only** for `Anime` episodes.

:::

:::note Future Development


Further development in other domains such as `Visual Novels`, `Light Novels`, `Cosplay` and `Fan-Arts` is planned for future releases. For `Manga` and `Doujinshi` reverse image search please visit [Ashen Grey](https://docs.animeshon.com/docs/ecosystem/roadmap).

:::

Ashen development state is shown in the [Ashen Roadmap](/docs/ashen/roadmap).

### Motivation

The Multimedia Community is currently relying on algorithms which, given an image or video file, generates a static signature (also known as hash or checksum) based on the content of the file itself. Corruption or changes of a single bit will result in a completely different signature and therefore the two files will be perceived as *completely different*. This might lead to situation where lower quality images or videos are no longer recognized by indexing systems even if the content is *perceptually* still the same.

Ashen is built on top of a very different way of generating signatures for image and video files which relies on **perceptual hashing** and **locality-sensitive hashing** algorithms. This allows to recognize the content of an image or video even if small artifacts (e.g. subtitles, adult content pixelisation) are present, the pixel mapping is different (e.g. compression, scaling, different quality), the image is softly cropped, or has extra borders. Ashen is therefore capable of returning metadata information for both original and modified content.

## Context

Ashen is the right product if you want to answer one of the following questions:

- Which Anime (or episode) was this **screenshot** taken from?
- Which Anime (or episode) was this **video clip** taken from?
- Which Anime (or episodes) are depicted in this **AMV** (Anime Music Video)?
- I have a collection of video files, can I group them by Anime?
- I have a large number of images / videos, can I extract their metadata in a quick way (>10 req/s)?
- I have a streaming service, can I prevent copyrighted material from being uploaded there?

Ashen might not be the best choice for the following queries:

- I have this **heavily edited** image, what Anime (or episode) was it taken from?
  - Try [trace.moe](https://trace.moe/) if image lookup fails on Ashen
- I have this **meme** (e.g. a cropped image with text), what Anime (or episode) was it taken from?
  - Try [Google](https://www.google.com/imghp) or [Yandex](https://yandex.com/images/) if image lookup fails on Ashen

Ashen will support the following use-cases in future versions:

- Where was this fanart taken from?
  - *Use [saucenao.com](https://saucenao.com/) for the moment*
- Which Anime / character(s) are depicted in this fanart? Who is its author?
- Where was this cosplay taken from?
- Which Anime / character(s) are represented in this cosplay? Who is the cosplayer / photographer?
- Which Manga / Doujinshi / Light Novel / Visual Novel was this picture taken from?
  - *For Manga and Doujinshi please refer to [Ashen Grey](https://docs.animeshon.com/docs/ecosystem/roadmap)*

## Take a tour of Ashen

[Quickstarts](quickstart)   
Get started with Ashen functionalities and try out a new way of getting sources.

[Roadmap](roadmap)   
Stay up to date with Ashen development and new releases.

[REST APIs](reference/overview)   
Integrate your service through the Ashen REST APIs.

[Tutorials](sdk/tutorials)   
Enjoy a rich set of tutorials and examples.

[Ashen SDK](sdk/quickstarts)  
Integrate with Ashen using our official SDK.
