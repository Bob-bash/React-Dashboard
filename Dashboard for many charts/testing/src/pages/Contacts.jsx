import React from 'react'
import {useSelector} from 'react-redux'
import {Header} from '../components'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {invoicescolumns as columns,invoicesrows as rows} from '../data/invoicesdata'
import './contacts.css'
function Contacts() {
  const darkcolors=useSelector(state=>state.darkcolors);
  return (
    <div className='contactsw contactsmove'>
      <Header title='Contacts' subtitle='List of Contacts for Future Reference'/>
        <div style={{ height: 500, width: '100%' ,marginTop:'20px'}} >
          <DataGrid
            components={{ Toolbar: GridToolbar }}
            sx={{
              '& .nameclass,& .costclass,& .css-1knaqv7-MuiButtonBase-root-MuiButton-root':{color:`${darkcolors.greencolor}`,fontWeight:'bold'},
              '& .otherclass':{color:`${darkcolors.whitecolor}`},
          }}
            rows={rows}
            columns={columns}
            pageSize={6}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
      </div>
    </div>
  )
}

export default Contacts