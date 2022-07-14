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
                id: 'vision',
                path: path.resolve(__dirname, 'docs'),
                routeBasePath: 'vision/docs',
                sidebarPath: path.resolve(__dirname, 'sidebars.js'),
                editUrl: 'https://github.com/animeapis/animeapis/edit/master/documentation',
                remarkPlugins: [require('remark-code-import'), require('remark-import-partial'), require('remark-remove-comments')],
            }
        ],
        [
            "docusaurus-plugin-remote-content",
            {
                name: "vision-reference-rpc",
                sourceBaseUrl: "https://raw.githubusercontent.com/animeapis/reference-markdown/master/rpc/animeshon/vision/",
                outDir: "content/products/vision/documentation/docs/reference/rpc",
                documents: ["animeshon.vision.v1alpha1.md"],
                modifyContent,
            },
        ],
    ],
    staticDirectories: [path.resolve(__dirname, 'static')],
};