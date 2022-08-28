---
title: Overview
description: Overview for Credentials.
---

# Credentials documentation

The `Credentials` service is responsible for the management of third-party credentials.

## Security

All credentials are stored with encryption at rest, Animeshon never stores authentication details in plain text. Granted credentials can also be revoked at any time and deleted from our data storage.

## OAuth 2.0 and Basic Authentication

The `Credentials` service supports legacy basic authentication (username / password) and OAuth 2.0 flows.

### OAuth 2.0 Providers

We currently support OAuth 2.0 integrations with `MyAnimeList` and `AniList` third-party providers. This list will be expanded in the immediate future based on feedback collected from the community.

## Supported third-parties

| Provider | Status | Type |
| --- | --- | --- |
| [MyAnimeList](https://myanimelist.net/) | SUPPORTED | OAuth 2.0 |
| [AniList](https://anilist.co/) | SUPPORTED | OAuth 2.0 |
| [AniDB](https://anidb.net/) | SUPPORTED | Basic Authentication |
| [VNDB](https://vndb.org/) | SUPPORTED | Basic Authentication |
