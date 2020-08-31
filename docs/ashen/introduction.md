---
id: introduction
title: Introduction
---

## Welcome to Ashen, the Sauce's source

***Ashen*** is an image and video index system built on top of the [Perceptual Hashing](https://en.wikipedia.org/wiki/Perceptual_hashing) algorithm rewriting and optimizing the implementation developed by [trace.moe](https://trace.moe/). The resulting [Ashen's Perceptual Hashing](/docs/ashen/concepts#ashens-perceptual-hashing) algorithm poweres a **reverse search by image *and* video**. 

Ashen's development state is shown in [Ashen Roadmap](/docs/ashen/roadmap).


:::note
Currently Ashen poweres the reverse image/video search for the only `Anime` content typology.  
Given its potetial the application domain might be extended to `Visual Novels`, Coves, Fan Art, ... in the future.
:::

Until now the Japanese Multimedia Community had to rely on algorithms which, given a file, generates a fingerprint based on the physical state of the bytes of the file itself. One frame edit or even one byte corruption results in a completely different fingerprint.

Ashen do the oposite: generating a `Perceptual Hash Signature` for each frame in the file, it is capable of index not the file but the content.
No matter the resolution, hard subtitles, censorship, edits or localization, Ashen is able to detect any previusly indexed video and return metadata information about the source content.


## Take a tour of Ashen

[Quickstart](quickstart)   
Get started with Ashen functionalities and try out a new way of getting sauces.

[Roadmap](roadmap)   
Stay up to date on Ashen's development and optimizations.

[Tutorials](sdk/tutorials)   
A rich set of tutorial to enjoy Ashen.

[SDK](sdk/quickstarts)   
Are you a Developer? Check Ashen SDK tool and start integrate our functionalities in your own project!