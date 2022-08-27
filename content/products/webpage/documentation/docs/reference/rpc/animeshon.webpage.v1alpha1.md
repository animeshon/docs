---
title: animeshon.webpage.v1alpha1
---

# Package animeshon.webpage.v1alpha1

## Index
- [Archive](#animeshon.webpage.v1alpha1.Archive)
- [CreatePageRequest](#animeshon.webpage.v1alpha1.CreatePageRequest)
- [DeletePageRequest](#animeshon.webpage.v1alpha1.DeletePageRequest)
- [GetPageRequest](#animeshon.webpage.v1alpha1.GetPageRequest)
- [ImportPageRequest](#animeshon.webpage.v1alpha1.ImportPageRequest)
- [ImportPageRequest.WebCacheOptions](#animeshon.webpage.v1alpha1.ImportPageRequest.WebCacheOptions)
- [ImportPageResponse](#animeshon.webpage.v1alpha1.ImportPageResponse)
- [ImportPageResponse.ImportPageRemoteError](#animeshon.webpage.v1alpha1.ImportPageResponse.ImportPageRemoteError)
- [ImportPageResponse.ImportPageResult](#animeshon.webpage.v1alpha1.ImportPageResponse.ImportPageResult)
- [ListPagesRequest](#animeshon.webpage.v1alpha1.ListPagesRequest)
- [ListPagesResponse](#animeshon.webpage.v1alpha1.ListPagesResponse)
- [Page](#animeshon.webpage.v1alpha1.Page)
- [QueryPageRequest](#animeshon.webpage.v1alpha1.QueryPageRequest)
- [QueryPageResponse](#animeshon.webpage.v1alpha1.QueryPageResponse)
- [QueryPageResponse.QueryPageError](#animeshon.webpage.v1alpha1.QueryPageResponse.QueryPageError)
- [QueryPageResponse.QueryPageResult](#animeshon.webpage.v1alpha1.QueryPageResponse.QueryPageResult)
- [QueryRequest](#animeshon.webpage.v1alpha1.QueryRequest)
- [QueryResponse](#animeshon.webpage.v1alpha1.QueryResponse)
- [QueryResponse.QueryPageError](#animeshon.webpage.v1alpha1.QueryResponse.QueryPageError)
- [QueryResponse.QueryPageResult](#animeshon.webpage.v1alpha1.QueryResponse.QueryPageResult)

## <span id="animeshon.webpage.v1alpha1.Archive">Archive</span>



| <span id="animeshon.webpage.v1alpha1.Archive.Query">Query</span> |
| --- |
| **rpc Query([QueryRequest](#animeshon.webpage.v1alpha1.QueryRequest)) [QueryResponse](#animeshon.webpage.v1alpha1.QueryResponse)**<br/><br/> |

| <span id="animeshon.webpage.v1alpha1.Archive.GetPage">GetPage</span> |
| --- |
| **rpc GetPage([GetPageRequest](#animeshon.webpage.v1alpha1.GetPageRequest)) [Page](#animeshon.webpage.v1alpha1.Page)**<br/><br/> |

| <span id="animeshon.webpage.v1alpha1.Archive.ListPages">ListPages</span> |
| --- |
| **rpc ListPages([ListPagesRequest](#animeshon.webpage.v1alpha1.ListPagesRequest)) [ListPagesResponse](#animeshon.webpage.v1alpha1.ListPagesResponse)**<br/><br/> |

| <span id="animeshon.webpage.v1alpha1.Archive.QueryPage">QueryPage</span> |
| --- |
| **rpc QueryPage([QueryPageRequest](#animeshon.webpage.v1alpha1.QueryPageRequest)) [QueryPageResponse](#animeshon.webpage.v1alpha1.QueryPageResponse)**<br/><br/> |

| <span id="animeshon.webpage.v1alpha1.Archive.CreatePage">CreatePage</span> |
| --- |
| **rpc CreatePage([CreatePageRequest](#animeshon.webpage.v1alpha1.CreatePageRequest)) [Page](#animeshon.webpage.v1alpha1.Page)**<br/><br/> |

| <span id="animeshon.webpage.v1alpha1.Archive.ImportPage">ImportPage</span> |
| --- |
| **rpc ImportPage([ImportPageRequest](#animeshon.webpage.v1alpha1.ImportPageRequest)) [ImportPageResponse](#animeshon.webpage.v1alpha1.ImportPageResponse)**<br/><br/> |

| <span id="animeshon.webpage.v1alpha1.Archive.DeletePage">DeletePage</span> |
| --- |
| **rpc DeletePage([DeletePageRequest](#animeshon.webpage.v1alpha1.DeletePageRequest)) [.google.protobuf.Empty](#google.protobuf.Empty)**<br/><br/> |


## <span id="animeshon.webpage.v1alpha1.CreatePageRequest">CreatePageRequest</span>



| Field | Description |
| --- | --- |
| parent | **[ string](#string)**<br/>The parent this page belongs to. |
| page | **[ Page](#Page)**<br/>The page to create. |

## <span id="animeshon.webpage.v1alpha1.DeletePageRequest">DeletePageRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the page to delete. |

## <span id="animeshon.webpage.v1alpha1.GetPageRequest">GetPageRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the page to retrieve. |
| selector | **[ string](#string)**<br/>The html selector to use to return the page content. |

## <span id="animeshon.webpage.v1alpha1.ImportPageRequest">ImportPageRequest</span>



| Field | Description |
| --- | --- |
| parent | **[ string](#string)**<br/>The site parent of the page. |
| uri | **[ string](#string)**<br/>A publicly-accessible page HTTP/HTTPS URL. When fetching pages from HTTP/HTTPS URLs, Animeshon cannot guarantee that the request will be completed. Your request may fail if the specified host denies the request (e.g. due to request throttling or DoS prevention), or if Animeshon throttles requests to the site for abuse prevention. |
| cache_options | **[ ImportPageRequest.WebCacheOptions](#ImportPageRequest.WebCacheOptions)**<br/>The web cache options to apply to the import request. |

## <span id="animeshon.webpage.v1alpha1.ImportPageRequest.WebCacheOptions">ImportPageRequest.WebCacheOptions</span>

The WebCache options to be used when importing a page from a public site.

| Field | Description |
| --- | --- |
| refresh | **[ bool](#bool)**<br/>If refresh is set to true the page is imported from the remote address regardless of an existing local cache, if the fetched page does not match the existing cache the new page is stored and a new resource is created, otherwise the existing (cached) resource is returned. |
| ignore | **[ bool](#bool)**<br/>If ignore is set to true no cache lookup is performed and the page is imported into a new resource. If both "ignore" and "refresh" are set to true then "refresh" has no effect. |

## <span id="animeshon.webpage.v1alpha1.ImportPageResponse">ImportPageResponse</span>



| Field | Description |
| --- | --- |
| **[oneof](https://developers.google.com/protocol-buffers/docs/proto3#oneof)** _response_<br />result | **[ ImportPageResponse.ImportPageResult](#ImportPageResponse.ImportPageResult)**<br/>If the operation was successful this field will return the imported page. |
| **[oneof](https://developers.google.com/protocol-buffers/docs/proto3#oneof)** _response_<br />error | **[ ImportPageResponse.ImportPageRemoteError](#ImportPageResponse.ImportPageRemoteError)**<br/>If the operation ended up in a failure due to an error with the remote server this field will provide more details about the failure. |
| cache_hit | **[ bool](#bool)**<br/>Whether this page was found in the cache. |

## <span id="animeshon.webpage.v1alpha1.ImportPageResponse.ImportPageRemoteError">ImportPageResponse.ImportPageRemoteError</span>



| Field | Description |
| --- | --- |
| status_code | **[ int32](#int32)**<br/>The status code returned from the remote server. |
| details | **[ string](#string)**<br/>The details related to the import failure. |

## <span id="animeshon.webpage.v1alpha1.ImportPageResponse.ImportPageResult">ImportPageResponse.ImportPageResult</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The page resource name. |

## <span id="animeshon.webpage.v1alpha1.ListPagesRequest">ListPagesRequest</span>



| Field | Description |
| --- | --- |
| parent | **[ string](#string)**<br/>The parent this page belongs to. |
| page_size | **[ int32](#int32)**<br/>If unspecified, server will pick an appropriate default. |
| page_token | **[ string](#string)**<br/>The value returned from the previous call. |
| filter | **[ string](#string)**<br/>A filter to be applied to results. |

## <span id="animeshon.webpage.v1alpha1.ListPagesResponse">ListPagesResponse</span>



| Field | Description |
| --- | --- |
| pages | **[repeated Page](#Page)**<br/>The list of pages. |
| next_page_token | **[ string](#string)**<br/>A token to retrieve next page of results. |

## <span id="animeshon.webpage.v1alpha1.Page">Page</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the page. |
| content | **[ string](#string)**<br/>The page content according to the html selector. |

## <span id="animeshon.webpage.v1alpha1.QueryPageRequest">QueryPageRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the page to query. |
| query | **[ string](#string)**<br/>The query to perform on the document in declarative query language. |

## <span id="animeshon.webpage.v1alpha1.QueryPageResponse">QueryPageResponse</span>



| Field | Description |
| --- | --- |
| **[oneof](https://developers.google.com/protocol-buffers/docs/proto3#oneof)** _response_<br />result | **[ QueryPageResponse.QueryPageResult](#QueryPageResponse.QueryPageResult)**<br/>If the operation was successful this field will return the query result. |
| **[oneof](https://developers.google.com/protocol-buffers/docs/proto3#oneof)** _response_<br />error | **[ QueryPageResponse.QueryPageError](#QueryPageResponse.QueryPageError)**<br/>If the operation ended up in a failure due to an error with the query evaluation this field will provide more details about the failure. |

## <span id="animeshon.webpage.v1alpha1.QueryPageResponse.QueryPageError">QueryPageResponse.QueryPageError</span>



| Field | Description |
| --- | --- |
| code | **[ int32](#int32)**<br/>The gRPC error code returned by the query. |
| details | **[ string](#string)**<br/>Additional details of the evaluation error. |

## <span id="animeshon.webpage.v1alpha1.QueryPageResponse.QueryPageResult">QueryPageResponse.QueryPageResult</span>



| Field | Description |
| --- | --- |
| value | **[ google.protobuf.Value](#google.protobuf.Value)**<br/>The result of the query evaluation. |

## <span id="animeshon.webpage.v1alpha1.QueryRequest">QueryRequest</span>



| Field | Description |
| --- | --- |
| query | **[ string](#string)**<br/>The query to perform on the matching documents in FQL. |
| pages | **[repeated string](#string)**<br/>The batch list of page resource names to be used for evaluation. |

## <span id="animeshon.webpage.v1alpha1.QueryResponse">QueryResponse</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The evaluated page resource name. |
| **[oneof](https://developers.google.com/protocol-buffers/docs/proto3#oneof)** _response_<br />result | **[ QueryResponse.QueryPageResult](#QueryResponse.QueryPageResult)**<br/>If the operation was successful this field will return the query result. |
| **[oneof](https://developers.google.com/protocol-buffers/docs/proto3#oneof)** _response_<br />error | **[ QueryResponse.QueryPageError](#QueryResponse.QueryPageError)**<br/>If the operation ended up in a failure due to an error with the query evaluation this field will provide more details about the failure. |

## <span id="animeshon.webpage.v1alpha1.QueryResponse.QueryPageError">QueryResponse.QueryPageError</span>



| Field | Description |
| --- | --- |
| code | **[ int32](#int32)**<br/>The gRPC error code returned by the query. |
| details | **[ string](#string)**<br/>Additional details of the evaluation error. |

## <span id="animeshon.webpage.v1alpha1.QueryResponse.QueryPageResult">QueryResponse.QueryPageResult</span>



| Field | Description |
| --- | --- |
| value | **[ google.protobuf.Value](#google.protobuf.Value)**<br/>The result of the query evaluation. |
