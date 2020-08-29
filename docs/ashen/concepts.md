---
id: concepts
title: Concepts
---

## Ashen Internal Process
Here an high level explaination of the process behind **Ashen** will be provided. The process applies both to `Images` and 	`Video`, with the difference that the video files are segmented in sequence of frames (nothing else that static *images*) using an algorythm developed by Animeshon's Research Department.

### Image / Video Indexing
The following process shows how Ashen indexes Videos and Images and creates a signature database capable of recognize partial, entire, edited and corrupted Video / Image files.

<br />

![Ashen Indexing Step 1](assets/ashen-index-1.svg)
In the case of a `Video File` Ashen cuts the video in **Frames**. Doing so Ashen will break down the task of indexing Video in more simpler tasks of indexing Images.

<br />

![Ashen Indexing Step 2](assets/ashen-index-2.svg)
The images are then preprocessed ensuring that all feature and artifacts that could lead to a missgeneration of the `signature` are removed.   
An example is the remotion of black/white borders which are normally used when people create memes.
This process can be externalized in third party application is explained in depth in the [Image Preprocessing](/docs/ashen/concepts#image-preprocessing) section.


:::warning

The Image Preprocessing Process can be changed and optimized at any time.  
Even if it do not affect the Perceptual Hash itself, the `Community Clients` be updated to meet the new process.

:::

<br />

![Ashen Indexing Step 3](assets/ashen-index-3.svg)
Ashen finally performs a [Locality-sensitive hashing](https://en.wikipedia.org/wiki/Locality-sensitive_hashing) on the [ MPEG-7 color layout descriptor](https://ieeexplore.ieee.org/document/959135) of the image and generates an **Unique Identifier** used as `Signature` to itendify the ***image's perception***. 

<br />

### Search by Image / Video
Performing a search by Image or Video against Ashen's database can be performed in 2 different ways:

* *Upload* the content and let Ashen handle the generation of the Perceptual Hash searched.
* *Generate the Perceptual Hash locally* and delegate to Ashen only the matching process. In this case use [available clients](/docs/ashen/sdk/quickstarts) to generate healty Perceptual Hashes.

In the first case Ashen performs the above **3 steps** to generate the `Perceptual Hash Signature` of the content.
After that the **Search Process** is the conceptually the same.

![Ashen Search Step 1](assets/ashen-search-1.svg)
The `Perceptual Hash Signature` provided (no matter if it was provided by the client or after an internal generation) is matched against the Signatures alread present in the Database.

![Ashen Search Step 2](assets/ashen-search-2.svg)
The candidate which match better the provided `Perceptual Hash Signature` is finally returned along with information of the original content such as Episode and/or Anime IDs.

## Image Preprocessing

### Work in Progress

More information will be made available on [Discuss](https://discuss.animeshon.com) and [GitHub](https://github.com/animeshon) as development continues.
