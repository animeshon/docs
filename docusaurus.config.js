// @ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
const build = require('./content/build/docusaurus.config');
const products = require('./content/products/docusaurus.config')
const libraries = require('./content/libraries/docusaurus.config')
const tutorials = require('./content/tutorials/docusaurus.config')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Animeshon Documentation',
  tagline: 'The complete reference for Animeshon',
  url: 'https://docs.animeshon.com',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  organizationName: 'animeshon',
  projectName: 'docs',
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Material+Icons',
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      integrity:
        'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig: {
    // /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    // announcementBar: {
    //   id: 'govern',
    //   content:
    //     'Read our latest news at <a target="_blank" href="https://animeshon.com/whatever-article">this link</a> 🏛️',
    //   backgroundColor: '#5991c7',
    //   textColor: '#ffffff',
    //   isCloseable: true,
    // },
    image: 'img/animeshon-docs.png', // TODO: <----------------------------------------------------------------------------
    algolia: {
      appId: '49IRZSRM63',
      apiKey: 'af638e0be1f521b2eff8d21f5a290861',
      indexName: 'animeshon-com',
      contextualSearch: true,
    },
    // matomo: {
    //   matomoUrl: 'https://matomo.animeshon.com/',
    //   siteId: '13',
    // },
    hotjar: {
      applicationId: '2118933',
    },
    imageZoom: {
      selector:
        '.markdown :not(a) > img:not(.image-gallery-image):not(.image-gallery-thumbnail-image)',
      // Optional medium-zoom options
      // see: https://www.npmjs.com/package/medium-zoom#options
      options: {
        background: 'rgba(0, 0, 0, 0.6)',
      },
    },
    // imageSlider: {
    //   videoPlaceholder: '/img/infographics/video-placeholder.png',
    // },
    prism: {
      additionalLanguages: [],
      theme: require('prism-react-renderer/themes/vsLight'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
    },
    cards: [
      {
        title: 'Examples',
        image: 'img/ani_03.png',
        link: 'build/welcome',
        description:
          'Learn about Animeshon through guided examples and gain hands-on experience.',
      },
      {
        title: 'Products',
        image: 'img/ani_02.png',
        link: 'products/welcome',
        description:
          'Explore the rich ecosystem of products and enterprise solutions.',
      },
      {
        title: 'Libraries',
        image: 'img/ani_01.png',
        link: 'libraries/welcome',
        description:
          'Integrate with any service in the most popular programming languages.',
      },
    ],
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'Animeshon Logo',
        src: 'img/logo.png',
        srcDark: 'img/logo_dark.png',
        // src: 'img/logo.svg',
        // srcDark: 'img/logo_dark.svg',
      },
      items: [
        // {
        //   label: 'Learn',
        //   to: 'learn/about-animeshon/an-introduction-to-animeshon',
        //   activeBaseRegex: '^/learn/.*',
        // },
        {
          label: 'Build',
          to: '#',
          layout: [
            '0 1 2 3',
            '0 1 2 3',
            '. 1 2 3',
            '. 1 2 .',
          ],
          items_: [
            {
              label: 'Getting Started',
              items: [
                {
                  label: 'Getting Started',
                  sublabel: 'Animeshon development basics',
                  to: 'build/welcome',
                  icon: '\ue902',
                  activeBaseRegex: '^/build.*',
                },
              ],
            },
            {
              label: 'Protocols',
              items: [
                {
                  label: 'GraphQL',
                  sublabel: 'Access the Animeshon graph through GraphQL',
                  to: 'protocols/graphql',
                  icon: '\ue908',
                  activeBaseRegex: '^/protocols/graphql.*',
                },
                {
                  label: 'gRPC',
                  sublabel: 'Efficiently integrate APIs via protobuf requests',
                  to: 'protocols/grpc',
                  icon: '\ue908',
                  activeBaseRegex: '^/protocols/grpc.*',
                },
                {
                  label: 'REST',
                  sublabel: 'Access APIs via traditional JSON requests',
                  to: 'protocols/rest',
                  icon: '\ue908',
                  activeBaseRegex: '^/protocols/rest.*',
                },
              ],
            },
            {
              label: 'Authentication',
              items: [
                {
                  label: 'OAuth 2.0',
                  sublabel: 'Integrate applications with Animeshon',
                  to: 'authentication/oauth2',
                  icon: '\ue905',
                  activeBaseRegex: '^/authentication/oauth2.*',
                },
                {
                  label: 'OpenID Connect',
                  sublabel: 'Use Animeshon as identity provider',
                  to: 'authentication/openid-connect',
                  icon: '\ue905',
                  activeBaseRegex: '^/authentication/openid-connect.*',
                },
                {
                  label: 'Service Accounts',
                  sublabel: 'Grant access to non-human accounts',
                  to: 'authentication/service-accounts',
                  icon: '\ue905',
                  activeBaseRegex: '^/authentication/service-accounts.*',
                },
              ],
            },
            {
              label: 'Policies',
              items: [
                {
                  label: 'Rate-Limiting',
                  sublabel: 'Learn how requests frequency is limited',
                  to: 'policies/rate-limiting',
                  icon: '\ue909',
                  activeBaseRegex: '^/policies/rate-limiting.*',
                },
                {
                  label: 'Quotas',
                  sublabel: 'Learn how resources consumption is limited',
                  to: 'policies/quotas',
                  icon: '\ue909',
                  activeBaseRegex: '^/policies/quotas.*',
                },
              ],
            },
          ],
        },
        {
          label: 'Products',
          to: '#',
          layout: [
            '0 2 5 7',
            '0 2 5 7',
            '0 2 5 7',
            '0 3 5 8',
            '1 3 6 8',
            '1 4 6 .',
            '1 4 6 .',
            // '0 2 5 7',
            // '0 2 5 7',
            // '0 2 5 7',
            // '0 3 5 7',
            // '0 3 5 7',
            // '1 4 6 7',
            // '1 4 6 7',
            // '1 . 6 8',
            // '1 . 6 8',
          ],
          items_: [
            {
              label: 'Knowledge-Base APIs',
              items: [
                // {
                //   label: 'Bridge',
                //   sublabel: 'Access links across external references',
                //   to: 'bridge/docs',
                //   icon: '\ue903',
                //   activeBaseRegex: '^/bridge/.*',
                // },
                {
                  label: 'Cross-Reference',
                  sublabel: 'Easily match internal and external resources',
                  to: 'crossrefs/docs',
                  icon: '\ue903',
                  activeBaseRegex: '^/crossrefs/.*',
                },
                {
                  label: 'Knowledge',
                  sublabel: 'Contribute to the graph knowledge-base',
                  to: 'knowledge/docs',
                  icon: '\ue903',
                  activeBaseRegex: '^/knowledge/.*',
                },
                {
                  label: 'Multimedia',
                  sublabel: 'Animeshon source-of-truth for abstract resources',
                  to: 'multimedia/docs',
                  icon: '\ue903',
                  activeBaseRegex: '^/multimedia/.*',
                },
              ],
            },
            {
              label: 'Publishing APIs',
              items: [
                {
                  label: 'Product',
                  sublabel: 'Manage physical and digital goods',
                  to: 'product/docs',
                  icon: '\ue903',
                  activeBaseRegex: '^/product/.*',
                },
                {
                  label: 'Release',
                  sublabel: 'Schedule and publish product releases',
                  to: 'release/docs',
                  icon: '\ue903',
                  activeBaseRegex: '^/release/.*',
                },
                // {
                //   label: 'Payment',
                //   sublabel: 'Securely manage payments and subscriptions',
                //   to: 'payment/docs',
                //   icon: '\ue903',
                //   activeBaseRegex: '^/payment/.*',
                // },
              ],
            },
            {
              label: 'User-Experience APIs',
              items: [
                {
                  label: 'Tracker',
                  sublabel: 'Track the progress of resources',
                  to: 'tracker/docs',
                  icon: '\ue903',
                  activeBaseRegex: '^/tracker/.*',
                },
                {
                  label: 'Library',
                  sublabel: 'Manage custom collections of resources',
                  to: 'library/docs',
                  icon: '\ue903',
                  activeBaseRegex: '^/library/.*',
                },
              ],
            },
            {
              label: 'Storage APIs',
              items: [
                {
                  label: 'Image',
                  sublabel: 'Store images and albums',
                  to: 'image/docs',
                  icon: '\ue903',
                  activeBaseRegex: '^/image/.*',
                },
              ],
            },
            {
              label: 'AI & Analysis APIs',
              items: [
                {
                  label: 'Vision',
                  sublabel: 'Analyze and annotate images',
                  to: 'vision/docs',
                  icon: '\ue903',
                  activeBaseRegex: '^/vision/.*',
                },
              ],
            },
            {
              label: 'IAM & Security APIs',
              items: [
                {
                  label: 'Credentials',
                  sublabel: 'Securely store third-party credentials',
                  to: 'credentials/docs',
                  icon: '\ue903',
                  activeBaseRegex: '^/credentials/.*',
                },
                {
                  label: 'Identity and Access Management',
                  sublabel: 'Manage service accounts and groups',
                  to: 'iam/docs',
                  icon: '\ue903',
                  activeBaseRegex: '^/iam/.*',
                },
                {
                  label: 'Identity',
                  sublabel: 'Manage user profile and settings',
                  to: 'identity/docs',
                  icon: '\ue903',
                  activeBaseRegex: '^/identity/.*',
                },
                // {
                //   label: 'Resource Manager',
                //   sublabel: 'Manage organizations and policies',
                //   to: 'resourcemanager/docs',
                //   icon: '\ue903',
                //   activeBaseRegex: '^/resourcemanager/.*',
                // },
              ],
            },
            {
              label: 'Indexing APIs',
              items: [
                {
                  label: 'WebCache',
                  sublabel: 'Keep track of indexed resources',
                  to: 'webcache/docs',
                  icon: '\ue903',
                  activeBaseRegex: '^/webcache/.*',
                },
                {
                  label: 'WebPage',
                  sublabel: 'Access indexed website pages',
                  to: 'webpage/docs',
                  icon: '\ue903',
                  activeBaseRegex: '^/webpage/.*',
                },
                // {
                //   label: 'WebSearch',
                //   sublabel: 'Search via images and keywords',
                //   to: 'websearch/docs',
                //   icon: '\ue903',
                //   activeBaseRegex: '^/websearch/.*',
                // },
              ],
            },
            {
              label: 'Libraries',
              items: [
                // {
                //   label: 'C#',
                //   sublabel: '.NET Client Libraries',
                //   to: 'dotnet/docs/reference',
                //   icon: '\ue902',
                //   activeBaseRegex: '^/dotnet/.*',
                // },
                {
                  label: 'Go',
                  sublabel: 'Go Client Libraries',
                  to: 'go/docs/reference',
                  icon: '\ue902',
                  activeBaseRegex: '^/go/.*',
                },
                // {
                //   label: 'Java',
                //   sublabel: 'Java Client Libraries',
                //   to: 'java/docs/reference',
                //   icon: '\ue902',
                //   activeBaseRegex: '^/java/.*',
                // },
                // {
                //   label: 'PHP',
                //   sublabel: 'PHP Client Libraries',
                //   to: 'php/docs/reference',
                //   icon: '\ue902',
                //   activeBaseRegex: '^/php/.*',
                // },
                // {
                //   label: 'Python',
                //   sublabel: 'Python Client Libraries',
                //   to: 'python/docs/reference',
                //   icon: '\ue902',
                //   activeBaseRegex: '^/python/.*',
                // },
                {
                  label: 'TypeScript',
                  sublabel: 'Node.js Client Libraries',
                  to: 'nodejs/docs/reference',
                  icon: '\ue902',
                  activeBaseRegex: '^/nodejs/.*',
                },
              ],
            },
            {
              label: 'Applications',
              items: [
                {
                  label: 'gRBAC',
                  sublabel: 'Graph Role-Based Access Control',
                  href: 'https://github.com/grbac/grbac',
                  icon: '\ue90a',
                },
              ],
            },
          ],
        },
        // { to: '/blog', label: 'Community Blog', position: 'right' },
        { to: '/team', label: 'Team', position: 'right' },
      ],
    },
    footer: {
      links: [
        {
          title: 'EXPLORE',
          items: [
            {
              label: 'Products',
              to: 'products/welcome',
            },
            {
              label: 'Libraries',
              to: 'libraries/welcome',
            },
            // {
            //   label: 'Applications',
            //   to: 'applications/welcome',
            // },
            {
              label: 'Protocols',
              to: 'protocols/welcome',
            },
          ],
        },
        {
          title: 'BUILD',
          items: [
            {
              label: 'Getting Started',
              to: 'build/welcome',
            },
            {
              label: 'Fundamentals',
              to: 'build/fundamentals',
            },
            {
              label: 'Guides',
              to: 'build/guides',
            },
            {
              label: 'Samples',
              to: 'build/samples',
            },
          ],
        },
        {
          title: 'COMMUNITY',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/WvNsjtR',
              // href: 'https://discord.animeshon.com',
            },
            {
              label: 'GitHub',
              href: 'https://www.github.com/animeshon/',
            },
            {
              label: 'Patreon',
              href: 'https://www.patreon.com/animeshon',
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/animeshon/',
            },
          ],
        },
        {
          title: 'WIKI',
          items: [
            {
              label: 'Team',
              to: 'team',
            },
            {
              label: 'Github',
              href: 'https://github.com/animeshon/docs',
            },
            {
              label: 'Docusaurus',
              href: 'https://docusaurus.io',
            },
            // {
            //   label: 'Imprint',
            //   to: 'https://animeshon.com/impressum',
            // },
            {
              label: 'Privacy Policy',
              to: 'https://animeshon.com/privacy-policy',
            },
          ],
        },
      ],
      logo: {
        alt: 'Animeshon Logo',
        src: 'img/animeshon_logo.png',
        // src: 'img/animeshon_logo.svg',
        href: 'https://animeshon.com',
      },
      copyright: `© ${new Date().getFullYear()} Animeshon. Designed by <a href="https://wiki.iota.org/">IOTA Wiki</a>. Built with <a href="https://docusaurus.io/">Docusaurus</a>.`,
    },
    socials: [
      // {
      //   url: 'https://www.youtube.com/c/animeshon',
      //   backgroundColor: 'var(--ifm-color-gray-900)',
      // },
      {
        url: 'https://www.github.com/animeshon/',
        backgroundColor: '#2C3850',
      },
      {
        url: 'https://discord.gg/WvNsjtR',
        // url: 'https://discord.animeshon.com/',
        backgroundColor: '#4B576F',
      },
      // {
      //   url: 'https://www.twitter.com/AnimeshonSNS/',
      //   backgroundColor: '#6A768E',
      // },
      {
        url: 'https://www.reddit.com/r/animeshon/',
        backgroundColor: '#7D89A1',
      },
      // {
      //   url: 'https://www.linkedin.com/company/animeshon/',
      //   backgroundColor: '#8995AD',
      // },
      // {
      //   url: 'https://www.instagram.com/animeshon.official/',
      //   backgroundColor: '#99A5BD',
      // },
    ],
    colorMode: {
      defaultMode: 'dark',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: false,
        blog: {
          showReadingTime: false,
          blogSidebarCount: 0,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
      },
    ],
  ],
  plugins: [
    'plugin-image-zoom',
    // 'docusaurus-plugin-matomo',
    'docusaurus-plugin-hotjar',
    '@docusaurus/plugin-ideal-image',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'learn',
        path: 'internal/learn',
        routeBasePath: 'learn',
        sidebarPath: require.resolve('./internal/learn/sidebars.ts'),

        // General config
        editUrl: 'https://github.com/animeshon/docs/edit/master/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'products',
        path: 'internal/products',
        routeBasePath: 'products',
        sidebarPath: require.resolve('./internal/products/sidebars.ts'),

        // General config
        editUrl: 'https://github.com/animeshon/docs/edit/master/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'libraries',
        path: 'internal/libraries',
        routeBasePath: 'libraries',
        sidebarPath: require.resolve('./internal/libraries/sidebars.ts'),

        // General config
        editUrl: 'https://github.com/animeshon/docs/edit/master/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'build',
        path: 'internal/build',
        routeBasePath: 'build',
        sidebarPath: require.resolve('./internal/build/sidebars.ts'),

        // General config
        editUrl: 'https://github.com/animeshon/docs/edit/master/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'protocols',
        path: 'internal/protocols',
        routeBasePath: 'protocols',
        sidebarPath: require.resolve('./internal/protocols/sidebars.ts'),

        // General config
        editUrl: 'https://github.com/animeshon/docs/edit/master/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'policies',
        path: 'internal/policies',
        routeBasePath: 'policies',
        sidebarPath: require.resolve('./internal/policies/sidebars.ts'),

        // General config
        editUrl: 'https://github.com/animeshon/docs/edit/master/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'authentication',
        path: 'internal/authentication',
        routeBasePath: 'authentication',
        sidebarPath: require.resolve('./internal/authentication/sidebars.ts'),

        // General config
        editUrl: 'https://github.com/animeshon/docs/edit/master/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        showLastUpdateTime: true,
      },
    ],
    ...build.plugins,
    ...products.plugins,
    ...libraries.plugins,
    ...tutorials.plugins,
  ],
  staticDirectories: [
    './static',
    ...build.staticDirectories,
    ...products.staticDirectories,
    ...libraries.staticDirectories,
    ...tutorials.staticDirectories,
  ],
  themes: [
    'docusaurus-theme-openapi-docs',
  ],
};

