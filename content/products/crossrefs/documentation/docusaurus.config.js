const path = require('path');

const modifyContent = (filename, content) => {
    return {
        content: `---
title: ${path.parse(filename).name}
---

${content}`
    }
};

module.exports = {
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'crossrefs',
                path: path.resolve(__dirname, 'docs'),
                routeBasePath: 'crossrefs/docs',
                sidebarPath: path.resolve(__dirname, 'sidebars.js'),
                editUrl: 'https://github.com/animeapis/animeapis/edit/master/documentation',
                remarkPlugins: [require('remark-code-import'), require('remark-import-partial'), require('remark-remove-comments')],
                docLayoutComponent: "@theme/DocPage",
                docItemComponent: "@theme/ApiItem",
            }
        ],
        [
            'docusaurus-plugin-openapi-docs',
            {
                id: "crossrefs-reference-rest",
                docsPluginId: "classic",
                config: {
                    crossrefs: {
                        specPath: "https://raw.githubusercontent.com/animeapis/openapi-specification/master/animeshon/crossrefs/v1alpha1/openapi.yaml",
                        outputDir: "content/products/crossrefs/documentation/docs/reference/rest/v1alpha1",
                        sidebarOptions: {
                            groupPathsBy: "tag",
                            sidebarCollapsible: false,
                        },
                    }
                }
            },
        ],
    ],
    staticDirectories: [path.resolve(__dirname, 'static')],
};