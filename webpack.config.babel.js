import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
    entry: [
        path.join(__dirname, 'src/index.jsx'),
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
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
                            presets: [
                                ['es2015', { modules: false }],
                                'stage-0',
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
}