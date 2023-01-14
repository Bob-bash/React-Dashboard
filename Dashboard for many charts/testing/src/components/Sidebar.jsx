import React from 'react'
import './sidebar.css'
import {BiHomeCircle} from 'react-icons/bi'
import {useSelector} from 'react-redux'
import {HiMenuAlt2} from 'react-icons/hi'
import {sidebardata} from '../data/sidebardata'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import sidebarimage from '../data/images/user.png'
function Sidebar() {
  const darkcolors=useSelector(state=>state.darkcolors);
  const [menushow, setMenushow] = useState(true);
  const [selected, setselected] = useState('dashboard');
  const menuclick=(e)=>{
    setMenushow(!menushow)
  }
  return (
    <div style={{backgroundColor:`${darkcolors.sidebackcolor}`}} className='sidebar'>
      <div 
      className="sidebar__menu"
      style={{color:`${darkcolors.whitecolor}`}}
      >
        <Link 
        to='/' 
        className='sidebar__h3'
        style={{color:`${darkcolors.whitecolor}`}}
        >ADMINIS</Link>
      <div className="sidebar__iconw">
        <HiMenuAlt2
        onClick={menuclick}
        />
      </div>
      </div>
      <div className="sidebar__profile">
        <div className="sidebar__imgw">
          <img src={sidebarimage} alt="" className='sidebar__img'/>
        </div>
        <div className="sidebar__ts">
          <h3
          style={{color:`${darkcolors.whitecolor}`}}
          >Ed Roh</h3>
          <p
          style={{color:`${darkcolors.greencolor}`}}
          >VP Fancy Admin</p>
        </div>
      </div>
      <div className="sidebar__linksw">
        <Link className="sidebar__linkw linkw" to='/'
        style={{
        transition:'.3s linear',
        color:selected==='dashboard'?`${darkcolors.purplecolor}`:`${darkcolors.whitecolor}`,
        transform:selected==='dashboard'?'translateX(-8px)':'translateX(0px)'
        }}
        onClick={e=>setselected('dashboard')}
        >
          {menushow&&<BiHomeCircle/>}Dashboard
        </Link>
        {sidebardata.map(item=>(
          <div className="sidebar__linkww"
          key={`${item.title}__div2`}
          >
            <h3 
            key={item.title}
            className='Sidebar__t'
            style={{color:`${darkcolors.whitecolor}`,opacity:.6}}
            >{item.title}</h3>
            <div className="sidebar__links"
            key={`${item.title}__div`}
            >
              {item.links.map(item=>(
                <Link 
                key={item.linkname}
                to={item.topath} 
                className="sidebar__linkw"
                style={{
                transition:'.3s linear',
                color:item.linkname===selected?`${darkcolors.purplecolor}`:`${darkcolors.whitecolor}`,
                transform:item.linkname===selected?'translateX(-8px)':'translateX(0px)'
                }}
                onClick={e=>
                  setselected(item.linkname)
                  }
                >
                  {menushow&&item.icon}{item.linkname}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}         

export default Sidebar