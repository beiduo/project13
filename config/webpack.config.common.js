const path = require('path');

const { dir_prefix } = require('../site');

var desktopCfg = {
    entry: `./websites/${dir_prefix}desktop/index.js`,
    output: {
        path: path.resolve(__dirname, '../dist/desktop'),
        filename: 'static/desktop.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                ]
            },
        ],
    },
    resolve: {
        alias: {
            trunk: path.resolve(__dirname, '../trunk'),
        },
    },
};

// var mobileCfg = {
//     entry: `./websites/${dir_prefix}desktop/index.js`,
//     output: {
//         path: path.resolve(__dirname, '../dist/mobile'),
//         filename: 'static/mobile.bundle.js',
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.html$/,
//                 use: 'html-loader',
//             },
//         ],
//     },
//     plugins: [
//         new webpack.SourceMapDevToolPlugin({}),
//         new HtmlWebpackPlugin({
//             template: `./trunk/desktop/index.ejs`,
//             filename: 'index.html',
//             title: siteName,
//             meta: {
//                 viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
//             },
//         }),
//     ],
// };

module.exports = {
    desktopCfg
};