import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './common/Navigation'
import Guest from './pages/Guest'
import Skills from './screens/Skills'
import React from 'react'
import About from './screens/About'

function App() {
  return (
    <div className='relative'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Guest />} />
        <Route path='/skill' element={<Skills />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Skills />} />
        <Route path='/portfolio' element={<Skills />} />
        <Route path='/contact' element={<Skills />} />
      </Routes>
    </div>
  )
}

export default App
