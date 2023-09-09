import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Aksiya from './Aksiya'
import Novinki from './Novinki'
import Ranshe from './Ranshe'
import Pridlojeniya from './Pridlojeniya'
import Nashi from './Nashi'
import Ctati from './Ctati'
import Footer from './Footer'

const Main = () => {
  return (
      <main className='bg-[#fcf9ed]'>
          <Header />
          <Hero />
          <Aksiya />
          <Novinki />
          <Ranshe />
          <Pridlojeniya />
          <Nashi />
          <Ctati />
          <Footer />
    </main>
  )
}

export default Main