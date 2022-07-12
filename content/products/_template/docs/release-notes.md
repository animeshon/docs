---
title: Release notes
description: Details about updates to {{ .name }}.
---

# {{ .name }} release notes

This page documents production updates to {{ .name }}. You can periodically check this page for announcements about new or updated features, bug fixes, known issues, and deprecated functionality.
{{- range $i := .releases }}

## {{ $i.date }}

{{ $i.changelog }}
{{- end }}