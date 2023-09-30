import React, { useState } from 'react'
import Heart from "../../public/assets/heart.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import { acsiyadata } from '../store/data';
import Setlike from './Setlike';


const Aksiya = ({ qoshish, like }) => {

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
                <Swiper
                    className='py-10 grid grid-cols-4 '
                    slidesPerView={2}
                    spaceBetween={40}
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

                    {acsiyadata.map((acsiyadata) => (
                            <SwiperSlide key={acsiyadata.id} className='bg-white shadow-md relative '>
                              <Setlike acsiyadata={acsiyadata} like={like} qoshish={qoshish}  />
                            </SwiperSlide>
                    ))}

                </Swiper>

            </div>
        </section>
    )
}

export default Aksiya