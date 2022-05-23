const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
    plugins: [{
        plugin: new ForkTsCheckerWebpackPlugin({
            typescript: {
                memoryLimit: 4096,
            },
        })
    }, ],
    babel: {
        loaderOptions: {
            ignore: ['./node_modules/mapbox-gl/dist/mapbox-gl.js'],
        },
    },
};