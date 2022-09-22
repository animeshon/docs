---
title: Overview
description: Overview for Release.
---

# Release documentation

The `Release` service is responsible for the release management of resources owned by the [Product](/product/docs) service.

:::danger

The `Release` service is in pre-alpha stage which means that the product is in early-stage development and some features might be missing, broken or behave unexpectedly.

:::

## Copyright and ownership authority

A releases can either be authoritative, if released by the original owner, or non-authoritative, if released by third-parties.

### Authoritative releases

The authoritative release is created, owned and published by the original content creator (artist) that decided to adopt Animeshon as a distribution platform. A product can only have one authoritative release that must be owned by either a user or an organization.

If an authoritative release is unpublished or completely removed from Animeshon all the associated non-authoritative releases will be automatically suspended and will no longer be available to the public. This is to ensure full copyright ownership and protection for the original contant creator.

_NOTE: ownership of an authoritative release is currently non transferable._

### Non-authoritative releases

Non-authoritative releases are sub-licensed releases that do not hold any publishing rights on the content being distributed.

A common case where the release is to be considered non-authoritative is a translation released by third-parties. In such scenario the original author(s) is to be considered the only publishing authority over the content.

If for any reason the authoritative release were to be unpublished or deleted from Animeshon all associated non-authoritative releases will be automatically hidden from public consumption and marked as suspended.

Furthermore, there can only be one authoritative release per resource, which means that you can have unlimited non-authoritative releases for one resource but it must have exactly one authoritative release.

#### Example: Translation releases

_A product X is published with an authoritative release by the organization Y. A user Z subsequently decides to publish a translation of the original release, creating a new product and releasing it as a non-authoritative release with an explicit reference to the original release._

## Release Types

Releases can be open for consumption (public) or open to a specific group (membership) such as paying customers.

### Example: Early-access releases

_A product X is released with scheduled time 31/12/21, no authoritative release is set as this is the first release and it must be authoritative. The product is furthermore released with 3 days of free access for all users, as such a second non-authoritative release is scheduled on the 31/12/21 with time-to-live set to 3 days and visibility set to PUBLIC. After the expiration of the second release (early-access release) the visibility will fallback to `MEMBERSHIP` and only the users in the access group (who have previously purchased the product) will be allowed to keep access to the resource._

## Known issues

### Scheduling

_Release scheduling is implemented but currently disabled._

### Automatic suspension

_Automatic suspension for non-authoritative releases following the unpublishing of their respective authoritative releases is currently not implemented._
