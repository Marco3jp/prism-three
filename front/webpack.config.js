const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const dist = __dirname + "/dist";
const path = require('path');

module.exports = () => {
    return {
        entry: './src/main.ts',
        output: {
            path: dist,
            filename: '[name].[chunkhash].js'
        },
        mode: 'development',
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: [
                        {
                            loader: 'ts-loader',
                            options: {
                                appendTsSuffixTo: [/\.vue$/]
                            }
                        }
                    ],
                },
                {
                    test: /\.(scss|css)$/,
                    use: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.(html)$/,
                    use: {
                        loader: 'html-loader',
                        options: {
                            attrs: [':data-src']
                        }

                    }
                }
            ]
        },
        resolve: {
            extensions: ['*', '.js', '.vue', '.json', '.ts'],
            alias: {
                '@components': path.resolve(__dirname, 'src/components'),
                '@view': path.resolve(__dirname, 'src/view'),
                '@scripts': path.resolve(__dirname, 'src/scripts'),
                '@images': path.resolve(__dirname, 'src/images'),
                '@style': path.resolve(__dirname, 'src/style')
            }
        },
        plugins: [
            new VueLoaderPlugin(),
            new HtmlWebpackPlugin({
                inject: "body",
                chunks: ['main'],
                template: "./index.html",
                filename: "./index.html"
            })
        ],
        devServer: {
            contentBase: 'dist',
            host: '0.0.0.0',
            disableHostCheck: true,
            historyApiFallback: true,
            inline: true,
        },
    }
};

if (module.hot) {
    module.hot.accept();
}

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');