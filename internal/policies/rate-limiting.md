---
title: Rate-Limiting
description: TODO
---

This page is work in progress.

## Global

There is a global limit across all Animeshon services and public websites of 5.000 request per minute per remote address. There is also a global limit across all Animeshon API endpoints of 1.000 anonymous requests per minute per remote address and 2.500 authenticated requests per minute per identity (user or service account). Finally, there is a global restriction of 500 requests per minute to the same service and method.

| Location | Subject | Limit | Unit |
| --- | --- | --- | --- |
| Global | remote address | 5.000 requests | per minute |
| API services (globally) | remote address | 1.000 requests | per minute |
| API services (globally) | identity | 2.500 requests | per minute |
| Each API method | * | 500 requests | per minute |

## Authentication

All authentication endpoints such as login, registration, and recovery are subjected to strict limitations to prevent bruteforce attack vectors.

## Services

Some services might implement global limits to reduce workload pressure or resource consumption globally. Such limits affect all users and remote addresses independently from their own individual resource consumption.

### Image

There is a global limit of 10.000 images uploaded or imported per hour.

| Location | Method | Subject | Limit | Unit |
| --- | --- | --- | --- | --- |
| Image API | UploadImage | * | 10.000 requests | per hour |
| Image API | ImportImage | * | 10.000 requests | per hour |
