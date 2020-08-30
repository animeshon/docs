module.exports = {
  docs: [
    'welcome',
    'mission',
    {
      type: 'category',
      label: 'Developers',
      items: ['developers/early-adopters-program', 'developers/release-lifecycles'],
    },
    {
      type: 'category',
      label: 'Ecosystem',
      items: ['ecosystem/introduction', 'ecosystem/roadmap'],
    },
    {
      type: 'category',
      label: 'OAuth 2.0',
      items: ['oauth2/introduction', 'oauth2/roadmap'],
    },
    {
      type: 'category',
      label: 'Ashen',
      items: [
        'ashen/introduction', 
        'ashen/roadmap', 
        'ashen/quickstarts', 
        'ashen/concepts',
        {
          type: 'category',
          label: 'SDK',
          items: ['ashen/sdk/quickstarts', 'ashen/sdk/tutorials'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Detabesu',
      items: [
        'detabesu/introduction', 
        'detabesu/roadmap', 
        // 'detabesu/quickstarts', 
        'detabesu/concepts', 
        {
          type: 'category',
          label: 'GraphQL',
          items: ['detabesu/graphql/quickstarts', 'detabesu/graphql/tutorials'],
        },
      ],
    },
    {
      type: 'category',
      // label: 'Eye',
      // label: 'Divination',
      label: 'Oracolo',
      // label: 'Search Engine',
      items: [
        'search-engine/introduction', 
        'search-engine/roadmap', 
        // 'search-engine/quickstarts', 
        'search-engine/concepts', 
        // 'search-engine/tutorials'
      ],
    },
    {
      type: 'category',
      label: 'Encyclopedia',
      items: [
        'encyclopedia/introduction', 
        'encyclopedia/roadmap', 
        // 'encyclopedia/quickstarts', 
        // 'encyclopedia/concepts', 
        // 'encyclopedia/tutorials'
      ],
    },
  ],
};
