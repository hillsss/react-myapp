import React from 'react'
import { SmileTwoTone } from '@ant-design/icons';
import { Space } from 'antd';
import './index.scss'
export default function Layout () {
  return (
    <div className='home-container'>
      <div className='home-header'>
        <div className='header'>
          <div className='logo'>
            <Space>
              <SmileTwoTone style={{ fontSize: '40px' }} />
            </Space>
          </div>
        </div>

      </div>
      <div className='home-main'>
        <dl>
          <dd className="animate__animated animate__fadeInDown wz">This is</dd>
          <dd className="animate__animated animate__fadeInDown wz">My First Web</dd>
          <dd className="animate__animated animate__fadeInUp wz">Use Animate css</dd>
          <dd className='animate__animated animate__fadeInUp scroll-down'> </dd>
          <dd className='animate__animated animate__fadeInUp btn'>welcome you !!!</dd>
        </dl>
      </div>
      <div className='home-bg'>
        <div className='bg'>

        </div>

      </div>
      <br />
    </div>
  )
}
