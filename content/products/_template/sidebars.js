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
