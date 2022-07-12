---
title: Roles
description: {{ .name }} IAM roles.
---

# {{ .name }} IAM roles

## Curated roles

The following table describes Identity and Access Management (IAM) roles that are associated with {{ .name }}, and lists the permissions that are contained in each role.

| Role | Description | [Permissions](/{{ .domain }}/docs/reference/iam/permissions) |
| --- | --- | --- |
{{- range $i := .roles }}
| **roles/{{ $i.id }}** | {{ $i.description }} | <ul>{{ range $permission := $i.permissions }}<li>{{ $permission }}</li>{{ end }}</ul> |
{{- end }}

For a reference describing the IAM permissions contained in each IAM role, refer to [{{ .name }} IAM Permissions](/{{ .domain }}/docs/reference/iam/permissions).
