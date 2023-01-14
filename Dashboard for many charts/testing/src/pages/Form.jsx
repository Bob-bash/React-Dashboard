import React from 'react'
import {Header} from '../components'
import './form.css'
import {useSelector} from 'react-redux'
import { useState } from 'react'
function Form() {
  const darkcolors=useSelector(state=>state.darkcolors);
  const [bottomshow, setbottomshow] = useState(false);
  const [bottomshow1, setbottomshow1] = useState(false);
  const [bottomshow2, setbottomshow2] = useState(false);
  const [bottomshow3, setbottomshow3] = useState(false);
  const [bottomshow4, setbottomshow4] = useState(false);
  const [bottomshow5, setbottomshow5] = useState(false);
  return (
    <div className='form formmove'>
      <Header title='CREATE USER' subtitle='Create a New User Profile'/>
      <form className="form__ins" action=''> 

        <div className="form__inw">
          <input type="text" id='firstname' className='form__in' required
          autoComplete='off'
          autofill='off'
          style={{backgroundColor:`${darkcolors.formbackcolor}`,
          borderBottom:`2px solid ${bottomshow?darkcolors.whitecolor:'transparent'}`,
          color:`${darkcolors.whitecolor}`,
          }}
          onFocus={e=>setbottomshow(true)}
          onBlur={e=>setbottomshow(false)}
          />
          <label htmlFor="firstname" className='inlabel'
          style={{color:`${darkcolors.whitecolor}`,
          opacity:'.6'
        }}
          >First Name</label>
        </div>

        <div className="form__inw">
          <input type="text" id='lastname' className='form__in' required
          autoComplete='off'
          autofill='off'
          style={{backgroundColor:`${darkcolors.formbackcolor}`,
          borderBottom:`2px solid ${bottomshow1?darkcolors.whitecolor:'transparent'}`,
          color:`${darkcolors.whitecolor}`,
          }}
          onFocus={e=>setbottomshow1(true)}
          onBlur={e=>setbottomshow1(false)}
          />
          <label htmlFor="lastname" className='inlabel'
          style={{color:`${darkcolors.whitecolor}`,
          opacity:'.6'
        }}
          >Last Name</label>
        </div>

        <div className="form__inw form__inw__ano">
          <input type="text" id='email' className='form__in form__in1' required
          autoComplete='off'
          autofill='off'
          style={{backgroundColor:`${darkcolors.formbackcolor}`,
          borderBottom:`2px solid ${bottomshow2?darkcolors.whitecolor:'transparent'}`,
          color:`${darkcolors.whitecolor}`,
          }}
          onFocus={e=>setbottomshow2(true)}
          onBlur={e=>setbottomshow2(false)}
          />
          <label htmlFor="email" className='inlabel inlabel1'
          style={{color:`${darkcolors.whitecolor}`,
          opacity:'.6'
        }}
          >Email</label>
        </div>

        <div className="form__inw form__inw__ano">
          <input type="text" id='contact' className='form__in form__in1' required
          autoComplete='off'
          autofill='off'
          style={{backgroundColor:`${darkcolors.formbackcolor}`,
          borderBottom:`2px solid ${bottomshow3?darkcolors.whitecolor:'transparent'}`,
          color:`${darkcolors.whitecolor}`,
          }}
          onFocus={e=>setbottomshow3(true)}
          onBlur={e=>setbottomshow3(false)}
          />
          <label htmlFor="contact" className='inlabel inlabel1'
          style={{color:`${darkcolors.whitecolor}`,
          opacity:'.6'
        }}
          >Contact Number</label>
        </div>

        <div className="form__inw form__inw__ano">
          <input type="text" id='address1' className='form__in form__in1' required
          autoComplete='off'
          autofill='off'
          style={{backgroundColor:`${darkcolors.formbackcolor}`,
          borderBottom:`2px solid ${bottomshow4?darkcolors.whitecolor:'transparent'}`,
          color:`${darkcolors.whitecolor}`,
          }}
          onFocus={e=>setbottomshow4(true)}
          onBlur={e=>setbottomshow4(false)}
          />
          <label htmlFor="address1" className='inlabel inlabel1'
          style={{color:`${darkcolors.whitecolor}`,
          opacity:'.6'
        }}
          >Address1</label>
        </div>

        <div className="form__inw form__inw__ano">
          <input type="text" id='address2' className='form__in form__in1' required
          autoComplete='off'
          autofill='off'
          style={{backgroundColor:`${darkcolors.formbackcolor}`,
          borderBottom:`2px solid ${bottomshow5?darkcolors.whitecolor:'transparent'}`,
          color:`${darkcolors.whitecolor}`,
          }}
          onFocus={e=>setbottomshow5(true)}
          onBlur={e=>setbottomshow5(false)}
          />
          <label htmlFor="address2" className='inlabel inlabel1'
          style={{color:`${darkcolors.whitecolor}`,
          opacity:'.6'
        }}
          >Address2</label>
        </div>
        <button type='submit' className='form__btn'
        style={{
        color:`${darkcolors.blackcolor}`,
        backgroundColor:`${darkcolors.formbtnbackcolor}`
        }}
        >Create New User</button>
      </form>
    </div>
  )
}

export default Form