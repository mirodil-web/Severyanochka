import React from 'react'
import Heroimg from '../../public/assets/hero-img.png'



const Hero = () => {
  return (
      <div className='bg-herobg'>
      <div className="container max-w-[1208px] flex items-center justify-center py-14 sm:p-0">
              <img width={303} height={202} className='hidden sm:block' src={Heroimg} alt="Hero object" />
              <h1 className='text-xl text-center  font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-qorag'> Доставка бесплатно от <span>1000 ₽</span></h1>
          </div>
    </div>
  )
}

export default Hero