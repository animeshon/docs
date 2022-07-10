---
title: Roles
description: Image IAM roles.
---

# Image IAM roles

## Curated roles

The following table describes Identity and Access Management (IAM) roles that are associated with Image, and lists the permissions that are contained in each role.

| Role | Description | [Permissions](/image/docs/reference/iam/permissions) |
| --- | --- | --- |
| **roles/image.settingsAdmin** | Administrator of album settings. | <ul><li>image.albums.getSettings</li><li>image.albums.updateSettings</li></ul> |
| **roles/image.admin** | Full access to albums and images. | <ul><li>image.images.get</li><li>image.images.list</li><li>image.images.upload</li><li>image.images.import</li><li>image.images.delete</li><li>image.albums.get</li><li>image.albums.list</li><li>image.albums.create</li><li>image.albums.update</li><li>image.albums.delete</li><li>image.albums.getIamPolicy</li><li>image.albums.setIamPolicy</li></ul> |
| **roles/image.editor** | Edit access to albums and images. | <ul><li>image.images.get</li><li>image.images.list</li><li>image.images.upload</li><li>image.images.import</li><li>image.albums.get</li><li>image.albums.list</li><li>image.albums.create</li><li>image.albums.update</li><li>image.albums.getIamPolicy</li></ul> |
| **roles/image.viewer** | Read access to albums and images. | <ul><li>image.images.get</li><li>image.images.list</li><li>image.albums.get</li><li>image.albums.list</li><li>image.albums.create</li><li>image.albums.update</li><li>image.albums.getIamPolicy</li></ul> |

For a reference describing the IAM permissions contained in each IAM role, refer to [Image IAM Permissions](/image/docs/reference/iam/permissions).
