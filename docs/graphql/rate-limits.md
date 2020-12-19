---
id: rate-limits
title: Rate Limits
---

:::info

Rate limits described might be subject to changes.

:::

| Query | Description | Limit | Window |
|- | - | - | - |
| querySearch | The query to perform a Full-text search in [Oracolo](/docs/oracolo/introduction) | 20 | 1s |
| get* | All queries starting with `get` | 20 | 1s |
| query* | All queries starting with `query` | 10 | 30s |
| aggregate* | All queries starting with `aggregate` | 10 | 30s |