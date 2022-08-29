---
title: Quotas and limits
description: Usage policies for your {{ .name }} resources.
---

# {{ .name }} Quotas and Limits

This page contains usage quota and limits that apply when using {{ .name }}.

{{ if .quotas -}}
## Resource limits for {{ .name }}

| Resource | Description | Limit | Can be increased | Scope |
| --- | --- | --- | --- | --- |
{{- range $i := .quotas }}
| {{ $i.resource }} | {{ $i.description }} | {{ $i.limit }} | {{ if $i.incrementabile }}Yes{{ else }}No{{ end }} | {{ $i.scope }} |
{{- end }}
{{- else }}
There are currently no resource limits or quotas specified for this service.
{{- end }}
