// const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './App/App.tsx'
    },

    output: {
        filename: '[name].bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ]
    },

    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.json', '.jsx', '.ts', '.tsx', '.css', '.html', '.png', '.jpg'],
    },

    optimization: {
        splitChunks: {
            chunks: 'all',
            name: true,
            cacheGroups: {
                commons: {
                    name: 'commons',
                    filename: 'commons.js',
                    test: /[\\/]node_modules[\\/]/
                }
            }
        }
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'main.html',
            template: './UI/index.html',
            hash: true,
            chunks: ['main', 'commons']
        })
    ],

    mode: 'production', // production development

    devtool: 'inline-source-map'
};