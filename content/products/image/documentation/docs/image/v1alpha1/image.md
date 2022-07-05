# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [animeshon/image/v1alpha1/image.proto](#animeshon/image/v1alpha1/image.proto)
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
  
    - [Image](#animeshon.image.v1alpha1.Image)
    - [ImageRouter](#animeshon.image.v1alpha1.ImageRouter)
  
- [animeshon/image/v1alpha1/internal.proto](#animeshon/image/v1alpha1/internal.proto)
    - [AlbumEntry](#animeshon.image.v1alpha1.AlbumEntry)
    - [ImageEntry](#animeshon.image.v1alpha1.ImageEntry)
    - [RouteEntry](#animeshon.image.v1alpha1.RouteEntry)
  
- [Scalar Value Types](#scalar-value-types)



<a name="animeshon/image/v1alpha1/image.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## animeshon/image/v1alpha1/image.proto



<a name="animeshon.image.v1alpha1.Album"></a>

### Album



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | The album resource name. |
| display_name | [string](#string) |  | The album display name. |






<a name="animeshon.image.v1alpha1.AlbumSettings"></a>

### AlbumSettings



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | The album resource name. |
| bucket | [string](#string) |  | The bucket where to store resources. |
| system_managed | [bool](#bool) |  | Whether the album is system managed. |
| enable_search | [bool](#bool) |  | Whether images in this album show up in the search engine results. |
| enable_annotation | [bool](#bool) |  | Whether images in this album can be annotated. |
| enable_encryption | [bool](#bool) |  | Whether images in this album must be client-side encrypted. |
| high_visibility | [bool](#bool) |  | Whether the content of this album is highly visible by the public such as profile pictures and banners. Highly visible albums *cannot* contain sensitive or adult images. |






<a name="animeshon.image.v1alpha1.CreateAlbumRequest"></a>

### CreateAlbumRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| parent | [string](#string) |  | The parent this album belongs to. |
| album | [Album](#animeshon.image.v1alpha1.Album) |  | The album to create. |






<a name="animeshon.image.v1alpha1.DeleteAlbumRequest"></a>

### DeleteAlbumRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | The album to delete. |






<a name="animeshon.image.v1alpha1.GetAlbumRequest"></a>

### GetAlbumRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | The name of the album to retrieve. |






<a name="animeshon.image.v1alpha1.GetAlbumSettingsRequest"></a>

### GetAlbumSettingsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | The name of the album to retrieve settings from. |






<a name="animeshon.image.v1alpha1.GetImageRequest"></a>

### GetImageRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | The image resource name. |
| content_type | [string](#string) |  | If content type is set and differs from the original content type the image will be converted to match the specified content type.

Note: only &#34;image/png&#34;, &#34;image/webp&#34;, &#34;image/jpeg&#34; are supported values. |
| resize | [GetImageRequest.ResizeBounds](#animeshon.image.v1alpha1.GetImageRequest.ResizeBounds) |  | The image bounding box to use for resizing. This value is normally used to request image thumbnails. If both width and height are defined then the value with smaller ratio will be used to resize the image. The resized image has the closest standard ratio to the requested width or height. If the requested ratio is larger than the original image it is ignored. |
| blur | [bool](#bool) |  | Whether the image returned should be blurred. This is typically used while routing images that have been detected to contain highly sensitive or controversial content that must be censored in some or all regions. |






<a name="animeshon.image.v1alpha1.GetImageRequest.ResizeBounds"></a>

### GetImageRequest.ResizeBounds
The image resize bounds.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| width | [int32](#int32) |  | The image width. |
| height | [int32](#int32) |  | The image height. |






<a name="animeshon.image.v1alpha1.GetImageRouteRequest"></a>

### GetImageRouteRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |






<a name="animeshon.image.v1alpha1.GetImageRouteResponse"></a>

### GetImageRouteResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| url | [string](#string) |  | A routable url that points to a link address backed by the CDN. |






<a name="animeshon.image.v1alpha1.ImportImageRequest"></a>

### ImportImageRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| parent | [string](#string) |  | The image parent of the image. This value defaults to the user performing the import operation if no parent is set. |
| uri | [string](#string) |  | A publicly-accessible image HTTP/HTTPS URL. When fetching images from HTTP/HTTPS URLs, Animeshon cannot guarantee that the request will be completed. Your request may fail if the specified host denies the request (e.g. due to request throttling or DoS prevention), or if Animeshon throttles requests to the site for abuse prevention. You should not depend on externally-hosted images for production applications. |
| cache_options | [ImportImageRequest.WebCacheOptions](#animeshon.image.v1alpha1.ImportImageRequest.WebCacheOptions) |  | The web cache options to apply to the import request. |






<a name="animeshon.image.v1alpha1.ImportImageRequest.WebCacheOptions"></a>

### ImportImageRequest.WebCacheOptions
The WebCache options to be used when importing an image from a public
website address.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| refresh | [bool](#bool) |  | If refresh is set to true the image is imported from the remote address regardless of an existing local cache, if the fetched image does not match the existing cache the new image is stored and a new resource is created, otherwise the existing (cached) resource is returned. |
| ignore | [bool](#bool) |  | If ignore is set to true no cache lookup is performed and the image is imported into a new resource. If both &#34;ignore&#34; and &#34;refresh&#34; are set to true then &#34;refresh&#34; has no effect. |






<a name="animeshon.image.v1alpha1.ImportImageResponse"></a>

### ImportImageResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| result | [ImportImageResponse.ImportImageResult](#animeshon.image.v1alpha1.ImportImageResponse.ImportImageResult) |  | If the import was successful this field will provide the newly created image resource name. |
| error | [ImportImageResponse.ImportImageRemoteError](#animeshon.image.v1alpha1.ImportImageResponse.ImportImageRemoteError) |  | If the import ended up in a failure due to an error with the remote server this field will provide more details about the failure. |
| cache_hit | [bool](#bool) |  | Whether this image was found in the cache. |






<a name="animeshon.image.v1alpha1.ImportImageResponse.ImportImageRemoteError"></a>

### ImportImageResponse.ImportImageRemoteError



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status_code | [int32](#int32) |  | The status code returned from the remote server. |
| details | [string](#string) |  | The details related to the import failure. |






<a name="animeshon.image.v1alpha1.ImportImageResponse.ImportImageResult"></a>

### ImportImageResponse.ImportImageResult



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | The image resource name. |






<a name="animeshon.image.v1alpha1.ListAlbumsRequest"></a>

### ListAlbumsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| parent | [string](#string) |  | The parent, which owns this collection of albums. |
| page_size | [int32](#int32) |  | If unspecified, server will pick an appropriate default. |
| page_token | [string](#string) |  | The value returned from the previous call. |
| filter | [string](#string) |  | A filter to be applied to results. |






<a name="animeshon.image.v1alpha1.ListAlbumsResponse"></a>

### ListAlbumsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| albums | [Album](#animeshon.image.v1alpha1.Album) | repeated | The list of albums. |
| next_page_token | [string](#string) |  | A token to retrieve next page of results. |






<a name="animeshon.image.v1alpha1.RouteImageRequest"></a>

### RouteImageRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| host | [string](#string) |  | The host that received the request. |
| path | [string](#string) |  | The requested path representing an opaque route. |






<a name="animeshon.image.v1alpha1.UpdateAlbumSettingsRequest"></a>

### UpdateAlbumSettingsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| settings | [AlbumSettings](#animeshon.image.v1alpha1.AlbumSettings) |  | The album settings to update. |
| update_mask | [google.protobuf.FieldMask](#google.protobuf.FieldMask) |  | The field mask to determine which fields are to be updated. If empty, the server will assume all fields are to be updated. |






<a name="animeshon.image.v1alpha1.UploadImageRequest"></a>

### UploadImageRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| parent | [string](#string) |  | The image parent of the image. This value defaults to the user performing the upload operation if no parent is set. |
| body | [google.api.HttpBody](#google.api.HttpBody) |  | The image content, represented as an HttpBody. |






<a name="animeshon.image.v1alpha1.UploadImageResponse"></a>

### UploadImageResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | The image resource name. |





 

 

 


<a name="animeshon.image.v1alpha1.Image"></a>

### Image


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| UploadImage | [UploadImageRequest](#animeshon.image.v1alpha1.UploadImageRequest) | [UploadImageResponse](#animeshon.image.v1alpha1.UploadImageResponse) | Uploads an image through the request HttpBody. |
| ImportImage | [ImportImageRequest](#animeshon.image.v1alpha1.ImportImageRequest) | [ImportImageResponse](#animeshon.image.v1alpha1.ImportImageResponse) | Imports an image from a remote web address. |
| GetImage | [GetImageRequest](#animeshon.image.v1alpha1.GetImageRequest) | [.google.api.HttpBody](#google.api.HttpBody) | Gets an image in binary representation with the format and size requested. |
| GetAlbum | [GetAlbumRequest](#animeshon.image.v1alpha1.GetAlbumRequest) | [Album](#animeshon.image.v1alpha1.Album) | Gets an image album. |
| ListAlbums | [ListAlbumsRequest](#animeshon.image.v1alpha1.ListAlbumsRequest) | [ListAlbumsResponse](#animeshon.image.v1alpha1.ListAlbumsResponse) | Lists image albums with pagination. |
| CreateAlbum | [CreateAlbumRequest](#animeshon.image.v1alpha1.CreateAlbumRequest) | [Album](#animeshon.image.v1alpha1.Album) | Creates a new image album. |
| DeleteAlbum | [DeleteAlbumRequest](#animeshon.image.v1alpha1.DeleteAlbumRequest) | [.google.protobuf.Empty](#google.protobuf.Empty) | Deletes an existing image album. |
| GetAlbumSettings | [GetAlbumSettingsRequest](#animeshon.image.v1alpha1.GetAlbumSettingsRequest) | [AlbumSettings](#animeshon.image.v1alpha1.AlbumSettings) | Gets the settings of an image album. |
| UpdateAlbumSettings | [UpdateAlbumSettingsRequest](#animeshon.image.v1alpha1.UpdateAlbumSettingsRequest) | [AlbumSettings](#animeshon.image.v1alpha1.AlbumSettings) | Updates the settings of an image album. |


<a name="animeshon.image.v1alpha1.ImageRouter"></a>

### ImageRouter
The image router is used to generate public links that can be routed through
the Animeshon CDN (Content Delivery Network) to guarantee high performance
and availability worldwide.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetImageRoute | [GetImageRouteRequest](#animeshon.image.v1alpha1.GetImageRouteRequest) | [GetImageRouteResponse](#animeshon.image.v1alpha1.GetImageRouteResponse) | Gets the image public link address that is used to fetch images via CDN. |
| RouteImage | [RouteImageRequest](#animeshon.image.v1alpha1.RouteImageRequest) | [.google.api.HttpBody](#google.api.HttpBody) | Routes a raw request received by a CDN host to its target image. |

 



<a name="animeshon/image/v1alpha1/internal.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## animeshon/image/v1alpha1/internal.proto



<a name="animeshon.image.v1alpha1.AlbumEntry"></a>

### AlbumEntry
This is a private internal structure used to store metadata information
about a specific Album. This structure is never exposed to the public.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [int64](#int64) |  | The album resource id. |
| organization_id | [int64](#int64) |  | The organization resource id. Example: `organizations/456`. |
| user_id | [int64](#int64) |  | The user resource id. Example: `users/789`. |
| display_name | [string](#string) |  | The album display name. |
| bucket | [string](#string) |  | The bucket where to store resources. |
| system_managed | [bool](#bool) |  | Whether the album is system managed. |
| enable_search | [bool](#bool) |  | Whether images should be available through the image search. |
| enable_annotation | [bool](#bool) |  | Whether images can be annotated. |
| enable_encryption | [bool](#bool) |  | Whether images should be client-side encrypted. |
| high_visibility | [bool](#bool) |  | Whether the content of this album is highly visible by the public such as profile pictures and banners. |
| create_time | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  | When the album was created. |
| update_time | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  | When the album was updated. |






<a name="animeshon.image.v1alpha1.ImageEntry"></a>

### ImageEntry
This is a private internal structure used to store metadata information
about a specific Image. This structure is never exposed to the public.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [int64](#int64) |  | The image resource id. |
| album_id | [int64](#int64) |  | The album resource id. Example: `albums/123`. |
| uri | [string](#string) |  | The uri of the image file. Example: gs://my-bucket/my-user/my-album/my-image.jpeg |
| mime_type | [string](#string) |  | The MIME type of the image. |
| file_size | [int32](#int32) |  | The size of the image in bytes. |
| width | [int32](#int32) |  | The width of image in pixels. |
| height | [int32](#int32) |  | The height of image in pixels. |
| create_time | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  | When the image was created. |






<a name="animeshon.image.v1alpha1.RouteEntry"></a>

### RouteEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| organization_id | [int64](#int64) |  | The organization resource id. Example: `organizations/456`. |
| user_id | [int64](#int64) |  | The user resource id. Example: `users/789`. |
| album_id | [int64](#int64) |  | The album resource id. |
| image_id | [int64](#int64) |  | The image resource id. |





 

 

 

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

