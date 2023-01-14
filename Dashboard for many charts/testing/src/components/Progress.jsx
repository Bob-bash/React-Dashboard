import React from 'react'
import {useSelector} from 'react-redux'
function Progress({degree,distance}) {
const darkcolors=useSelector(state=>state.darkcolors);
  return (
    <div
    style={{
        width:`${distance}px`,
        height:`${distance}px`,
        borderRadius:'50%',
        background:`radial-gradient(${darkcolors.maincolor} 55%,transparent 56%),
        conic-gradient(${darkcolors.purplecolor} 0deg ${degree}deg,${darkcolors.greencolor} ${degree}deg 360deg)`
    }}
    >
    </div>
  )
}

export default Progress