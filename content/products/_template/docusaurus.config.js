const path = require('path');

module.exports = {
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: '{{ .Service.ProductName }}',
                path: path.resolve(__dirname, 'docs'),
                routeBasePath: '{{ .Service.ProductName }}/docs',
                sidebarPath: path.resolve(__dirname, 'sidebars.js'),
                editUrl: 'https://github.com/animeapis/animeapis/edit/master/documentation',
                remarkPlugins: [require('remark-code-import'), require('remark-import-partial'), require('remark-remove-comments')],
            }
        ],
    ],
    staticDirectories: [path.resolve(__dirname, 'static')],
};