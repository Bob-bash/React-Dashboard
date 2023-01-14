import React from 'react'
import './dashcard.css'
import {useSelector} from 'react-redux'
import {Progress} from '../components'
import { NumericFormat } from 'react-number-format';
function Dashcard({left__icon,left__value,left__des,right__value,right__dis,right__deg}) {
  const darkcolors=useSelector(state=>state.darkcolors);
  return (
    <div className='dashcard'
    style={{backgroundColor:`${darkcolors.sidebackcolor}`}}
    >
        <div className="dashcard__left dashcard__com">
            <p style={{color:`${darkcolors.greencolor}`,fontSize:'25px'}}>
            {left__icon}
            </p>
            <p style={{color:`${darkcolors.whitecolor}`,fontWeight:'bold'}}>
           {left__value.toLocaleString()}  
            </p>
            <p style={{color:`${darkcolors.greencolor}`,opacity:'.6'}}>
            {left__des}
            </p>
        </div>
        <div className="dashcard__right dashcard__com">
            <Progress distance={right__dis} degree={right__deg}/>
            <p style={{color:`${darkcolors.greencolor}`,opacity:'.6'}}>
            +{right__value}%
            </p>
        </div>
    </div>
  )
}

export default Dashcard