module.exports = {
  docs: [
    'home',
    'manifesto',
    {
      type: 'category',
      label: 'GraphQL',
      items: ['graphql/graphql_start', 'graphql/graphql_schema', 'graphql/graphql_query', 'graphql/graphql_tutorials'],
    },
    {
      type: 'category',
      label: 'RestAPI',
      items: ['restapi/restapi_start', 'restapi/restapi_doc', 'restapi/restapi_tutorials'],
    },
    {
      type: 'category',
      label: 'Oauth2.0',
      items: ['oauth2/oauth2_start', 'oauth2/oauth2_integration'],
    },
    {
      type: 'category',
      label: 'Docusaurus',
      items: ['doc1', 'doc2', 'doc3']
    },
    {
      type: 'category',
      label: 'Features',
      items: ['mdx'],
    }
  ],
};
