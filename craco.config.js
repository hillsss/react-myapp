// 添加自定义webpack配置
const path = require('path')
module.exports = {
  webpack: {
    // 配置别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}