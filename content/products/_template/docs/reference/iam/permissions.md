---
title: Permissions
description: {{ .name }} IAM permissions.
---

# {{ .name }} IAM permissions

The following tables list the Identity and Access Management (IAM) permissions that are associated with {{ .name }}.
{{- range $group := .permissionGroups }}

## {{ $group.name }}

| Permission | Description |
| --- | --- |
{{- range $i := $group.permissions }}
| {{ $i.name }} | {{ $i.description }} |
{{- end }}
{{- end }}
