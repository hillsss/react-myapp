import React, { useRef, useEffect } from 'react'
import ChangeBtn from '@/components/ChangeBtn'
import './index.scss'
export default function Two () {
  const contain = useRef()
  const changeTheme = (val) => {
    contain.current.className = val ? 'dark contain' : 'contain'
  }
  useEffect(() => {
    console.log(contain.current.className, 2);
  }, [])
  return (
    <div ref={contain} className='contain'>
      <div style={{ marginBottom: '60px', fontSize: '30px' }}>Change page theme</div>
      <ChangeBtn changeTheme={changeTheme} />

    </div>

  )
}
