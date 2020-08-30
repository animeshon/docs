---
id: introduction
title: Introduction
---

## Welcome to Ashen, the Sauce's source

***Ashen*** is a experimental system built on top of the [Perceptual Hashing](https://en.wikipedia.org/wiki/Perceptual_hashing) algorithm rewriting and optimizing the implementation developed by [trace.moe](https://trace.moe/).

Ashen exploits the capability of the [Perceptual Hashing](/docs/ashen/concepts#perceptual-hashing) technology to analyze and index also **Video Files**. The results is a system able to perform **reverse search by image *and* video**.

Ashen's development state is shown in [Ashen Roadmap](/docs/ashen/roadmap).


:::note
Currently Ashen poweres the reverse image/video search for the only `Anime` content typology.  
Given its potetial it is planned to extend the application domain to  `Visual Novels`, Coves, Fan Art.
:::

Until now the Japanese Multimedia Community had to rely on algorithms which, given a file, generates a fingerprint based on the physical state of the bytes of the file itself. One frame edit or even one byte corruption results in a completely different fingerprint.

Ashen do the oposite: generating a `Perceptual Hash Signature` for each frame in the file, it is capable of index not the file but the content.
No matter the resolution, hard subtitles, censorship, edits or localization, Ashen is able to detect any previusly indexed video and return the references to the ***Episode*** and/or ***Anime***.


## Take a tour of Ashen

[Quickstart](quickstart)   
Get started with Ashen functionalities and try out a new way of getting sauces.

[Roadmap](roadmap)   
Stay up to date on Ashen's development and optimizations.

[Tutorials](sdk/tutorials)   
A rich set of tutorial to enjoy Ashen.

[SDK](sdk/quickstarts)   
Are you a Developer? Check Ashen SDK tool and start integrate our functionalities in your own project!