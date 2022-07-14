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
                id: 'webcache',
                path: path.resolve(__dirname, 'docs'),
                routeBasePath: 'webcache/docs',
                sidebarPath: path.resolve(__dirname, 'sidebars.js'),
                editUrl: 'https://github.com/animeapis/animeapis/edit/master/documentation',
                remarkPlugins: [require('remark-code-import'), require('remark-import-partial'), require('remark-remove-comments')],
            }
        ],
        [
            "docusaurus-plugin-remote-content",
            {
                name: "webcache-reference-rpc",
                sourceBaseUrl: "https://raw.githubusercontent.com/animeapis/reference-markdown/master/rpc/animeshon/webcache/",
                outDir: "content/products/webcache/documentation/docs/reference/rpc",
                documents: ["animeshon.webcache.v1alpha1.md"],
                modifyContent,
            },
        ],
    ],
    staticDirectories: [path.resolve(__dirname, 'static')],
};