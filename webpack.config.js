const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    optimization: {
        minimize: false // code壓縮
    },

    entry: "./src/main.ts",

    devtool: "inline-source-map",

    devServer: {
        contentBase: './dist'
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        environment: {
            arrowFunction: false // webpack的箭頭函數開關，可選
        }
    },

    resolve: {
        extensions: [".ts", ".js"]
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        "targets": {
                                            "chrome": "58",
                                            "ie": "11"
                                        },
                                        "corejs": "3",
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    {
                        loader: "ts-loader",
                    }
                ],
                exclude: /node_modules/
            },

            {
                test: /\.less/,
                use: [
                    "style-loader",
                    "css-loader",
                    //include postcss
                    // {
                    //     loader:"postcss-loader",
                    //     options:{
                    //         postcssOptions:{
                    //             plugins:[
                    //                 "postcss-preset-env",{
                    //                     browsers:"last 2 versions"
                    //                 }
                    //             ]
                    //         }
                    //     }
                    // },
                    "less-loader"
                ]
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            //    title:'TS測試'
            template: "./src/index.html"
        }),
    ]
}