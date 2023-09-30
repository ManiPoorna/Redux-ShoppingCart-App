import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='navbar'>
          <div className='nav-heading'>
              <h2>Shopping Cart</h2>
          </div>      
          <div className='nav-pages'>
              <ul type='none'>
                  <NavLink to="/">Home Page</NavLink>
                  <NavLink to="/cart">Cart Page</NavLink>
              </ul>
          </div>      
          <Outlet/>
    </div>
  )
}

export default Navbar