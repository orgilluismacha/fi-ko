

const path = require('path');


module.exports = (env, argv) => {
  const isProduction = env === 'production';

  const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        use: [MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
        ],
      }]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles.css'
      })
    ],


    devtool: argv.mode === 'production' ? 'source-map' : 'inline-source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'public')
      },
      historyApiFallback: true
    }
  };
};
