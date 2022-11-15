const openapi_v1alpha1 = require('./docs/reference/rest/v1alpha1/sidebar.js');

const trim_prefix = (value, prefix) =>
  value.startsWith(prefix) ? value.slice(prefix.length) : value;

const openapi_sidebar = (sidebar) => {
  return sidebar.map(c => {
    return {
      ...c,
      link: null,
      items: c.items.map(i => {
        return {
          ...i,
          id: trim_prefix(i.id, "products/knowledge/documentation/docs/"),
        }
      })
    }
  })
}

module.exports = {
  knowledge: [
    'index',
    {
      type: 'category',
      label: 'Guides',
      collapsed: true,
      items: [
        'quickstarts',
        'troubleshooting',
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
            {
                type: 'category',
                label: 'v1alpha1',
                collapsed: true,
                items: [
                  ...openapi_sidebar(openapi_v1alpha1),
                ],
            },
          ],
        },
        {
          type: 'category',
          label: 'RPC API reference',
          collapsed: true,
          items: [
            'reference/rpc',
          ],
        },
        {
          type: 'category',
          label: 'IAM reference',
          collapsed: true,
          items: [
            'reference/iam',
            'reference/iam/roles',
            'reference/iam/permissions',
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
        'samples/create-contribution',
        'samples/get-contribution',
        'samples/get-contribution-changes',
        'samples/list-contributions',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      collapsed: true,
      items: [
        'resources',
        'pricing',
        'quotas',
        'release-notes',
        'issues',
        'support',
        'sla',
      ],
    },
  ],
};
