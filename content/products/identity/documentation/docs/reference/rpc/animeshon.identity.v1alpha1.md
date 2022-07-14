---
title: animeshon.identity.v1alpha1
---

# Package animeshon.identity.v1alpha1

## Index
- [Identity](#animeshon.identity.v1alpha1.Identity)
- [CreateGroupRequest](#animeshon.identity.v1alpha1.CreateGroupRequest)
- [CreateUserRequest](#animeshon.identity.v1alpha1.CreateUserRequest)
- [DeleteGroupRequest](#animeshon.identity.v1alpha1.DeleteGroupRequest)
- [DeleteUserRequest](#animeshon.identity.v1alpha1.DeleteUserRequest)
- [GetGroupRequest](#animeshon.identity.v1alpha1.GetGroupRequest)
- [GetUserDefaultsRequest](#animeshon.identity.v1alpha1.GetUserDefaultsRequest)
- [GetUserNotificationsRequest](#animeshon.identity.v1alpha1.GetUserNotificationsRequest)
- [GetUserProfileRequest](#animeshon.identity.v1alpha1.GetUserProfileRequest)
- [GetUserRequest](#animeshon.identity.v1alpha1.GetUserRequest)
- [GetUserSettingsRequest](#animeshon.identity.v1alpha1.GetUserSettingsRequest)
- [Group](#animeshon.identity.v1alpha1.Group)
- [ListGroupsRequest](#animeshon.identity.v1alpha1.ListGroupsRequest)
- [ListGroupsResponse](#animeshon.identity.v1alpha1.ListGroupsResponse)
- [ListUsersRequest](#animeshon.identity.v1alpha1.ListUsersRequest)
- [ListUsersResponse](#animeshon.identity.v1alpha1.ListUsersResponse)
- [UpdateGroupRequest](#animeshon.identity.v1alpha1.UpdateGroupRequest)
- [UpdateUserNotificationsRequest](#animeshon.identity.v1alpha1.UpdateUserNotificationsRequest)
- [UpdateUserRequest](#animeshon.identity.v1alpha1.UpdateUserRequest)
- [UpdateUserSettingsRequest](#animeshon.identity.v1alpha1.UpdateUserSettingsRequest)
- [User](#animeshon.identity.v1alpha1.User)
- [UserDefaults](#animeshon.identity.v1alpha1.UserDefaults)
- [UserNotifications](#animeshon.identity.v1alpha1.UserNotifications)
- [UserProfile](#animeshon.identity.v1alpha1.UserProfile)
- [UserSettings](#animeshon.identity.v1alpha1.UserSettings)

- [Gender](#animeshon.identity.v1alpha1.Gender)
- [UserSettings.Visibility](#animeshon.identity.v1alpha1.UserSettings.Visibility)
## <span id="animeshon.identity.v1alpha1.Identity">Identity</span>



| <span id="animeshon.identity.v1alpha1.Identity.GetUserProfile">GetUserProfile</span> |
| --- |
| **rpc GetUserProfile([GetUserProfileRequest](#animeshon.identity.v1alpha1.GetUserProfileRequest)) [UserProfile](#animeshon.identity.v1alpha1.UserProfile)**<br/><br/> |

| <span id="animeshon.identity.v1alpha1.Identity.GetUser">GetUser</span> |
| --- |
| **rpc GetUser([GetUserRequest](#animeshon.identity.v1alpha1.GetUserRequest)) [User](#animeshon.identity.v1alpha1.User)**<br/><br/> |

| <span id="animeshon.identity.v1alpha1.Identity.ListUsers">ListUsers</span> |
| --- |
| **rpc ListUsers([ListUsersRequest](#animeshon.identity.v1alpha1.ListUsersRequest)) [ListUsersResponse](#animeshon.identity.v1alpha1.ListUsersResponse)**<br/><br/> |

| <span id="animeshon.identity.v1alpha1.Identity.CreateUser">CreateUser</span> |
| --- |
| **rpc CreateUser([CreateUserRequest](#animeshon.identity.v1alpha1.CreateUserRequest)) [User](#animeshon.identity.v1alpha1.User)**<br/><br/> |

| <span id="animeshon.identity.v1alpha1.Identity.UpdateUser">UpdateUser</span> |
| --- |
| **rpc UpdateUser([UpdateUserRequest](#animeshon.identity.v1alpha1.UpdateUserRequest)) [User](#animeshon.identity.v1alpha1.User)**<br/><br/> |

| <span id="animeshon.identity.v1alpha1.Identity.DeleteUser">DeleteUser</span> |
| --- |
| **rpc DeleteUser([DeleteUserRequest](#animeshon.identity.v1alpha1.DeleteUserRequest)) [.google.protobuf.Empty](#google.protobuf.Empty)**<br/><br/> |

| <span id="animeshon.identity.v1alpha1.Identity.GetUserSettings">GetUserSettings</span> |
| --- |
| **rpc GetUserSettings([GetUserSettingsRequest](#animeshon.identity.v1alpha1.GetUserSettingsRequest)) [UserSettings](#animeshon.identity.v1alpha1.UserSettings)**<br/><br/> |

| <span id="animeshon.identity.v1alpha1.Identity.UpdateUserSettings">UpdateUserSettings</span> |
| --- |
| **rpc UpdateUserSettings([UpdateUserSettingsRequest](#animeshon.identity.v1alpha1.UpdateUserSettingsRequest)) [UserSettings](#animeshon.identity.v1alpha1.UserSettings)**<br/><br/> |

| <span id="animeshon.identity.v1alpha1.Identity.GetUserNotifications">GetUserNotifications</span> |
| --- |
| **rpc GetUserNotifications([GetUserNotificationsRequest](#animeshon.identity.v1alpha1.GetUserNotificationsRequest)) [UserNotifications](#animeshon.identity.v1alpha1.UserNotifications)**<br/><br/> |

| <span id="animeshon.identity.v1alpha1.Identity.UpdateUserNotifications">UpdateUserNotifications</span> |
| --- |
| **rpc UpdateUserNotifications([UpdateUserNotificationsRequest](#animeshon.identity.v1alpha1.UpdateUserNotificationsRequest)) [UserNotifications](#animeshon.identity.v1alpha1.UserNotifications)**<br/><br/> |

| <span id="animeshon.identity.v1alpha1.Identity.GetUserDefaults">GetUserDefaults</span> |
| --- |
| **rpc GetUserDefaults([GetUserDefaultsRequest](#animeshon.identity.v1alpha1.GetUserDefaultsRequest)) [UserDefaults](#animeshon.identity.v1alpha1.UserDefaults)**<br/><br/> |

| <span id="animeshon.identity.v1alpha1.Identity.GetGroup">GetGroup</span> |
| --- |
| **rpc GetGroup([GetGroupRequest](#animeshon.identity.v1alpha1.GetGroupRequest)) [Group](#animeshon.identity.v1alpha1.Group)**<br/><br/> |

| <span id="animeshon.identity.v1alpha1.Identity.ListGroups">ListGroups</span> |
| --- |
| **rpc ListGroups([ListGroupsRequest](#animeshon.identity.v1alpha1.ListGroupsRequest)) [ListGroupsResponse](#animeshon.identity.v1alpha1.ListGroupsResponse)**<br/><br/> |

| <span id="animeshon.identity.v1alpha1.Identity.CreateGroup">CreateGroup</span> |
| --- |
| **rpc CreateGroup([CreateGroupRequest](#animeshon.identity.v1alpha1.CreateGroupRequest)) [Group](#animeshon.identity.v1alpha1.Group)**<br/><br/> |

| <span id="animeshon.identity.v1alpha1.Identity.UpdateGroup">UpdateGroup</span> |
| --- |
| **rpc UpdateGroup([UpdateGroupRequest](#animeshon.identity.v1alpha1.UpdateGroupRequest)) [Group](#animeshon.identity.v1alpha1.Group)**<br/><br/> |

| <span id="animeshon.identity.v1alpha1.Identity.DeleteGroup">DeleteGroup</span> |
| --- |
| **rpc DeleteGroup([DeleteGroupRequest](#animeshon.identity.v1alpha1.DeleteGroupRequest)) [.google.protobuf.Empty](#google.protobuf.Empty)**<br/><br/> |


## <span id="animeshon.identity.v1alpha1.CreateGroupRequest">CreateGroupRequest</span>



| Field | Description |
| --- | --- |
| group | **[ Group](#Group)**<br/>The group to create. |

## <span id="animeshon.identity.v1alpha1.CreateUserRequest">CreateUserRequest</span>



| Field | Description |
| --- | --- |
| user | **[ User](#User)**<br/>The user to create. |

## <span id="animeshon.identity.v1alpha1.DeleteGroupRequest">DeleteGroupRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the group to delete. |

## <span id="animeshon.identity.v1alpha1.DeleteUserRequest">DeleteUserRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the user to delete. |

## <span id="animeshon.identity.v1alpha1.GetGroupRequest">GetGroupRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the group to retrieve. |

## <span id="animeshon.identity.v1alpha1.GetUserDefaultsRequest">GetUserDefaultsRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the user to retrieve the defaults from. |

## <span id="animeshon.identity.v1alpha1.GetUserNotificationsRequest">GetUserNotificationsRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the user to retrieve the notifications from. |

## <span id="animeshon.identity.v1alpha1.GetUserProfileRequest">GetUserProfileRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the user to retrieve the profile from. |

## <span id="animeshon.identity.v1alpha1.GetUserRequest">GetUserRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the user to retrieve. |

## <span id="animeshon.identity.v1alpha1.GetUserSettingsRequest">GetUserSettingsRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the user to retrieve the settings from. |

## <span id="animeshon.identity.v1alpha1.Group">Group</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The resource name of the group. |
| members | **[repeated string](#string)**<br/>The list of members of the group. Groups might include other groups. |
| etag | **[ bytes](#bytes)**<br/>An etag for concurrency control, ignored during creation. |

## <span id="animeshon.identity.v1alpha1.ListGroupsRequest">ListGroupsRequest</span>



| Field | Description |
| --- | --- |
| page_size | **[ int32](#int32)**<br/>If unspecified, server will pick an appropriate default. |
| page_token | **[ string](#string)**<br/>The value returned from the previous call. |
| filter | **[ string](#string)**<br/>A filter to be applied to results. |

## <span id="animeshon.identity.v1alpha1.ListGroupsResponse">ListGroupsResponse</span>



| Field | Description |
| --- | --- |
| groups | **[repeated Group](#Group)**<br/>The list of groups. |
| next_page_token | **[ string](#string)**<br/>A token to retrieve next page of results. |

## <span id="animeshon.identity.v1alpha1.ListUsersRequest">ListUsersRequest</span>



| Field | Description |
| --- | --- |
| page_size | **[ int32](#int32)**<br/>If unspecified, server will pick an appropriate default. |
| page_token | **[ string](#string)**<br/>The value returned from the previous call. |
| filter | **[ string](#string)**<br/>A filter to be applied to results. |

## <span id="animeshon.identity.v1alpha1.ListUsersResponse">ListUsersResponse</span>



| Field | Description |
| --- | --- |
| users | **[repeated User](#User)**<br/>The list of users. |
| next_page_token | **[ string](#string)**<br/>A token to retrieve next page of results. |

## <span id="animeshon.identity.v1alpha1.UpdateGroupRequest">UpdateGroupRequest</span>



| Field | Description |
| --- | --- |
| group | **[ Group](#Group)**<br/>The group to update. |
| update_mask | **[ google.protobuf.FieldMask](#google.protobuf.FieldMask)**<br/>The field mask to determine which fields are to be updated. If empty, the server will assume all fields are to be updated. |

## <span id="animeshon.identity.v1alpha1.UpdateUserNotificationsRequest">UpdateUserNotificationsRequest</span>



| Field | Description |
| --- | --- |
| notifications | **[ UserNotifications](#UserNotifications)**<br/>The user notifications to update. |
| update_mask | **[ google.protobuf.FieldMask](#google.protobuf.FieldMask)**<br/>The field mask to determine which fields are to be updated. If empty, the server will assume all fields are to be updated. |

## <span id="animeshon.identity.v1alpha1.UpdateUserRequest">UpdateUserRequest</span>



| Field | Description |
| --- | --- |
| user | **[ User](#User)**<br/>The user to update. |
| update_mask | **[ google.protobuf.FieldMask](#google.protobuf.FieldMask)**<br/>The field mask to determine which fields are to be updated. If empty, the server will assume all fields are to be updated. |

## <span id="animeshon.identity.v1alpha1.UpdateUserSettingsRequest">UpdateUserSettingsRequest</span>



| Field | Description |
| --- | --- |
| settings | **[ UserSettings](#UserSettings)**<br/>The user settings to update. |
| update_mask | **[ google.protobuf.FieldMask](#google.protobuf.FieldMask)**<br/>The field mask to determine which fields are to be updated. If empty, the server will assume all fields are to be updated. |

## <span id="animeshon.identity.v1alpha1.User">User</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The resource name of the user. |
| uuid | **[ string](#string)**<br/>The uuid that identifies the user during the authentication flow. |
| username | **[ string](#string)**<br/>The public username of the user. |
| discriminator | **[ string](#string)**<br/>The public discriminator of the user. |
| primary_email | **[ string](#string)**<br/>The primary email address of the user. |
| primary_email_verified | **[ bool](#bool)**<br/>Whether the primary email address has been verified. |
| given_name | **[ string](#string)**<br/>The given name of the user. |
| family_name | **[ string](#string)**<br/>The family name of the user. |
| display_name | **[ string](#string)**<br/>The name of the user. |
| country_code | **[ string](#string)**<br/>The country where the user is located at, must be a valid ISO-3166 code. |
| locale | **[ string](#string)**<br/>The locale preferred by the user, must be a valid BCP-47 code. |
| locale_fallback | **[ string](#string)**<br/>The fallback locale preferred by the user, must be a valid BCP-47 code. The only allowed values are eng, jpn, and jpn-Latn (romaji). |
| birthday | **[ google.type.Date](#google.type.Date)**<br/>The birthday defined by the user, this value is used to determine whether the user should be allowed to access explicit and sensitive content. |
| gender | **[ Gender](#Gender)**<br/>The gender of the user. |
| profile_image | **[ string](#string)**<br/>The profile image of the user. |
| banner_image | **[ string](#string)**<br/>The banner image of the user. |

## <span id="animeshon.identity.v1alpha1.UserDefaults">UserDefaults</span>



| Field | Description |
| --- | --- |
| album_profile | **[ string](#string)**<br/>The system-managed album dedicated to user profile images. |
| album_banner | **[ string](#string)**<br/>The system-managed album dedicated to user banner images. |
| playlist_liked | **[ string](#string)**<br/>The system-managed playlist dedicated to user liked content. |
| playlist_later | **[ string](#string)**<br/>The system-managed playlist dedicated to user saved for later content. |

## <span id="animeshon.identity.v1alpha1.UserNotifications">UserNotifications</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The resource name of the user. |

## <span id="animeshon.identity.v1alpha1.UserProfile">UserProfile</span>

This message is returned only when a user wants to fetch information about
another user and the amount of information returned is greatly reduced to
ensure that personal and confidential information is never disclosed by
accident to other users. The user profile is read-only.

| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The resource name of the user. |
| profile_image | **[ string](#string)**<br/>The profile image of the user. |
| banner_image | **[ string](#string)**<br/>The banner image of the user. |
| username | **[ string](#string)**<br/>The public username of the user. |
| discriminator | **[ string](#string)**<br/>The public discriminator of the user. |
| birthday | **[ google.type.Date](#google.type.Date)**<br/>The birthday of the user, this value is hidden for private profiles. |
| gender | **[ Gender](#Gender)**<br/>The gender of the user, this value is hidden for private profiles. |

## <span id="animeshon.identity.v1alpha1.UserSettings">UserSettings</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The resource name of the user. |
| profile_visibility | **[ UserSettings.Visibility](#UserSettings.Visibility)**<br/>A private user will only have the username, discriminator, profile image and banner image public. |
| show_explicit_content | **[ bool](#bool)**<br/>Whether the user choose to see explicit content during navigation. |
| enable_developer_mode | **[ bool](#bool)**<br/>Whether the user has enabled the developer mode. |

## <span id="animeshon.identity.v1alpha1.Gender">Gender</span>


| Name | Description |
| --- | --- |
| GENDER_UNSPECIFIED | Not specified. |
| MALE | Male. |
| FEMALE | Female. |
| OTHER | Any other non-binary gender. |

## <span id="animeshon.identity.v1alpha1.UserSettings.Visibility">UserSettings.Visibility</span>


| Name | Description |
| --- | --- |
| VISIBILITY_UNSPECIFIED | Not specified. |
| PUBLIC | Public. |
| PRIVATE | Private. |
