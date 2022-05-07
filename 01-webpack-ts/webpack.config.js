const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')


// webpack 中的所有配置信息都写在module.exports
module.exports = {
  mode: "production",
  // 入口文件
  entry: "./src/index.ts",
  // 指定打包文件的目录
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // 指定webpack打包时使用的模块
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          // 配置babel 适配老浏览器
          // {
          //   loader: 'babel-loader',
          //   options: {
          //     // 设置预定义的环境
          //     preset: [
          //       [
          //         // 执行环境的插件
          //         "@babel/preset-env",
          //         // 配置信息
          //         {
          //           targets: {
          //             "chrome": "88",
          //             "ie": "11"
          //           },
          //           "corejs": "3",
          //           "useBuiltIns": "usage"
          //         }
          //       ]
          //     ]
          //   }
          // },
          'ts-loader'
        ],
        // 要排除的文件模块
        exclude: /node_modules/
      }
    ]
  },
  // 配置插件
  plugins: [
    new HTMLWebpackPlugin({
      // title: 'webpack-TS-Title',
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  // 用来设置引用模块
  resolve: {
    extensions: ['.ts', '.js']
  }

}


