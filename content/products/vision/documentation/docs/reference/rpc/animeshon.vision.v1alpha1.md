---
title: animeshon.vision.v1alpha1
---

# Package animeshon.vision.v1alpha1

## Index
- [BoundingPoly](#animeshon.vision.v1alpha1.BoundingPoly)
- [Vertex](#animeshon.vision.v1alpha1.Vertex)

- [EntityAnnotation](#animeshon.vision.v1alpha1.EntityAnnotation)
- [ImageAnnotations](#animeshon.vision.v1alpha1.ImageAnnotations)
- [KnowledgeGraphAnnotation](#animeshon.vision.v1alpha1.KnowledgeGraphAnnotation)
- [LabelAnnotation](#animeshon.vision.v1alpha1.LabelAnnotation)
- [SafeSearchAnnotation](#animeshon.vision.v1alpha1.SafeSearchAnnotation)
- [TextAnnotation](#animeshon.vision.v1alpha1.TextAnnotation)
- [TextAnnotation.Language](#animeshon.vision.v1alpha1.TextAnnotation.Language)
- [TextAnnotation.TextProperty](#animeshon.vision.v1alpha1.TextAnnotation.TextProperty)
- [WebSearchAnnotation](#animeshon.vision.v1alpha1.WebSearchAnnotation)

- [Likelihood](#animeshon.vision.v1alpha1.Likelihood)
- [ColorProperty](#animeshon.vision.v1alpha1.ColorProperty)
- [FingerprintProperty](#animeshon.vision.v1alpha1.FingerprintProperty)
- [ImageProperties](#animeshon.vision.v1alpha1.ImageProperties)

- [ImageAnnotator](#animeshon.vision.v1alpha1.ImageAnnotator)
- [AnalyzeImageRequest](#animeshon.vision.v1alpha1.AnalyzeImageRequest)
- [AnalyzeImageResponse](#animeshon.vision.v1alpha1.AnalyzeImageResponse)
- [CreateImageAnnotationRequest](#animeshon.vision.v1alpha1.CreateImageAnnotationRequest)
- [DeleteImageAnalysisRequest](#animeshon.vision.v1alpha1.DeleteImageAnalysisRequest)
- [DeleteImageAnnotationRequest](#animeshon.vision.v1alpha1.DeleteImageAnnotationRequest)
- [GetImageAnalysisRequest](#animeshon.vision.v1alpha1.GetImageAnalysisRequest)
- [GetImageAnnotationRequest](#animeshon.vision.v1alpha1.GetImageAnnotationRequest)
- [ImageAnalysis](#animeshon.vision.v1alpha1.ImageAnalysis)
- [ImageAnnotation](#animeshon.vision.v1alpha1.ImageAnnotation)
- [ListImageAnalysesRequest](#animeshon.vision.v1alpha1.ListImageAnalysesRequest)
- [ListImageAnalysesResponse](#animeshon.vision.v1alpha1.ListImageAnalysesResponse)
- [ListImageAnnotationsRequest](#animeshon.vision.v1alpha1.ListImageAnnotationsRequest)
- [ListImageAnnotationsResponse](#animeshon.vision.v1alpha1.ListImageAnnotationsResponse)
- [UpdateImageAnnotationRequest](#animeshon.vision.v1alpha1.UpdateImageAnnotationRequest)


## <span id="animeshon.vision.v1alpha1.BoundingPoly">BoundingPoly</span>

A bounding polygon for the detected image annotation.

| Field | Description |
| --- | --- |
| vertices | **[repeated Vertex](#Vertex)**<br/>The bounding polygon vertices. |

## <span id="animeshon.vision.v1alpha1.Vertex">Vertex</span>

A vertex represents a 2D point in the image.
NOTE: the vertex coordinates are in the same scale as the original image.

| Field | Description |
| --- | --- |
| x | **[ int32](#int32)**<br/>X coordinate. |
| y | **[ int32](#int32)**<br/>Y coordinate. |

## <span id="animeshon.vision.v1alpha1.EntityAnnotation">EntityAnnotation</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The entity resource name. |
| score | **[ float](#float)**<br/>Overall score of the result. Range [0, 1]. |
| bounding_box | **[ BoundingPoly](#BoundingPoly)**<br/>Image region to which this entity belongs. |

## <span id="animeshon.vision.v1alpha1.ImageAnnotations">ImageAnnotations</span>



| Field | Description |
| --- | --- |
| text_annotations | **[repeated TextAnnotation](#TextAnnotation)**<br/>The texts detected in the image. |
| label_annotations | **[repeated LabelAnnotation](#LabelAnnotation)**<br/>The labels detected in the image. |
| entity_annotations | **[repeated EntityAnnotation](#EntityAnnotation)**<br/>The entites detected in the image. |
| knowledge_graph_annotations | **[repeated KnowledgeGraphAnnotation](#KnowledgeGraphAnnotation)**<br/>The Animeshon Graph Knowledge-Base resources detected in the image. |
| web_search_annotations | **[repeated WebSearchAnnotation](#WebSearchAnnotation)**<br/>The WebSearch resources (pages and images) detected in the image. |
| safe_search_annotation | **[ SafeSearchAnnotation](#SafeSearchAnnotation)**<br/>The SafeSearch ratings detected in the image. |

## <span id="animeshon.vision.v1alpha1.KnowledgeGraphAnnotation">KnowledgeGraphAnnotation</span>



| Field | Description |
| --- | --- |
| resource | **[ string](#string)**<br/>The Animeshon Graph Knowledge-Base resource name. |
| score | **[ float](#float)**<br/>Overall score of the result. Range [0, 1]. |
| bounding_box | **[ BoundingPoly](#BoundingPoly)**<br/>Image region to which this entity belongs. |

## <span id="animeshon.vision.v1alpha1.LabelAnnotation">LabelAnnotation</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The label resource name. |
| score | **[ float](#float)**<br/>Overall score of the result. Range [0, 1]. |
| topicality | **[ float](#float)**<br/>The relevancy of the annotation. Range [0, 1]. |

## <span id="animeshon.vision.v1alpha1.SafeSearchAnnotation">SafeSearchAnnotation</span>



| Field | Description |
| --- | --- |
| adult | **[ Likelihood](#Likelihood)**<br/>Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities. |
| racy | **[ Likelihood](#Likelihood)**<br/>Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas. |
| violence | **[ Likelihood](#Likelihood)**<br/>Likelihood that this image contains violent content. |
| medical | **[ Likelihood](#Likelihood)**<br/>Likelihood that this is a medical image. |
| juvenile | **[ Likelihood](#Likelihood)**<br/>Likelihood that the request image contains one or more individuals decipted as juveniles. Juvenile content may contain elements such as school-aged children, preschoolers, toddlers, infants, and newborns. The target age considered as juvenile is from 0 to 14~16 years old. |

## <span id="animeshon.vision.v1alpha1.TextAnnotation">TextAnnotation</span>



| Field | Description |
| --- | --- |
| property | **[ TextAnnotation.TextProperty](#TextAnnotation.TextProperty)**<br/>Additional information detected for the paragraph. |
| bounding_box | **[ BoundingPoly](#BoundingPoly)**<br/>The bounding box for the paragraph. |
| text | **[ string](#string)**<br/>UTF-8 text detected by the OCR. |
| confidence | **[ float](#float)**<br/>Confidence of the OCR results for the paragraph. Range [0, 1]. |

## <span id="animeshon.vision.v1alpha1.TextAnnotation.Language">TextAnnotation.Language</span>

Detected language for a structural component.

| Field | Description |
| --- | --- |
| language_code | **[ string](#string)**<br/>The BCP-47 language code, such as "en-US" or "sr-Latn". |
| confidence | **[ float](#float)**<br/>Confidence of detected language. Range [0, 1]. |

## <span id="animeshon.vision.v1alpha1.TextAnnotation.TextProperty">TextAnnotation.TextProperty</span>

Additional information detected on the structural component.

| Field | Description |
| --- | --- |
| languages | **[repeated TextAnnotation.Language](#TextAnnotation.Language)**<br/>A list of detected languages together with confidence. |

## <span id="animeshon.vision.v1alpha1.WebSearchAnnotation">WebSearchAnnotation</span>



| Field | Description |
| --- | --- |
| url | **[ string](#string)**<br/>The result image URL. |
| score | **[ float](#float)**<br/>Overall relevancy score for the image. |

## <span id="animeshon.vision.v1alpha1.Likelihood">Likelihood</span>
A bucketized representation of likelihood, which is intended to give clients
highly stable results across model upgrades.

| Name | Description |
| --- | --- |
| UNKNOWN | Unknown likelihood. |
| VERY_UNLIKELY | It is very unlikely. |
| UNLIKELY | It is unlikely. |
| POSSIBLE | It is possible. |
| LIKELY | It is likely. |
| VERY_LIKELY | It is very likely. |

## <span id="animeshon.vision.v1alpha1.ColorProperty">ColorProperty</span>

Color information consists of RGB channels, score, and the fraction of
the image that the color occupies in the image.

| Field | Description |
| --- | --- |
| color | **[ google.type.Color](#google.type.Color)**<br/>RGB components of the color. |
| score | **[ float](#float)**<br/>Image-specific score for this color. Value in range [0, 1]. |
| pixel_fraction | **[ float](#float)**<br/>The fraction of pixels the color occupies in the image. Value in range [0, 1]. |

## <span id="animeshon.vision.v1alpha1.FingerprintProperty">FingerprintProperty</span>



| Field | Description |
| --- | --- |
| content | **[ bytes](#bytes)**<br/>The fingerprint of the image in binary representation. |
| algorithm | **[ string](#string)**<br/>The algorithm used to generate the fingerprint. |

## <span id="animeshon.vision.v1alpha1.ImageProperties">ImageProperties</span>



| Field | Description |
| --- | --- |
| dominant_colors | **[repeated ColorProperty](#ColorProperty)**<br/>Set of dominant colors and their corresponding scores. |
| fingerprints | **[repeated FingerprintProperty](#FingerprintProperty)**<br/>The fingerprints of the image. |
## <span id="animeshon.vision.v1alpha1.ImageAnnotator">ImageAnnotator</span>



| <span id="animeshon.vision.v1alpha1.ImageAnnotator.AnalyzeImage">AnalyzeImage</span> |
| --- |
| **rpc AnalyzeImage([AnalyzeImageRequest](#animeshon.vision.v1alpha1.AnalyzeImageRequest)) [AnalyzeImageResponse](#animeshon.vision.v1alpha1.AnalyzeImageResponse)**<br/><br/> |

| <span id="animeshon.vision.v1alpha1.ImageAnnotator.GetImageAnalysis">GetImageAnalysis</span> |
| --- |
| **rpc GetImageAnalysis([GetImageAnalysisRequest](#animeshon.vision.v1alpha1.GetImageAnalysisRequest)) [ImageAnalysis](#animeshon.vision.v1alpha1.ImageAnalysis)**<br/><br/>Note: to fetch the latest available report use "latest" as report id. |

| <span id="animeshon.vision.v1alpha1.ImageAnnotator.ListImageAnalyses">ListImageAnalyses</span> |
| --- |
| **rpc ListImageAnalyses([ListImageAnalysesRequest](#animeshon.vision.v1alpha1.ListImageAnalysesRequest)) [ListImageAnalysesResponse](#animeshon.vision.v1alpha1.ListImageAnalysesResponse)**<br/><br/> |

| <span id="animeshon.vision.v1alpha1.ImageAnnotator.DeleteImageAnalysis">DeleteImageAnalysis</span> |
| --- |
| **rpc DeleteImageAnalysis([DeleteImageAnalysisRequest](#animeshon.vision.v1alpha1.DeleteImageAnalysisRequest)) [.google.protobuf.Empty](#google.protobuf.Empty)**<br/><br/> |

| <span id="animeshon.vision.v1alpha1.ImageAnnotator.GetImageAnnotation">GetImageAnnotation</span> |
| --- |
| **rpc GetImageAnnotation([GetImageAnnotationRequest](#animeshon.vision.v1alpha1.GetImageAnnotationRequest)) [ImageAnnotation](#animeshon.vision.v1alpha1.ImageAnnotation)**<br/><br/> |

| <span id="animeshon.vision.v1alpha1.ImageAnnotator.ListImageAnnotations">ListImageAnnotations</span> |
| --- |
| **rpc ListImageAnnotations([ListImageAnnotationsRequest](#animeshon.vision.v1alpha1.ListImageAnnotationsRequest)) [ListImageAnnotationsResponse](#animeshon.vision.v1alpha1.ListImageAnnotationsResponse)**<br/><br/> |

| <span id="animeshon.vision.v1alpha1.ImageAnnotator.CreateImageAnnotation">CreateImageAnnotation</span> |
| --- |
| **rpc CreateImageAnnotation([CreateImageAnnotationRequest](#animeshon.vision.v1alpha1.CreateImageAnnotationRequest)) [ImageAnnotation](#animeshon.vision.v1alpha1.ImageAnnotation)**<br/><br/> |

| <span id="animeshon.vision.v1alpha1.ImageAnnotator.UpdateImageAnnotation">UpdateImageAnnotation</span> |
| --- |
| **rpc UpdateImageAnnotation([UpdateImageAnnotationRequest](#animeshon.vision.v1alpha1.UpdateImageAnnotationRequest)) [ImageAnnotation](#animeshon.vision.v1alpha1.ImageAnnotation)**<br/><br/> |

| <span id="animeshon.vision.v1alpha1.ImageAnnotator.DeleteImageAnnotation">DeleteImageAnnotation</span> |
| --- |
| **rpc DeleteImageAnnotation([DeleteImageAnnotationRequest](#animeshon.vision.v1alpha1.DeleteImageAnnotationRequest)) [.google.protobuf.Empty](#google.protobuf.Empty)**<br/><br/> |


## <span id="animeshon.vision.v1alpha1.AnalyzeImageRequest">AnalyzeImageRequest</span>



| Field | Description |
| --- | --- |
| parent | **[ string](#string)**<br/>The parent image to be analyzed. |
| features | **[repeated string](#string)**<br/>A list of features to analyze. |

## <span id="animeshon.vision.v1alpha1.AnalyzeImageResponse">AnalyzeImageResponse</span>



| Field | Description |
| --- | --- |
| analysis | **[ ImageAnalysis](#ImageAnalysis)**<br/>The analysis of the image. |

## <span id="animeshon.vision.v1alpha1.CreateImageAnnotationRequest">CreateImageAnnotationRequest</span>



| Field | Description |
| --- | --- |
| parent | **[ string](#string)**<br/>The parent this image annotation belongs to. |
| annotation | **[ ImageAnnotation](#ImageAnnotation)**<br/>The image annotation to create. |

## <span id="animeshon.vision.v1alpha1.DeleteImageAnalysisRequest">DeleteImageAnalysisRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the analysis to delete. |

## <span id="animeshon.vision.v1alpha1.DeleteImageAnnotationRequest">DeleteImageAnnotationRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The image annotation to delete. |

## <span id="animeshon.vision.v1alpha1.GetImageAnalysisRequest">GetImageAnalysisRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the image analysis to retrieve. |
| field_mask | **[ google.protobuf.FieldMask](#google.protobuf.FieldMask)**<br/>FieldMask that represents which fields should be retrieved. |

## <span id="animeshon.vision.v1alpha1.GetImageAnnotationRequest">GetImageAnnotationRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the image annotation to retrieve. |

## <span id="animeshon.vision.v1alpha1.ImageAnalysis">ImageAnalysis</span>

TODO: add information about the model used and whether the analysis is STABLE
TODO: or EXPERIMENTAL. NOTE: Latest should return the latest STABLE analysis.

| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the image analysis. |
| properties | **[ ImageProperties](#ImageProperties)**<br/>The (immutable) properties of the image. |
| annotations | **[ ImageAnnotations](#ImageAnnotations)**<br/>The annotations of the image. |
| create_time | **[ google.protobuf.Timestamp](#google.protobuf.Timestamp)**<br/>The creation time indicating when this revision was created. |

## <span id="animeshon.vision.v1alpha1.ImageAnnotation">ImageAnnotation</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The annotation resource name. |
| resource | **[ string](#string)**<br/>The annotated image. |
| annotations | **[ ImageAnnotations](#ImageAnnotations)**<br/>The annotations of the image. |
| create_time | **[ google.protobuf.Timestamp](#google.protobuf.Timestamp)**<br/>The timestamp at which the annotation was created. |
| update_time | **[ google.protobuf.Timestamp](#google.protobuf.Timestamp)**<br/>The latest timestamp at which the annotation was updated. |

## <span id="animeshon.vision.v1alpha1.ListImageAnalysesRequest">ListImageAnalysesRequest</span>



| Field | Description |
| --- | --- |
| parent | **[ string](#string)**<br/>The parent image to list analyses from. |
| page_size | **[ int32](#int32)**<br/>If unspecified, server will pick an appropriate default. |
| page_token | **[ string](#string)**<br/>The value returned from the previous call. |

## <span id="animeshon.vision.v1alpha1.ListImageAnalysesResponse">ListImageAnalysesResponse</span>



| Field | Description |
| --- | --- |
| analyses | **[repeated ImageAnalysis](#ImageAnalysis)**<br/>The list of image analyses. |
| next_page_token | **[ string](#string)**<br/>A token to retrieve next page of results. |

## <span id="animeshon.vision.v1alpha1.ListImageAnnotationsRequest">ListImageAnnotationsRequest</span>



| Field | Description |
| --- | --- |
| parent | **[ string](#string)**<br/>The parent, which owns this collection of image annotations. |
| page_size | **[ int32](#int32)**<br/>If unspecified, server will pick an appropriate default. |
| page_token | **[ string](#string)**<br/>The value returned from the previous call. |
| filter | **[ string](#string)**<br/>A filter to be applied to results.

Currently accepted filters include: - resource:{full resource name} |

## <span id="animeshon.vision.v1alpha1.ListImageAnnotationsResponse">ListImageAnnotationsResponse</span>



| Field | Description |
| --- | --- |
| annotations | **[repeated ImageAnnotation](#ImageAnnotation)**<br/>The list of image annotations. |
| next_page_token | **[ string](#string)**<br/>A token to retrieve next page of results. |

## <span id="animeshon.vision.v1alpha1.UpdateImageAnnotationRequest">UpdateImageAnnotationRequest</span>



| Field | Description |
| --- | --- |
| annotation | **[ ImageAnnotation](#ImageAnnotation)**<br/>The image annotation to update. |
| update_mask | **[ google.protobuf.FieldMask](#google.protobuf.FieldMask)**<br/>The field mask to determine which fields are to be updated. If empty, the server will assume all fields are to be updated. |
