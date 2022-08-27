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
                id: 'webpage',
                path: path.resolve(__dirname, 'docs'),
                routeBasePath: 'webpage/docs',
                sidebarPath: path.resolve(__dirname, 'sidebars.js'),
                editUrl: 'https://github.com/animeapis/animeapis/edit/master/documentation',
                remarkPlugins: [require('remark-code-import'), require('remark-import-partial'), require('remark-remove-comments')],
                docLayoutComponent: "@theme/DocPage",
                docItemComponent: "@theme/ApiItem",
            }
        ],
        [
            "docusaurus-plugin-remote-content",
            {
                name: "webpage-reference-rpc",
                sourceBaseUrl: "https://raw.githubusercontent.com/animeapis/reference-markdown/master/rpc/animeshon/webpage/",
                outDir: "content/products/webpage/documentation/docs/reference/rpc",
                documents: ["animeshon.webpage.v1alpha1.md"],
                modifyContent,
            },
        ],
        [
            'docusaurus-plugin-openapi-docs',
            {
                id: "webpage-reference-rest",
                docsPluginId: "classic",
                config: {
                    webpage: {
                        specPath: "https://raw.githubusercontent.com/animeapis/openapi-specification/master/animeshon/webpage/v1alpha1/openapi.yaml",
                        outputDir: "content/products/webpage/documentation/docs/reference/rest/v1alpha1",
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