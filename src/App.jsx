import React from 'react'
import { Description, Footer, Hero, Navbar, Time, Trading } from './components'

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Hero />
        <Description />
        <Trading />
        <Time />
      </div>
      <Footer />
    </div>
  )
}

export default App