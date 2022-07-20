---
title: animeshon.crossrefs.v1alpha1
---

# Package animeshon.crossrefs.v1alpha1

## Index
- [Referrer](#animeshon.crossrefs.v1alpha1.Referrer)
- [AnalyzeCrossRefRequest](#animeshon.crossrefs.v1alpha1.AnalyzeCrossRefRequest)
- [AnalyzeCrossRefRequest.AnalyzeCrossRefConfig](#animeshon.crossrefs.v1alpha1.AnalyzeCrossRefRequest.AnalyzeCrossRefConfig)
- [AnalyzeCrossRefRequest.AnalyzeCrossRefConfig.OptsEntry](#animeshon.crossrefs.v1alpha1.AnalyzeCrossRefRequest.AnalyzeCrossRefConfig.OptsEntry)
- [AnalyzeCrossRefRequest.AnalyzeCrossRefNamespaceConfig](#animeshon.crossrefs.v1alpha1.AnalyzeCrossRefRequest.AnalyzeCrossRefNamespaceConfig)
- [AnalyzeCrossRefRequest.AnalyzeCrossRefTargetConfig](#animeshon.crossrefs.v1alpha1.AnalyzeCrossRefRequest.AnalyzeCrossRefTargetConfig)
- [AnalyzeCrossRefRequest.AnalyzeCrossRefTargetConfig.NamespacesEntry](#animeshon.crossrefs.v1alpha1.AnalyzeCrossRefRequest.AnalyzeCrossRefTargetConfig.NamespacesEntry)
- [AnalyzeCrossRefRequest.TargetKindsEntry](#animeshon.crossrefs.v1alpha1.AnalyzeCrossRefRequest.TargetKindsEntry)
- [AnalyzeCrossRefsResponse](#animeshon.crossrefs.v1alpha1.AnalyzeCrossRefsResponse)
- [AnalyzeParodiesResponse](#animeshon.crossrefs.v1alpha1.AnalyzeParodiesResponse)
- [BatchCreateCrossRefsRequest](#animeshon.crossrefs.v1alpha1.BatchCreateCrossRefsRequest)
- [BatchCreateCrossRefsResponse](#animeshon.crossrefs.v1alpha1.BatchCreateCrossRefsResponse)
- [CountCrossRefsRequest](#animeshon.crossrefs.v1alpha1.CountCrossRefsRequest)
- [CountCrossRefsResponse](#animeshon.crossrefs.v1alpha1.CountCrossRefsResponse)
- [CreateCrossRefRequest](#animeshon.crossrefs.v1alpha1.CreateCrossRefRequest)
- [CrossRef](#animeshon.crossrefs.v1alpha1.CrossRef)
- [CrossRefEdge](#animeshon.crossrefs.v1alpha1.CrossRefEdge)
- [CrossRefsFilterRequest](#animeshon.crossrefs.v1alpha1.CrossRefsFilterRequest)
- [ExpandUniverseRequest](#animeshon.crossrefs.v1alpha1.ExpandUniverseRequest)
- [ExpandUniverseResponse](#animeshon.crossrefs.v1alpha1.ExpandUniverseResponse)
- [ExportCrossRefRequest](#animeshon.crossrefs.v1alpha1.ExportCrossRefRequest)
- [ExportCrossRefsResponse](#animeshon.crossrefs.v1alpha1.ExportCrossRefsResponse)
- [ExportParodiesResponse](#animeshon.crossrefs.v1alpha1.ExportParodiesResponse)
- [GetCrossRefRequest](#animeshon.crossrefs.v1alpha1.GetCrossRefRequest)
- [GetUniverseRequest](#animeshon.crossrefs.v1alpha1.GetUniverseRequest)
- [GetWormholeRequest](#animeshon.crossrefs.v1alpha1.GetWormholeRequest)
- [ImportCrossRefRequest](#animeshon.crossrefs.v1alpha1.ImportCrossRefRequest)
- [ImportCrossRefRequest.OptsEntry](#animeshon.crossrefs.v1alpha1.ImportCrossRefRequest.OptsEntry)
- [ImportCrossRefsResponse](#animeshon.crossrefs.v1alpha1.ImportCrossRefsResponse)
- [InitializeCrossRefsResponse](#animeshon.crossrefs.v1alpha1.InitializeCrossRefsResponse)
- [ListCrossRefsRequest](#animeshon.crossrefs.v1alpha1.ListCrossRefsRequest)
- [ListCrossRefsResponse](#animeshon.crossrefs.v1alpha1.ListCrossRefsResponse)
- [ListWormholeCrossRefsRequest](#animeshon.crossrefs.v1alpha1.ListWormholeCrossRefsRequest)
- [ListWormholeCrossRefsResponse](#animeshon.crossrefs.v1alpha1.ListWormholeCrossRefsResponse)
- [OperationMetadata](#animeshon.crossrefs.v1alpha1.OperationMetadata)
- [Universe](#animeshon.crossrefs.v1alpha1.Universe)
- [UpdateCrossRefRequest](#animeshon.crossrefs.v1alpha1.UpdateCrossRefRequest)
- [UpdateCrossRefResponse](#animeshon.crossrefs.v1alpha1.UpdateCrossRefResponse)
- [UpdateUniverseRequest](#animeshon.crossrefs.v1alpha1.UpdateUniverseRequest)
- [Wormhole](#animeshon.crossrefs.v1alpha1.Wormhole)
- [Wormhole.Text](#animeshon.crossrefs.v1alpha1.Wormhole.Text)

## <span id="animeshon.crossrefs.v1alpha1.Referrer">Referrer</span>



| <span id="animeshon.crossrefs.v1alpha1.Referrer.GetCrossRef">GetCrossRef</span> |
| --- |
| **rpc GetCrossRef([GetCrossRefRequest](#animeshon.crossrefs.v1alpha1.GetCrossRefRequest)) [CrossRef](#animeshon.crossrefs.v1alpha1.CrossRef)**<br/><br/>GetCrossRef returns a crossref. |

| <span id="animeshon.crossrefs.v1alpha1.Referrer.ListCrossRefs">ListCrossRefs</span> |
| --- |
| **rpc ListCrossRefs([ListCrossRefsRequest](#animeshon.crossrefs.v1alpha1.ListCrossRefsRequest)) [ListCrossRefsResponse](#animeshon.crossrefs.v1alpha1.ListCrossRefsResponse)**<br/><br/> |

| <span id="animeshon.crossrefs.v1alpha1.Referrer.CreateCrossRef">CreateCrossRef</span> |
| --- |
| **rpc CreateCrossRef([CreateCrossRefRequest](#animeshon.crossrefs.v1alpha1.CreateCrossRefRequest)) [CrossRef](#animeshon.crossrefs.v1alpha1.CrossRef)**<br/><br/>CreateCrossRef creates a new crossref. |

| <span id="animeshon.crossrefs.v1alpha1.Referrer.BatchCreateCrossRefs">BatchCreateCrossRefs</span> |
| --- |
| **rpc BatchCreateCrossRefs([BatchCreateCrossRefsRequest](#animeshon.crossrefs.v1alpha1.BatchCreateCrossRefsRequest)) [BatchCreateCrossRefsResponse](#animeshon.crossrefs.v1alpha1.BatchCreateCrossRefsResponse)**<br/><br/>BatchCreateCrossRefs creates new crossrefs in batch. The limit is of 10 crossreferences and it's blocking. It ensures that the crossreferences are created in the database but not propagated to the other services |

| <span id="animeshon.crossrefs.v1alpha1.Referrer.UpdateCrossRef">UpdateCrossRef</span> |
| --- |
| **rpc UpdateCrossRef([UpdateCrossRefRequest](#animeshon.crossrefs.v1alpha1.UpdateCrossRefRequest)) [UpdateCrossRefResponse](#animeshon.crossrefs.v1alpha1.UpdateCrossRefResponse)**<br/><br/> |

| <span id="animeshon.crossrefs.v1alpha1.Referrer.CountCrossRefs">CountCrossRefs</span> |
| --- |
| **rpc CountCrossRefs([CountCrossRefsRequest](#animeshon.crossrefs.v1alpha1.CountCrossRefsRequest)) [CountCrossRefsResponse](#animeshon.crossrefs.v1alpha1.CountCrossRefsResponse)**<br/><br/> |

| <span id="animeshon.crossrefs.v1alpha1.Referrer.AnalyzeCrossRefs">AnalyzeCrossRefs</span> |
| --- |
| **rpc AnalyzeCrossRefs([AnalyzeCrossRefRequest](#animeshon.crossrefs.v1alpha1.AnalyzeCrossRefRequest)) [.google.longrunning.Operation](#google.longrunning.Operation)**<br/><br/>Analyzes and proposes new cross-references according to their similarity. |

| <span id="animeshon.crossrefs.v1alpha1.Referrer.ImportCrossRefs">ImportCrossRefs</span> |
| --- |
| **rpc ImportCrossRefs([ImportCrossRefRequest](#animeshon.crossrefs.v1alpha1.ImportCrossRefRequest)) [.google.longrunning.Operation](#google.longrunning.Operation)**<br/><br/>Imports already existing cross-references from third-parties. |

| <span id="animeshon.crossrefs.v1alpha1.Referrer.ExportCrossRefs">ExportCrossRefs</span> |
| --- |
| **rpc ExportCrossRefs([ExportCrossRefRequest](#animeshon.crossrefs.v1alpha1.ExportCrossRefRequest)) [.google.longrunning.Operation](#google.longrunning.Operation)**<br/><br/>Exports the cross-references to Cloud Pub/Sub for a full synchronization. This operation is usually called after a new import with a clean database. |

| <span id="animeshon.crossrefs.v1alpha1.Referrer.InitializeCrossRefs">InitializeCrossRefs</span> |
| --- |
| **rpc InitializeCrossRefs([.google.protobuf.Empty](#google.protobuf.Empty)) [.google.longrunning.Operation](#google.longrunning.Operation)**<br/><br/>Initialize the cross-references using specific namespaces for each kind. This operation first analyzes the entities meeting the kind and namespace precondition to match new entities with existing ones |

| <span id="animeshon.crossrefs.v1alpha1.Referrer.AnalyzeParodies">AnalyzeParodies</span> |
| --- |
| **rpc AnalyzeParodies([.google.protobuf.Empty](#google.protobuf.Empty)) [.google.longrunning.Operation](#google.longrunning.Operation)**<br/><br/> |

| <span id="animeshon.crossrefs.v1alpha1.Referrer.ExportParodies">ExportParodies</span> |
| --- |
| **rpc ExportParodies([.google.protobuf.Empty](#google.protobuf.Empty)) [.google.longrunning.Operation](#google.longrunning.Operation)**<br/><br/> |

| <span id="animeshon.crossrefs.v1alpha1.Referrer.GetUniverse">GetUniverse</span> |
| --- |
| **rpc GetUniverse([GetUniverseRequest](#animeshon.crossrefs.v1alpha1.GetUniverseRequest)) [Universe](#animeshon.crossrefs.v1alpha1.Universe)**<br/><br/> |

| <span id="animeshon.crossrefs.v1alpha1.Referrer.UpdateUniverse">UpdateUniverse</span> |
| --- |
| **rpc UpdateUniverse([UpdateUniverseRequest](#animeshon.crossrefs.v1alpha1.UpdateUniverseRequest)) [Universe](#animeshon.crossrefs.v1alpha1.Universe)**<br/><br/> |

| <span id="animeshon.crossrefs.v1alpha1.Referrer.ExpandUniverse">ExpandUniverse</span> |
| --- |
| **rpc ExpandUniverse([ExpandUniverseRequest](#animeshon.crossrefs.v1alpha1.ExpandUniverseRequest)) [ExpandUniverseResponse](#animeshon.crossrefs.v1alpha1.ExpandUniverseResponse)**<br/><br/> |

| <span id="animeshon.crossrefs.v1alpha1.Referrer.GetWormhole">GetWormhole</span> |
| --- |
| **rpc GetWormhole([GetWormholeRequest](#animeshon.crossrefs.v1alpha1.GetWormholeRequest)) [Wormhole](#animeshon.crossrefs.v1alpha1.Wormhole)**<br/><br/> |

| <span id="animeshon.crossrefs.v1alpha1.Referrer.ListWormholeCrossRefs">ListWormholeCrossRefs</span> |
| --- |
| **rpc ListWormholeCrossRefs([ListWormholeCrossRefsRequest](#animeshon.crossrefs.v1alpha1.ListWormholeCrossRefsRequest)) [ListWormholeCrossRefsResponse](#animeshon.crossrefs.v1alpha1.ListWormholeCrossRefsResponse)**<br/><br/> |


## <span id="animeshon.crossrefs.v1alpha1.AnalyzeCrossRefRequest">AnalyzeCrossRefRequest</span>



| Field | Description |
| --- | --- |
| config | **[ AnalyzeCrossRefRequest.AnalyzeCrossRefConfig](#AnalyzeCrossRefRequest.AnalyzeCrossRefConfig)**<br/>Global configuration |
| target_kinds | **[map AnalyzeCrossRefRequest.TargetKindsEntry](#AnalyzeCrossRefRequest.TargetKindsEntry)**<br/>Kind configurations |

## <span id="animeshon.crossrefs.v1alpha1.AnalyzeCrossRefRequest.AnalyzeCrossRefConfig">AnalyzeCrossRefRequest.AnalyzeCrossRefConfig</span>



| Field | Description |
| --- | --- |
| tollerance | **[ int32](#int32)**<br/>Tollerance of the match in pct |
| opts | **[map AnalyzeCrossRefRequest.AnalyzeCrossRefConfig.OptsEntry](#AnalyzeCrossRefRequest.AnalyzeCrossRefConfig.OptsEntry)**<br/>Map of all options for the analysis |

## <span id="animeshon.crossrefs.v1alpha1.AnalyzeCrossRefRequest.AnalyzeCrossRefConfig.OptsEntry">AnalyzeCrossRefRequest.AnalyzeCrossRefConfig.OptsEntry</span>



| Field | Description |
| --- | --- |
| key | **[ string](#string)**<br/> |
| value | **[ bool](#bool)**<br/> |

## <span id="animeshon.crossrefs.v1alpha1.AnalyzeCrossRefRequest.AnalyzeCrossRefNamespaceConfig">AnalyzeCrossRefRequest.AnalyzeCrossRefNamespaceConfig</span>



| Field | Description |
| --- | --- |
| namespace | **[ string](#string)**<br/>Namespace to analyze |
| config | **[ AnalyzeCrossRefRequest.AnalyzeCrossRefConfig](#AnalyzeCrossRefRequest.AnalyzeCrossRefConfig)**<br/>Optional Namespace specific configuration |

## <span id="animeshon.crossrefs.v1alpha1.AnalyzeCrossRefRequest.AnalyzeCrossRefTargetConfig">AnalyzeCrossRefRequest.AnalyzeCrossRefTargetConfig</span>



| Field | Description |
| --- | --- |
| target_kind | **[ string](#string)**<br/>Kind to analyze |
| config | **[ AnalyzeCrossRefRequest.AnalyzeCrossRefConfig](#AnalyzeCrossRefRequest.AnalyzeCrossRefConfig)**<br/>Optional Target specific configuration |
| namespaces | **[map AnalyzeCrossRefRequest.AnalyzeCrossRefTargetConfig.NamespacesEntry](#AnalyzeCrossRefRequest.AnalyzeCrossRefTargetConfig.NamespacesEntry)**<br/>Namespace configurations |

## <span id="animeshon.crossrefs.v1alpha1.AnalyzeCrossRefRequest.AnalyzeCrossRefTargetConfig.NamespacesEntry">AnalyzeCrossRefRequest.AnalyzeCrossRefTargetConfig.NamespacesEntry</span>



| Field | Description |
| --- | --- |
| key | **[ string](#string)**<br/> |
| value | **[ AnalyzeCrossRefRequest.AnalyzeCrossRefNamespaceConfig](#AnalyzeCrossRefRequest.AnalyzeCrossRefNamespaceConfig)**<br/> |

## <span id="animeshon.crossrefs.v1alpha1.AnalyzeCrossRefRequest.TargetKindsEntry">AnalyzeCrossRefRequest.TargetKindsEntry</span>



| Field | Description |
| --- | --- |
| key | **[ string](#string)**<br/> |
| value | **[ AnalyzeCrossRefRequest.AnalyzeCrossRefTargetConfig](#AnalyzeCrossRefRequest.AnalyzeCrossRefTargetConfig)**<br/> |

## <span id="animeshon.crossrefs.v1alpha1.AnalyzeCrossRefsResponse">AnalyzeCrossRefsResponse</span>

TODO(christian-roggia): this is a workaround to solve the issue of GAPIC
CLI where broken code is generated if google.protobuf.Empty is used in the
response_type of longrunning operations.


## <span id="animeshon.crossrefs.v1alpha1.AnalyzeParodiesResponse">AnalyzeParodiesResponse</span>




## <span id="animeshon.crossrefs.v1alpha1.BatchCreateCrossRefsRequest">BatchCreateCrossRefsRequest</span>



| Field | Description |
| --- | --- |
| crossrefs | **[repeated CrossRef](#CrossRef)**<br/> |

## <span id="animeshon.crossrefs.v1alpha1.BatchCreateCrossRefsResponse">BatchCreateCrossRefsResponse</span>



| Field | Description |
| --- | --- |
| crossrefs | **[repeated CrossRef](#CrossRef)**<br/>The list of crossrefs to create. |

## <span id="animeshon.crossrefs.v1alpha1.CountCrossRefsRequest">CountCrossRefsRequest</span>



| Field | Description |
| --- | --- |
| filter | **[ CrossRefsFilterRequest](#CrossRefsFilterRequest)**<br/>A filter to be applied to results. |

## <span id="animeshon.crossrefs.v1alpha1.CountCrossRefsResponse">CountCrossRefsResponse</span>



| Field | Description |
| --- | --- |
| count | **[ int32](#int32)**<br/> |

## <span id="animeshon.crossrefs.v1alpha1.CreateCrossRefRequest">CreateCrossRefRequest</span>



| Field | Description |
| --- | --- |
| crossref | **[ CrossRef](#CrossRef)**<br/> |

## <span id="animeshon.crossrefs.v1alpha1.CrossRef">CrossRef</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The resource name of the crossref. |
| root | **[ string](#string)**<br/>root entity which generated the crossreference. |
| etag | **[ string](#string)**<br/>version control. |
| verified | **[ bool](#bool)**<br/>if verified, the crossreference has been generated by a trusty process or verified by an operator |
| operator | **[ string](#string)**<br/>last operator which edited the crossreference |
| create_time | **[ google.protobuf.Timestamp](#google.protobuf.Timestamp)**<br/>creation time |
| update_time | **[ google.protobuf.Timestamp](#google.protobuf.Timestamp)**<br/>update time |
| edges | **[repeated CrossRefEdge](#CrossRefEdge)**<br/>all edges of the crossreference |

## <span id="animeshon.crossrefs.v1alpha1.CrossRefEdge">CrossRefEdge</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/> |
| state | **[ int32](#int32)**<br/> |

## <span id="animeshon.crossrefs.v1alpha1.CrossRefsFilterRequest">CrossRefsFilterRequest</span>



| Field | Description |
| --- | --- |
| prefix | **[ string](#string)**<br/>specifies the prefix of the CrossRefs name to search in |
| pendingOnly | **[ bool](#bool)**<br/>if true only crossreferences with pendings are returned |

## <span id="animeshon.crossrefs.v1alpha1.ExpandUniverseRequest">ExpandUniverseRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The universe to expand. |
| depth_limit | **[ int32](#int32)**<br/>The maximum depth to expand. |
| filter | **[ string](#string)**<br/>The filter to use. Accepted values are CONTENT and CHARACTER. |

## <span id="animeshon.crossrefs.v1alpha1.ExpandUniverseResponse">ExpandUniverseResponse</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The resource name of the requested universe. |
| payload | **[ bytes](#bytes)**<br/>TODO(christian-roggia): resources should be available through protobuf messages. |

## <span id="animeshon.crossrefs.v1alpha1.ExportCrossRefRequest">ExportCrossRefRequest</span>



| Field | Description |
| --- | --- |
| target | **[ ExportCrossRefRequest.Target](#ExportCrossRefRequest.Target)**<br/> |
| prefix | **[ string](#string)**<br/>Prefix to restrict the crossrefs to export to a specific subset |

## <span id="animeshon.crossrefs.v1alpha1.ExportCrossRefsResponse">ExportCrossRefsResponse</span>




## <span id="animeshon.crossrefs.v1alpha1.ExportParodiesResponse">ExportParodiesResponse</span>




## <span id="animeshon.crossrefs.v1alpha1.GetCrossRefRequest">GetCrossRefRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The resource name of the requested crossref. |

## <span id="animeshon.crossrefs.v1alpha1.GetUniverseRequest">GetUniverseRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The resource name of the requested universe. |

## <span id="animeshon.crossrefs.v1alpha1.GetWormholeRequest">GetWormholeRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/> |

## <span id="animeshon.crossrefs.v1alpha1.ImportCrossRefRequest">ImportCrossRefRequest</span>



| Field | Description |
| --- | --- |
| opts | **[map ImportCrossRefRequest.OptsEntry](#ImportCrossRefRequest.OptsEntry)**<br/>Map of all options for the import |

## <span id="animeshon.crossrefs.v1alpha1.ImportCrossRefRequest.OptsEntry">ImportCrossRefRequest.OptsEntry</span>



| Field | Description |
| --- | --- |
| key | **[ string](#string)**<br/> |
| value | **[ bool](#bool)**<br/> |

## <span id="animeshon.crossrefs.v1alpha1.ImportCrossRefsResponse">ImportCrossRefsResponse</span>




## <span id="animeshon.crossrefs.v1alpha1.InitializeCrossRefsResponse">InitializeCrossRefsResponse</span>




## <span id="animeshon.crossrefs.v1alpha1.ListCrossRefsRequest">ListCrossRefsRequest</span>



| Field | Description |
| --- | --- |
| page_size | **[ int32](#int32)**<br/>The maximum number of users to return. Server may return fewer users than requested. The maximum page_size is 100 If unspecified, server will pick an appropriate default. |
| page_token | **[ string](#string)**<br/>The value returned from the previous call. |
| filter | **[ CrossRefsFilterRequest](#CrossRefsFilterRequest)**<br/>A filter to be applied to results. |

## <span id="animeshon.crossrefs.v1alpha1.ListCrossRefsResponse">ListCrossRefsResponse</span>



| Field | Description |
| --- | --- |
| crossrefs | **[repeated CrossRef](#CrossRef)**<br/>The list of crossrefs. |
| next_page_token | **[ string](#string)**<br/>A token to retrieve next page of results. |

## <span id="animeshon.crossrefs.v1alpha1.ListWormholeCrossRefsRequest">ListWormholeCrossRefsRequest</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/> |
| withApproved | **[ bool](#bool)**<br/>search wormhole entity in approved edges |
| withPending | **[ bool](#bool)**<br/>search wormhole entity in pending edges |
| withPartial | **[ bool](#bool)**<br/>search wormhole entity in partial edges |
| withRejected | **[ bool](#bool)**<br/>search wormhole entity in rejected edges |
| crossRefsExclusion | **[repeated string](#string)**<br/>list of CrossRefs to exclude |
| prefix | **[ string](#string)**<br/>prefix of the CrossRefs name to search |

## <span id="animeshon.crossrefs.v1alpha1.ListWormholeCrossRefsResponse">ListWormholeCrossRefsResponse</span>



| Field | Description |
| --- | --- |
| crossrefs | **[repeated CrossRef](#CrossRef)**<br/>The list of crossrefs. |

## <span id="animeshon.crossrefs.v1alpha1.OperationMetadata">OperationMetadata</span>

Represents the metadata of the long-running operation.

| Field | Description |
| --- | --- |
| create_time | **[ google.protobuf.Timestamp](#google.protobuf.Timestamp)**<br/>Output only. The time the operation was created. |
| end_time | **[ google.protobuf.Timestamp](#google.protobuf.Timestamp)**<br/>Output only. The time the operation finished running. |
| target | **[ string](#string)**<br/>Output only. Server-defined resource path for the target of the operation. |
| verb | **[ string](#string)**<br/>Output only. Name of the verb executed by the operation. |
| status_message | **[ string](#string)**<br/>Output only. Human-readable status of the operation, if any. |
| requested_cancellation | **[ bool](#bool)**<br/>Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have [Operation.error][] value with a [google.rpc.Status.code][google.rpc.Status.code] of 1, corresponding to `Code.CANCELLED`. |
| api_version | **[ string](#string)**<br/>Output only. API version used to start the operation. |
| step_count | **[ int32](#int32)**<br/>Output only. |
| step_progress | **[ int32](#int32)**<br/>Output only. |
| item_count | **[ int32](#int32)**<br/>Output only. |
| item_progress | **[ int32](#int32)**<br/>Output only. |

## <span id="animeshon.crossrefs.v1alpha1.Universe">Universe</span>

TODO(christian-roggia): move the universe together with all other resources.

| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/>The resource name of the universe. |
| payload | **[ bytes](#bytes)**<br/>TODO(christian-roggia): resources should be available through protobuf messages. |

## <span id="animeshon.crossrefs.v1alpha1.UpdateCrossRefRequest">UpdateCrossRefRequest</span>



| Field | Description |
| --- | --- |
| crossref | **[ CrossRef](#CrossRef)**<br/>The crossref to update. |
| update_mask | **[ google.protobuf.FieldMask](#google.protobuf.FieldMask)**<br/>The field mask to determine which fields are to be updated. If empty, the server will assume all fields are to be updated. |

## <span id="animeshon.crossrefs.v1alpha1.UpdateCrossRefResponse">UpdateCrossRefResponse</span>



| Field | Description |
| --- | --- |
| crossrefs | **[repeated CrossRef](#CrossRef)**<br/>All CrossRef involved in the update |

## <span id="animeshon.crossrefs.v1alpha1.UpdateUniverseRequest">UpdateUniverseRequest</span>



| Field | Description |
| --- | --- |
| universe | **[ Universe](#Universe)**<br/>The universe to update. |
| update_mask | **[ google.protobuf.FieldMask](#google.protobuf.FieldMask)**<br/>The field mask to determine which fields are to be updated. If empty, the server will assume all fields are to be updated. |

## <span id="animeshon.crossrefs.v1alpha1.Wormhole">Wormhole</span>



| Field | Description |
| --- | --- |
| name | **[ string](#string)**<br/> |
| names | **[repeated Wormhole.Text](#Wormhole.Text)**<br/>The names of te content |
| aliases | **[repeated Wormhole.Text](#Wormhole.Text)**<br/>The aliases of te content |
| image | **[ bytes](#bytes)**<br/>raw bytes of image |
| image_url | **[ string](#string)**<br/>url of the image |
| type | **[ string](#string)**<br/>type of the content |
| subtype | **[ string](#string)**<br/>subtype of the content |
| external_url | **[ string](#string)**<br/>external url of the content |
| publishing_type | **[ string](#string)**<br/>type of publication |
| is_parody | **[ bool](#bool)**<br/>the content is parody of another content |
| identifier | **[ string](#string)**<br/>identifier |
| date | **[ google.protobuf.Timestamp](#google.protobuf.Timestamp)**<br/>most significant date |
| parent_name | **[ string](#string)**<br/>parent's resource name useful for chapters and episodes to know which content it refers |
| parent_external_url | **[ string](#string)**<br/>prant external url |

## <span id="animeshon.crossrefs.v1alpha1.Wormhole.Text">Wormhole.Text</span>



| Field | Description |
| --- | --- |
| text | **[ string](#string)**<br/> |
| localization | **[ string](#string)**<br/> |

## <span id="animeshon.crossrefs.v1alpha1.ExportCrossRefRequest.Target">ExportCrossRefRequest.Target</span>
Determine the target of the export.
Full means storage + migration
Storage means only persinstent stogare
Migration means notify the migrato to perform the data consolidation

| Name | Description |
| --- | --- |
| FULL | No description. |
| STORAGE | No description. |
| MIGRATOR | No description. |
