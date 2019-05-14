const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const { siteName } = require('../site');

const { desktopCfg } = require('./webpack.config.common');

module.exports = Object.assign({}, desktopCfg, {
    mode: 'development',
    plugins: [
        new webpack.SourceMapDevToolPlugin({}),
        new HtmlWebpackPlugin({
            template: `./trunk/desktop/index.ejs`,
            filename: 'index.html',
            title: siteName,
            meta: {
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
            },
            inject: true
        }),
        new VueLoaderPlugin(),
    ],
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, '../dist/desktop'),
        compress: true,
        port: 8000
    },
});