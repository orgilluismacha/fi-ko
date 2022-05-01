const path = require('path');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production'

  console.log('env', env);

  return {
    entry: './src/app.js',
    mode: 'development',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
      publicPath: "/"
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }]
    },
    devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'public')
      },
      historyApiFallback: true
    }
  };
};