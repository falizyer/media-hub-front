const path = require("path");
const {DefinePlugin} = require("webpack");
const {LicenseWebpackPlugin} = require("license-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const config = require("./default.config");

module.exports = {
    context: config.context,
    devtool: "source-map",
    entry: config.entry,
    output: {
        path: path.resolve(config.context, config.build),
        filename: "[name].min.js",
        chunkFilename: "[id].min.js"
    },
    resolve: {
        modules: ["node_modules", `${path.join(config.context, config.source)}`],
        extensions: [".css", ".scss", ".js", ".ts", ".tsx"]
    },
    plugins: [
        new DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development")
            }
        }),
        ...config.plugins,
        new HtmlWebPackPlugin({
            template: "./src/index.ejs",
            filename: "./index.html",
            hash: true
        })
    ],
    module: {
        rules: [
            ...config.rules
        ]
    }
};