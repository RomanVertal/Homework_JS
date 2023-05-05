const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: '/src/index.js',
    // watch: true,
    output: {
        filename: "bundle.js",
        path: '/dist'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
        hot: true,
    },
    watchOptions: {
        aggregateTimeout: 100,
        ignored: ['node_modules/**'],
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    // MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template:path.join(__dirname, '/public/index.html')
            // favicon:"public/favicon.ico"
        })

    ]
}