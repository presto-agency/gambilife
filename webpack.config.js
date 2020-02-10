const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: ['transform-class-properties']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    autoprefixer()
                                ],
                                sourceMap: true,
                                minimize: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            // options: {
                            //     includePaths: ["absolute/path/a", "absolute/path/b"]
                            // }
                        }
                    ]
                })
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                        },
                    },
                ],
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "/dist"),
        compress: true,
        port: 9090,
        historyApiFallback: true
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'styles.css',
            allChunks: true,
            disable: false
        }),
        new HtmlWebpackPlugin({
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: path.join(__dirname, "./src/index.html"),
        })
    ]
};