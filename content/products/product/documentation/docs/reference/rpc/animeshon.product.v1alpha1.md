---
title: animeshon.product.v1alpha1
---

# Package animeshon.product.v1alpha1

## Index
- [ChapterService](#animeshon.product.v1alpha1.ChapterService)
- [Chapter](#animeshon.product.v1alpha1.Chapter)
- [CreateChapterRequest](#animeshon.product.v1alpha1.CreateChapterRequest)
- [DeleteChapterRequest](#animeshon.product.v1alpha1.DeleteChapterRequest)
- [GetChapterRequest](#animeshon.product.v1alpha1.GetChapterRequest)
- [ListChaptersRequest](#animeshon.product.v1alpha1.ListChaptersRequest)
- [ListChaptersResponse](#animeshon.product.v1alpha1.ListChaptersResponse)
- [UpdateChapterRequest](#animeshon.product.v1alpha1.UpdateChapterRequest)

## <span id="animeshon.product.v1alpha1.ChapterService">ChapterService</span>



| <span id="animeshon.product.v1alpha1.ChapterService.GetChapter">GetChapter</span> |
| --- |
| **rpc GetChapter([GetChapterRequest](#animeshon.product.v1alpha1.GetChapterRequest)) [Chapter](#animeshon.product.v1alpha1.Chapter)**<br/><br/> |

| <span id="animeshon.product.v1alpha1.ChapterService.ListChapters">ListChapters</span> |
| --- |
| **rpc ListChapters([ListChaptersRequest](#animeshon.product.v1alpha1.ListChaptersRequest)) [ListChaptersResponse](#animeshon.product.v1alpha1.ListChaptersResponse)**<br/><br/> |

| <span id="animeshon.product.v1alpha1.ChapterService.CreateChapter">CreateChapter</span> |
| --- |
| **rpc CreateChapter([CreateChapterRequest](#animeshon.product.v1alpha1.CreateChapterRequest)) [Chapter](#animeshon.product.v1alpha1.Chapter)**<br/><br/> |

| <span id="animeshon.product.v1alpha1.ChapterService.UpdateChapter">UpdateChapter</span> |
| --- |
| **rpc UpdateChapter([UpdateChapterRequest](#animeshon.product.v1alpha1.UpdateChapterRequest)) [Chapter](#animeshon.product.v1alpha1.Chapter)**<br/><br/> |

| <span id="animeshon.product.v1alpha1.ChapterService.DeleteChapter">DeleteChapter</span> |
| --- |
| **rpc DeleteChapter([DeleteChapterRequest](#animeshon.product.v1alpha1.DeleteChapterRequest)) [.google.protobuf.Empty](#google.protobuf.Empty)**<br/><br/> |


## <span id="animeshon.product.v1alpha1.Chapter">Chapter</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the chapter. |
| language_code | **[ string](#string)**<br/>The language code of the chapter pages. |
| album | **[ string](#string)**<br/>The album that contains all images associated to this chapter. |
| pages | **[repeated int64](#int64)**<br/>The ordered list of all pages represented as ids of images. |

## <span id="animeshon.product.v1alpha1.CreateChapterRequest">CreateChapterRequest</span>



| Field | Description |
| --- | --- |
| parent | **[ string](#string)**<br/>The parent this chapter belongs to. |
| chapter | **[ Chapter](#Chapter)**<br/>The chapter to create. |

## <span id="animeshon.product.v1alpha1.DeleteChapterRequest">DeleteChapterRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the chapter to delete. |

## <span id="animeshon.product.v1alpha1.GetChapterRequest">GetChapterRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the chapter to retrieve. |

## <span id="animeshon.product.v1alpha1.ListChaptersRequest">ListChaptersRequest</span>



| Field | Description |
| --- | --- |
| parent | **[ string](#string)**<br/>The parent this chapter belongs to. |
| page_size | **[ int32](#int32)**<br/>If unspecified, server will pick an appropriate default. |
| page_token | **[ string](#string)**<br/>The value returned from the previous call. |
| filter | **[ string](#string)**<br/>A filter to be applied to results. |

## <span id="animeshon.product.v1alpha1.ListChaptersResponse">ListChaptersResponse</span>



| Field | Description |
| --- | --- |
| chapters | **[repeated Chapter](#Chapter)**<br/>The list of chapters. |
| next_page_token | **[ string](#string)**<br/>A token to retrieve next page of results. |

## <span id="animeshon.product.v1alpha1.UpdateChapterRequest">UpdateChapterRequest</span>



| Field | Description |
| --- | --- |
| chapter | **[ Chapter](#Chapter)**<br/>The chapter to update. |
| update_mask | **[ google.protobuf.FieldMask](#google.protobuf.FieldMask)**<br/>The field mask to determine which fields are to be updated. If empty, the server will assume all fields are to be updated. |
