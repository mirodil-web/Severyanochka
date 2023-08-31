import React from 'react'
import Heroimg from '../../public/assets/hero-img.png'


const Hero = () => {
  return (
      <div className='bg-herobg'>
          <div className="container max-w-[1208px] flex items-center">
              <img src={Heroimg} alt="Hero object" />
              <h1 className='font-bold text-5xl text-qorag'> Доставка бесплатно от 1000 ₽</h1>
          </div>
    </div>
  )
}

export default Hero