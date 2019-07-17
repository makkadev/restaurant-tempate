'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin")

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/main.js',
        // publicPath: '/dist'
    },
    module: {
        rules: [{
                test: /.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {},
                    },
                    'css-loader?url=false',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/images'
                    },
                }, ],
            }
        ]
    },
    resolve: {},
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/html/index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/main.css',
            // chunkFilename: '[id].css',
        }),
        new CopyPlugin([{
            from: './src/images',
            to: 'images'
        }]),
        new GoogleFontsPlugin({
            fonts: [{
                    family: "Kaushan Script",
                    variants: ["400", "700"]
                },
                {
                    family: "Quando",
                    variants: ["400", "700"]
                },
                {
                    family: "Roboto",
                    variants: ["400", "700"]
                },
                {
                    family: "Montserrat",
                    variants: ["400", "700", "900"]
                }
            ],
            filename: 'css/font.css',
        })
    ],
};