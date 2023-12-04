const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   mode: 'development',

   entry: {
      bundle: path.resolve(__dirname, 'src/index.js'),
   },

   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name][contenthash].js',
      clean: true,
   },

   devtool: 'source-map',

   devServer: {
      static: {
         directory: path.resolve(__dirname, 'dist'),
      },

      watchFiles: ['src/template.html'],
      port: 5500,
      hot: true,
      historyApiFallback: true,
      compress: true,
      open: true,
   },

   module: {
      rules: [
         {
            test: /\.scss$/,
            use: [
               'style-loader',
               'css-loader',
               'sass-loader',
            ],
         },

         {
            test: /\.js/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env'],
               },
            },
         },

         {
            test: /\.(jpg|jpeg|gif|svg|png)$/i,
            type: 'asset/resource',
         },
      ],
   },

   plugins: [
      new HtmlWebpackPlugin({
         title: 'Sorting Visualizer',
         filename: 'index.html',
         template: 'src/template.html',
      })
   ]
}