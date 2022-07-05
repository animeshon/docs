module.exports = {
  learn: [
    {
      type: 'category',
      label: 'Test #1',
      collapsed: false,
      items: [
        'test/test',
      ],
    },
    {
      type: 'category',
      label: 'Test #2',
      collapsed: true,
      items: [
        'test-2/test',
      ],
    },
    {
      type: 'link',
      label: 'Test #3',
      href: 'https://app.animeshon.com',
    },
    {
      type: 'category',
      label: 'Test #4',
      collapsed: true,
      items: [
        'test-3/test',
        {
          type: 'category',
          label: 'Test #4',
          collapsed: true,
          items: [
            'test-3/test/test',
          ],
        },
      ],
    },
    'glossary',
    'faqs',
  ],
};
