const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        index: "./source/js/index.js",
        about: "./source/js/about.js",
    },
    output: {
        path: path.resolve(__dirname, "./public/js"),
        filename: "[name]_bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './source/index.html',
            filename: '../index.html',
            chunks: ['index'],
        }),
        new HTMLWebpackPlugin({
            template: './source/about.html',
            filename: '../about.html',
            chunks: ['about'],
        })
    ]
};