module.exports = {
  protocols: [
    'welcome',
    
    {
      type: 'category',
      label: 'GraphQL',
      collapsed: true,
      items: [
        'graphql/index',
        {
          type: 'category',
          label: 'Quickstarts',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Knowledge Base',
              collapsed: true,
              items: [
                "graphql/quickstarts/oracolo-query-fulltext-search",
                "graphql/quickstarts/oracolo-query-temporal-search",
                "graphql/quickstarts/query-by-crossref",
                "graphql/quickstarts/query-get-content-crossrefs",
                "graphql/quickstarts/query-character-appears-in",
                "graphql/quickstarts/query-main-character",
                "graphql/quickstarts/query-related-content",
                "graphql/quickstarts/query-image-annotations",
              ],
            },
            {
              type: 'category',
              label: 'User',
              collapsed: true,
              items: [
                "graphql/quickstarts/query-viewer-info",
                "graphql/quickstarts/query-viewer-playlists",
                "graphql/quickstarts/mutation-create-playlist",
                "graphql/quickstarts/mutation-update-playlist",
                "graphql/quickstarts/query-viewer-trackers",
                "graphql/quickstarts/query-viewer-trackers",
                "graphql/quickstarts/mutation-update-tracker",
              ],
            },
          ],
        },
      ],
    },
    'grpc',
    'rest',
  ],
};
