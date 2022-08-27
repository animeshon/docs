---
title: Roles
description: Tracker IAM roles.
---

# Tracker IAM roles

## Curated roles

The following table describes Identity and Access Management (IAM) roles that are associated with Tracker, and lists the permissions that are contained in each role.

| Role | Description | [Permissions](/tracker/docs/reference/iam/permissions) |
| --- | --- | --- |
| **roles/tracker.admin** | Full access to trackers and activities. | <ul><li>tracker.trackers.get</li><li>tracker.trackers.list</li><li>tracker.trackers.create</li><li>tracker.trackers.update</li><li>tracker.trackers.delete</li><li>tracker.trackers.import</li><li>tracker.trackers.export</li><li>tracker.activities.create</li><li>tracker.activities.delete</li><li>tracker.operations.list</li><li>tracker.operations.get</li><li>tracker.operations.delete</li><li>tracker.operations.cancel</li></ul> |
| **roles/tracker.editor** | Edit access to trackers and activities. | <ul><li>tracker.trackers.get</li><li>tracker.trackers.list</li><li>tracker.trackers.create</li><li>tracker.trackers.update</li><li>tracker.activities.create</li><li>tracker.operations.list</li><li>tracker.operations.get</li></ul> |
| **roles/tracker.viewer** | View access to trackers. | <ul><li>tracker.trackers.get</li><li>tracker.trackers.list</li><li>tracker.operations.list</li><li>tracker.operations.get</li></ul> |

For a reference describing the IAM permissions contained in each IAM role, refer to [Tracker IAM Permissions](/tracker/docs/reference/iam/permissions).
