import React from 'react'
import { NavLink } from 'react-router-dom'

const Navlink = () => {
  return (
    <div className='nav'>
        <ul>
            <li><NavLink className="l1" to='/'>Day-1</NavLink></li>
            <li><NavLink className="l1" to='/day-2'>Day-2</NavLink></li>
            <li><NavLink className="l1" to='day-3'>Day-3</NavLink></li>
            <li><NavLink className="l1" to='day-4'>Day-4</NavLink></li>
            <li><NavLink  className="l1" to='day-5'>Day-5</NavLink></li>
            <li><NavLink className="l1" to='day-6'>Day-6</NavLink></li>
        </ul>
    </div>
  )
}

export default Navlink