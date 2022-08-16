// 导入路由
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//导入组件
import Layout from '@/pages/Layout';
import Login from '@/pages/Login';
import One from '@/pages/One';
import Two from '@/pages/Two';

function App () {
  return (
    // 配置路由配置
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* 创建路由path和组件对应的关系 */}
          <Route path='/' element={<Layout />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/one' element={<One />}></Route>
          <Route path='/two' element={<Two />}></Route>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;

