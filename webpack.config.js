const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['css-loader']
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin()],
}