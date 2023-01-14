import React from 'react'
import {useSelector} from 'react-redux'
import './littlecard.css'
function Littlecard({left__title,left__subtitle,center,right__value}) {
  const darkcolors=useSelector(state=>state.darkcolors);
  return (
    <div className='littlecardw'
    style={{backgroundColor:`${darkcolors.sidebackcolor}`}}
    >
        <div className="littlecardl">
            <p style={{color:`${darkcolors.greencolor}`}}>{left__title}</p>
            <p style={{color:`${darkcolors.whitecolor}`}}>{left__subtitle}</p>
        </div>
        <p style={{color:`${darkcolors.lightwhitecolor}`}}>{center}</p>
        <div className="littlecardr" 
        style={{backgroundColor:`${darkcolors.greencolor}`,
        color:`${darkcolors.whitecolor}`
        }}>${right__value}</div>
    </div>
  )
}

export default Littlecard