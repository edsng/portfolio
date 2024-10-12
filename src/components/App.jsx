import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Info from './Info'
import NaviBar from './Navibar' // Import NaviBar
import '../css/App.css'

const App = () => {
  return (
    <>
      <NaviBar /> {/* Include NaviBar globally */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Root Route */}
        <Route path="/work" element={<Home />} />
        <Route path="/info" element={<Info />} />
        {/* Add other routes as needed */}
      </Routes>
    </>
  )
}

export default App
