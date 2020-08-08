const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

console.log(path.join(__dirname))

module.exports = {
    name: 'My Best Friend Note - setting',
    mode: 'development', // 실서비스: production
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    entry: {
        app: ['@babel/polyfill', './app/index'],
    }, // 입력
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: [
                        '@babel/plugin-proposal-class-properties',
                        'react-hot-loader/babel',
                    ],
                },
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                // use: [
                //   {
                //     loader: MiniCssExtractPlugin.loader,
                //     options: {
                //       // hmr: process.env.NODE_ENV === "development",
                //       reloadAll: true,
                //       name: "/styles/[name].[ext]",
                //     },
                //   },
                //   "css-loader",
                //   // 'postcss-loader',
                //   "sass-loader",
                // ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: '/',
                            name: 'images/[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: path.join(__dirname, 'dist'),
    }, // 출력
    plugins: [
        new webpack.BannerPlugin({
            banner: `빌드 날짜: ${new Date().toLocaleString()}`,
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'My best friend NOTE',
            filename: 'index.html',
            template: './index.html',
            favicon: './app/images/favicon.ico',
            // hash: true,
            hot: true,
        }),
        new Dotenv(),
        // new MiniCssExtractPlugin({ filename: "styles/app.css" }),
        new MiniCssExtractPlugin({ filename: 'app.css' }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        host: 'localhost',
        port: 8080,
        disableHostCheck: true,
    },
    // watch: true,
}
