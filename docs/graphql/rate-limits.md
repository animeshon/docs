---
id: rate-limits
title: Rate Limits
---

:::info

Limits described might be subject to changes.

:::

## Rate Limits

| Query | Description | Limit | Window |
|- | - | - | - |
| querySearch | The query to perform a Full-text search in [Oracolo](/docs/oracolo/introduction) | 20 | 1s |
| get(*) | All queries starting with `get` | 20 | 1s |
| query(*) | All queries starting with `query` | 10 | 30s |
| aggregate(*) | All queries starting with `aggregate` | 10 | 30s |

## Query Depth Limits
|Limit| Description |
| - | - |
| 7 | The maximum depth of nested fields allowed |