---
title: Overview
description: {{ .name }} RPC API reference.
---

# {{ .name }} API

## Service: {{ .api }}

The Service name `{{ .api }}` is needed to create RPC client stubs.
{{- range $service := .rpc.services }}

<a name="{{ $service.package }}.{{ $service.name }}"></a>

## [{{ $service.package }}.{{ $service.name }}](/{{ $.domain }}/docs/reference/rpc/{{ $service.package }}#{{ $service.package }}.{{ $service.name }})

| Methods | Description |
| ----------- | ------------|
{{- range $method := $service.methods }}
| [{{ $method.name }}](/{{ $.domain }}/docs/reference/rpc/{{ $service.package }}#{{ $service.package }}.{{ $service.name }}.{{ $method.name }}) | {{ if $method.description }}{{ $method.description }}{{ else }}No description.{{ end }} |
{{- end }}
{{- end }}
