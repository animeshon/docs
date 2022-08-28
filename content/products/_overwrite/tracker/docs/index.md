---
title: Overview
description: Overview for Tracker.
---

# Tracker documentation

The `Tracker` service is responsible for tracking the user consumption progress of resources.

## Activities

Activities describe at a very granular level an action performed by a user or group of users (i.e. audiences) such as _user X watched episode N from 00:00 to 05:00 on the 20th of September 2022 starting at 2:37pm and finishing at 2:42pm on Netflix_.

Activities can be generated multiple times for the same resources and the same timestamp, this behavior would describe as an example rewatches and points of interest, such as _user X rewatched the episode N from 01:00 to 03:00 5 times_. Additionally, activities can also describe interruptions such as half episode was watched on day X and the remaining part was watched on day Z.

NOTE: A feature will be made available to introduce the _continue from last time_ behavior, which will notify the user about the latest tracked activity.

## Trackers

Trackers describe at a high level the progress of a resource conumption, such as _user X watched 50% (or 6 episodes) of anime Y, the consumption is IN PROGRESS, meaning it is yet to be COMPLETED and it's not ON HOLD, the consumed resources so far are the episodes [A ... F], and consumption started on May 22nd 2022 and was last updated on May 27th 2022_.

### Tracking through resources

If the progress of the resource can be described through consumed resources (e.g. the progress of an anime can be tracked through the episodes watched) then it will not be necessary to manually update the progress percentage and the state of the tracker.

## Tracking through percentage

If the progress of the resource cannot be described through consumed resources (e.g. the progress in the story of a visual novel) then the user will have to manually update the progress percentage and the state of the tracker (e.g. IN PROGRESS, COMPLETED, and so on).

## Import & Export

Trackers can be imported from third-party providers such as `myanimelist.net`, `anidb.net`, `vndb.org` and many others.

NOTE: A feature to export back trackers to third-party providers is currently in progress and will include a broader list of known services and websites.

### Supported third-parties

| Provider | Status |
| --- | --- |
| [MyAnimeList](https://myanimelist.net/) | SUPPORTED |
| [AniDB](https://anidb.net/) | SUPPORTED |
| [AniList](https://anilist.co/) | PLANNED |
| [VNDB](https://vndb.org/) | PLANNED |
