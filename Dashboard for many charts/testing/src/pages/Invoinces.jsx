import React from 'react'
import {useSelector} from 'react-redux'
import { DataGrid } from '@mui/x-data-grid';
import './invoices.css'
import {Header} from '../components'
import {invoicescolumns as columns,invoicesrows as rows} from '../data/invoicesdata'
function Invoinces() {
  const darkcolors=useSelector(state=>state.darkcolors);
  return (
    <div className='invoices invoicesmove'>
      <Header title='INVOICES' subtitle='List of Invoice Balences'/>
      <div style={{ height: 500, width: '100%' ,marginTop:'30px'}} >
        <DataGrid
          sx={{
            '& .nameclass,& .costclass':{color:`${darkcolors.greencolor}`,fontWeight:'bold'},
            '& .otherclass':{color:`${darkcolors.whitecolor}`}
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

export default Invoinces