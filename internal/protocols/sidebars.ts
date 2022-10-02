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
            "graphql/quickstarts/oracolo-temporal-search",
          ],
        },
      ],
    },
    'grpc',
    'rest',
  ],
};
