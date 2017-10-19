var ExtractTextPlugin = require('extract-text-webpack-plugin')

var HtmlWebpackPlugin = require('html-webpack-plugin')

var webpack = require('webpack')

console.log(process.env.NODE_ENV)

var outputDir = ''

if (process.env.NODE_ENV === 'dev') {
  outputDir = '/dev'
} else {
  outputDir = '/prod'
}
console.log(outputDir)

var devProfile = {
  entry: {
    'scripts/app': './src/scripts/app.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + outputDir
  },
  devtool: 'source-map',
  resolve:{
    alias:{
      'vue$':'vue/dist/vue.js',
      'styles':__dirname + '/src/styles'
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader'
      }]
    },
    {
      test: /\.vue$/,
      exclude: /node_modules/,
      use: [{
        loader: 'vue-loader'
      }]
    },{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader', 
        use: ['css-loader', 'sass-loader']
      })
    }, {
      test: /\.css$/,
      use: [{
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        }
      ]
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10,
        name: 'media/images/[name].[ext]'
      }
    }, {
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'media/images/[name].[hash:7].[ext]'
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10,
        name: 'media/images/iconfont/[name].[ext]'
      }
    }]
  },
  plugins: [
    //配置抽离css的插件
    new ExtractTextPlugin({
      filename: (getPath) => {
      	console.log(1);
        return getPath('[name].css').replace('scripts', 'styles')
      },
      allChunks: true
    }), //编译html,自动添加css和js文件
    new HtmlWebpackPlugin({
      template: './src/index.html', //html模板
      filename: 'index.html',
      chunks: ['scripts/app']
    })
  ]
}

var devserver = {
  devServer: {
    host: 'localhost',
    port: 4000,
    contentBase: __dirname + '/dev',
    noInfo: true,
    proxy: {
      '/api': {
        target: 'https://api.douban.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/vip': {
        target: 'http://localhost:9000/',
        changeOrigin: true,
        pathRewrite: {
          '^/vip': ''
        }
      }
    }
  },
}

var prodProfile = {
  output: {
    filename: '[name]@[chunkhash:7].js',
    path: __dirname + outputDir
  },
  plugins: [
    //配置抽离css的插件
    new ExtractTextPlugin({
      filename: (getPath) => {
        return getPath('[name]@[chunkhash:7].css').replace('scripts', 'styles')
      },
      allChunks: true
    }), //编译html,自动添加css和js文件
    new HtmlWebpackPlugin({
      template: './src/index.html', //html模板
      filename: 'index.html',
      chunks: ['scripts/app']
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
  ]
}
if (process.env.NODE_ENV === 'dev') {
  module.exports = Object.assign({}, devProfile, devserver)
} else {
  module.exports = Object.assign({}, devProfile, prodProfile)
}
