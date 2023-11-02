import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { ranshedata } from '../store/data'
import SetlikeRanshe from './SetlikeRanshe';


const Ranshe = ({ addLike3, removeLike3, addKorzina3 }) => {

    const [like, setLike] = useState(false)

    
    return (
        <div>
            <section className='py-14  bg-[#FBF8EC]'>
                <div className="container">

                    {/* title */}
                    <div className='flex justify-between mb-10'>
                        <h2 className='text-2xl md:text-4xl  font-bold text-qorag'>Покупали раньше</h2>
                        <button className='p-2'>
                            Все покупки
                            <span className='ml-5'>≽</span>
                        </button>
                    </div>

                    {/* Card wrapper */}
                    <Swiper className=' py-2 px-2'
                        spaceBetween={40}
                        slidesPerView={1}
                        autoplay={{
                            "delay": 500,
                            "disableOnInteraction": false
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                        }}
                        loop={true}

                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >

                        {ranshedata.map((ranshedata) => (
                                <SwiperSlide key={ranshedata.id} className='bg-white shadow-md rounded-nor pt-4'>
                                    <SetlikeRanshe addLike3={addLike3} ranshedata={ranshedata} addKorzina3={addKorzina3} removeLike3={removeLike3}  />
                                </SwiperSlide>
                        ))}

                    </Swiper>

                </div>
            </section>
        </div>
    )
}

export default Ranshe