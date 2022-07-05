// @ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
const build = require('./content/build/docusaurus.config');
const products = require('./content/products/docusaurus.config')
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
    //     'If you would like to get more involved in the future governance of Shimmer, IOTA, and the Assembly network, join the discussions with the community in our <a target="_blank" href="https://govern.iota.org">governance forum</a> 🏛️',
    //   backgroundColor: '#5991c7',
    //   textColor: '#ffffff',
    //   isCloseable: true,
    // },
    image: 'img/iota-wiki.png', // TODO
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
      additionalLanguages: ['java', 'rust', 'solidity', 'toml'],
    },
    cards: [
      {
        title: 'Learn',
        image: 'img/learn.svg',
        link: 'learn/test/test',
        description:
          'Learn about IOTA, the Tangle, its features, industry applications, network and more.',
      },
      {
        title: 'Build',
        image: 'img/build.svg',
        link: 'participate/test/test',
        description:
          'Join the network and start using solutions built on top of the Tangle.',
      },
      {
        title: 'Explore',
        image: 'img/build.svg',
        link: 'build/welcome',
        description:
          'Access documentation and guides to build with IOTA in Rust and other languages.',
      },
    ],
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'IOTA Wiki Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [
        {
          label: 'Learn',
          to: 'learn/about-iota/an-introduction-to-iota',
          activeBaseRegex: '^/learn/.*',
        },
        {
          label: 'Build',
          to: '#',
          layout: [
            '0 1 2 3',
            '0 1 2 3',
            '4 1 2 3',
            '4 1 2 .',
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
                  activeBaseRegex: '^/(build|blueprints)/.*',
                },
              ],
            },
            {
              label: 'Protocols',
              items: [
                {
                  label: 'GraphQL',
                  sublabel: 'Access the Animeshon graph through GraphQL',
                  to: 'goshimmer/welcome',
                  icon: '\ue903',
                  activeBaseRegex: '^/goshimmer/.*',
                },
                {
                  label: 'gRPC',
                  sublabel: 'Efficiently integrate APIs via protobuf requests',
                  to: 'goshimmer/welcome',
                  icon: '\ue903',
                  activeBaseRegex: '^/goshimmer/.*',
                },
                {
                  label: 'REST',
                  sublabel: 'Access APIs via traditional JSON requests',
                  to: 'IOTA-2.0-Research-Specifications/Preface',
                  icon: '\ue906',
                  activeBaseRegex: 'IOTA-2.0-Research-Specifications/.*',
                },
              ],
            },
            {
              label: 'Authentication',
              items: [
                {
                  label: 'OAuth 2.0',
                  sublabel: 'Integrate applications with Animeshon',
                  to: 'introduction/welcome',
                  icon: '\ue901',
                  activeBaseRegex: '^/introduction.*',
                },
                {
                  label: 'OpenID Connect',
                  sublabel: 'Use Animeshon as identity provider',
                  to: 'introduction/welcome',
                  icon: '\ue901',
                  activeBaseRegex: '^/introduction.*',
                },
                {
                  label: 'Service Accounts',
                  sublabel: 'Grant access to non-human accounts',
                  to: 'bee/welcome',
                  icon: '\ue900',
                  activeBaseRegex: '^/bee/.*',
                },
              ],
            },
            {
              label: 'Policies',
              items: [
                {
                  label: 'Rate-Limiting',
                  sublabel: 'Learn how requests frequency is limited',
                  to: 'iota.rs/welcome',
                  icon: '\ue907',
                  activeBaseRegex: '^/iota.rs/.*',
                },
                {
                  label: 'Quotas',
                  sublabel: 'Learn how resources consumption is limited',
                  to: 'wallet.rs/welcome',
                  icon: '\ue90a',
                  activeBaseRegex: '^/wallet.rs/.*',
                },
              ],
            },
            {
              label: 'Early-Access',
              items: [
                {
                  label: 'Explore',
                  sublabel: 'Discover experimental features and services',
                  to: 'build/welcome',
                  icon: '\ue902',
                  activeBaseRegex: '^/(build|blueprints)/.*',
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
            '0 3 5 7',
            '0 3 5 7',
            '1 4 6 7',
            '1 4 6 7',
            '1 . 6 .',
            '1 . 6 .',
          ],
          items_: [
            {
              label: 'Knowledge-Base APIs',
              items: [
                {
                  label: 'Bridge',
                  sublabel: 'Access links across external references',
                  to: 'build/welcome',
                  icon: '\ue902',
                  activeBaseRegex: '^/(build|blueprints)/.*',
                },
                {
                  label: 'Cross-Reference',
                  sublabel: 'Easily match internal and external resources',
                  to: 'build/welcome',
                  icon: '\ue902',
                  activeBaseRegex: '^/(build|blueprints)/.*',
                },
                {
                  label: 'Knowledge',
                  sublabel: 'Contribute to the graph knowledge-base',
                  to: 'build/welcome',
                  icon: '\ue902',
                  activeBaseRegex: '^/(build|blueprints)/.*',
                },
                {
                  label: 'Multimedia',
                  sublabel: 'Animeshon source-of-truth for abstract resources',
                  to: 'build/welcome',
                  icon: '\ue902',
                  activeBaseRegex: '^/(build|blueprints)/.*',
                },
              ],
            },
            {
              label: 'Publishing APIs',
              items: [
                {
                  label: 'Product',
                  sublabel: 'Manage physical and digital goods',
                  to: 'introduction/welcome',
                  icon: '\ue901',
                  activeBaseRegex: '^/introduction.*',
                },
                {
                  label: 'Release',
                  sublabel: 'Schedule and publish product releases',
                  to: 'introduction/welcome',
                  icon: '\ue901',
                  activeBaseRegex: '^/introduction.*',
                },
                {
                  label: 'Payment',
                  sublabel: 'Securely manage payments and subscriptions',
                  to: 'introduction/welcome',
                  icon: '\ue901',
                  activeBaseRegex: '^/introduction.*',
                },
              ],
            },
            {
              label: 'User-Experience APIs',
              items: [
                {
                  label: 'Tracker',
                  sublabel: 'Track the progress of resources',
                  to: 'IOTA-2.0-Research-Specifications/Preface',
                  icon: '\ue906',
                  activeBaseRegex: 'IOTA-2.0-Research-Specifications/.*',
                },
                {
                  label: 'Library',
                  sublabel: 'Manage custom collections of resources',
                  to: 'goshimmer/welcome',
                  icon: '\ue903',
                  activeBaseRegex: '^/goshimmer/.*',
                },
              ],
            },
            {
              label: 'Storage APIs',
              items: [
                {
                  label: 'Image',
                  sublabel: 'Store images and albums',
                  to: 'iota.rs/welcome',
                  icon: '\ue907',
                  activeBaseRegex: '^/iota.rs/.*',
                },
              ],
            },
            {
              label: 'AI & Analysis APIs',
              items: [
                {
                  label: 'Vision',
                  sublabel: 'Analyze and annotate images',
                  to: 'iota.rs/welcome',
                  icon: '\ue907',
                  activeBaseRegex: '^/iota.rs/.*',
                },
              ],
            },
            {
              label: 'IAM & Security APIs',
              items: [
                {
                  label: 'Credentials',
                  sublabel: 'Securely store third-party credentials',
                  to: 'iota.rs/welcome',
                  icon: '\ue907',
                  activeBaseRegex: '^/iota.rs/.*',
                },
                {
                  label: 'Identity and Access Management',
                  sublabel: 'Manage service accounts and groups',
                  to: 'iota.rs/welcome',
                  icon: '\ue907',
                  activeBaseRegex: '^/iota.rs/.*',
                },
                {
                  label: 'Identity',
                  sublabel: 'Manage user profile and settings',
                  to: 'iota.rs/welcome',
                  icon: '\ue907',
                  activeBaseRegex: '^/iota.rs/.*',
                },
                {
                  label: 'Resource Manager',
                  sublabel: 'Manage organizations and policies',
                  to: 'iota.rs/welcome',
                  icon: '\ue907',
                  activeBaseRegex: '^/iota.rs/.*',
                },
              ],
            },
            {
              label: 'Indexing APIs',
              items: [
                {
                  label: 'WebCache',
                  sublabel: 'Keep track of indexed resources',
                  to: 'smart-contracts/overview',
                  icon: '\ue90b',
                  activeBaseRegex: '^/smart-contracts/.*',
                },
                {
                  label: 'WebPage',
                  sublabel: 'Access indexed website pages',
                  to: 'smart-contracts/overview',
                  icon: '\ue90b',
                  activeBaseRegex: '^/smart-contracts/.*',
                },
                {
                  label: 'WebSearch',
                  sublabel: 'Search via images and keywords',
                  to: 'smart-contracts/overview',
                  icon: '\ue90b',
                  activeBaseRegex: '^/smart-contracts/.*',
                },
              ],
            },
            {
              label: 'Libraries',
              items: [
                {
                  label: 'Go',
                  sublabel: 'Go Client Libraries',
                  to: 'integration-services/welcome',
                  icon: '\ue90d',
                  activeBaseRegex: '^/integration-services/.*',
                },
                {
                  label: 'TypeScript',
                  sublabel: 'TypeScript Client Libraries',
                  to: 'integration-services/welcome',
                  icon: '\ue90d',
                  activeBaseRegex: '^/integration-services/.*',
                },
                {
                  label: 'Java',
                  sublabel: 'Java Client Libraries',
                  to: 'integration-services/welcome',
                  icon: '\ue90d',
                  activeBaseRegex: '^/integration-services/.*',
                },
                {
                  label: 'C#',
                  sublabel: 'C# Client Libraries',
                  to: 'integration-services/welcome',
                  icon: '\ue90d',
                  activeBaseRegex: '^/integration-services/.*',
                },
                {
                  label: 'PHP',
                  sublabel: 'PHP Client Libraries',
                  to: 'integration-services/welcome',
                  icon: '\ue90d',
                  activeBaseRegex: '^/integration-services/.*',
                },
              ],
            },
          ],
        },
        { to: '/blog', label: 'Community Blog', position: 'right' },
        { to: '/team', label: 'Team', position: 'right' },
      ],
    },
    footer: {
      links: [
        {
          title: 'LEARN',
          items: [
            {
              label: 'Test',
              to: 'learn/test/test',
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
            // {
            //   label: 'Fundamentals',
            //   to: 'build/fundamentals',
            // },
            // {
            //   label: 'Tutorials',
            //   to: 'build/tutorials',
            // },
          ],
        },
        {
          title: 'COMMUNITY',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.animeshon.com',
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
            //   label: 'Community Blog',
            //   to: 'blog',
            // },
            // {
            //   label: 'Imprint',
            //   to: 'https://www.iota.org/impressum',
            // },
            // {
            //   label: 'Privacy Policy',
            //   to: 'https://www.iota.org/privacy-policy',
            // },
          ],
        },
      ],
      logo: {
        alt: 'IOTA Logo',
        src: 'img/iota_logo.svg',
        href: 'https://www.iota.org',
      },
      copyright: `© ${new Date().getFullYear()} Animeshon. Designed by <a href="#">IOTA Wiki</a>. Built with <a href="">Docusaurus</a>.`,
    },
    socials: [
      // {
      //   url: 'https://www.youtube.com/c/iotafoundation',
      //   backgroundColor: 'var(--ifm-color-gray-900)',
      // },
      {
        url: 'https://www.github.com/animeshon/',
        backgroundColor: '#2C3850',
      },
      {
        url: 'https://discord.animeshon.com/',
        backgroundColor: '#4B576F',
      },
      // {
      //   url: 'https://www.twitter.com/iota/',
      //   backgroundColor: '#6A768E',
      // },
      // {
      //   url: 'https://www.reddit.com/r/iota/',
      //   backgroundColor: '#7D89A1',
      // },
      // {
      //   url: 'https://www.linkedin.com/company/iotafoundation/',
      //   backgroundColor: '#8995AD',
      // },
      // {
      //   url: 'https://www.instagram.com/iotafoundation/',
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
    ...build.plugins,
    ...products.plugins,
    ...tutorials.plugins,
  ],
  staticDirectories: [
    './static',
    ...build.staticDirectories,
    ...products.staticDirectories,
    ...tutorials.staticDirectories,
  ],
  themes: [
    'docusaurus-theme-openapi',
  ],
};

