---
title: Roles
description: Identity IAM roles.
---

# Identity IAM roles

## Curated roles

The following table describes Identity and Access Management (IAM) roles that are associated with Identity, and lists the permissions that are contained in each role.

| Role | Description | [Permissions](/identity/docs/reference/iam/permissions) |
| --- | --- | --- |
| **roles/identity.settingsAdmin** | Administrator of user settings. | <ul><li>identity.users.getSettings</li><li>identity.users.updateSettings</li></ul> |
| **roles/identity.admin** | Full access to users and groups. | <ul><li>identity.users.get</li><li>identity.users.list</li><li>identity.users.create</li><li>identity.users.update</li><li>identity.users.delete</li><li>identity.users.getIamPolicy</li><li>identity.users.setIamPolicy</li><li>identity.groups.get</li><li>identity.groups.list</li><li>identity.groups.create</li><li>identity.groups.update</li><li>identity.groups.delete</li><li>identity.groups.getIamPolicy</li><li>identity.groups.setIamPolicy</li></ul> |
| **roles/identity.editor** | Edit access to users and groups. | <ul><li>identity.users.get</li><li>identity.users.list</li><li>identity.users.create</li><li>identity.users.update</li><li>identity.users.getIamPolicy</li><li>identity.groups.get</li><li>identity.groups.list</li><li>identity.groups.create</li><li>identity.groups.update</li><li>identity.groups.getIamPolicy</li></ul> |
| **roles/identity.viewer** | View access to users and groups. | <ul><li>identity.users.get</li><li>identity.users.list</li><li>identity.users.getIamPolicy</li><li>identity.groups.get</li><li>identity.groups.list</li><li>identity.groups.getIamPolicy</li></ul> |

For a reference describing the IAM permissions contained in each IAM role, refer to [Identity IAM Permissions](/identity/docs/reference/iam/permissions).
