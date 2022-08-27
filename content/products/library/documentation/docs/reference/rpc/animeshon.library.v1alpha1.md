---
title: animeshon.library.v1alpha1
---

# Package animeshon.library.v1alpha1

## Index
- [Library](#animeshon.library.v1alpha1.Library)
- [Audience](#animeshon.library.v1alpha1.Audience)
- [BatchCreatePlaylistItemsRequest](#animeshon.library.v1alpha1.BatchCreatePlaylistItemsRequest)
- [BatchCreatePlaylistItemsResponse](#animeshon.library.v1alpha1.BatchCreatePlaylistItemsResponse)
- [CreatePlaylistItemRequest](#animeshon.library.v1alpha1.CreatePlaylistItemRequest)
- [CreatePlaylistRequest](#animeshon.library.v1alpha1.CreatePlaylistRequest)
- [DeletePlaylistItemRequest](#animeshon.library.v1alpha1.DeletePlaylistItemRequest)
- [DeletePlaylistRequest](#animeshon.library.v1alpha1.DeletePlaylistRequest)
- [GetPlaylistRequest](#animeshon.library.v1alpha1.GetPlaylistRequest)
- [ListPlaylistItemsRequest](#animeshon.library.v1alpha1.ListPlaylistItemsRequest)
- [ListPlaylistItemsResponse](#animeshon.library.v1alpha1.ListPlaylistItemsResponse)
- [ListPlaylistsRequest](#animeshon.library.v1alpha1.ListPlaylistsRequest)
- [ListPlaylistsResponse](#animeshon.library.v1alpha1.ListPlaylistsResponse)
- [Playlist](#animeshon.library.v1alpha1.Playlist)
- [PlaylistItem](#animeshon.library.v1alpha1.PlaylistItem)
- [UpdatePlaylistRequest](#animeshon.library.v1alpha1.UpdatePlaylistRequest)

- [Type](#animeshon.library.v1alpha1.Type)
## <span id="animeshon.library.v1alpha1.Library">Library</span>



| <span id="animeshon.library.v1alpha1.Library.GetPlaylist">GetPlaylist</span> |
| --- |
| **rpc GetPlaylist([GetPlaylistRequest](#animeshon.library.v1alpha1.GetPlaylistRequest)) [Playlist](#animeshon.library.v1alpha1.Playlist)**<br/><br/> |

| <span id="animeshon.library.v1alpha1.Library.ListPlaylists">ListPlaylists</span> |
| --- |
| **rpc ListPlaylists([ListPlaylistsRequest](#animeshon.library.v1alpha1.ListPlaylistsRequest)) [ListPlaylistsResponse](#animeshon.library.v1alpha1.ListPlaylistsResponse)**<br/><br/> |

| <span id="animeshon.library.v1alpha1.Library.CreatePlaylist">CreatePlaylist</span> |
| --- |
| **rpc CreatePlaylist([CreatePlaylistRequest](#animeshon.library.v1alpha1.CreatePlaylistRequest)) [Playlist](#animeshon.library.v1alpha1.Playlist)**<br/><br/> |

| <span id="animeshon.library.v1alpha1.Library.UpdatePlaylist">UpdatePlaylist</span> |
| --- |
| **rpc UpdatePlaylist([UpdatePlaylistRequest](#animeshon.library.v1alpha1.UpdatePlaylistRequest)) [Playlist](#animeshon.library.v1alpha1.Playlist)**<br/><br/> |

| <span id="animeshon.library.v1alpha1.Library.DeletePlaylist">DeletePlaylist</span> |
| --- |
| **rpc DeletePlaylist([DeletePlaylistRequest](#animeshon.library.v1alpha1.DeletePlaylistRequest)) [.google.protobuf.Empty](#google.protobuf.Empty)**<br/><br/> |

| <span id="animeshon.library.v1alpha1.Library.ListPlaylistItems">ListPlaylistItems</span> |
| --- |
| **rpc ListPlaylistItems([ListPlaylistItemsRequest](#animeshon.library.v1alpha1.ListPlaylistItemsRequest)) [ListPlaylistItemsResponse](#animeshon.library.v1alpha1.ListPlaylistItemsResponse)**<br/><br/> |

| <span id="animeshon.library.v1alpha1.Library.CreatePlaylistItem">CreatePlaylistItem</span> |
| --- |
| **rpc CreatePlaylistItem([CreatePlaylistItemRequest](#animeshon.library.v1alpha1.CreatePlaylistItemRequest)) [PlaylistItem](#animeshon.library.v1alpha1.PlaylistItem)**<br/><br/> |

| <span id="animeshon.library.v1alpha1.Library.BatchCreatePlaylistItems">BatchCreatePlaylistItems</span> |
| --- |
| **rpc BatchCreatePlaylistItems([BatchCreatePlaylistItemsRequest](#animeshon.library.v1alpha1.BatchCreatePlaylistItemsRequest)) [BatchCreatePlaylistItemsResponse](#animeshon.library.v1alpha1.BatchCreatePlaylistItemsResponse)**<br/><br/> |

| <span id="animeshon.library.v1alpha1.Library.DeletePlaylistItem">DeletePlaylistItem</span> |
| --- |
| **rpc DeletePlaylistItem([DeletePlaylistItemRequest](#animeshon.library.v1alpha1.DeletePlaylistItemRequest)) [.google.protobuf.Empty](#google.protobuf.Empty)**<br/><br/> |


## <span id="animeshon.library.v1alpha1.Audience">Audience</span>

TODO: this is represented as a group in authorization.
TODO: who should be the owner of an audience? the user who created it?

| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The id of the audience. |
| members | **[repeated string](#string)**<br/>The members of this audience. |

## <span id="animeshon.library.v1alpha1.BatchCreatePlaylistItemsRequest">BatchCreatePlaylistItemsRequest</span>



| Field | Description |
| --- | --- |
| parent | **[ string](#string)**<br/>The parent this playlist item belongs to. |
| items | **[repeated PlaylistItem](#PlaylistItem)**<br/>The playlist items to create. |

## <span id="animeshon.library.v1alpha1.BatchCreatePlaylistItemsResponse">BatchCreatePlaylistItemsResponse</span>



| Field | Description |
| --- | --- |
| items | **[repeated PlaylistItem](#PlaylistItem)**<br/>The list of items added to the playlist |

## <span id="animeshon.library.v1alpha1.CreatePlaylistItemRequest">CreatePlaylistItemRequest</span>



| Field | Description |
| --- | --- |
| parent | **[ string](#string)**<br/>The parent this playlist item belongs to. |
| item | **[ PlaylistItem](#PlaylistItem)**<br/>The playlist item to create. |

## <span id="animeshon.library.v1alpha1.CreatePlaylistRequest">CreatePlaylistRequest</span>



| Field | Description |
| --- | --- |
| parent | **[ string](#string)**<br/>The parent this playlist belongs to. |
| playlist | **[ Playlist](#Playlist)**<br/>The playlist to create. |

## <span id="animeshon.library.v1alpha1.DeletePlaylistItemRequest">DeletePlaylistItemRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the playlist item to delete. |

## <span id="animeshon.library.v1alpha1.DeletePlaylistRequest">DeletePlaylistRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the playlist to delete. |

## <span id="animeshon.library.v1alpha1.GetPlaylistRequest">GetPlaylistRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The name of the playlist to retrieve. |

## <span id="animeshon.library.v1alpha1.ListPlaylistItemsRequest">ListPlaylistItemsRequest</span>



| Field | Description |
| --- | --- |
| parent | **[ string](#string)**<br/>The playlist this item belongs to. |
| page_size | **[ int32](#int32)**<br/>If unspecified, server will pick an appropriate default. |
| page_token | **[ string](#string)**<br/>The value returned from the previous call. |
| filter | **[ string](#string)**<br/>A filter to be applied to results. |

## <span id="animeshon.library.v1alpha1.ListPlaylistItemsResponse">ListPlaylistItemsResponse</span>



| Field | Description |
| --- | --- |
| items | **[repeated PlaylistItem](#PlaylistItem)**<br/>The list of playlist items. |
| next_page_token | **[ string](#string)**<br/>A token to retrieve next page of results. |
| total_size | **[ int32](#int32)**<br/>The total number of items available in this playlist. |

## <span id="animeshon.library.v1alpha1.ListPlaylistsRequest">ListPlaylistsRequest</span>



| Field | Description |
| --- | --- |
| parent | **[ string](#string)**<br/>The user this playlist belongs to. |
| page_size | **[ int32](#int32)**<br/>If unspecified, server will pick an appropriate default. |
| page_token | **[ string](#string)**<br/>The value returned from the previous call. |
| filter | **[ string](#string)**<br/>A filter to be applied to results. |

## <span id="animeshon.library.v1alpha1.ListPlaylistsResponse">ListPlaylistsResponse</span>



| Field | Description |
| --- | --- |
| playlists | **[repeated Playlist](#Playlist)**<br/>The list of playlists. |
| next_page_token | **[ string](#string)**<br/>A token to retrieve next page of results. |

## <span id="animeshon.library.v1alpha1.Playlist">Playlist</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The id of the playlist. |
| display_name | **[ string](#string)**<br/>The display name of the playlist. |
| type | **[ Type](#Type)**<br/>The type of the playlist. |

## <span id="animeshon.library.v1alpha1.PlaylistItem">PlaylistItem</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The id of the playlist. |
| resource | **[ string](#string)**<br/>The full resource name that identifies the resource. |
| create_time | **[ google.protobuf.Timestamp](#google.protobuf.Timestamp)**<br/>The timestamp at which the playlist item was created. |

## <span id="animeshon.library.v1alpha1.UpdatePlaylistRequest">UpdatePlaylistRequest</span>



| Field | Description |
| --- | --- |
| playlist | **[ Playlist](#Playlist)**<br/>The playlist to update. |
| update_mask | **[ google.protobuf.FieldMask](#google.protobuf.FieldMask)**<br/>The field mask to determine which fields are to be updated. If empty, the server will assume all fields are to be updated. |

## <span id="animeshon.library.v1alpha1.Type">Type</span>


| Name | Description |
| --- | --- |
| TYPE_UNSPECIFIED | No description. |
| LATER | The playlist holds items intended to be consumed at a later date |
| LIKED | The playlist holds liked items |
| CUSTOM | The playlist is custom made by the user |
