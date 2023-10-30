import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = ({cardLike, korzina}) => {
  return (
    <div>
      <Header cardLike={cardLike} korzina={korzina} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout