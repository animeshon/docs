module.exports = {
  docs: [
    'manifesto',
    'home',
    {
      type: 'category',
      label: 'Developers',
      items: ['developers/early-adopters-program', 'developers/release-lifecycles'],
    },
    {
      type: 'category',
      label: 'GraphQL',
      items: ['graphql/graphql_start', 'graphql/graphql_schema', 'graphql/graphql_query', 'graphql/graphql_tutorials'],
    },
    {
      type: 'category',
      label: 'REST APIs',
      items: ['restapi/introduction', 'restapi/tutorials'],
    },
    {
      type: 'category',
      label: 'Ashen Client',
      items: ['ashenclient/ashenclient_start', 'ashenclient/ashenclient_theory'],
    },
    {
      type: 'category',
      label: 'OAuth 2.0',
      items: ['oauth2/introduction', 'oauth2/roadmap'],
    },
    {
      type: 'category',
      label: 'Design Concepts',
      items: ['design/design_ashen', 'design/design_kb', 'design/design_encyclopedia', 'design/design_searchengine']
    },
  ],
};
