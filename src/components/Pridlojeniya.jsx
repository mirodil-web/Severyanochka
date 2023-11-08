import React from 'react'
import Karta from '../../public/assets/Karta.png'
import BbImg from '../../public/assets/bgimgx.png'


const Pridlojeniya = () => {
    return (
        <section className='py-14 bg-[#FBF8EC]'>
            <div className="container">
                <h2 className='font-bold text-2xl md:text-4xl text-center mb-10'>Специальные предложения</h2>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 grid-rows-[190px]'>

                    {/* card 1 */}
                    <div className='rounded-nor sm:bg-pcardimg bg-right  bg-no-repeat  backdrop-blur  bg-pinkx flex'>
                        <div className='p-8 text-center'>
                            <h3 className='text-lg sm:text-2xl font-bold '>Оформите карту <br /> «Северяночка»</h3>
                            <p className='font-normal text-sm sm:text-base leading-6'>И получайте бонусы при покупке в <br /> магазинах  и на сайте</p>
                        </div>

                        {/* <img src={Karta} className='hidden sm:block' alt="Karta img" /> */}

                    </div>

                    {/* card 2 */}
                    <div className='rounded-nor bg-[#E5FFDE] sm:bg-pcardimg2 bg-no-repeat  bg-right flex justify-between'>

                        <div className='p-8 text-center' >
                            <h3 className='text-lg sm:text-2xl font-bold '>Покупайте <br /> акционные товары</h3>
                            <p className='font-normal text-sm sm:text-base leading-6'>И получайте вдвое больше  бонусов</p>
                        </div>


                    </div>


                </div>
            </div>
        </section>
    )
}

export default Pridlojeniya