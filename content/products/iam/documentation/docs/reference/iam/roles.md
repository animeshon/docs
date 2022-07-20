---
title: Roles
description: Identity and Access Management IAM roles.
---

# Identity and Access Management IAM roles

## Curated roles

The following table describes Identity and Access Management (IAM) roles that are associated with Identity and Access Management, and lists the permissions that are contained in each role.

| Role | Description | [Permissions](/iam/docs/reference/iam/permissions) |
| --- | --- | --- |
| **roles/iam.admin** | Full access to permissions and roles. | <ul><li>iam.permissions.get</li><li>iam.permissions.list</li><li>iam.permissions.create</li><li>iam.permissions.update</li><li>iam.permissions.delete</li><li>iam.roles.get</li><li>iam.roles.list</li><li>iam.roles.create</li><li>iam.roles.update</li><li>iam.roles.delete</li></ul> |
| **roles/iam.editor** | Edit access to permissions and roles. | <ul><li>iam.permissions.get</li><li>iam.permissions.list</li><li>iam.permissions.create</li><li>iam.permissions.update</li><li>iam.roles.get</li><li>iam.roles.list</li><li>iam.roles.create</li><li>iam.roles.update</li></ul> |
| **roles/iam.viewer** | View access to permissions and roles. | <ul><li>iam.permissions.get</li><li>iam.permissions.list</li><li>iam.roles.get</li><li>iam.roles.list</li></ul> |
| **roles/iam.serviceAccountAdmin** | Full access to service accounts. | <ul><li>iam.serviceAccounts.get</li><li>iam.serviceAccounts.list</li><li>iam.serviceAccounts.create</li><li>iam.serviceAccounts.update</li><li>iam.serviceAccounts.delete</li><li>iam.serviceAccounts.getIamPolicy</li><li>iam.serviceAccounts.setIamPolicy</li></ul> |

For a reference describing the IAM permissions contained in each IAM role, refer to [Identity and Access Management IAM Permissions](/iam/docs/reference/iam/permissions).
