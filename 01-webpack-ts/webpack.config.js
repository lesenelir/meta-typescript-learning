const path = require('path')

// webpack 中的所有配置信息都写在module.exports
module.exports = {
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
        use: 'ts-loader',
        // 要排除的文件模块
        exclude: /node_modules/
      }
    ]
  }

}


