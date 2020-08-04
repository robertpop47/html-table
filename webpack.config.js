const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js'
    },
    plugins: [new HtmlWebpackPlugin()],
    devServer:{
        contentBase: './dist'
    }
   };