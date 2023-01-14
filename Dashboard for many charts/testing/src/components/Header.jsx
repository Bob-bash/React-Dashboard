import React from 'react'
import './header.css'
import {useSelector} from 'react-redux'
function Header({title,subtitle}) {
  const darkcolors=useSelector(state=>state.darkcolors);
  return (
    <div style={{marginTop:'20px'}}>
        <h2
        style={{
            color:`${darkcolors.whitecolor}`
        }}
        >{title}</h2>
        <p
        style={{
            color:`${darkcolors.greencolor}`
        }}
        >{subtitle}</p>
    </div>
  )
}

export default Header