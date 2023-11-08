import React, { useState } from 'react'
import Map from './Map';

const Nashi = () => {

  return (
    <section className='py-14 bg-[#FBF8EC]'>
      <div className="container">
        <h2 className='mb-10 text-2xl md:text-4xl text-center  font-bold text-qorag'>Наши магазины</h2>
       <Map />
      </div>
    </section>
  )
}

export default Nashi