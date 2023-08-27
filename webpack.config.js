
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require("path");


module.exports = {

    mode: process.env.NODE_ENV === "production" ? "production" : "development",
    
    entry: path.resolve(__dirname,"src/App.js"),

    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "bundle.js",
    },

    module: {
        rules :[
            {
               test: /\.svg$/,
               use : 'svg-inline-loader',
            },
            {
                test: /\.css$/i,
                use: ["style-loader","css-loader","postcss-loader"],
            },
            {
                test: /\.(js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react'],
                    },
                }
            }



        ]
    },

    plugins: [new HtmlWebpackPlugin({
        template : "./index.html",
    }) ]

}