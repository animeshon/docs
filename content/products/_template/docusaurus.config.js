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
                id: '{{ .domain }}',
                path: path.resolve(__dirname, 'docs'),
                routeBasePath: '{{ .domain }}/docs',
                sidebarPath: path.resolve(__dirname, 'sidebars.js'),
                editUrl: 'https://github.com/animeapis/animeapis/edit/master/documentation',
                remarkPlugins: [require('remark-code-import'), require('remark-import-partial'), require('remark-remove-comments')],
                {{- if .rest.versions }}
                docLayoutComponent: "@theme/DocPage",
                docItemComponent: "@theme/ApiItem",
                {{- end }}
            }
        ],
        {{- if .rpc.remote }}
        [
            "docusaurus-plugin-remote-content",
            {
                name: "{{ .domain }}-reference-rpc",
                sourceBaseUrl: "https://raw.githubusercontent.com/animeapis/reference-markdown/master/rpc/animeshon/{{ .rpc.remote.prefix }}/",
                outDir: "content/products/{{ .domain }}/documentation/docs/reference/rpc",
                documents: {{ toJson .rpc.remote.documents }},
                modifyContent,
            },
        ],
        {{- end }}
        {{- range $i := .rest.versions }}
        [
            'docusaurus-plugin-openapi-docs',
            {
                id: "{{ $.domain }}-reference-rest",
                docsPluginId: "classic",
                config: {
                    {{ $.domain }}: {
                        specPath: "{{ $i.path }}",
                        outputDir: "content/products/{{ $.domain }}/documentation/docs/reference/rest/{{ $i.version }}",
                        sidebarOptions: {
                            groupPathsBy: "tag",
                            sidebarCollapsible: false,
                        },
                    }
                }
            },
        ],
        {{- end }}
    ],
    staticDirectories: [path.resolve(__dirname, 'static')],
};