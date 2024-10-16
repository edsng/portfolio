import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import Info from './Info'
import NaviBar from './Navibar' // Import NaviBar
import '../css/App.css'

const App = () => {
  return (
    <>
      <NaviBar /> {/* Include NaviBar globally */}
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Root Route */}
        <Route path="work" element={<LandingPage />} />
        <Route path="info" element={<Info />} />
      </Routes>
    </>
  )
}

export default App
