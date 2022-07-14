---
title: animeshon.iam.admin.v1alpha1
---

# Package animeshon.iam.admin.v1alpha1

## Index
- [IAM](#animeshon.iam.admin.v1alpha1.IAM)
- [CreatePermissionRequest](#animeshon.iam.admin.v1alpha1.CreatePermissionRequest)
- [CreateRoleRequest](#animeshon.iam.admin.v1alpha1.CreateRoleRequest)
- [CreateServiceAccountRequest](#animeshon.iam.admin.v1alpha1.CreateServiceAccountRequest)
- [DeletePermissionRequest](#animeshon.iam.admin.v1alpha1.DeletePermissionRequest)
- [DeleteRoleRequest](#animeshon.iam.admin.v1alpha1.DeleteRoleRequest)
- [DeleteServiceAccountRequest](#animeshon.iam.admin.v1alpha1.DeleteServiceAccountRequest)
- [GetPermissionRequest](#animeshon.iam.admin.v1alpha1.GetPermissionRequest)
- [GetRoleRequest](#animeshon.iam.admin.v1alpha1.GetRoleRequest)
- [GetServiceAccountRequest](#animeshon.iam.admin.v1alpha1.GetServiceAccountRequest)
- [ListPermissionsRequest](#animeshon.iam.admin.v1alpha1.ListPermissionsRequest)
- [ListPermissionsResponse](#animeshon.iam.admin.v1alpha1.ListPermissionsResponse)
- [ListRolesRequest](#animeshon.iam.admin.v1alpha1.ListRolesRequest)
- [ListRolesResponse](#animeshon.iam.admin.v1alpha1.ListRolesResponse)
- [ListServiceAccountsRequest](#animeshon.iam.admin.v1alpha1.ListServiceAccountsRequest)
- [ListServiceAccountsResponse](#animeshon.iam.admin.v1alpha1.ListServiceAccountsResponse)
- [Permission](#animeshon.iam.admin.v1alpha1.Permission)
- [Role](#animeshon.iam.admin.v1alpha1.Role)
- [ServiceAccount](#animeshon.iam.admin.v1alpha1.ServiceAccount)
- [UpdatePermissionRequest](#animeshon.iam.admin.v1alpha1.UpdatePermissionRequest)
- [UpdateRoleRequest](#animeshon.iam.admin.v1alpha1.UpdateRoleRequest)
- [UpdateServiceAccountRequest](#animeshon.iam.admin.v1alpha1.UpdateServiceAccountRequest)

## <span id="animeshon.iam.admin.v1alpha1.IAM">IAM</span>



| <span id="animeshon.iam.admin.v1alpha1.IAM.GetServiceAccount">GetServiceAccount</span> |
| --- |
| **rpc GetServiceAccount([GetServiceAccountRequest](#animeshon.iam.admin.v1alpha1.GetServiceAccountRequest)) [ServiceAccount](#animeshon.iam.admin.v1alpha1.ServiceAccount)**<br/><br/> |

| <span id="animeshon.iam.admin.v1alpha1.IAM.ListServiceAccounts">ListServiceAccounts</span> |
| --- |
| **rpc ListServiceAccounts([ListServiceAccountsRequest](#animeshon.iam.admin.v1alpha1.ListServiceAccountsRequest)) [ListServiceAccountsResponse](#animeshon.iam.admin.v1alpha1.ListServiceAccountsResponse)**<br/><br/> |

| <span id="animeshon.iam.admin.v1alpha1.IAM.CreateServiceAccount">CreateServiceAccount</span> |
| --- |
| **rpc CreateServiceAccount([CreateServiceAccountRequest](#animeshon.iam.admin.v1alpha1.CreateServiceAccountRequest)) [ServiceAccount](#animeshon.iam.admin.v1alpha1.ServiceAccount)**<br/><br/> |

| <span id="animeshon.iam.admin.v1alpha1.IAM.UpdateServiceAccount">UpdateServiceAccount</span> |
| --- |
| **rpc UpdateServiceAccount([UpdateServiceAccountRequest](#animeshon.iam.admin.v1alpha1.UpdateServiceAccountRequest)) [ServiceAccount](#animeshon.iam.admin.v1alpha1.ServiceAccount)**<br/><br/> |

| <span id="animeshon.iam.admin.v1alpha1.IAM.DeleteServiceAccount">DeleteServiceAccount</span> |
| --- |
| **rpc DeleteServiceAccount([DeleteServiceAccountRequest](#animeshon.iam.admin.v1alpha1.DeleteServiceAccountRequest)) [.google.protobuf.Empty](#google.protobuf.Empty)**<br/><br/> |

| <span id="animeshon.iam.admin.v1alpha1.IAM.GetRole">GetRole</span> |
| --- |
| **rpc GetRole([GetRoleRequest](#animeshon.iam.admin.v1alpha1.GetRoleRequest)) [Role](#animeshon.iam.admin.v1alpha1.Role)**<br/><br/> |

| <span id="animeshon.iam.admin.v1alpha1.IAM.ListRoles">ListRoles</span> |
| --- |
| **rpc ListRoles([ListRolesRequest](#animeshon.iam.admin.v1alpha1.ListRolesRequest)) [ListRolesResponse](#animeshon.iam.admin.v1alpha1.ListRolesResponse)**<br/><br/> |

| <span id="animeshon.iam.admin.v1alpha1.IAM.CreateRole">CreateRole</span> |
| --- |
| **rpc CreateRole([CreateRoleRequest](#animeshon.iam.admin.v1alpha1.CreateRoleRequest)) [Role](#animeshon.iam.admin.v1alpha1.Role)**<br/><br/> |

| <span id="animeshon.iam.admin.v1alpha1.IAM.UpdateRole">UpdateRole</span> |
| --- |
| **rpc UpdateRole([UpdateRoleRequest](#animeshon.iam.admin.v1alpha1.UpdateRoleRequest)) [Role](#animeshon.iam.admin.v1alpha1.Role)**<br/><br/> |

| <span id="animeshon.iam.admin.v1alpha1.IAM.DeleteRole">DeleteRole</span> |
| --- |
| **rpc DeleteRole([DeleteRoleRequest](#animeshon.iam.admin.v1alpha1.DeleteRoleRequest)) [.google.protobuf.Empty](#google.protobuf.Empty)**<br/><br/> |

| <span id="animeshon.iam.admin.v1alpha1.IAM.GetPermission">GetPermission</span> |
| --- |
| **rpc GetPermission([GetPermissionRequest](#animeshon.iam.admin.v1alpha1.GetPermissionRequest)) [Permission](#animeshon.iam.admin.v1alpha1.Permission)**<br/><br/> |

| <span id="animeshon.iam.admin.v1alpha1.IAM.ListPermissions">ListPermissions</span> |
| --- |
| **rpc ListPermissions([ListPermissionsRequest](#animeshon.iam.admin.v1alpha1.ListPermissionsRequest)) [ListPermissionsResponse](#animeshon.iam.admin.v1alpha1.ListPermissionsResponse)**<br/><br/> |

| <span id="animeshon.iam.admin.v1alpha1.IAM.CreatePermission">CreatePermission</span> |
| --- |
| **rpc CreatePermission([CreatePermissionRequest](#animeshon.iam.admin.v1alpha1.CreatePermissionRequest)) [Permission](#animeshon.iam.admin.v1alpha1.Permission)**<br/><br/> |

| <span id="animeshon.iam.admin.v1alpha1.IAM.UpdatePermission">UpdatePermission</span> |
| --- |
| **rpc UpdatePermission([UpdatePermissionRequest](#animeshon.iam.admin.v1alpha1.UpdatePermissionRequest)) [Permission](#animeshon.iam.admin.v1alpha1.Permission)**<br/><br/> |

| <span id="animeshon.iam.admin.v1alpha1.IAM.DeletePermission">DeletePermission</span> |
| --- |
| **rpc DeletePermission([DeletePermissionRequest](#animeshon.iam.admin.v1alpha1.DeletePermissionRequest)) [.google.protobuf.Empty](#google.protobuf.Empty)**<br/><br/> |


## <span id="animeshon.iam.admin.v1alpha1.CreatePermissionRequest">CreatePermissionRequest</span>



| Field | Description |
| --- | --- |
| permission | **[ Permission](#Permission)**<br/>The permission to create. |

## <span id="animeshon.iam.admin.v1alpha1.CreateRoleRequest">CreateRoleRequest</span>



| Field | Description |
| --- | --- |
| role | **[ Role](#Role)**<br/>The role to create. |

## <span id="animeshon.iam.admin.v1alpha1.CreateServiceAccountRequest">CreateServiceAccountRequest</span>



| Field | Description |
| --- | --- |
| service_account | **[ ServiceAccount](#ServiceAccount)**<br/>The service account to create. |

## <span id="animeshon.iam.admin.v1alpha1.DeletePermissionRequest">DeletePermissionRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the permission to delete. |

## <span id="animeshon.iam.admin.v1alpha1.DeleteRoleRequest">DeleteRoleRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the role to delete. |

## <span id="animeshon.iam.admin.v1alpha1.DeleteServiceAccountRequest">DeleteServiceAccountRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the service account to delete. |

## <span id="animeshon.iam.admin.v1alpha1.GetPermissionRequest">GetPermissionRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the permission to retrieve. |

## <span id="animeshon.iam.admin.v1alpha1.GetRoleRequest">GetRoleRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the role to retrieve. |

## <span id="animeshon.iam.admin.v1alpha1.GetServiceAccountRequest">GetServiceAccountRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the service account to retrieve. |

## <span id="animeshon.iam.admin.v1alpha1.ListPermissionsRequest">ListPermissionsRequest</span>



| Field | Description |
| --- | --- |
| page_size | **[ int32](#int32)**<br/>If unspecified, server will pick an appropriate default. |
| page_token | **[ string](#string)**<br/>The value returned from the previous call. |
| filter | **[ string](#string)**<br/>A filter to be applied to results. |

## <span id="animeshon.iam.admin.v1alpha1.ListPermissionsResponse">ListPermissionsResponse</span>



| Field | Description |
| --- | --- |
| permissions | **[repeated Permission](#Permission)**<br/>The list of permissions. |
| next_page_token | **[ string](#string)**<br/>A token to retrieve next page of results. |

## <span id="animeshon.iam.admin.v1alpha1.ListRolesRequest">ListRolesRequest</span>



| Field | Description |
| --- | --- |
| page_size | **[ int32](#int32)**<br/>If unspecified, server will pick an appropriate default. |
| page_token | **[ string](#string)**<br/>The value returned from the previous call. |
| filter | **[ string](#string)**<br/>A filter to be applied to results. |

## <span id="animeshon.iam.admin.v1alpha1.ListRolesResponse">ListRolesResponse</span>



| Field | Description |
| --- | --- |
| roles | **[repeated Role](#Role)**<br/>The list of roles. |
| next_page_token | **[ string](#string)**<br/>A token to retrieve next page of results. |

## <span id="animeshon.iam.admin.v1alpha1.ListServiceAccountsRequest">ListServiceAccountsRequest</span>



| Field | Description |
| --- | --- |
| parent | **[ string](#string)**<br/>The parent, which owns this collection of service accounts. |
| page_size | **[ int32](#int32)**<br/>If unspecified, server will pick an appropriate default. |
| page_token | **[ string](#string)**<br/>The value returned from the previous call. |
| filter | **[ string](#string)**<br/>A filter to be applied to results. |

## <span id="animeshon.iam.admin.v1alpha1.ListServiceAccountsResponse">ListServiceAccountsResponse</span>



| Field | Description |
| --- | --- |
| service_accounts | **[repeated ServiceAccount](#ServiceAccount)**<br/>The list of service accounts. |
| next_page_token | **[ string](#string)**<br/>A token to retrieve next page of results. |

## <span id="animeshon.iam.admin.v1alpha1.Permission">Permission</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of this permission. |
| display_name | **[ string](#string)**<br/>The display name of this permission. |
| description | **[ string](#string)**<br/>A brief description of what this permission is used for. |

## <span id="animeshon.iam.admin.v1alpha1.Role">Role</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the role. |
| display_name | **[ string](#string)**<br/>The display name of this role. |
| description | **[ string](#string)**<br/>A brief description of what this role is used for. |
| included_permissions | **[repeated string](#string)**<br/>The names of the permissions this role grants when bound in an IAM policy. |
| etag | **[ bytes](#bytes)**<br/>Used to perform a consistent read-modify-write. |

## <span id="animeshon.iam.admin.v1alpha1.ServiceAccount">ServiceAccount</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the service account. |
| uid | **[ string](#string)**<br/>The unique, stable numeric ID for the service account. |
| display_name | **[ string](#string)**<br/>The display name of this service account. |
| description | **[ string](#string)**<br/>A brief description of what this service account is used for. |
| oauth2_client_id | **[ string](#string)**<br/>OAuth2 client ID to use for the authentication flow. |
| oauth2_client_secret | **[ string](#string)**<br/>OAuth2 client secret to use for the authentication flow. |

## <span id="animeshon.iam.admin.v1alpha1.UpdatePermissionRequest">UpdatePermissionRequest</span>



| Field | Description |
| --- | --- |
| permission | **[ Permission](#Permission)**<br/>The permission to update. |
| update_mask | **[ google.protobuf.FieldMask](#google.protobuf.FieldMask)**<br/>The field mask to determine which fields are to be updated. If empty, the server will assume all fields are to be updated. |

## <span id="animeshon.iam.admin.v1alpha1.UpdateRoleRequest">UpdateRoleRequest</span>



| Field | Description |
| --- | --- |
| role | **[ Role](#Role)**<br/>The role to update. |
| update_mask | **[ google.protobuf.FieldMask](#google.protobuf.FieldMask)**<br/>The field mask to determine which fields are to be updated. If empty, the server will assume all fields are to be updated. |

## <span id="animeshon.iam.admin.v1alpha1.UpdateServiceAccountRequest">UpdateServiceAccountRequest</span>



| Field | Description |
| --- | --- |
| service_account | **[ ServiceAccount](#ServiceAccount)**<br/>The service account to update. |
| update_mask | **[ google.protobuf.FieldMask](#google.protobuf.FieldMask)**<br/>The field mask to determine which fields are to be updated. If empty, the server will assume all fields are to be updated. |
