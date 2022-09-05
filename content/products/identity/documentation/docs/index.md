---
title: Overview
description: Overview for Identity.
---

# Identity documentation

The `Identity` service is responsible for the management of users and all associated settings and preferences.

## Settings

The user settings do not contain authentication or authorization information such as the primary email or password. User settings contain instead configurations like the visibility of the profile which can be either PUBLIC or PRIVATE and features like the developer mode that can be enabled to access more advanced features from the UI.

## Defaults

The user defaults are system generated resources such as playlists and albums. User defaults cannot be modified or deleted as they are internally managed.

## Notifications

The user notifications manage how the user can be notified by our systems, such notifications include, among others, newsletters and weekly or daily reports, and can be configured to send push notifications to the phone or emails to the primary address. System communications such as security notifications cannot be disabled.

_NOTE: notifications are currently disabled entirely with the exception of system and security communications._