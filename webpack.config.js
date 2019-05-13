const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const { siteName, dir_prefix } = require('./site');

var desktopCfg = {
    mode: 'development',
    entry: `./websites/${dir_prefix}desktop/index.js`,
    output: {
        path: path.resolve(__dirname, './dist/desktop'),
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
        contentBase: path.join(__dirname, 'dist/desktop'),
        compress: true,
        port: 8000
    },
    resolve: {
        alias: {
            trunk: path.resolve(__dirname, 'trunk'),
        },
    },
};

var mobileCfg = {
    entry: `./websites/${dir_prefix}desktop/index.js`,
    output: {
        path: path.resolve(__dirname, './dist/mobile'),
        filename: 'static/mobile.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader',
            },
        ],
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({}),
        new HtmlWebpackPlugin({
            template: `./trunk/desktop/index.ejs`,
            filename: 'index.html',
            title: siteName,
            meta: {
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
            },
        }),
    ],
};

module.exports = desktopCfg;