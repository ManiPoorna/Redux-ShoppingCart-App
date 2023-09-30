import React from 'react'
import Navbar from './Components/Navbar.js'
import HomePage from './Components/HomePage.js'
import CartPage from './Components/CartPage.js'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage/>} />
      </Routes>
    </div>
  )
}

export default App