---
title: animeshon.image.v1alpha1
---

# Package animeshon.image.v1alpha1

## Index
- [Image](#animeshon.image.v1alpha1.Image)
- [ImageRouter](#animeshon.image.v1alpha1.ImageRouter)
- [Album](#animeshon.image.v1alpha1.Album)
- [AlbumSettings](#animeshon.image.v1alpha1.AlbumSettings)
- [CreateAlbumRequest](#animeshon.image.v1alpha1.CreateAlbumRequest)
- [DeleteAlbumRequest](#animeshon.image.v1alpha1.DeleteAlbumRequest)
- [GetAlbumRequest](#animeshon.image.v1alpha1.GetAlbumRequest)
- [GetAlbumSettingsRequest](#animeshon.image.v1alpha1.GetAlbumSettingsRequest)
- [GetImageRequest](#animeshon.image.v1alpha1.GetImageRequest)
- [GetImageRequest.ResizeBounds](#animeshon.image.v1alpha1.GetImageRequest.ResizeBounds)
- [GetImageRouteRequest](#animeshon.image.v1alpha1.GetImageRouteRequest)
- [GetImageRouteResponse](#animeshon.image.v1alpha1.GetImageRouteResponse)
- [ImportImageRequest](#animeshon.image.v1alpha1.ImportImageRequest)
- [ImportImageRequest.WebCacheOptions](#animeshon.image.v1alpha1.ImportImageRequest.WebCacheOptions)
- [ImportImageResponse](#animeshon.image.v1alpha1.ImportImageResponse)
- [ImportImageResponse.ImportImageRemoteError](#animeshon.image.v1alpha1.ImportImageResponse.ImportImageRemoteError)
- [ImportImageResponse.ImportImageResult](#animeshon.image.v1alpha1.ImportImageResponse.ImportImageResult)
- [ListAlbumsRequest](#animeshon.image.v1alpha1.ListAlbumsRequest)
- [ListAlbumsResponse](#animeshon.image.v1alpha1.ListAlbumsResponse)
- [RouteImageRequest](#animeshon.image.v1alpha1.RouteImageRequest)
- [UpdateAlbumSettingsRequest](#animeshon.image.v1alpha1.UpdateAlbumSettingsRequest)
- [UploadImageRequest](#animeshon.image.v1alpha1.UploadImageRequest)
- [UploadImageResponse](#animeshon.image.v1alpha1.UploadImageResponse)

## <span id="animeshon.image.v1alpha1.Image">Image</span>



| <span id="animeshon.image.v1alpha1.Image.UploadImage">UploadImage</span> |
| --- |
| **rpc UploadImage([UploadImageRequest](#animeshon.image.v1alpha1.UploadImageRequest)) [UploadImageResponse](#animeshon.image.v1alpha1.UploadImageResponse)**<br/><br/>Uploads an image through the request HttpBody. |

| <span id="animeshon.image.v1alpha1.Image.ImportImage">ImportImage</span> |
| --- |
| **rpc ImportImage([ImportImageRequest](#animeshon.image.v1alpha1.ImportImageRequest)) [ImportImageResponse](#animeshon.image.v1alpha1.ImportImageResponse)**<br/><br/>Imports an image from a remote web address. |

| <span id="animeshon.image.v1alpha1.Image.GetImage">GetImage</span> |
| --- |
| **rpc GetImage([GetImageRequest](#animeshon.image.v1alpha1.GetImageRequest)) [.google.api.HttpBody](#google.api.HttpBody)**<br/><br/>Gets an image in binary representation with the format and size requested. |

| <span id="animeshon.image.v1alpha1.Image.GetAlbum">GetAlbum</span> |
| --- |
| **rpc GetAlbum([GetAlbumRequest](#animeshon.image.v1alpha1.GetAlbumRequest)) [Album](#animeshon.image.v1alpha1.Album)**<br/><br/>Gets an image album. |

| <span id="animeshon.image.v1alpha1.Image.ListAlbums">ListAlbums</span> |
| --- |
| **rpc ListAlbums([ListAlbumsRequest](#animeshon.image.v1alpha1.ListAlbumsRequest)) [ListAlbumsResponse](#animeshon.image.v1alpha1.ListAlbumsResponse)**<br/><br/>Lists image albums with pagination. |

| <span id="animeshon.image.v1alpha1.Image.CreateAlbum">CreateAlbum</span> |
| --- |
| **rpc CreateAlbum([CreateAlbumRequest](#animeshon.image.v1alpha1.CreateAlbumRequest)) [Album](#animeshon.image.v1alpha1.Album)**<br/><br/>Creates a new image album. |

| <span id="animeshon.image.v1alpha1.Image.DeleteAlbum">DeleteAlbum</span> |
| --- |
| **rpc DeleteAlbum([DeleteAlbumRequest](#animeshon.image.v1alpha1.DeleteAlbumRequest)) [.google.protobuf.Empty](#google.protobuf.Empty)**<br/><br/>Deletes an existing image album. |

| <span id="animeshon.image.v1alpha1.Image.GetAlbumSettings">GetAlbumSettings</span> |
| --- |
| **rpc GetAlbumSettings([GetAlbumSettingsRequest](#animeshon.image.v1alpha1.GetAlbumSettingsRequest)) [AlbumSettings](#animeshon.image.v1alpha1.AlbumSettings)**<br/><br/>Gets the settings of an image album. |

| <span id="animeshon.image.v1alpha1.Image.UpdateAlbumSettings">UpdateAlbumSettings</span> |
| --- |
| **rpc UpdateAlbumSettings([UpdateAlbumSettingsRequest](#animeshon.image.v1alpha1.UpdateAlbumSettingsRequest)) [AlbumSettings](#animeshon.image.v1alpha1.AlbumSettings)**<br/><br/>Updates the settings of an image album. |

## <span id="animeshon.image.v1alpha1.ImageRouter">ImageRouter</span>

The image router is used to generate public links that can be routed through
the Animeshon CDN (Content Delivery Network) to guarantee high performance
and availability worldwide.

| <span id="animeshon.image.v1alpha1.ImageRouter.GetImageRoute">GetImageRoute</span> |
| --- |
| **rpc GetImageRoute([GetImageRouteRequest](#animeshon.image.v1alpha1.GetImageRouteRequest)) [GetImageRouteResponse](#animeshon.image.v1alpha1.GetImageRouteResponse)**<br/><br/>Gets the image public link address that is used to fetch images via CDN. |

| <span id="animeshon.image.v1alpha1.ImageRouter.RouteImage">RouteImage</span> |
| --- |
| **rpc RouteImage([RouteImageRequest](#animeshon.image.v1alpha1.RouteImageRequest)) [.google.api.HttpBody](#google.api.HttpBody)**<br/><br/>Routes a raw request received by a CDN host to its target image. |


## <span id="animeshon.image.v1alpha1.Album">Album</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The album resource name. |
| display_name | **[ string](#string)**<br/>The album display name. |

## <span id="animeshon.image.v1alpha1.AlbumSettings">AlbumSettings</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The album resource name. |
| bucket | **[ string](#string)**<br/>The bucket where to store resources. |
| system_managed | **[ bool](#bool)**<br/>Whether the album is system managed. |
| enable_search | **[ bool](#bool)**<br/>Whether images in this album show up in the search engine results. |
| enable_annotation | **[ bool](#bool)**<br/>Whether images in this album can be annotated. |
| enable_encryption | **[ bool](#bool)**<br/>Whether images in this album must be client-side encrypted. |
| high_visibility | **[ bool](#bool)**<br/>Whether the content of this album is highly visible by the public such as profile pictures and banners. Highly visible albums *cannot* contain sensitive or adult images. |

## <span id="animeshon.image.v1alpha1.CreateAlbumRequest">CreateAlbumRequest</span>



| Field | Description |
| --- | --- |
| parent | **[ string](#string)**<br/>The parent this album belongs to. |
| album | **[ Album](#Album)**<br/>The album to create. |

## <span id="animeshon.image.v1alpha1.DeleteAlbumRequest">DeleteAlbumRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The album to delete. |

## <span id="animeshon.image.v1alpha1.GetAlbumRequest">GetAlbumRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the album to retrieve. |

## <span id="animeshon.image.v1alpha1.GetAlbumSettingsRequest">GetAlbumSettingsRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the album to retrieve settings from. |

## <span id="animeshon.image.v1alpha1.GetImageRequest">GetImageRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The image resource name. |
| content_type | **[ string](#string)**<br/>If content type is set and differs from the original content type the image will be converted to match the specified content type.

Note: only "image/png", "image/webp", "image/jpeg" are supported values. |
| resize | **[ GetImageRequest.ResizeBounds](#GetImageRequest.ResizeBounds)**<br/>The image bounding box to use for resizing. This value is normally used to request image thumbnails. If both width and height are defined then the value with smaller ratio will be used to resize the image. The resized image has the closest standard ratio to the requested width or height. If the requested ratio is larger than the original image it is ignored. |
| blur | **[ bool](#bool)**<br/>Whether the image returned should be blurred. This is typically used while routing images that have been detected to contain highly sensitive or controversial content that must be censored in some or all regions. |

## <span id="animeshon.image.v1alpha1.GetImageRequest.ResizeBounds">GetImageRequest.ResizeBounds</span>

The image resize bounds.

| Field | Description |
| --- | --- |
| width | **[ int32](#int32)**<br/>The image width. |
| height | **[ int32](#int32)**<br/>The image height. |

## <span id="animeshon.image.v1alpha1.GetImageRouteRequest">GetImageRouteRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/> |

## <span id="animeshon.image.v1alpha1.GetImageRouteResponse">GetImageRouteResponse</span>



| Field | Description |
| --- | --- |
| url | **[ string](#string)**<br/>A routable url that points to a link address backed by the CDN. |

## <span id="animeshon.image.v1alpha1.ImportImageRequest">ImportImageRequest</span>



| Field | Description |
| --- | --- |
| parent | **[ string](#string)**<br/>The image parent of the image. This value defaults to the user performing the import operation if no parent is set. |
| uri | **[ string](#string)**<br/>A publicly-accessible image HTTP/HTTPS URL. When fetching images from HTTP/HTTPS URLs, Animeshon cannot guarantee that the request will be completed. Your request may fail if the specified host denies the request (e.g. due to request throttling or DoS prevention), or if Animeshon throttles requests to the site for abuse prevention. You should not depend on externally-hosted images for production applications. |
| cache_options | **[ ImportImageRequest.WebCacheOptions](#ImportImageRequest.WebCacheOptions)**<br/>The web cache options to apply to the import request. |

## <span id="animeshon.image.v1alpha1.ImportImageRequest.WebCacheOptions">ImportImageRequest.WebCacheOptions</span>

The WebCache options to be used when importing an image from a public
website address.

| Field | Description |
| --- | --- |
| refresh | **[ bool](#bool)**<br/>If refresh is set to true the image is imported from the remote address regardless of an existing local cache, if the fetched image does not match the existing cache the new image is stored and a new resource is created, otherwise the existing (cached) resource is returned. |
| ignore | **[ bool](#bool)**<br/>If ignore is set to true no cache lookup is performed and the image is imported into a new resource. If both "ignore" and "refresh" are set to true then "refresh" has no effect. |

## <span id="animeshon.image.v1alpha1.ImportImageResponse">ImportImageResponse</span>



| Field | Description |
| --- | --- |
| **[oneof](https://developers.google.com/protocol-buffers/docs/proto3#oneof)** _response_<br />result | **[ ImportImageResponse.ImportImageResult](#ImportImageResponse.ImportImageResult)**<br/>If the import was successful this field will provide the newly created image resource name. |
| **[oneof](https://developers.google.com/protocol-buffers/docs/proto3#oneof)** _response_<br />error | **[ ImportImageResponse.ImportImageRemoteError](#ImportImageResponse.ImportImageRemoteError)**<br/>If the import ended up in a failure due to an error with the remote server this field will provide more details about the failure. |
| cache_hit | **[ bool](#bool)**<br/>Whether this image was found in the cache. |

## <span id="animeshon.image.v1alpha1.ImportImageResponse.ImportImageRemoteError">ImportImageResponse.ImportImageRemoteError</span>



| Field | Description |
| --- | --- |
| status_code | **[ int32](#int32)**<br/>The status code returned from the remote server. |
| details | **[ string](#string)**<br/>The details related to the import failure. |

## <span id="animeshon.image.v1alpha1.ImportImageResponse.ImportImageResult">ImportImageResponse.ImportImageResult</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The image resource name. |

## <span id="animeshon.image.v1alpha1.ListAlbumsRequest">ListAlbumsRequest</span>



| Field | Description |
| --- | --- |
| parent | **[ string](#string)**<br/>The parent, which owns this collection of albums. |
| page_size | **[ int32](#int32)**<br/>If unspecified, server will pick an appropriate default. |
| page_token | **[ string](#string)**<br/>The value returned from the previous call. |
| filter | **[ string](#string)**<br/>A filter to be applied to results. |

## <span id="animeshon.image.v1alpha1.ListAlbumsResponse">ListAlbumsResponse</span>



| Field | Description |
| --- | --- |
| albums | **[repeated Album](#Album)**<br/>The list of albums. |
| next_page_token | **[ string](#string)**<br/>A token to retrieve next page of results. |

## <span id="animeshon.image.v1alpha1.RouteImageRequest">RouteImageRequest</span>



| Field | Description |
| --- | --- |
| host | **[ string](#string)**<br/>The host that received the request. |
| path | **[ string](#string)**<br/>The requested path representing an opaque route. |

## <span id="animeshon.image.v1alpha1.UpdateAlbumSettingsRequest">UpdateAlbumSettingsRequest</span>



| Field | Description |
| --- | --- |
| settings | **[ AlbumSettings](#AlbumSettings)**<br/>The album settings to update. |
| update_mask | **[ google.protobuf.FieldMask](#google.protobuf.FieldMask)**<br/>The field mask to determine which fields are to be updated. If empty, the server will assume all fields are to be updated. |

## <span id="animeshon.image.v1alpha1.UploadImageRequest">UploadImageRequest</span>



| Field | Description |
| --- | --- |
| parent | **[ string](#string)**<br/>The image parent of the image. This value defaults to the user performing the upload operation if no parent is set. |
| body | **[ google.api.HttpBody](#google.api.HttpBody)**<br/>The image content, represented as an HttpBody. |

## <span id="animeshon.image.v1alpha1.UploadImageResponse">UploadImageResponse</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The image resource name. |
