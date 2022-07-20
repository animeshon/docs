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
                id: 'knowledge',
                path: path.resolve(__dirname, 'docs'),
                routeBasePath: 'knowledge/docs',
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
                name: "knowledge-reference-rpc",
                sourceBaseUrl: "https://raw.githubusercontent.com/animeapis/reference-markdown/master/rpc/animeshon/knowledge/",
                outDir: "content/products/knowledge/documentation/docs/reference/rpc",
                documents: ["animeshon.knowledge.v1alpha1.md"],
                modifyContent,
            },
        ],
        [
            'docusaurus-plugin-openapi-docs',
            {
                id: "knowledge-reference-rest",
                docsPluginId: "classic",
                config: {
                    knowledge: {
                        specPath: "https://raw.githubusercontent.com/animeapis/openapi-specification/master/animeshon/knowledge/v1alpha1/openapi.yaml",
                        outputDir: "content/products/knowledge/documentation/docs/reference/rest/v1alpha1",
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