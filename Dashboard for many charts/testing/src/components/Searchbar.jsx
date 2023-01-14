import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import './searchbar.css'
import IconButton from '@mui/material/IconButton';
import {MdOutlineNotificationsActive,MdSettings,MdPersonOutline,MdOutlineWbSunny} from 'react-icons/md'
import {FiMoon,FiSearch} from 'react-icons/fi'
import { useState } from 'react';
function Searchbar() {
  const darkcolors=useSelector(state=>state.darkcolors);
  const backcolorswitch=useSelector(state=>state.backcolorswitch);
  const dispatch=useDispatch()
  const [invalue, setinvalue] = useState('');
  const [hasfocus, sethasfocus] = useState(false);
  const [iconswitch, seticonswitch] = useState(true);
  const hanlechange=(e)=>{
    setinvalue(e.target.value)
  }
  const hanleclick=(e)=>{
    setinvalue('')
  }
  const handleclickcolor=e=>{
    dispatch({type:'BACKCOLORSWITCH'})
    // seticonswitch(!iconswitch)
  }
  return (
    <div className='header'>
      <div className="header__left">
        <input type="text" placeholder='Search' className='header__in'
        value={invalue}
        style={{backgroundColor:`${darkcolors.sidebackcolor}`,
        color:`${darkcolors.whitecolor}`,
        outline:hasfocus?`2px solid ${darkcolors.purplecolor}`:'none',
        }}
        onChange={hanlechange}
        onFocus={e=>sethasfocus(true)}
        onBlur={e=>sethasfocus(false)}
        />
        <FiSearch className='header__search'
          style={{color:`${darkcolors.whitecolor}`}}
          onClick={hanleclick}
        />
      </div>
      <div className="header__right">
      <IconButton aria-label="delete" size="small" 
      style={{color:`${darkcolors.whitecolor}`}}
      // onClick={handleclickcolor}
      >
        {iconswitch?<FiMoon/>:<MdOutlineWbSunny/>}
        </IconButton>
      <IconButton aria-label="delete" size="small" style={{color:`${darkcolors.whitecolor}`}}><MdOutlineNotificationsActive/></IconButton>
      <IconButton aria-label="delete" size="small" style={{color:`${darkcolors.whitecolor}`}}><MdSettings/></IconButton>
      <IconButton aria-label="delete" size="small" style={{color:`${darkcolors.whitecolor}`}}><MdPersonOutline/></IconButton>
      </div>
    </div>
  )
}

export default Searchbar