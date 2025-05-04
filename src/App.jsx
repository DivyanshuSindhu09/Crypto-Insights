import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Coin from './Pages/Coin'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-800 to-indigo-900'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/coin/:coinId' element={<Coin/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App