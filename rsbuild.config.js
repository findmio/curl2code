const { pluginReact } = require('@rsbuild/plugin-react');

const assetPrefix = process.env.PUBLIC_RUN_MODE === 'web' ? '/curl2code/' : '/';

module.exports = {
    html: {
        template: './public/index.html',
    },
    plugins: [pluginReact()],
    source: {
        alias: {
            '@icons': './src/icons',
        },
    },
    tools: {
        rspack: {
            resolve: {
                fallback: {
                    path: require.resolve('path-browserify'),
                    fs: false,
                    stream: require.resolve('stream-browserify'),
                    util: require.resolve('util/'),
                    url: require.resolve('url/'),
                    querystring: require.resolve('querystring-es3'),
                    string_decoder: require.resolve('string_decoder/'),
                    buffer: require.resolve('buffer/'),
                },
            },
        },
    },
    output: {
        assetPrefix: assetPrefix,
        distPath: {
            js: '',
            css: '',
        },
        legalComments: 'none',
        copy: {
            patterns: [
                'public/logo.jpg',
                'public/plugin.json',
                'node_modules/highlight.js/styles/a11y-dark.css',
                'node_modules/highlight.js/styles/a11y-light.css',
                'node_modules/web-tree-sitter/tree-sitter.wasm',
                'node_modules/curlconverter/dist/tree-sitter-bash.wasm',
            ],
        },
    },
};
