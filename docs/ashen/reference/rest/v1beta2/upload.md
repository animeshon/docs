---
id: upload
title: 'Method: upload'
sidebar_label: upload
---

Upload signatures via ZIP compressed JSONs.

This method supports archive upload. Uploaded files must conform to these constraints:

- Maximum file size: 4MB
- Accepted Archive MIME types: `application/zip`

The content of the archive must be in a valid JSON format. Multiple files are supported within a single archive.

### HTTP request

`POST https://source.animeapis.com/v1beta2/upload`

### Request body

The request body contains a binary file.

### Response body

If successful, the response body is empty with a returned status code `204 No Content`.

### Authorization Scopes

Requires the following OAuth scope:

- https://www.animeapis.com/auth/source.write