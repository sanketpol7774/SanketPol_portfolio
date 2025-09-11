import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'

import Projects from './Projects'

import Footer from'./Footer'



function App() {


  return (
    <>

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />

    </>

  )
}

export default App
