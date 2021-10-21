const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

function getLocalDevConfig() {
    const config = {
        mode: 'development',
        devtool: 'cheap-module-source-map',
        devServer: {
            historyApiFallback: true,
            port: 3005,
        },
    }

    const plugins = [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Test',
            publicPath: '/',
            inject: true,
            template: path.resolve(__dirname, '..', 'public/index.html'),
        }),
    ]

    return [config, plugins]
}

function getProdConfig() {
    const config = {
        mode: 'production',
        devtool: 'nosources-source-map',
    }
    const plugins = [
        new HtmlWebpackPlugin({
            title: 'Test',
            publicPath: '/',
            inject: true,
            template: path.resolve(__dirname, '..', 'public/index.html'),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        }),
    ]
    return [config, plugins]
}

module.exports = (env) => {
    const isLocalDev = env.development
    const [config, plugins] = isLocalDev ? getLocalDevConfig() : getProdConfig()

    return {
        ...config,
        entry: path.resolve(__dirname, '..', 'bootstrap.jsx'),
        target: 'web',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, '..', 'dist'),
            publicPath: 'auto',
        },
        module: {
            rules: [
                {
                    test: /\.(js|mjs|jsx|ts|tsx)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
            ],
        },
        resolve: {
            alias: {
                src: path.resolve(__dirname, '..', 'src'),
                '@hooks': path.resolve(__dirname, '..', 'src/hooks'),
                '@components': path.resolve(__dirname, '..', 'src/components'),
                '@translations': path.resolve(
                    __dirname,
                    '..',
                    'src/translations'
                ),
            },
            extensions: ['.js', '.jsx'],
        },
        plugins: [...plugins],
    }
}
