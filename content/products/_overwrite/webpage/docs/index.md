---
title: Overview
description: Overview for WebPage.
---

# WebPage documentation

The `WebPage` service is responsible for analyzing, parsing, and indexing HTML pages.

:::tip

Access to the `WebPage` service is limited, please get in touch with us for more information.

:::

## Analysis

Indexed HTML pages can be analyzed through the [Ferret Query Language (FQL)](https://www.montferret.dev/) and the parsed data is returned in JSON format. The analysis performance is very high and can reach up to 5.000 requests per second through requests [streaming](/protocols/grpc) (gRPC).

### Query Language

The query Language used to parse and extract data from HTML pages is [FQL](https://www.montferret.dev/).

#### Example

The indexed HTML page is as follows:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Offline</title>
</head>
<body>
    <h1>Hello world</h1>
</body>
</html>
```

The specified FQL query is as follows:

```fql
LET page = PARSE(@document)
LET title = ELEMENT(page, "title")

RETURN {title: title}
```

The returned value will then be as follows:

```json
{
  "title": "Offline"
}
```