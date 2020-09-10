---
id: search.video
title: 'Method: search.video'
sidebar_label: search.video
---

Search via video.

This method supports media upload. Uploaded files must conform to these constraints:

- Maximum file size: 30MB
- Duration limit: 180 seconds
- Accepted Media MIME types: `video/webm`, `video/mp4`, `video/x-flv`, `video/ogg`, and `video/x-matroska`

### HTTP request

`POST https://source.animeapis.com/v1beta2/search/video`

### Request body

The request body contains a binary file.

### Response body

If successful, the response body contains an instance of [SearchResult](/docs/ashen/reference/rest/v1beta2/SearchResult).