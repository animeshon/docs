---
title: gRPC
description: TODO
---

This page is work in progress.

## Known Issues

### gRPC streaming terminated by RST_STREAM

If encounter the following error while communicating with Animeshon APIs through a gRPC stream please know that this is a known limitation.

```
stream terminated by RST_STREAM with error code: INTERNAL_ERROR
```

gRPC streaming is limited to **60 seconds** due to internal limitations of _Google Cloud Load Balancer_ and _Google Ingress GCE_. Only internal services deployed in the Animeshon cloud infrastructure can bypass this limitation via internal network communication.