const utils = require('./utils');
const path = require('path');
const webpack = require('webpack');
const config = require('../config');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const FaviconsPlugin = require('favicons-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const hash = require('../cache/deps.json').name.match(/deps\.([0-9a-f]+)\.js/)[1];

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(name => {
    baseWebpackConfig.entry[name] = ['./build/dev-client', 'webpack/hot/only-dev-server'].concat(baseWebpackConfig.entry[name]);
});

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = merge(
    baseWebpackConfig, {
        module: {
            rules: utils.styleLoaders({ sourceMap: false })
        }
    },
    {
        devtool: 'inline-eval-cheap-source-map',
        plugins: [
            new webpack.DllReferencePlugin({
                context: path.join(__dirname, '..', 'cache'),
			    manifest: require("../cache/manifest.json") // eslint-disable-line
            }),
            new webpack.DefinePlugin({
                'process.env': config.dev.env
            }),
            new HtmlWebpackPlugin({
                filename: 'idnex.html',
                template: 'index.html',
                jsPath: '/magic/',
                inject: true,
                chunks: ['app'],
                depsHash: hash,
                hash: false,
                title: 'magic'
            }),
            new webpack.NamedModulesPlugin(),
            new CaseSensitivePathsPlugin(),
            new WatchMissingNodeModulesPlugin(resolve('node_modules')),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
            new FriendlyErrorsPlugin(),
            new DashboardPlugin(),
            new FaviconsPlugin('./src/assets/img/favicon.jpg')
        ]
    }
);
