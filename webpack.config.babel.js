import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {HotModuleReplacementPlugin} from 'webpack';

module.exports = {
    entry: [
        'react-hot-loader/patch', // Needed to preserve state
        'webpack-dev-server/client?http://localhost:8080', // webpack dev server host and port
        path.join(__dirname, 'src/index.jsx'),
    ],
    output: {
        path: path.join(__dirname, 'firebase/public'),
        filename: 'bundle.js',
    },
    plugins: [
        new HotModuleReplacementPlugin(), // Globally enable hot code replacement
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
                                ['es2015', { modules: false }],
                                'stage-2',
                                'react', // Strip flow types and transform JSX into React.createElement calls.
                            ],
                        }
                    }
                ]
            },
            {
                test: /\.(css|scss|sass)$/,
                loader: 'style-loader!css-loader!sass-loader',
            },
        ]
    },
    devServer: {
        hot: true,
    },
}