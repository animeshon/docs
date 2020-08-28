---
id: introduction
title: Introduction
---

***Ashen*** is a experimental system built on top of the [Perceptual Hashing](https://en.wikipedia.org/wiki/Perceptual_hashing) algorithm rewriting and optimizing the implementation developed by [trace.moe](https://trace.moe/).

## Perceptual Hashing
The Perceptual Hashing algorithm manipulates and elaborates images extrapolating the identifining characteristic of the image itself. Big part of the manipulation of the image aims to remove minor features which do not indentify the context but will only add noise to the generation of an identifier of the image.

Therefore the Perceptual Hashin, not relying on all the feature of the image but just on it's context, is resilient to crops, edits and alteration of the image.

Not being an algorithm which generates an identifier based on the raw bytes contained in the image, but using the perception of the image as whole, the Perceptual Hashing Algorithm finds way more interesting and reliable application in real wolrd scenario

## Ashen
Ashen brings the Perceptual Hashin out of it's confort zone, the images, and exploits the capability of generateing an identifier ignoring all *useless* or *secondary* features of an image in favor of all those key traits to analyze and index **Video Files**.

Until now the Japanese Multimedia Community had to rely on algorithms which, given a file, generates a fingerprint base on the physical state of the bytes of the file itself. One frame edit, one byte curroption results in a completely different fingerprint.

Ashen do the oposite, generating a Perceptual Hash Fingeprint for each frame in the file it is capable of index not the file but the content.
No matter the resolution, hard subtitles, censorship, edits or localization Ashen is able to detect a previusly indexed video and return the references to the ***Episode*** and/or ***Anime***.

-------
## Take a tour of Ashen

[Quickstart](quickstart)   
Get started with Ashen functionalities and try out a new way of getting sauces.

[Roadmap](roadmap)   
Stay up to date on Ashen's development and optimizations.

[Tutorials](tutorials)   
A rich set fo tutorial to enjoy Ashen.

[SDK](sdk/quickstarts)   
Are you a Developer? Check Ashen SDK tool and start integrate our functionalities in your own project!