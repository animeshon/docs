module.exports = {
  title: 'Animeshon Docs',
  tagline: 'Japanese Multimedia Content Research and Development Center',
  url: 'https://docs.animeshon.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore', // ! NOTE: This should be re-enabled in production once docusaurus provides better support.
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
            {
              label: 'Ashen',
              to: 'docs/ashen/introduction',
            },
            {
              label: 'Knowledge Base',
              to: 'docs/detabesu/introduction',
            },
            {
              label: 'Encyclopedia',
              to: 'docs/encyclopedia/introduction',
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
          ],
        },
        {
          title: 'Social',
          items: [
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
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/animeshon/docs',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy Policy',
              to: 'https://www.iubenda.com/privacy-policy/48776658',
            },
            {
              label: 'Cookie Policy',
              to: 'https://www.iubenda.com/privacy-policy/48776658/cookie-policy',
            },
            {
              label: 'Terms and Conditions',
              href: 'https://www.iubenda.com/terms-and-conditions/48776658',
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
          homePageId: 'welcome',
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
