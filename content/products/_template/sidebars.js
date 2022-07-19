{{- range $i := .rest.versions -}}
const openapi_{{ $i.version }} = require('./docs/reference/rest/{{ $i.version }}/sidebar.js');
{{- end }}
{{ if .rest.versions }}
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
          id: trim_prefix(i.id, "products/{{ $.domain }}/documentation/docs/"),
        }
      })
    }
  })
}
{{- end }}

module.exports = {
  {{ .domain }}: [
    'index',
    {
      type: 'category',
      label: 'Guides',
      collapsed: true,
      items: [
        'quickstarts',
{{- range $i := .toc.guides }}
        '{{ $i.path }}',
{{- end }}
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
{{- range $i := .rest.versions }}
            {
                type: 'category',
                label: 'v1alpha1',
                collapsed: true,
                items: [
                  ...openapi_sidebar(openapi_{{ $i.version }}),
                ],
            },
{{- end }}
          ],
        },
        {
          type: 'category',
          label: 'RPC API reference',
          collapsed: true,
          items: [
            'reference/rpc',
{{- range $i := .toc.reference.rpc }}
            '{{ $i.path }}',
{{- end }}
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
{{- range $i := .toc.samples }}
        '{{ $i.path }}',
{{- end }}
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
