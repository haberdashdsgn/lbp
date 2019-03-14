var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../src');

module.exports = {
    entry: [
        path.join(parentDir, 'js/index.js')
    ],
    mode: 'development',
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            },{
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                },{
                    loader: "css-loader"
                },{
                    loader: "sass-loader"
                }]
            },{
                test: /\.(png|jpg|gif|svg)$/,
                exclude: [
                    path.resolve(__dirname, './node_modules'),
                ],
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name]-[hash].[ext]'
                    }
                }
            },{
                test: /\.svg$/,
                include: [
                    path.resolve(__dirname, './node_modules'),
                ],
                use: {
                    loader: 'svg-inline-loader',
                    options: {
                        name: '[name]-[hash].[ext]'
                    }
                }
            }
        ]
    },
    output: {
        path: path.join(parentDir, 'www'),
        publicPath: 'http://localhost:8080/',
        filename: 'bundle.js'
    },
    devServer: {
        index: 'index.php',
        port: 8080,
        contentBase: parentDir,
        watchContentBase: true,
        historyApiFallback: true
    }
};