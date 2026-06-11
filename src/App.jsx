import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from "./components/Navbar"
import { Route,Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import SignUp from "./Pages/SIgnUp"
import Dashboard from "./Pages/Dashboard"
import About from './Pages/About'
import Contact from './Pages/Contact'

function App() {
 

  return (
    <div className="appComponent">
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutus" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>

    </div>
  )
}

export default App
