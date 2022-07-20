---
title: Roles
description: Library IAM roles.
---

# Library IAM roles

## Curated roles

The following table describes Identity and Access Management (IAM) roles that are associated with Library, and lists the permissions that are contained in each role.

| Role | Description | [Permissions](/library/docs/reference/iam/permissions) |
| --- | --- | --- |
| **roles/library.admin** | Full access to playlists. | <ul><li>library.playlists.get</li><li>library.playlists.list</li><li>library.playlists.create</li><li>library.playlists.update</li><li>library.playlists.delete</li><li>library.playlists.getIamPolicy</li><li>library.playlists.setIamPolicy</li></ul> |
| **roles/library.editor** | Edit access to playlists. | <ul><li>library.playlists.get</li><li>library.playlists.list</li><li>library.playlists.create</li><li>library.playlists.update</li><li>library.playlists.getIamPolicy</li></ul> |
| **roles/library.viewer** | View access to playlists. | <ul><li>library.playlists.get</li><li>library.playlists.list</li><li>library.playlists.getIamPolicy</li></ul> |

For a reference describing the IAM permissions contained in each IAM role, refer to [Library IAM Permissions](/library/docs/reference/iam/permissions).
