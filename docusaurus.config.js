module.exports = {
  title: 'Animeshon Docs',
  tagline: 'Japanese Multimedia Research and Development Center',
  url: 'https://docs.animeshon.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'animeshon',
  projectName: 'docs',
  plugins: [
    [
      // to make it work on windows
      // 0. renderer.js of the library
      //    fix regex with (line 57)
      //    /(?<category>[A-z][A-z0-9-]*)\\(?<pageId>[A-z][A-z0-9-]*).mdx?$/,
      // 1. open sidebar-schema.js
      //    substitute '\\' with '/'
      // 2. substitute all '\' with '/' in schema folder
      // 3. substitute all '](/' with '](/docs/' in schema folder
      "@edno/docusaurus2-graphql-doc-generator",
      {
        schema: "https://api.animeshon.com/graphql",
        baseURL: "schema",
        rootPath: "./docs",
      },
    ],
  ],
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
        {
          href: 'https://www.reddit.com/r/animeshon/',
          label: 'Reddit',
          position: 'left'
        },
        {
          href: 'https://discuss.animeshon.com/',
          label: 'Discourse',
          position: 'left'
        },
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
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Status',
            //   to: 'https://status.animeshon.com',
            // },
            {
              label: 'Animeshon',
              href: 'https://animeshon.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/animeshon/docs',
            },
            {
              label: 'Ashen',
              href: 'https://source.animeshon.com',
            },
            // {
            //   label: 'Animeshon for Developers',
            //   to: 'https://developers.animeshon.com',
            // },
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
