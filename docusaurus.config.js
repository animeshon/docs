module.exports = {
  title: 'Animeshon Docs',
  tagline: 'Japanese Multimedia Content Research and Development Center',
  url: 'https://docs.animeshon.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'animeshon',
  projectName: 'docs',
  themeConfig: {
    navbar: {
      title: 'Animeshon',
      logo: {
        alt: 'Animeshon Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/animeshon/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            // {
            //   label: 'Search Engine',
            //   to: 'docs/',
            // },
            {
              label: 'RESTful APIs',
              to: 'docs/doc2/',
            },
            {
              label: 'GraphQL',
              to: 'docs/doc2/',
            },
            {
              label: 'OAuth 2.0',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/WvNsjtR',
            },
            {
              label: 'Discourse',
              href: 'https://discuss.animeshon.com/',
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/animeshon/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/AnimeshonSNS',
            },
            {
              label: 'Facebook',
              href: 'https://facebook.com/AnimeshonSNS',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/animeshon.official',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Animeshon',
              to: 'https://animeshon.com',
            },
            {
              label: 'Encyclopedia',
              to: 'https://insider.animeshon.com',
            },
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/animeshon/docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Animeshon S.r.l. | Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'home',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/animeshon/docs/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/animeshon/docs/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
