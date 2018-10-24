const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: { path: path.join(__dirname, '/dist'), filename: "bundle.js" },
  watch: true,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader'
        ]
      },
    ]
  },
  plugins: [ new HtmlWebpackPlugin({
    template: './public/index.html'
  })
  ],
  devServer: {
    inline:true,
    port: 3000,
    historyApiFallback: true
  },
};