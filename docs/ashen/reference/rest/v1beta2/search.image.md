---
id: search.image
title: 'Method: search.image'
sidebar_label: search.image
---

Search via image.

This method supports media upload. Uploaded files must conform to these constraints:

- Maximum file size: 12MB
- Accepted Media MIME types: `image/png`, `image/jpg`, `image/jpeg`

:::info

Support for Media MIME types `image/webp` and `image/bmp` is planned for this version.

:::

### HTTP request

`POST https://source.animeapis.com/v1beta2/search/image`

### Request body

The request body contains a binary file.

### Response body

If successful, the response body contains an instance of [SearchResult](/docs/ashen/reference/rest/v1beta2/SearchResult).