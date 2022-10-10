import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dayone from './Dayone'
import Daytwo from './Daytwo'
import Daythree from './Daythree'
import Dayfour from './Dayfour'
import Dayfive from './Dayfive'
import Daysix from './Daysix'
import Mainnav from './Mainnav'

const Nav = () => {
  return (
    <div>
     
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Mainnav/>}>
            <Route index element={<Dayone/>}/>

            <Route path='/day-2' element={<Daytwo/>}/>
            <Route path='/day-3' element={<Daythree/>}/>
            <Route path='/day-4' element={<Dayfour/>}/>
            <Route path='/day-5' element={<Dayfive/>}/>
            <Route path='/day-6' element={<Daysix/>}/>
           
            </Route>
            
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Nav