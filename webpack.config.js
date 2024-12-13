const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')
const COpyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        new COpyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src", "assets"),
                    to: path.resolve(__dirname, "dist", "assets")
                }
            ]
        })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },

        

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
         
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true

    },
    mode: 'development'
}