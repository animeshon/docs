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
          id: trim_prefix(i.id, "products/iam/documentation/docs/"),
        }
      })
    }
  })
}

module.exports = {
  iam: [
    'index',
    {
      type: 'category',
      label: 'Guides',
      collapsed: true,
      items: [
        'quickstarts',
        'quickstarts/create-service-account-with-cookie',
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
            'reference/rpc/animeshon.iam.admin.v1alpha1',
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
        'samples/create-service-account',
        'samples/delete-service-account',
        'samples/get-iam-policy',
        'samples/set-iam-policy',
        'samples/test-iam-permissions',
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
