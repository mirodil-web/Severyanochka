import React, { useState } from 'react'
import Heart from "../../public/assets/heart.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';



import 'swiper/css';
import { acsiyadata } from '../store/data';




const Aksiya = ({qoshish, like }) => {

    const [badge, setBadge] = useState()
    

    return (
        <section className='pt-20 pb-14'>
            <div className="container">

                {/* title */}
                <div className='flex justify-between '>
                    <h2 className='text-4xl  font-bold text-qorag'>Акции</h2>
                    <Link to='aksiya' className='p-2'>
                        Все акции
                        <span className='ml-5'>≽</span>
                    </Link>
                </div>

                {/* Card wrapper */}
                <Swiper className='py-10' spaceBetween={40}
                    slidesPerView={4}
                    autoplay={{
                        "delay": 500,
                        "disableOnInteraction": false
                    }}
                    loop={true}

                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
 
                    {acsiyadata.map((acsiyadata) => {
                        return (
                            <SwiperSlide key={acsiyadata.id} className='bg-white shadow-md relative '>
                                <div className='p-2 relative'>
                                    <button  onClick={()=>qoshish(acsiyadata.id)} className={`shadow absolute right-2 p-2 ${like ? 'bg-red-500' : 'bg-slate-200/50'}
                                 rounded-nor`}>
                                        <img width={22} className='shadow-white shadow-md rounded-lg p-0.5' height={22} src={Heart} alt="Heart icon" />
                                    </button>
                                    <img width={272} height={160} className='mx-auto' src={acsiyadata.img} alt="Card img" />
                                    <span className='bg-olov rounded-nor p-1 absolute bottom-2 text-white'>
                                        - 50%
                                    </span>
                                </div>

                                <div className='p-2 space-y-2'>

                                    <div>
                                        <div className='flex justify-between items-center'>
                                            <h3 className='font-bold text-lg text-qorag'>44,50 ₽</h3>
                                            <h4 className='text-base  font-normal text-blue-950'>50,50 ₽</h4>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <span className='text-xs text-gray-400 font-normal'>С картой</span>
                                            <span className='text-xs text-gray-400 font-normal'>Обычная</span>
                                        </div>
                                    </div>

                                    <p className='text-base  font-normal text-qorag'>
                                        {acsiyadata.name}
                                    </p>

                                    {/* **************************** */}

                                    {/* ****************** */}

                                    <button className='p-2 border border-Yashil rounded-nor text-Yashil w-full'>{acsiyadata.button}</button>

                                </div>
                            </SwiperSlide>
                        )
                    })}
                    {/* Card 1 */}




                </Swiper>

            </div>
        </section>
    )
}

export default Aksiya