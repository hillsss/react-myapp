import React, { useRef, useEffect } from 'react'
import './index.scss'

export default function SelectTheme (props) {
  useEffect(() => {
    btnWrapper.current.style.setProperty('--groove-left', '14px');
  }, [])
  const { changeTheme } = props
  const btnWrapper = useRef()
  let btns = document.getElementsByClassName('btn');
  const changeBtn = (e, val) => {
    changeTheme(val)
    btnWrapper.current.style.setProperty('--groove-left', `calc(12px + ${val * 50}%)`);
    btnWrapper.current.style.setProperty('--wraper-origin', `${val === 0 ? '75% top' : '25% top'}`);
    btnWrapper.current.style.setProperty('--wraper-rotate', `${val === 0 ? -8 : 8}deg`);
    btnWrapper.current.className = 'rotateWrap';
    setTimeout(() => {
      e.target.className = 'btn active';
    }, 500);
    for (let i = 0; i < btns.length; i++) {
      setTimeout(() => {
        btns[i].className = 'btn';
      }, 100)
    }
  }
  return (
    <div ref={btnWrapper} id='btnWrapper'>
      <div className='btn active' onClick={(e) => changeBtn(e, 0)}>blue</div>
      <div className='btn' onClick={(e) => changeBtn(e, 1)}>pink</div>
    </div>
  )
}
