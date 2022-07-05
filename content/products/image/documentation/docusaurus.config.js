const path = require('path');

module.exports = {
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'image',
                path: path.resolve(__dirname, 'docs'),
                routeBasePath: 'image',
                sidebarPath: path.resolve(__dirname, 'sidebars.js'),
                editUrl: 'https://github.com/iotaledger/stronghold/edit/dev-refactor/documentation',
                remarkPlugins: [require('remark-code-import'), require('remark-import-partial'), require('remark-remove-comments')],
            }
        ],
        
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // ! NOTE: currently OpenAPI 3.x is not well supported.
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // [
        //     'docusaurus-plugin-openapi',
        //     {
        //       id: 'image-v1alpha1',
        //       path: path.resolve(__dirname, 'v1alpha1/openapi.yaml'),
        //       routeBasePath: 'image/docs/reference/rest/v1alpha1',
        //     }
        // ]
    ],
    staticDirectories: [path.resolve(__dirname, 'static')],
};