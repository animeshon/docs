---
title: Roles
description: Credentials IAM roles.
---

# Credentials IAM roles

## Curated roles

The following table describes Identity and Access Management (IAM) roles that are associated with Credentials, and lists the permissions that are contained in each role.

| Role | Description | [Permissions](/credentials/docs/reference/iam/permissions) |
| --- | --- | --- |
| **roles/credentials.admin** | Full access to credentials. | <ul><li>credentials.credentials.get</li><li>credentials.credentials.list</li><li>credentials.credentials.create</li><li>credentials.credentials.delete</li><li>credentials.credentials.actAs</li><li>credentials.flows.signIn</li><li>credentials.flows.exchange</li></ul> |
| **roles/credentials.editor** | View and editor access to credentials. | <ul><li>credentials.credentials.get</li><li>credentials.credentials.list</li><li>credentials.credentials.create</li><li>credentials.flows.signIn</li><li>credentials.flows.exchange</li></ul> |
| **roles/credentials.editor** | View access to credentials. | <ul><li>credentials.credentials.get</li><li>credentials.credentials.list</li></ul> |

For a reference describing the IAM permissions contained in each IAM role, refer to [Credentials IAM Permissions](/credentials/docs/reference/iam/permissions).
