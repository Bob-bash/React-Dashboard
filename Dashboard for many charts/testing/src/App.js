import React from 'react'
import './App.css'
import {useSelector} from 'react-redux'
import {Dashboard,Team,Contacts,Invoices,Form,Calendar,Faq,Bar,Pie,Line,Geo} from './pages'
import {Routes,Route} from 'react-router-dom'
import {Sidebar,Searchbar} from './components'
function App() {
  const darkcolors=useSelector(state=>state.darkcolors);
  return (
    <div style={{width:'100vw',display:'flex'}}>
        <Sidebar/>
        <div style={{
          background:`${darkcolors.maincolor}`,
          display:'flex',flexDirection:'column',width:'100%',height:'100vh',padding:'20px'}}>
            <Searchbar/>
            <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/team' element={<Team/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
                <Route path='/invoices' element={<Invoices/>}/>
                <Route path='/form' element={<Form/>}/>
                <Route path='/calendar' element={<Calendar/>}/>
                <Route path='/faq' element={<Faq/>}/>
                <Route path='/bar_chart' element={<Bar/>}/>
                <Route path='/pie_chart' element={<Pie/>}/>
                <Route path='/line_chart' element={<Line/>}/>
                <Route path='/geo_chart' element={<Geo/>}/>
            </Routes>
        </div>
    </div>
  )
}

export default App