const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '.', "./src/index.tsx"),
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [{
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        ignore: ['./node_modules/mapbox-gl/dist/mapbox-gl.js']
                    }
                }, ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\bmapbox-gl-csp-worker.js\b/i,
                use: {
                    loader: 'worker-loader'
                }
            },
            {
                test: /\.svg$/,
                use: [{
                    loader: 'svg-url-loader',
                    options: {
                        limit: 10000,
                    },
                }, ],
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '.', "./public/index.html"),
            filename: "index.html",
            manifest: "./public/manifest.json",
        }),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                memoryLimit: 4096,
            },
        })
    ],
    devServer: {
        open: true
    }
};