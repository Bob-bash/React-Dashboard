import React from 'react'
import  './team.css'
import {Header} from '../components'
import {useSelector} from 'react-redux'
import { DataGrid} from '@mui/x-data-grid';
import {teamdatacolums as columns,teamdatarows as rows } from '../data/teamdata'
function Team() {
  const darkcolors=useSelector(state=>state.darkcolors);
  return (
    <div className='teamw teammove'>
      <Header title='Team' subtitle='Managing Team Members'/>
      <div style={{ height: 500, width: '100%' ,marginTop:'20px'}} >
          <DataGrid
            sx={{
              '& .idclass,& .css-1knaqv7-MuiButtonBase-root-MuiButton-root':{color:`${darkcolors.greencolor}`,fontWeight:'bold'},
              '& .otherclass':{color:`${darkcolors.whitecolor}`},
          }}
            rows={rows}
            columns={columns}
            pageSize={7}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
      </div>
    </div>
  )
}

export default Team