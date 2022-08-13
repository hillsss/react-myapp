// import LoginForm from "./components/LoginForm";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import { message } from "antd";
import logo from "@/assets/images/logo.png";
import './index.scss'
export default function Login () {
  const navigate = useNavigate();
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const login = () => {
    if (name === 'user' && password === '123456') {
      navigate('/one')
    } else {
      message.error("请输入提示的用户名和密码！！！");
    }
  }
  const nameChange = (e) => {
    setName(e.target.value)
  }
  const passwordChange = (e) => {
    setPassword(e.target.value)
  }
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-form">
          <div className="login-logo">
            <img className="login-icon" src={logo} alt="logo" />
            <span className="logo-text">React—World</span>
          </div>
          <div className='form'>
            <input type='text' value={name} placeholder='用户名: user' onChange={nameChange}></input>
            <input type='password' value={password} placeholder='密码: 123456' onChange={passwordChange}></input>
            <button className='btn-login' onClick={login}>登录</button>
          </div>
          {/* <LoginForm /> */}
        </div>
      </div>
    </div>
  )
}
