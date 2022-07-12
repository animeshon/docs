---
title: Overview
description: {{ .name }} RPC API reference.
---

# {{ .name }} API

## Service: {{ .api }}

The Service name `{{ .api }}` is needed to create RPC client stubs.
{{- range $service := .rpcServices }}

<a name="{{ $service.package }}.{{ $service.name }}"></a>

## [{{ $service.package }}.{{ $service.name }}](/image/docs/reference/rpc/{{ $service.package }}#{{ $service.package }}.{{ $service.name }})

| Methods | Description |
| ----------- | ------------|
{{- range $method := $service.methods }}
| [{{ $method.name }}](/image/docs/reference/rpc/{{ $service.package }}#{{ $service.package }}.{{ $service.name }}.{{ $method.name }}) | {{ $method.description }} |
{{- end }}
{{- end }}
