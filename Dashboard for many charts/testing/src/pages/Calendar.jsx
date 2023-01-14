import React from 'react'
import {Header} from '../components'
import {useSelector} from 'react-redux'
import FullCalendar  from  '@fullcalendar/react'
import { formatDate } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import { useState } from 'react'
import './calendar.css'
function Calendar() {
  const darkcolors=useSelector(state=>state.darkcolors);
  const [currentevents, setCurrentevents] = useState([]);
  const handledate=(selected)=>{
    const title=prompt( 'Please enter a new title for your event')
    const calendarApi = selected.view.calendar
    calendarApi.unselect()
    if(title){
      calendarApi.addEvent({
        id :` ${selected.dateStr} - ${ title } `,
        title,
        start : selected.startStr,
        end : selected.endStr,
        allDay : selected.allDay
      })
    }
  }
  const handleevent = ( selected ) => {
    if( window.confirm(`Are you sure you want to delete the event ${selected.title}`) ){
      selected.event.remove( )
    }
  }
  
  return (
    <div className='calendarw calendarmove'>
      <Header title='Calendar' subtitle='Full Calendar Interactive Page'/>
      <div className="calendar">
        <div className="calendar__left"
        style={{backgroundColor:`${darkcolors.eventsbackcolor}`}}
        >
          <h3 style={{color:`${darkcolors.whitecolor}`,marginBottom:'15px'}}>Events</h3>
          <div className="calendar__events">
            {currentevents.map(event=>(
              <div className="calendar__event"
              style={{backgroundColor:`${darkcolors.eventbackcolor}`,
              color:`${darkcolors.whitecolor}`
            }}
              key={event.id}
              >
                <p key={`${event.id}__p1`}>{event.title}</p>
                <p key={`${event.id}__p2`}>{formatDate(event.start,{
                  year:'numeric',
                  month:'short',
                  day:'numeric',
                })}</p>
              </div>              
            ))}
          </div>
        </div>
        <div className="calendar__right">
          <FullCalendar
          height='75vh'
          plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin,listPlugin]}
          headerToolbar={{
            left:'prev,next,today',
            center:'title',
            right:'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
          }}
          initialView='dayGridMonth'
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          select={handledate}
          eventClick={handleevent}
          eventsSet={(events)=>setCurrentevents(events)}
          initialEvents={[
            {id:'123',title:'All-day event',date:'2022-09-12'}
          ]}
          />
        </div>
      </div>
    </div>
  )
}

export default Calendar