---
title: Overview
description: Overview for Identity and Access Management.
---

# Identity and Access Management documentation

The `Identity and Access Management` service is responsible for the management of service accounts and groups.

## Service Accounts

_Learn more about about [service accounts](/authentication/service-accounts)._

## Groups

Groups are collections of users and service accounts and can be nested (a group can contain another group).

## Access Policies

There are several scenarios where sharing access with other users or service accounts to one or more resources might be necessary. As an example, it could be necessary to allow third-parties to view and manage your data, or grant access to a collection of resources to other trusted users.

Access control in Animeshon is fully governed by policies that can be assigned to resources (e.g. releases) or collection of resources (e.g. albums). The members of such policies can be users, service accounts, or groups, and the lifecycle of the latter two is managed by this service.

_Learn more about about [IAM authentication and authorization](/authentication/welcome)._
