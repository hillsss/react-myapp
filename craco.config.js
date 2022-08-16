// 添加自定义webpack配置
const path = require('path')
const sassResourcesLoader = require('craco-sass-resources-loader');

module.exports = {
  webpack: {
    // 配置别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        resources: './src/variables.scss',
      },
    },
  ]
}