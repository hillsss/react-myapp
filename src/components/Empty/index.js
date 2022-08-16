import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import './index.scss'
export default function Empty () {
  const navigate = useNavigate();
  const toWebHome = () => {
    navigate('/')
  }
  return (
    <div className='container'>
      <div className='gohome' onClick={toWebHome}>回到网站首页</div>
      <div className='bubble'></div>
      <div className='shadow'></div>
      <div className='focus-in-contract-bck'>
        To Be Continue......
      </div>
      <Link to='/two'> click me to see Second page</Link>
    </div>
  )
}
