---
title: Overview
description: Overview for Vision.
---

# Vision documentation

The `Vision` service is responsible for image annotations and analyses.

## Annotations

Images uploaded to Animeshon might be automatically analyzed and annotated through an internal AI to extract features and better classify an image. This is especially required to detect **explicit content** that could be discarded from search results or hidden during navigation depending on the user preferences.

### Text Annotations

Text annotations detect any text within the image and attempt to split such content in paragraphs.

```json
{
  "textAnnotations": [
    {
      "property": {
        "languageCode": "eng",
        "confidence": 0.9
      },
      "boundingBox": {
        "vertices": [
          {"X": 0, "Y": 0},
          {"X": 0, "Y": 10},
          {"X": 10, "Y": 0},
          {"X": 10, "Y": 10},
        ]
      },
      "text": "Test",
      "confidence": 0.8
    }
  ]
}
```

### Label Annotations

Label annotations detect abstract features of the image such as actions, sentiment, and so on.

```json
{
  "labelAnnotations": [
    {
      "name": "kissing",
      "score": 0.8,
      "topicality": 0.9
    }
  ]
}
```

### Entity Annotations

Entity annotations detect objects within the image such as body parts, clothes, and so on.

```json
{
  "entityAnnotations": [
    {
      "name": "human-eye",
      "score": 0.8,
      "boundingBox": {
        "vertices": [
          {"X": 0, "Y": 0},
          {"X": 0, "Y": 10},
          {"X": 10, "Y": 0},
          {"X": 10, "Y": 10},
        ]
      },
    }
  ]
}
```

### Graph Knowledge Annotations

Graph knowledge annotations detect entities that are known by Animeshon such as animes, characters, and so on.

```json
{
  "labelAnnotations": [
    {
      "resource": "animes/12345",
      "score": 0.8,
      "boundingBox": null
    }
  ]
}
```

### WebSearch Annotations

WebSearch annotations detect potentially associated web resources known by Animeshon such as links to social media.

```json
{
  "webSearchAnnotations": [
    {
      "url": "https://www.pixiv.net/my-link",
      "score": 1.0
    }
  ]
}
```

### SafeSearch Annotations

SafeSearch annotations detect potentially explict content that should be shown or hidden based on the user preferences.

```json
{
  "safeSearchAnnotation": {
    "Adult":    "POSSIBLE",
    "Racy":     "POSSIBLE",
    "Violence": "POSSIBLE",
    "Medical":  "POSSIBLE",
    "Juvenile": "POSSIBLE"
  }
}
```
