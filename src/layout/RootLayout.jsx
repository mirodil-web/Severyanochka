import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = ({cardLike}) => {
  return (
    <div>
      <Header cardLike={cardLike} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout