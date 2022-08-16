import React from 'react'
import { useNavigate } from "react-router-dom";
import './index.scss'
export default function Layout () {
  const navigate = useNavigate();
  const goLogin = () => {
    navigate('/login')
  }
  return (
    <div className='home-container' >
      <div className='home-header'>
        <div className='header'>
          <div className='logo animate__animated animate__slideInRight'></div>
        </div>
      </div>
      <div className='home-main'>
        <dl>
          <dd className="animate__animated animate__lightSpeedInRight animate__faster wz">This is</dd>
          <dd className="animate__animated animate__lightSpeedInRight animate__fast wz">My First Web</dd>
          <dd className="animate__animated animate__lightSpeedInRight animate__slow wz">Use Animate css</dd>
          <dd className='animate__animated animate__lightSpeedInRight animate__slow scroll-down'> </dd>
          <dd className='animate__animated animate__lightSpeedInRight animate__slow button'>
            <div className='text' onClick={() => { goLogin() }}>click it!</div>
            <svg width='200' height='50'>
              <rect className='shape' width='200' height='50'></rect>
            </svg>
          </dd>
        </dl>
      </div>
      <div className='home-footer'>
        <p>Built by @hillsss
          {/* <a className='link' target='_blank' rel="noreferrer" href="https://github.com/hillsss">@hisslll</a> */}
        </p>
      </div>
      <div className='square'>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

      </div>
      <div className='cricle'>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

      </div>
      <br />
    </div>
  )
}
