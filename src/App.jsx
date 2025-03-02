import React from 'react'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/hero'
import Agents from './components/Agents/agents'
import Faq from './components/Faq/faq'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Agents/>
      <Faq/>
    </div>
  )
}

export default App