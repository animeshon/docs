// const openapi = require('./docs/reference/rest/v1alpha1/sidebar.js')

module.exports = {
  image: [
    'index',
    {
      type: 'category',
      label: 'Guides',
      collapsed: true,
      items: [
        'setup',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: [
        'reference',
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
  ],
};
