import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {HotModuleReplacementPlugin} from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const defaultEnv = {
    dev: true,
    production: false,
};

// module.exports = {
export default (env = defaultEnv) => ({
    entry: [
        ...env.dev ? [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:8080',
        ] : [],
        path.join(__dirname, 'src/index.jsx'),
    ],
    output: {
        path: path.join(__dirname, 'firebase/public'),
        filename: 'bundle.js',
    },
    plugins: [
        ...env.dev ? [
            // Webpack Development Plugins
            new HotModuleReplacementPlugin(),
        ] : [
            // Webpack Production Plugins
            new ExtractTextPlugin('[name].css'),
        ],
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            babelrc: false, // Tells webpack not to use the .babelrc file.
                            plugins: ['react-hot-loader/babel'],
                            presets: [
                                ['es2015', {modules: false}],
                                'stage-2',
                                'react', // Strip flow types and transform JSX into React.createElement calls.
                            ],
                        }
                    }
                ]
            },
            {
                test: /\.(css|scss|sass)$/,
                use: env.dev ? 'style-loader!css-loader!sass-loader' : ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!sass-loader'
                })
            },
        ]
    },
    devServer: {
        hot: env.dev,
    },
})