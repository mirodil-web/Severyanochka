import React from 'react'
import Heroimg from '../../public/assets/hero-img.png'
import LogoS from '../../public/assets/logox.svg'



const Hero = () => {
  return (
      <div className='bg-herobg'>
      <div className="container max-w-[1208px] flex items-center">
        <img src={LogoS} className='block md:hidden' alt="logo" />
              <img width={303} height={202} src={Heroimg} alt="Hero object" />
              <h1 className='text-2xl  font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-qorag'> Доставка бесплатно от 1000 ₽</h1>
          </div>
    </div>
  )
}

export default Hero