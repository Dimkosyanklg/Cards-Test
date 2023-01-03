const path = require("path");

module.exports = {
    entry: "./src/index.tsx",
    mode: "development",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./public/"),
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: {
            "@src": path.resolve(__dirname, "src"),
        },
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "ts-loader",
                },
            },
        ],
    },
};