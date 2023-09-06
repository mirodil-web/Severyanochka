import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Aksiya from './components/Aksiya'
import Novinki from './components/Novinki'
import Ranshe from './components/Ranshe'
import Pridlojeniya from './components/Pridlojeniya'
import Nashi from './components/Nashi'

const App = () => {
  return (
    <div className='font-Rubik'>
      <Header />
      <Hero />
      <Aksiya />
      <Novinki />
      <Ranshe />
      <Pridlojeniya />
      <Nashi />
    </div>
  )
}

export default App