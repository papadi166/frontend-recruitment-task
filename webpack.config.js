const path = require("path");
const globImporter = require("node-sass-glob-importer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const Without = require("./tools/webpack-without");

const baseConfig = {
    entry: {
        all: ["./src/js/main.js"],
        main: ["./src/scss/main.scss"],
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "./",
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new Without([/style\.js$/])
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                ],
            },
            {
                test: /\.sass$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            sassOptions: { indentedSyntax: true },
                            esModule: false,
                        },
                    },
                ],
            },
            {
                test: /\.s?[c]ss$/i,
                exclude: /(node_modules|bower_components)/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            esModule: false,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            sassOptions: {
                                sourceMap: true,
                                importer: [
                                    globImporter(),
                                ],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.svg/,
                type: "asset/inline",
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff2?|ttf|eot|otf)(\?v=\w+)?$/,
                exclude: /(node_modules|bower_components)/,
                type: "asset",
                generator: {
                    filename: "fonts/[name][ext][query]",
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 1024, // 1kb
                    },
                },
            },
        ],
    },
    optimization: {
        minimizer: [`...`, new CssMinimizerPlugin()],
    },
    devtool: false,
};

module.exports = (env, options) => {
    const isProduction = options.mode === "production";

    if (isProduction) {
        baseConfig.mode = "production";
    } else {
        baseConfig.mode = "development";
        baseConfig.devtool = "source-map";
    }

    return baseConfig;
};
