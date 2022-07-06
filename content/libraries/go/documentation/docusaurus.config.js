const path = require('path');

module.exports = {
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'go-client-libraries',
                path: path.resolve(__dirname, 'docs'),
                routeBasePath: 'go/docs',
                sidebarPath: path.resolve(__dirname, 'sidebars.js'),
                editUrl: 'https://github.com/iotaledger/stronghold/edit/dev-refactor/documentation',
                remarkPlugins: [require('remark-code-import'), require('remark-import-partial'), require('remark-remove-comments')],
            }
        ],
    ],
    staticDirectories: [path.resolve(__dirname, 'static')],
};