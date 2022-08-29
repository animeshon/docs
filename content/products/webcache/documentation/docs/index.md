---
title: Overview
description: Overview for WebCache.
---

# WebCache documentation

The `WebCache` service is responsible for caching metadata related to web resources such as remote HTML pages and images. The _WebCache API_ is used by the [Image](/image/docs) and [WebPage](/webpage/docs) services to keep track of imported resources.

## Cache Metadata

The caches managed by the service include the following metadata:

```json
{
  "name": "caches/2063273174265991175",
  "scheme": "https",
  "uri": "www.mangaupdates.com/series.html?id=2767",
  "mimeType": "text/html",
  "statusCode": 200,
  "redirectUri": "",
  "resource": "//webpage.animeapis.com/sites/mangaupdates-com/pages/6955217954586836992",
  "revisionId": "aabe9ddd1f2eb50c",
  "revisionCreateTime": "2022-08-07T13:17:59.868241Z"
}
```

The caches are stored to check whether a page has already been indexed or an image has already been imported, this is useful to reduce the latency and the workload on the remote servers, as well as ensuring that a cached resource is stored in Animeshon and always available for consumption.

### Revisions and History

The revision of a page uniquely identifies a resource as a point-in-time snapshot. This means that a resource likely has multiple revisions stored at different times, multiple revisions of the same resource define its chronological history.

Example: the previous cache can be retrieved using the name `caches/2063273174265991175@aabe9ddd1f2eb50c`. Requesting only `caches/2063273174265991175` without specifing the revision will always return the latest known revision. Listing caches filtered by `uri` will result in a list of all known revisions of the remote resource idenfitied by the specified URI.
