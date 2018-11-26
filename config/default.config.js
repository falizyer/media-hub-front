const path = require("path");

const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, "../"),
    source: "./src",
    build: "./dist",
    node_modules: "./node_modules",
    entry: {
        app: "./src/index.tsx"
    },
    plugins: [
        new CleanWebpackPlugin([
            "./dist"
        ], {
            root: path.resolve(__dirname, "../")
        })
    ],
    rules: [{
        enforce: "pre",
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "tslint-loader",
    }, {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "ts-loader",
    }, {
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader",
            options: {
                includePaths: []
            }
        }]
    }]
};