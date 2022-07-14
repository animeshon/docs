---
title: Overview
description: Release RPC API reference.
---

# Release API

## Service: release.animeapis.com

The Service name `release.animeapis.com` is needed to create RPC client stubs.

<a name="animeshon.release.v1alpha1.Publisher"></a>

## [animeshon.release.v1alpha1.Publisher](/release/docs/reference/rpc/animeshon.release.v1alpha1#animeshon.release.v1alpha1.Publisher)

| Methods | Description |
| ----------- | ------------|
| [GetRelease](/release/docs/reference/rpc/animeshon.release.v1alpha1#animeshon.release.v1alpha1.Publisher.GetRelease) | No description. |
| [ListReleases](/release/docs/reference/rpc/animeshon.release.v1alpha1#animeshon.release.v1alpha1.Publisher.ListReleases) | No description. |
| [CreateRelease](/release/docs/reference/rpc/animeshon.release.v1alpha1#animeshon.release.v1alpha1.Publisher.CreateRelease) | No description. |
| [UpdateRelease](/release/docs/reference/rpc/animeshon.release.v1alpha1#animeshon.release.v1alpha1.Publisher.UpdateRelease) | No description. |
| [DeleteRelease](/release/docs/reference/rpc/animeshon.release.v1alpha1#animeshon.release.v1alpha1.Publisher.DeleteRelease) | The release is soft-deleted and a grace period is granted before complete deletion. During this grace period the release can be recovered. |
| [UndeleteRelease](/release/docs/reference/rpc/animeshon.release.v1alpha1#animeshon.release.v1alpha1.Publisher.UndeleteRelease) | This method allows to recover a release while still in the grace period. |
| [PublishRelease](/release/docs/reference/rpc/animeshon.release.v1alpha1#animeshon.release.v1alpha1.Publisher.PublishRelease) | The release is marked as immediately available to the public. |
| [UnpublishRelease](/release/docs/reference/rpc/animeshon.release.v1alpha1#animeshon.release.v1alpha1.Publisher.UnpublishRelease) | The release is unpublished and marked as a draft, associated non-authoritative will automatically be marked as suspended and hidden from the general public. |
| [ScheduleRelease](/release/docs/reference/rpc/animeshon.release.v1alpha1#animeshon.release.v1alpha1.Publisher.ScheduleRelease) | The release is scheduled to be released at a specific future date and time. |
| [CancelRelease](/release/docs/reference/rpc/animeshon.release.v1alpha1#animeshon.release.v1alpha1.Publisher.CancelRelease) | This method can only be called on scheduled releases. The scheduling is cancelled and the release is marked as a draft. |
| [SuspendRelease](/release/docs/reference/rpc/animeshon.release.v1alpha1#animeshon.release.v1alpha1.Publisher.SuspendRelease) | This method can only be called on published releases marked as active. Any non-authoritative release associated to the specified release will also be automatically marked as suspended. |
