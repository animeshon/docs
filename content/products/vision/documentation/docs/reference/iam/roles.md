---
title: Roles
description: Vision IAM roles.
---

# Vision IAM roles

## Curated roles

The following table describes Identity and Access Management (IAM) roles that are associated with Vision, and lists the permissions that are contained in each role.

| Role | Description | [Permissions](/vision/docs/reference/iam/permissions) |
| --- | --- | --- |
| **roles/vision.admin** | Full access to image analyses and annotations. | <ul><li>vision.imageAnalyses.get</li><li>vision.imageAnalyses.list</li><li>vision.imageAnalyses.create</li><li>vision.imageAnalyses.delete</li><li>vision.imageAnnotations.get</li><li>vision.imageAnnotations.list</li><li>vision.imageAnnotations.create</li><li>vision.imageAnnotations.update</li><li>vision.imageAnnotations.delete</li></ul> |
| **roles/vision.editor** | Edit access to image analyses and annotations. | <ul><li>vision.imageAnalyses.get</li><li>vision.imageAnalyses.list</li><li>vision.imageAnalyses.create</li><li>vision.imageAnnotations.get</li><li>vision.imageAnnotations.list</li><li>vision.imageAnnotations.create</li><li>vision.imageAnnotations.update</li></ul> |
| **roles/vision.viewer** | View access to image analyses and annotations. | <ul><li>vision.imageAnalyses.get</li><li>vision.imageAnalyses.list</li><li>vision.imageAnnotations.get</li><li>vision.imageAnnotations.list</li></ul> |

For a reference describing the IAM permissions contained in each IAM role, refer to [Vision IAM Permissions](/vision/docs/reference/iam/permissions).
