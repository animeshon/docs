// const openapi = require('./docs/reference/rest/v1alpha1/sidebar.js')

module.exports = {
  image: [
    'index',
    {
      type: 'category',
      label: 'Guides',
      collapsed: true,
      items: [
        'quickstarts',
        'quickstarts/test',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: [
        'apis',
        {
          type: 'category',
          label: 'REST API reference',
          collapsed: true,
          items: [
            'reference/rest',
            // {
            //   type: 'category',
            //   label: 'v1alpha1',
            //   collapsed: true,
            //   items: [
            //     ...openapi,
            //   ],
            // },
          ],
        },
        {
          type: 'category',
          label: 'RPC API reference',
          collapsed: true,
          items: [
            'reference/rpc',
            'reference/rpc/animeshon.image.v1alpha1',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Samples',
      collapsed: true,
      items: [
        'samples',
        'samples/test',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      collapsed: true,
      items: [
        'resources',
        'quotas',
        'release-notes',
        'issues',
        'support',
        'sla',
      ],
    },
  ],
};
