---
title: Overview
description: Overview for Knowledge.
---

# Knowledge documentation

The `Knowledge` service is responsible for managing community contribution on Animeshon's **Knowledge Base**. 
Through this service we allow the community to mutate, update, correct and improve the data in our system.

Contributions have then to be approved by moderators which can review, verify, and perform changes to the modification proposed by the user.
The process is designed to allow both parties to tune the contribution until it meets our internal policies rather than discard/approve in one shot.

`Knowledge` is built on top of a virtualized Git system developed internally by Animeshon's Team which guarantees versioning, partial approval and correction of the contributions proposed by the community.

When a contribution is approved, all changes are forwarded to the competent services and then reflected in the Knowledge Base DataGraph.