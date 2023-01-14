import React from 'react'
import {Header} from '../components'
import './faq.css'
import {useSelector} from 'react-redux'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {faqdata} from '../data/faqdata';
function Faq() {
  const darkcolors=useSelector(state=>state.darkcolors);
  return (
    <div className='faqw faqmove'>
      <Header title='FAQ' subtitle='Frequently Asked Questions Page'/>
      <div className="faq__main">
       {faqdata.map((item,i)=>(

          <div className="faq__card"
          key={`${item.des}_1`}
          >
            <span
            style={{color:`${darkcolors.whitecolor}`,
            fontWeight:'bold'
            }}
            >{i+1}</span>
            <Accordion defaultExpanded={i==0?true:false}
              style={{backgroundColor:`${darkcolors.faqbackcolor}`}}
              key={`${item.des}_2`}
              >
                <AccordionSummary
                  key={`${item.des}_3`}
                  expandIcon={item.icon}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                   key={`${item.des}_4`}
                  style={{color:`${darkcolors.greencolor}`,fontWeight:'bold'}}
                  >{item.title}</Typography>
                </AccordionSummary>
                <AccordionDetails
                 key={`${item.des}_5`}
                >
                  <Typography
                  className='faq__des'
                   key={`${item.des}_6`}
                  style={{color:`${darkcolors.whitecolor}`,opacity:'.6'}}
                  >
                   {item.des}
                  </Typography>
                </AccordionDetails>
              </Accordion>
          </div>
       ))}

        
      </div>
    </div>
  )
}

export default Faq
