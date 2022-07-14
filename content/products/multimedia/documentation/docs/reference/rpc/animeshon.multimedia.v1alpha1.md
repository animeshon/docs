---
title: animeshon.multimedia.v1alpha1
---

# Package animeshon.multimedia.v1alpha1

## Index
- [OperationMetadata](#animeshon.multimedia.v1alpha1.OperationMetadata)

- [PublishingType](#animeshon.multimedia.v1alpha1.PublishingType)
- [State](#animeshon.multimedia.v1alpha1.State)
- [AnimeService](#animeshon.multimedia.v1alpha1.AnimeService)
- [Anime](#animeshon.multimedia.v1alpha1.Anime)
- [CreateAnimeRequest](#animeshon.multimedia.v1alpha1.CreateAnimeRequest)
- [DeleteAnimeRequest](#animeshon.multimedia.v1alpha1.DeleteAnimeRequest)
- [GetAnimeRequest](#animeshon.multimedia.v1alpha1.GetAnimeRequest)
- [ListAnimesRequest](#animeshon.multimedia.v1alpha1.ListAnimesRequest)
- [ListAnimesResponse](#animeshon.multimedia.v1alpha1.ListAnimesResponse)
- [ReconcileAnimesRequest](#animeshon.multimedia.v1alpha1.ReconcileAnimesRequest)
- [ReconcileAnimesResponse](#animeshon.multimedia.v1alpha1.ReconcileAnimesResponse)
- [UpdateAnimeRequest](#animeshon.multimedia.v1alpha1.UpdateAnimeRequest)

- [ChapterService](#animeshon.multimedia.v1alpha1.ChapterService)
- [BatchCreateChaptersRequest](#animeshon.multimedia.v1alpha1.BatchCreateChaptersRequest)
- [BatchCreateChaptersRequest.Request](#animeshon.multimedia.v1alpha1.BatchCreateChaptersRequest.Request)
- [BatchCreateChaptersResponse](#animeshon.multimedia.v1alpha1.BatchCreateChaptersResponse)
- [BatchCreateChaptersResponse.Response](#animeshon.multimedia.v1alpha1.BatchCreateChaptersResponse.Response)
- [Chapter](#animeshon.multimedia.v1alpha1.Chapter)
- [CreateChapterRequest](#animeshon.multimedia.v1alpha1.CreateChapterRequest)
- [DeleteChapterRequest](#animeshon.multimedia.v1alpha1.DeleteChapterRequest)
- [GetChapterRequest](#animeshon.multimedia.v1alpha1.GetChapterRequest)
- [ListChaptersRequest](#animeshon.multimedia.v1alpha1.ListChaptersRequest)
- [ListChaptersResponse](#animeshon.multimedia.v1alpha1.ListChaptersResponse)
- [ReconcileChaptersRequest](#animeshon.multimedia.v1alpha1.ReconcileChaptersRequest)
- [ReconcileChaptersResponse](#animeshon.multimedia.v1alpha1.ReconcileChaptersResponse)
- [UpdateChapterRequest](#animeshon.multimedia.v1alpha1.UpdateChapterRequest)

- [EpisodeService](#animeshon.multimedia.v1alpha1.EpisodeService)
- [BatchCreateEpisodesRequest](#animeshon.multimedia.v1alpha1.BatchCreateEpisodesRequest)
- [BatchCreateEpisodesRequest.Request](#animeshon.multimedia.v1alpha1.BatchCreateEpisodesRequest.Request)
- [BatchCreateEpisodesResponse](#animeshon.multimedia.v1alpha1.BatchCreateEpisodesResponse)
- [BatchCreateEpisodesResponse.Response](#animeshon.multimedia.v1alpha1.BatchCreateEpisodesResponse.Response)
- [CreateEpisodeRequest](#animeshon.multimedia.v1alpha1.CreateEpisodeRequest)
- [DeleteEpisodeRequest](#animeshon.multimedia.v1alpha1.DeleteEpisodeRequest)
- [Episode](#animeshon.multimedia.v1alpha1.Episode)
- [GetEpisodeRequest](#animeshon.multimedia.v1alpha1.GetEpisodeRequest)
- [ListEpisodesRequest](#animeshon.multimedia.v1alpha1.ListEpisodesRequest)
- [ListEpisodesResponse](#animeshon.multimedia.v1alpha1.ListEpisodesResponse)
- [ReconcileEpisodesRequest](#animeshon.multimedia.v1alpha1.ReconcileEpisodesRequest)
- [ReconcileEpisodesResponse](#animeshon.multimedia.v1alpha1.ReconcileEpisodesResponse)
- [UpdateEpisodeRequest](#animeshon.multimedia.v1alpha1.UpdateEpisodeRequest)

- [GraphicNovelService](#animeshon.multimedia.v1alpha1.GraphicNovelService)
- [CreateGraphicNovelRequest](#animeshon.multimedia.v1alpha1.CreateGraphicNovelRequest)
- [DeleteGraphicNovelRequest](#animeshon.multimedia.v1alpha1.DeleteGraphicNovelRequest)
- [GetGraphicNovelRequest](#animeshon.multimedia.v1alpha1.GetGraphicNovelRequest)
- [GraphicNovel](#animeshon.multimedia.v1alpha1.GraphicNovel)
- [ListGraphicNovelsRequest](#animeshon.multimedia.v1alpha1.ListGraphicNovelsRequest)
- [ListGraphicNovelsResponse](#animeshon.multimedia.v1alpha1.ListGraphicNovelsResponse)
- [ReconcileGraphicNovelsRequest](#animeshon.multimedia.v1alpha1.ReconcileGraphicNovelsRequest)
- [ReconcileGraphicNovelsResponse](#animeshon.multimedia.v1alpha1.ReconcileGraphicNovelsResponse)
- [UpdateGraphicNovelRequest](#animeshon.multimedia.v1alpha1.UpdateGraphicNovelRequest)

- [VisualNovelService](#animeshon.multimedia.v1alpha1.VisualNovelService)
- [CreateVisualNovelRequest](#animeshon.multimedia.v1alpha1.CreateVisualNovelRequest)
- [DeleteVisualNovelRequest](#animeshon.multimedia.v1alpha1.DeleteVisualNovelRequest)
- [GetVisualNovelRequest](#animeshon.multimedia.v1alpha1.GetVisualNovelRequest)
- [ListVisualNovelsRequest](#animeshon.multimedia.v1alpha1.ListVisualNovelsRequest)
- [ListVisualNovelsResponse](#animeshon.multimedia.v1alpha1.ListVisualNovelsResponse)
- [ReconcileVisualNovelsRequest](#animeshon.multimedia.v1alpha1.ReconcileVisualNovelsRequest)
- [ReconcileVisualNovelsResponse](#animeshon.multimedia.v1alpha1.ReconcileVisualNovelsResponse)
- [UpdateVisualNovelRequest](#animeshon.multimedia.v1alpha1.UpdateVisualNovelRequest)
- [VisualNovel](#animeshon.multimedia.v1alpha1.VisualNovel)

- [LightNovelService](#animeshon.multimedia.v1alpha1.LightNovelService)
- [CreateLightNovelRequest](#animeshon.multimedia.v1alpha1.CreateLightNovelRequest)
- [DeleteLightNovelRequest](#animeshon.multimedia.v1alpha1.DeleteLightNovelRequest)
- [GetLightNovelRequest](#animeshon.multimedia.v1alpha1.GetLightNovelRequest)
- [LightNovel](#animeshon.multimedia.v1alpha1.LightNovel)
- [ListLightNovelsRequest](#animeshon.multimedia.v1alpha1.ListLightNovelsRequest)
- [ListLightNovelsResponse](#animeshon.multimedia.v1alpha1.ListLightNovelsResponse)
- [ReconcileLightNovelsRequest](#animeshon.multimedia.v1alpha1.ReconcileLightNovelsRequest)
- [ReconcileLightNovelsResponse](#animeshon.multimedia.v1alpha1.ReconcileLightNovelsResponse)
- [UpdateLightNovelRequest](#animeshon.multimedia.v1alpha1.UpdateLightNovelRequest)


## <span id="animeshon.multimedia.v1alpha1.OperationMetadata">OperationMetadata</span>

Represents the metadata of the long-running operation.

| Field | Description |
| --- | --- |
| create_time | **[ google.protobuf.Timestamp](#google.protobuf.Timestamp)**<br/>Output only. The time the operation was created. |
| end_time | **[ google.protobuf.Timestamp](#google.protobuf.Timestamp)**<br/>Output only. The time the operation finished running. |
| target | **[ string](#string)**<br/>Output only. Server-defined resource path for the target of the operation. |
| verb | **[ string](#string)**<br/>Output only. Name of the verb executed by the operation. |
| status_message | **[ string](#string)**<br/>Output only. Human-readable status of the operation, if any. |
| requested_cancellation | **[ bool](#bool)**<br/>Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have [Operation.error][] value with a [google.rpc.Status.code][google.rpc.Status.code] of 1, corresponding to `Code.CANCELLED`. |
| api_version | **[ string](#string)**<br/>Output only. API version used to start the operation. |
| progress_percentage | **[ int32](#int32)**<br/>Output only. |

## <span id="animeshon.multimedia.v1alpha1.PublishingType">PublishingType</span>


| Name | Description |
| --- | --- |
| PUBLISHING_TYPE_UNSPECIFIED | The default value. This value is used if the state is omitted. |
| SELF | No description. |
| CORPORATE | No description. |

## <span id="animeshon.multimedia.v1alpha1.State">State</span>


| Name | Description |
| --- | --- |
| STATE_UNSPECIFIED | The default value. This value is used if the state is omitted. |
| ONGOING | No description. |
| COMPLETED | No description. |
| SCHEDULED | No description. |
| INTERRUPTED | No description. |
| CANCELED | No description. |
| SUSPENDED | No description. |
| WORK_IN_PROGRESS | No description. |
## <span id="animeshon.multimedia.v1alpha1.AnimeService">AnimeService</span>



| <span id="animeshon.multimedia.v1alpha1.AnimeService.GetAnime">GetAnime</span> |
| --- |
| **rpc GetAnime([GetAnimeRequest](#animeshon.multimedia.v1alpha1.GetAnimeRequest)) [Anime](#animeshon.multimedia.v1alpha1.Anime)**<br/><br/> |

| <span id="animeshon.multimedia.v1alpha1.AnimeService.ListAnimes">ListAnimes</span> |
| --- |
| **rpc ListAnimes([ListAnimesRequest](#animeshon.multimedia.v1alpha1.ListAnimesRequest)) [ListAnimesResponse](#animeshon.multimedia.v1alpha1.ListAnimesResponse)**<br/><br/> |

| <span id="animeshon.multimedia.v1alpha1.AnimeService.CreateAnime">CreateAnime</span> |
| --- |
| **rpc CreateAnime([CreateAnimeRequest](#animeshon.multimedia.v1alpha1.CreateAnimeRequest)) [Anime](#animeshon.multimedia.v1alpha1.Anime)**<br/><br/> |

| <span id="animeshon.multimedia.v1alpha1.AnimeService.UpdateAnime">UpdateAnime</span> |
| --- |
| **rpc UpdateAnime([UpdateAnimeRequest](#animeshon.multimedia.v1alpha1.UpdateAnimeRequest)) [Anime](#animeshon.multimedia.v1alpha1.Anime)**<br/><br/> |

| <span id="animeshon.multimedia.v1alpha1.AnimeService.DeleteAnime">DeleteAnime</span> |
| --- |
| **rpc DeleteAnime([DeleteAnimeRequest](#animeshon.multimedia.v1alpha1.DeleteAnimeRequest)) [.google.protobuf.Empty](#google.protobuf.Empty)**<br/><br/> |

| <span id="animeshon.multimedia.v1alpha1.AnimeService.ReconcileAnimes">ReconcileAnimes</span> |
| --- |
| **rpc ReconcileAnimes([ReconcileAnimesRequest](#animeshon.multimedia.v1alpha1.ReconcileAnimesRequest)) [.google.longrunning.Operation](#google.longrunning.Operation)**<br/><br/>Reconcile animes with the search and knowledge base. |


## <span id="animeshon.multimedia.v1alpha1.Anime">Anime</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The id of the anime. |
| cover_image | **[ string](#string)**<br/>The cover image of the anime. |
| banner_image | **[ string](#string)**<br/>The banner image of the anime. |
| title | **[repeated google.type.LocalizedText](#google.type.LocalizedText)**<br/>The title of the anime localized in multiple languages. |
| synopsis | **[repeated google.type.LocalizedText](#google.type.LocalizedText)**<br/>The synopsis of the anime localized in multiple languages. |
| description | **[repeated google.type.LocalizedText](#google.type.LocalizedText)**<br/>The description of the anime localized in multiple languages. |
| type | **[ Anime.Type](#Anime.Type)**<br/>The type of anime. |
| release_date | **[ google.type.Date](#google.type.Date)**<br/>The original release date of anime. |
| publishing_type | **[ PublishingType](#PublishingType)**<br/>The original publishing type of this content. TODO: migrate this field to a more structured licensing history. |
| state | **[ State](#State)**<br/>The current state of the anime. |
| original | **[ bool](#bool)**<br/>Whether this content is an original work or a derivative work (parody). |

## <span id="animeshon.multimedia.v1alpha1.CreateAnimeRequest">CreateAnimeRequest</span>



| Field | Description |
| --- | --- |
| anime | **[ Anime](#Anime)**<br/>The anime to create. |
| idempotent_resource_id | **[ int64](#int64)**<br/>An idempotent identifier to be used as static resource id. |

## <span id="animeshon.multimedia.v1alpha1.DeleteAnimeRequest">DeleteAnimeRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the anime to delete. |

## <span id="animeshon.multimedia.v1alpha1.GetAnimeRequest">GetAnimeRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the anime to retrieve. |

## <span id="animeshon.multimedia.v1alpha1.ListAnimesRequest">ListAnimesRequest</span>



| Field | Description |
| --- | --- |
| page_size | **[ int32](#int32)**<br/>If unspecified, server will pick an appropriate default. |
| page_token | **[ string](#string)**<br/>The value returned from the previous call. |
| filter | **[ string](#string)**<br/>A filter to be applied to results. |

## <span id="animeshon.multimedia.v1alpha1.ListAnimesResponse">ListAnimesResponse</span>



| Field | Description |
| --- | --- |
| animes | **[repeated Anime](#Anime)**<br/>The list of animes. |
| next_page_token | **[ string](#string)**<br/>A token to retrieve next page of results. |

## <span id="animeshon.multimedia.v1alpha1.ReconcileAnimesRequest">ReconcileAnimesRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the anime to reconcile. Use the wildcard `animes/-` to reconcile all animes. |

## <span id="animeshon.multimedia.v1alpha1.ReconcileAnimesResponse">ReconcileAnimesResponse</span>




## <span id="animeshon.multimedia.v1alpha1.UpdateAnimeRequest">UpdateAnimeRequest</span>



| Field | Description |
| --- | --- |
| anime | **[ Anime](#Anime)**<br/>The anime to update. |
| update_mask | **[ google.protobuf.FieldMask](#google.protobuf.FieldMask)**<br/>The field mask to determine which fields are to be updated. If empty, the server will assume all fields are to be updated. |

## <span id="animeshon.multimedia.v1alpha1.Anime.Type">Anime.Type</span>


| Name | Description |
| --- | --- |
| TYPE_UNSPECIFIED | The default value. This value is used if the state is omitted. |
| TV | No description. |
| MOVIE | No description. |
| OVA | No description. |
| ONA | No description. |
| SPECIAL | No description. |
| WEB | No description. |
| MUSIC_VIDEO | No description. |
| OTHER | No description. |
## <span id="animeshon.multimedia.v1alpha1.ChapterService">ChapterService</span>



| <span id="animeshon.multimedia.v1alpha1.ChapterService.GetChapter">GetChapter</span> |
| --- |
| **rpc GetChapter([GetChapterRequest](#animeshon.multimedia.v1alpha1.GetChapterRequest)) [Chapter](#animeshon.multimedia.v1alpha1.Chapter)**<br/><br/> |

| <span id="animeshon.multimedia.v1alpha1.ChapterService.ListChapters">ListChapters</span> |
| --- |
| **rpc ListChapters([ListChaptersRequest](#animeshon.multimedia.v1alpha1.ListChaptersRequest)) [ListChaptersResponse](#animeshon.multimedia.v1alpha1.ListChaptersResponse)**<br/><br/> |

| <span id="animeshon.multimedia.v1alpha1.ChapterService.CreateChapter">CreateChapter</span> |
| --- |
| **rpc CreateChapter([CreateChapterRequest](#animeshon.multimedia.v1alpha1.CreateChapterRequest)) [Chapter](#animeshon.multimedia.v1alpha1.Chapter)**<br/><br/> |

| <span id="animeshon.multimedia.v1alpha1.ChapterService.BatchCreateChapters">BatchCreateChapters</span> |
| --- |
| **rpc BatchCreateChapters([BatchCreateChaptersRequest](#animeshon.multimedia.v1alpha1.BatchCreateChaptersRequest)) [.google.longrunning.Operation](#google.longrunning.Operation)**<br/><br/> |

| <span id="animeshon.multimedia.v1alpha1.ChapterService.UpdateChapter">UpdateChapter</span> |
| --- |
| **rpc UpdateChapter([UpdateChapterRequest](#animeshon.multimedia.v1alpha1.UpdateChapterRequest)) [Chapter](#animeshon.multimedia.v1alpha1.Chapter)**<br/><br/> |

| <span id="animeshon.multimedia.v1alpha1.ChapterService.DeleteChapter">DeleteChapter</span> |
| --- |
| **rpc DeleteChapter([DeleteChapterRequest](#animeshon.multimedia.v1alpha1.DeleteChapterRequest)) [.google.protobuf.Empty](#google.protobuf.Empty)**<br/><br/> |

| <span id="animeshon.multimedia.v1alpha1.ChapterService.ReconcileChapters">ReconcileChapters</span> |
| --- |
| **rpc ReconcileChapters([ReconcileChaptersRequest](#animeshon.multimedia.v1alpha1.ReconcileChaptersRequest)) [.google.longrunning.Operation](#google.longrunning.Operation)**<br/><br/>Reconcile chapters with the search and knowledge base. |


## <span id="animeshon.multimedia.v1alpha1.BatchCreateChaptersRequest">BatchCreateChaptersRequest</span>



| Field | Description |
| --- | --- |
| requests | **[repeated BatchCreateChaptersRequest.Request](#BatchCreateChaptersRequest.Request)**<br/>Individual create chapter requests for this batch. |
| parent | **[ string](#string)**<br/>The parent this batch belongs to. |

## <span id="animeshon.multimedia.v1alpha1.BatchCreateChaptersRequest.Request">BatchCreateChaptersRequest.Request</span>



| Field | Description |
| --- | --- |
| chapter | **[ Chapter](#Chapter)**<br/>The chapter to create. |
| idempotent_resource_id | **[ int64](#int64)**<br/>An idempotent identifier to be used as static resource id. |

## <span id="animeshon.multimedia.v1alpha1.BatchCreateChaptersResponse">BatchCreateChaptersResponse</span>



| Field | Description |
| --- | --- |
| responses | **[repeated BatchCreateChaptersResponse.Response](#BatchCreateChaptersResponse.Response)**<br/>Individual responses to create chapter requests within the batch. |

## <span id="animeshon.multimedia.v1alpha1.BatchCreateChaptersResponse.Response">BatchCreateChaptersResponse.Response</span>



| Field | Description |
| --- | --- |
| chapter | **[ Chapter](#Chapter)**<br/>The newly created chapter. |
| error | **[ google.rpc.Status](#google.rpc.Status)**<br/>If set, represents the error message for the operation. |

## <span id="animeshon.multimedia.v1alpha1.Chapter">Chapter</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The id of the chapter. |
| cover_image | **[ string](#string)**<br/>The cover image of the chapter. |
| banner_image | **[ string](#string)**<br/>The banner image of the chapter. |
| title | **[repeated google.type.LocalizedText](#google.type.LocalizedText)**<br/>The title of the chapter localized in multiple languages. |
| synopsis | **[repeated google.type.LocalizedText](#google.type.LocalizedText)**<br/>The synopsis of the chapter localized in multiple languages. |
| description | **[repeated google.type.LocalizedText](#google.type.LocalizedText)**<br/>The description of the chapter localized in multiple languages. |
| type | **[ Chapter.Type](#Chapter.Type)**<br/>The type of chapter. |
| index | **[ int32](#int32)**<br/>The index of chapter. |
| release_date | **[ google.type.Date](#google.type.Date)**<br/>The original release date of chapter. |
| page_count | **[ int32](#int32)**<br/>The original page count of the chapter. |

## <span id="animeshon.multimedia.v1alpha1.CreateChapterRequest">CreateChapterRequest</span>



| Field | Description |
| --- | --- |
| parent | **[ string](#string)**<br/>The parent this chapter belongs to. |
| chapter | **[ Chapter](#Chapter)**<br/>The chapter to create. |
| idempotent_resource_id | **[ int64](#int64)**<br/>An idempotent identifier to be used as static resource id. |

## <span id="animeshon.multimedia.v1alpha1.DeleteChapterRequest">DeleteChapterRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the chapter to delete. |

## <span id="animeshon.multimedia.v1alpha1.GetChapterRequest">GetChapterRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the chapter to retrieve. |

## <span id="animeshon.multimedia.v1alpha1.ListChaptersRequest">ListChaptersRequest</span>



| Field | Description |
| --- | --- |
| parent | **[ string](#string)**<br/>The parent this chapter belongs to. |
| page_size | **[ int32](#int32)**<br/>If unspecified, server will pick an appropriate default. |
| page_token | **[ string](#string)**<br/>The value returned from the previous call. |
| filter | **[ string](#string)**<br/>A filter to be applied to results. |

## <span id="animeshon.multimedia.v1alpha1.ListChaptersResponse">ListChaptersResponse</span>



| Field | Description |
| --- | --- |
| chapters | **[repeated Chapter](#Chapter)**<br/>The list of chapters. |
| next_page_token | **[ string](#string)**<br/>A token to retrieve next page of results. |

## <span id="animeshon.multimedia.v1alpha1.ReconcileChaptersRequest">ReconcileChaptersRequest</span>



| Field | Description |
| --- | --- |
| parent | **[ string](#string)**<br/> |

## <span id="animeshon.multimedia.v1alpha1.ReconcileChaptersResponse">ReconcileChaptersResponse</span>




## <span id="animeshon.multimedia.v1alpha1.UpdateChapterRequest">UpdateChapterRequest</span>



| Field | Description |
| --- | --- |
| chapter | **[ Chapter](#Chapter)**<br/>The chapter to update. |
| update_mask | **[ google.protobuf.FieldMask](#google.protobuf.FieldMask)**<br/>The field mask to determine which fields are to be updated. If empty, the server will assume all fields are to be updated. |

## <span id="animeshon.multimedia.v1alpha1.Chapter.Type">Chapter.Type</span>


| Name | Description |
| --- | --- |
| TYPE_UNSPECIFIED | The default value. This value is used if the state is omitted. |
| REGULAR | The chapter is a regular canonical chapter. |
| EXTRA | The chapter is an extra chapter (e.g. specials, credits, etc.). |
## <span id="animeshon.multimedia.v1alpha1.EpisodeService">EpisodeService</span>



| <span id="animeshon.multimedia.v1alpha1.EpisodeService.GetEpisode">GetEpisode</span> |
| --- |
| **rpc GetEpisode([GetEpisodeRequest](#animeshon.multimedia.v1alpha1.GetEpisodeRequest)) [Episode](#animeshon.multimedia.v1alpha1.Episode)**<br/><br/> |

| <span id="animeshon.multimedia.v1alpha1.EpisodeService.ListEpisodes">ListEpisodes</span> |
| --- |
| **rpc ListEpisodes([ListEpisodesRequest](#animeshon.multimedia.v1alpha1.ListEpisodesRequest)) [ListEpisodesResponse](#animeshon.multimedia.v1alpha1.ListEpisodesResponse)**<br/><br/> |

| <span id="animeshon.multimedia.v1alpha1.EpisodeService.CreateEpisode">CreateEpisode</span> |
| --- |
| **rpc CreateEpisode([CreateEpisodeRequest](#animeshon.multimedia.v1alpha1.CreateEpisodeRequest)) [Episode](#animeshon.multimedia.v1alpha1.Episode)**<br/><br/> |

| <span id="animeshon.multimedia.v1alpha1.EpisodeService.BatchCreateEpisodes">BatchCreateEpisodes</span> |
| --- |
| **rpc BatchCreateEpisodes([BatchCreateEpisodesRequest](#animeshon.multimedia.v1alpha1.BatchCreateEpisodesRequest)) [.google.longrunning.Operation](#google.longrunning.Operation)**<br/><br/> |

| <span id="animeshon.multimedia.v1alpha1.EpisodeService.UpdateEpisode">UpdateEpisode</span> |
| --- |
| **rpc UpdateEpisode([UpdateEpisodeRequest](#animeshon.multimedia.v1alpha1.UpdateEpisodeRequest)) [Episode](#animeshon.multimedia.v1alpha1.Episode)**<br/><br/> |

| <span id="animeshon.multimedia.v1alpha1.EpisodeService.DeleteEpisode">DeleteEpisode</span> |
| --- |
| **rpc DeleteEpisode([DeleteEpisodeRequest](#animeshon.multimedia.v1alpha1.DeleteEpisodeRequest)) [.google.protobuf.Empty](#google.protobuf.Empty)**<br/><br/> |

| <span id="animeshon.multimedia.v1alpha1.EpisodeService.ReconcileEpisodes">ReconcileEpisodes</span> |
| --- |
| **rpc ReconcileEpisodes([ReconcileEpisodesRequest](#animeshon.multimedia.v1alpha1.ReconcileEpisodesRequest)) [.google.longrunning.Operation](#google.longrunning.Operation)**<br/><br/>Reconcile episodes with the search and knowledge base. |


## <span id="animeshon.multimedia.v1alpha1.BatchCreateEpisodesRequest">BatchCreateEpisodesRequest</span>



| Field | Description |
| --- | --- |
| requests | **[repeated BatchCreateEpisodesRequest.Request](#BatchCreateEpisodesRequest.Request)**<br/>Individual create episode requests for this batch. |
| parent | **[ string](#string)**<br/>The parent this batch belongs to. |

## <span id="animeshon.multimedia.v1alpha1.BatchCreateEpisodesRequest.Request">BatchCreateEpisodesRequest.Request</span>



| Field | Description |
| --- | --- |
| episode | **[ Episode](#Episode)**<br/>The episode to create. |
| idempotent_resource_id | **[ int64](#int64)**<br/>An idempotent identifier to be used as static resource id. |

## <span id="animeshon.multimedia.v1alpha1.BatchCreateEpisodesResponse">BatchCreateEpisodesResponse</span>



| Field | Description |
| --- | --- |
| responses | **[repeated BatchCreateEpisodesResponse.Response](#BatchCreateEpisodesResponse.Response)**<br/>Individual responses to create episode requests within the batch. |

## <span id="animeshon.multimedia.v1alpha1.BatchCreateEpisodesResponse.Response">BatchCreateEpisodesResponse.Response</span>



| Field | Description |
| --- | --- |
| episode | **[ Episode](#Episode)**<br/>The newly created episode. |
| error | **[ google.rpc.Status](#google.rpc.Status)**<br/>If set, represents the error message for the operation. |

## <span id="animeshon.multimedia.v1alpha1.CreateEpisodeRequest">CreateEpisodeRequest</span>



| Field | Description |
| --- | --- |
| parent | **[ string](#string)**<br/>The parent this episode belongs to. |
| episode | **[ Episode](#Episode)**<br/>The episode to create. |
| idempotent_resource_id | **[ int64](#int64)**<br/>An idempotent identifier to be used as static resource id. |

## <span id="animeshon.multimedia.v1alpha1.DeleteEpisodeRequest">DeleteEpisodeRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the episode to delete. |

## <span id="animeshon.multimedia.v1alpha1.Episode">Episode</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The id of the episode. |
| cover_image | **[ string](#string)**<br/>The cover image of the episode. |
| banner_image | **[ string](#string)**<br/>The banner image of the episode. |
| title | **[repeated google.type.LocalizedText](#google.type.LocalizedText)**<br/>The title of the episode localized in multiple languages. |
| synopsis | **[repeated google.type.LocalizedText](#google.type.LocalizedText)**<br/>The synopsis of the episode localized in multiple languages. |
| description | **[repeated google.type.LocalizedText](#google.type.LocalizedText)**<br/>The description of the episode localized in multiple languages. |
| type | **[ Episode.Type](#Episode.Type)**<br/>The type of episode. |
| index | **[ int32](#int32)**<br/>The index of episode. |
| release_date | **[ google.type.Date](#google.type.Date)**<br/>The original release date of episode. |
| duration | **[ google.protobuf.Duration](#google.protobuf.Duration)**<br/>The original duration of the episode. |

## <span id="animeshon.multimedia.v1alpha1.GetEpisodeRequest">GetEpisodeRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the episode to retrieve. |

## <span id="animeshon.multimedia.v1alpha1.ListEpisodesRequest">ListEpisodesRequest</span>



| Field | Description |
| --- | --- |
| parent | **[ string](#string)**<br/>The parent this episode belongs to. |
| page_size | **[ int32](#int32)**<br/>If unspecified, server will pick an appropriate default. |
| page_token | **[ string](#string)**<br/>The value returned from the previous call. |
| filter | **[ string](#string)**<br/>A filter to be applied to results. |

## <span id="animeshon.multimedia.v1alpha1.ListEpisodesResponse">ListEpisodesResponse</span>



| Field | Description |
| --- | --- |
| episodes | **[repeated Episode](#Episode)**<br/>The list of episodes. |
| next_page_token | **[ string](#string)**<br/>A token to retrieve next page of results. |

## <span id="animeshon.multimedia.v1alpha1.ReconcileEpisodesRequest">ReconcileEpisodesRequest</span>



| Field | Description |
| --- | --- |
| parent | **[ string](#string)**<br/> |

## <span id="animeshon.multimedia.v1alpha1.ReconcileEpisodesResponse">ReconcileEpisodesResponse</span>




## <span id="animeshon.multimedia.v1alpha1.UpdateEpisodeRequest">UpdateEpisodeRequest</span>



| Field | Description |
| --- | --- |
| episode | **[ Episode](#Episode)**<br/>The episode to update. |
| update_mask | **[ google.protobuf.FieldMask](#google.protobuf.FieldMask)**<br/>The field mask to determine which fields are to be updated. If empty, the server will assume all fields are to be updated. |

## <span id="animeshon.multimedia.v1alpha1.Episode.Type">Episode.Type</span>


| Name | Description |
| --- | --- |
| TYPE_UNSPECIFIED | The default value. This value is used if the state is omitted. |
| REGULAR | The episode is a regular canonical episode. |
| RECAP | The episode is a recap. |
| PARODY | The episode is a parody. |
| PROMO | The episode is a promo. |
| SPECIAL | The episode is a special. |
| OPENING_ENDING | The episode is an opening or ending. |
| OTHER | The episode is unclassified. |
## <span id="animeshon.multimedia.v1alpha1.GraphicNovelService">GraphicNovelService</span>



| <span id="animeshon.multimedia.v1alpha1.GraphicNovelService.GetGraphicNovel">GetGraphicNovel</span> |
| --- |
| **rpc GetGraphicNovel([GetGraphicNovelRequest](#animeshon.multimedia.v1alpha1.GetGraphicNovelRequest)) [GraphicNovel](#animeshon.multimedia.v1alpha1.GraphicNovel)**<br/><br/> |

| <span id="animeshon.multimedia.v1alpha1.GraphicNovelService.ListGraphicNovels">ListGraphicNovels</span> |
| --- |
| **rpc ListGraphicNovels([ListGraphicNovelsRequest](#animeshon.multimedia.v1alpha1.ListGraphicNovelsRequest)) [ListGraphicNovelsResponse](#animeshon.multimedia.v1alpha1.ListGraphicNovelsResponse)**<br/><br/> |

| <span id="animeshon.multimedia.v1alpha1.GraphicNovelService.CreateGraphicNovel">CreateGraphicNovel</span> |
| --- |
| **rpc CreateGraphicNovel([CreateGraphicNovelRequest](#animeshon.multimedia.v1alpha1.CreateGraphicNovelRequest)) [GraphicNovel](#animeshon.multimedia.v1alpha1.GraphicNovel)**<br/><br/> |

| <span id="animeshon.multimedia.v1alpha1.GraphicNovelService.UpdateGraphicNovel">UpdateGraphicNovel</span> |
| --- |
| **rpc UpdateGraphicNovel([UpdateGraphicNovelRequest](#animeshon.multimedia.v1alpha1.UpdateGraphicNovelRequest)) [GraphicNovel](#animeshon.multimedia.v1alpha1.GraphicNovel)**<br/><br/> |

| <span id="animeshon.multimedia.v1alpha1.GraphicNovelService.DeleteGraphicNovel">DeleteGraphicNovel</span> |
| --- |
| **rpc DeleteGraphicNovel([DeleteGraphicNovelRequest](#animeshon.multimedia.v1alpha1.DeleteGraphicNovelRequest)) [.google.protobuf.Empty](#google.protobuf.Empty)**<br/><br/> |

| <span id="animeshon.multimedia.v1alpha1.GraphicNovelService.ReconcileGraphicNovels">ReconcileGraphicNovels</span> |
| --- |
| **rpc ReconcileGraphicNovels([ReconcileGraphicNovelsRequest](#animeshon.multimedia.v1alpha1.ReconcileGraphicNovelsRequest)) [.google.longrunning.Operation](#google.longrunning.Operation)**<br/><br/>Reconcile graphic novels with the search and knowledge base. |


## <span id="animeshon.multimedia.v1alpha1.CreateGraphicNovelRequest">CreateGraphicNovelRequest</span>



| Field | Description |
| --- | --- |
| graphic_novel | **[ GraphicNovel](#GraphicNovel)**<br/>The graphic novel to create. |
| idempotent_resource_id | **[ int64](#int64)**<br/>An idempotent identifier to be used as static resource id. |

## <span id="animeshon.multimedia.v1alpha1.DeleteGraphicNovelRequest">DeleteGraphicNovelRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the graphic novel to delete. |

## <span id="animeshon.multimedia.v1alpha1.GetGraphicNovelRequest">GetGraphicNovelRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the graphic novel to retrieve. |

## <span id="animeshon.multimedia.v1alpha1.GraphicNovel">GraphicNovel</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The id of the graphic novel. |
| cover_image | **[ string](#string)**<br/>The cover image of the graphic novel. |
| banner_image | **[ string](#string)**<br/>The banner image of the graphic novel. |
| title | **[repeated google.type.LocalizedText](#google.type.LocalizedText)**<br/>The title of the graphic novel localized in multiple languages. |
| synopsis | **[repeated google.type.LocalizedText](#google.type.LocalizedText)**<br/>The synopsis of the graphic novel localized in multiple languages. |
| description | **[repeated google.type.LocalizedText](#google.type.LocalizedText)**<br/>The description of the graphic novel localized in multiple languages. |
| type | **[ GraphicNovel.Type](#GraphicNovel.Type)**<br/>The type of graphic novel. |
| release_date | **[ google.type.Date](#google.type.Date)**<br/>The original release date of graphic novel. |
| publishing_type | **[ PublishingType](#PublishingType)**<br/>The original publishing type of this content. TODO: migrate this field to a more structured licensing history. |
| state | **[ State](#State)**<br/>The current state of the graphic novel. |
| original | **[ bool](#bool)**<br/>Whether this content is an original work or a derivative work (parody). |

## <span id="animeshon.multimedia.v1alpha1.ListGraphicNovelsRequest">ListGraphicNovelsRequest</span>



| Field | Description |
| --- | --- |
| page_size | **[ int32](#int32)**<br/>If unspecified, server will pick an appropriate default. |
| page_token | **[ string](#string)**<br/>The value returned from the previous call. |
| filter | **[ string](#string)**<br/>A filter to be applied to results. |

## <span id="animeshon.multimedia.v1alpha1.ListGraphicNovelsResponse">ListGraphicNovelsResponse</span>



| Field | Description |
| --- | --- |
| graphic_novels | **[repeated GraphicNovel](#GraphicNovel)**<br/>The list of graphic novels. |
| next_page_token | **[ string](#string)**<br/>A token to retrieve next page of results. |

## <span id="animeshon.multimedia.v1alpha1.ReconcileGraphicNovelsRequest">ReconcileGraphicNovelsRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the graphic novel to reconcile. Use the wildcard `graphicNovels/-` to reconcile all graphic novels. |

## <span id="animeshon.multimedia.v1alpha1.ReconcileGraphicNovelsResponse">ReconcileGraphicNovelsResponse</span>




## <span id="animeshon.multimedia.v1alpha1.UpdateGraphicNovelRequest">UpdateGraphicNovelRequest</span>



| Field | Description |
| --- | --- |
| graphic_novel | **[ GraphicNovel](#GraphicNovel)**<br/>The graphic novel to update. |
| update_mask | **[ google.protobuf.FieldMask](#google.protobuf.FieldMask)**<br/>The field mask to determine which fields are to be updated. If empty, the server will assume all fields are to be updated. |

## <span id="animeshon.multimedia.v1alpha1.GraphicNovel.Type">GraphicNovel.Type</span>


| Name | Description |
| --- | --- |
| TYPE_UNSPECIFIED | The default value. This value is used if the state is omitted. |
| MANGA | No description. |
| ONE_SHOT | No description. |
| MANHUA | No description. |
| MANHWA | No description. |
| OEL | No description. |
| WEB_COMIC | No description. |
| YON_KOMA | No description. |
| OTHER | No description. |
## <span id="animeshon.multimedia.v1alpha1.VisualNovelService">VisualNovelService</span>



| <span id="animeshon.multimedia.v1alpha1.VisualNovelService.GetVisualNovel">GetVisualNovel</span> |
| --- |
| **rpc GetVisualNovel([GetVisualNovelRequest](#animeshon.multimedia.v1alpha1.GetVisualNovelRequest)) [VisualNovel](#animeshon.multimedia.v1alpha1.VisualNovel)**<br/><br/> |

| <span id="animeshon.multimedia.v1alpha1.VisualNovelService.ListVisualNovels">ListVisualNovels</span> |
| --- |
| **rpc ListVisualNovels([ListVisualNovelsRequest](#animeshon.multimedia.v1alpha1.ListVisualNovelsRequest)) [ListVisualNovelsResponse](#animeshon.multimedia.v1alpha1.ListVisualNovelsResponse)**<br/><br/> |

| <span id="animeshon.multimedia.v1alpha1.VisualNovelService.CreateVisualNovel">CreateVisualNovel</span> |
| --- |
| **rpc CreateVisualNovel([CreateVisualNovelRequest](#animeshon.multimedia.v1alpha1.CreateVisualNovelRequest)) [VisualNovel](#animeshon.multimedia.v1alpha1.VisualNovel)**<br/><br/> |

| <span id="animeshon.multimedia.v1alpha1.VisualNovelService.UpdateVisualNovel">UpdateVisualNovel</span> |
| --- |
| **rpc UpdateVisualNovel([UpdateVisualNovelRequest](#animeshon.multimedia.v1alpha1.UpdateVisualNovelRequest)) [VisualNovel](#animeshon.multimedia.v1alpha1.VisualNovel)**<br/><br/> |

| <span id="animeshon.multimedia.v1alpha1.VisualNovelService.DeleteVisualNovel">DeleteVisualNovel</span> |
| --- |
| **rpc DeleteVisualNovel([DeleteVisualNovelRequest](#animeshon.multimedia.v1alpha1.DeleteVisualNovelRequest)) [.google.protobuf.Empty](#google.protobuf.Empty)**<br/><br/> |

| <span id="animeshon.multimedia.v1alpha1.VisualNovelService.ReconcileVisualNovels">ReconcileVisualNovels</span> |
| --- |
| **rpc ReconcileVisualNovels([ReconcileVisualNovelsRequest](#animeshon.multimedia.v1alpha1.ReconcileVisualNovelsRequest)) [.google.longrunning.Operation](#google.longrunning.Operation)**<br/><br/>Reconcile visual novels with the search and knowledge base. |


## <span id="animeshon.multimedia.v1alpha1.CreateVisualNovelRequest">CreateVisualNovelRequest</span>



| Field | Description |
| --- | --- |
| visual_novel | **[ VisualNovel](#VisualNovel)**<br/>The visual novel to create. |
| idempotent_resource_id | **[ int64](#int64)**<br/>An idempotent identifier to be used as static resource id. |

## <span id="animeshon.multimedia.v1alpha1.DeleteVisualNovelRequest">DeleteVisualNovelRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the visual novel to delete. |

## <span id="animeshon.multimedia.v1alpha1.GetVisualNovelRequest">GetVisualNovelRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the visual novel to retrieve. |

## <span id="animeshon.multimedia.v1alpha1.ListVisualNovelsRequest">ListVisualNovelsRequest</span>



| Field | Description |
| --- | --- |
| page_size | **[ int32](#int32)**<br/>If unspecified, server will pick an appropriate default. |
| page_token | **[ string](#string)**<br/>The value returned from the previous call. |
| filter | **[ string](#string)**<br/>A filter to be applied to results. |

## <span id="animeshon.multimedia.v1alpha1.ListVisualNovelsResponse">ListVisualNovelsResponse</span>



| Field | Description |
| --- | --- |
| visual_novels | **[repeated VisualNovel](#VisualNovel)**<br/>The list of visual novels. |
| next_page_token | **[ string](#string)**<br/>A token to retrieve next page of results. |

## <span id="animeshon.multimedia.v1alpha1.ReconcileVisualNovelsRequest">ReconcileVisualNovelsRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the visual novel to reconcile. Use the wildcard `visualNovels/-` to reconcile all visual novels. |

## <span id="animeshon.multimedia.v1alpha1.ReconcileVisualNovelsResponse">ReconcileVisualNovelsResponse</span>




## <span id="animeshon.multimedia.v1alpha1.UpdateVisualNovelRequest">UpdateVisualNovelRequest</span>



| Field | Description |
| --- | --- |
| visual_novel | **[ VisualNovel](#VisualNovel)**<br/>The visual novel to update. |
| update_mask | **[ google.protobuf.FieldMask](#google.protobuf.FieldMask)**<br/>The field mask to determine which fields are to be updated. If empty, the server will assume all fields are to be updated. |

## <span id="animeshon.multimedia.v1alpha1.VisualNovel">VisualNovel</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The id of the visual novel. |
| cover_image | **[ string](#string)**<br/>The cover image of the visual novel. |
| banner_image | **[ string](#string)**<br/>The banner image of the visual novel. |
| title | **[repeated google.type.LocalizedText](#google.type.LocalizedText)**<br/>The title of the visual novel localized in multiple languages. |
| synopsis | **[repeated google.type.LocalizedText](#google.type.LocalizedText)**<br/>The synopsis of the visual novel localized in multiple languages. |
| description | **[repeated google.type.LocalizedText](#google.type.LocalizedText)**<br/>The description of the visual novel localized in multiple languages. |
| type | **[ VisualNovel.Type](#VisualNovel.Type)**<br/>The type of visual novel. |
| release_date | **[ google.type.Date](#google.type.Date)**<br/>The original release date of visual novel. |
| publishing_type | **[ PublishingType](#PublishingType)**<br/>The original publishing type of this content. TODO: migrate this field to a more structured licensing history. |
| state | **[ State](#State)**<br/>The current state of the light novel. |
| original | **[ bool](#bool)**<br/>Whether this content is an original work or a derivative work (parody). |
| length | **[ VisualNovel.PlayLength](#VisualNovel.PlayLength)**<br/>The average duration of the visual novel. |

## <span id="animeshon.multimedia.v1alpha1.VisualNovel.PlayLength">VisualNovel.PlayLength</span>


| Name | Description |
| --- | --- |
| PLAY_LENGTH_UNSPECIFIED | The default value. This value is used if the state is omitted. |
| VERY_SHORT | No description. |
| SHORT | No description. |
| MEDIUM | No description. |
| LONG | No description. |
| VERY_LONG | No description. |

## <span id="animeshon.multimedia.v1alpha1.VisualNovel.Type">VisualNovel.Type</span>


| Name | Description |
| --- | --- |
| TYPE_UNSPECIFIED | The default value. This value is used if the state is omitted. |
## <span id="animeshon.multimedia.v1alpha1.LightNovelService">LightNovelService</span>



| <span id="animeshon.multimedia.v1alpha1.LightNovelService.GetLightNovel">GetLightNovel</span> |
| --- |
| **rpc GetLightNovel([GetLightNovelRequest](#animeshon.multimedia.v1alpha1.GetLightNovelRequest)) [LightNovel](#animeshon.multimedia.v1alpha1.LightNovel)**<br/><br/> |

| <span id="animeshon.multimedia.v1alpha1.LightNovelService.ListLightNovels">ListLightNovels</span> |
| --- |
| **rpc ListLightNovels([ListLightNovelsRequest](#animeshon.multimedia.v1alpha1.ListLightNovelsRequest)) [ListLightNovelsResponse](#animeshon.multimedia.v1alpha1.ListLightNovelsResponse)**<br/><br/> |

| <span id="animeshon.multimedia.v1alpha1.LightNovelService.CreateLightNovel">CreateLightNovel</span> |
| --- |
| **rpc CreateLightNovel([CreateLightNovelRequest](#animeshon.multimedia.v1alpha1.CreateLightNovelRequest)) [LightNovel](#animeshon.multimedia.v1alpha1.LightNovel)**<br/><br/> |

| <span id="animeshon.multimedia.v1alpha1.LightNovelService.UpdateLightNovel">UpdateLightNovel</span> |
| --- |
| **rpc UpdateLightNovel([UpdateLightNovelRequest](#animeshon.multimedia.v1alpha1.UpdateLightNovelRequest)) [LightNovel](#animeshon.multimedia.v1alpha1.LightNovel)**<br/><br/> |

| <span id="animeshon.multimedia.v1alpha1.LightNovelService.DeleteLightNovel">DeleteLightNovel</span> |
| --- |
| **rpc DeleteLightNovel([DeleteLightNovelRequest](#animeshon.multimedia.v1alpha1.DeleteLightNovelRequest)) [.google.protobuf.Empty](#google.protobuf.Empty)**<br/><br/> |

| <span id="animeshon.multimedia.v1alpha1.LightNovelService.ReconcileLightNovels">ReconcileLightNovels</span> |
| --- |
| **rpc ReconcileLightNovels([ReconcileLightNovelsRequest](#animeshon.multimedia.v1alpha1.ReconcileLightNovelsRequest)) [.google.longrunning.Operation](#google.longrunning.Operation)**<br/><br/>Reconcile light novels with the search and knowledge base. |


## <span id="animeshon.multimedia.v1alpha1.CreateLightNovelRequest">CreateLightNovelRequest</span>



| Field | Description |
| --- | --- |
| light_novel | **[ LightNovel](#LightNovel)**<br/>The light novel to create. |
| idempotent_resource_id | **[ int64](#int64)**<br/>An idempotent identifier to be used as static resource id. |

## <span id="animeshon.multimedia.v1alpha1.DeleteLightNovelRequest">DeleteLightNovelRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the light novel to delete. |

## <span id="animeshon.multimedia.v1alpha1.GetLightNovelRequest">GetLightNovelRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the light novel to retrieve. |

## <span id="animeshon.multimedia.v1alpha1.LightNovel">LightNovel</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The id of the light novel. |
| cover_image | **[ string](#string)**<br/>The cover image of the light novel. |
| banner_image | **[ string](#string)**<br/>The banner image of the light novel. |
| title | **[repeated google.type.LocalizedText](#google.type.LocalizedText)**<br/>The title of the light novel localized in multiple languages. |
| synopsis | **[repeated google.type.LocalizedText](#google.type.LocalizedText)**<br/>The synopsis of the light novel localized in multiple languages. |
| description | **[repeated google.type.LocalizedText](#google.type.LocalizedText)**<br/>The description of the light novel localized in multiple languages. |
| type | **[ LightNovel.Type](#LightNovel.Type)**<br/>The type of light novel. |
| release_date | **[ google.type.Date](#google.type.Date)**<br/>The original release date of light novel. |
| publishing_type | **[ PublishingType](#PublishingType)**<br/>The original publishing type of this content. TODO: migrate this field to a more structured licensing history. |
| state | **[ State](#State)**<br/>The current state of the light novel. |
| original | **[ bool](#bool)**<br/>Whether this content is an original work or a derivative work (parody). |

## <span id="animeshon.multimedia.v1alpha1.ListLightNovelsRequest">ListLightNovelsRequest</span>



| Field | Description |
| --- | --- |
| page_size | **[ int32](#int32)**<br/>If unspecified, server will pick an appropriate default. |
| page_token | **[ string](#string)**<br/>The value returned from the previous call. |
| filter | **[ string](#string)**<br/>A filter to be applied to results. |

## <span id="animeshon.multimedia.v1alpha1.ListLightNovelsResponse">ListLightNovelsResponse</span>



| Field | Description |
| --- | --- |
| light_novels | **[repeated LightNovel](#LightNovel)**<br/>The list of light novels. |
| next_page_token | **[ string](#string)**<br/>A token to retrieve next page of results. |

## <span id="animeshon.multimedia.v1alpha1.ReconcileLightNovelsRequest">ReconcileLightNovelsRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the light novel to reconcile. Use the wildcard `lightNovels/-` to reconcile all light novels. |

## <span id="animeshon.multimedia.v1alpha1.ReconcileLightNovelsResponse">ReconcileLightNovelsResponse</span>




## <span id="animeshon.multimedia.v1alpha1.UpdateLightNovelRequest">UpdateLightNovelRequest</span>



| Field | Description |
| --- | --- |
| light_novel | **[ LightNovel](#LightNovel)**<br/>The light novel to update. |
| update_mask | **[ google.protobuf.FieldMask](#google.protobuf.FieldMask)**<br/>The field mask to determine which fields are to be updated. If empty, the server will assume all fields are to be updated. |

## <span id="animeshon.multimedia.v1alpha1.LightNovel.Type">LightNovel.Type</span>


| Name | Description |
| --- | --- |
| TYPE_UNSPECIFIED | The default value. This value is used if the state is omitted. |
