# React 使用文档

### 1.创建 react 项目

```js
npx create-react-app my-app
```

### 2.初始化文件

```js
1.compontents/index.js //通用组件
2.store/index.js //仓库
3.utils/index.js //工具函数
4.styles/index.scss //样式文件
5.hooks //自定义hook
6.pages //路由组件
7.assets //静态文件
```

### 3.使用 scss 预处理器

```js
//下载sass
yarn add sass -D
//创建全局样式index.scss文件
```

### 4.配置基础路由

```js
// 安装路由
yarn add react-router-dom
// 在pages页面新增两个路由页面login/layout

// App.js文件中配置路由
// 导入路由
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//导入组件
import Layout from './pages/Layout';
import Login from './pages/Login';

function App () {
  return (
    // 配置路由配置
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* 创建路由path和组件对应的关系 */}
          <Route path='/' element={<Layout />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
```

### 5.antd 组件库的使用

```js
//antd 的 JS 代码默认支持基于 ES modules 的 tree shaking
// 安装
yarn add antd
//在src/index.js下引入 注意要 带 min 不然会报错
import 'antd/dist/antd.min.css';
```

### 6.配置别名路径 -> 使用 craco 库

```js
// 安装
yarn add @craco/craco -D
// 在根目录创建craco.config.js
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
//修改 pagckage.json
//将s tart/build/test 改为 craco 方式
"scripts": {
-   "start": "react-scripts start",
+   "start": "craco start",
-   "build": "react-scripts build",
+   "build": "craco build"
-   "test": "react-scripts test",
+   "test": "craco test"
}

//别名路径提示 新建jsconfig.json
{
	"compilerOptions": {
		    "baseUrl": "./",
		    "paths": {
		        "@/*": ["src/*"]
		    }
	}
}
```
