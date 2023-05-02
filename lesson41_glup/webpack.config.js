const path = require('node:path')
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    mode: 'production',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
      },

      plugins: [
        new HtmlWebpackPlugin({
        template: 'index.html'
      })
    ],
    devServer: {
        port: 9000
    },
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              "style-loader",
              "css-loader",
              {
                loader: "sass-loader",
                options: {
                  implementation: require("sass"),
                },
              },
            ],
          },
        ],
      },
};