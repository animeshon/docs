---
id: concepts
title: Concepts
---

## Ashen Internal Process
Here an high level explaination of the process behind **Ashen** will be provided. The process applies both to `Images` and 	`Video`, with the difference that the video files are segmented in sequence of frames (nothing else that static *images*) using an algorythm developed by Animeshon's Research Department.

### Image / Video Indexing
The following process shows how Ashen indexes Videos and Images and creates a lookup database capable of recognize partial, entire, edited and corrupted Video / Image files.

<br />

![Ashen Indexing Step 1](assets/ashen-index-1.svg)
In the case of a `Video File` Ashen cuts the video in **Frames**. Doing so Ashen will break down the task of indexing Video in more simpler tasks of indexing Images.

<br />

![Ashen Indexing Step 2](assets/ashen-index-2.svg)
The images are then preprocessed normalizing colors, resolution, and removing artifacts and features not needed for the generation of the `fingerprint`.   
This process can be externalized in third party application is explained in depth in the [Ashen-SDK Concept](/docs/ashen-sdk/concepts#image-preprocessing) section.

<br />

![Ashen Indexing Step 3](assets/ashen-index-3.svg)
Once the immage has been normalized and cleaned up, Ashen finally generates an **Unique Identifier** used as `Fingerprint` to itendify the ***image's perception***.

<br />

### Search by Image / Video
Performing a search by Image or Video against Ashen's database can be performed in 2 different ways:

* *Upload* the content and let Ashen handle the generation of the Perceptual Hash searched.
* *Generate the Perceptual Hash locally* and delegate to Ashen only the matching process. In this case use the documentation present [Ashen-SDK Concept](/docs/ashen-sdk/concepts#image-preprocessing) section to generate healty Perceptual Hashes.

In the first case Ashen performs adain the above **3 steps** to generate the `Perceptual Hash Fingerprints` from the content.
After that the Search Process is the conceptually the same.

![Ashen Search Step 1](assets/ashen-search-1.svg)
The `Perceptual Hash Fingerprint` provided (no matter if it was provided by the client or after an internal generation) is matched against the Hashes alread present in the Database.

![Ashen Search Step 2](assets/ashen-search-2.svg)
The candidate which match better the provided `Perceptual Hash Fingerprint` is finally returned along with information of the content which generated the **Fingerprint** such as Episode and/or Anime IDs.