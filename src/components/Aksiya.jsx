import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import { acsiyadata } from '../store/data';
import Setlike from './Setlike';

const Aksiya = () => {
    const [badge, setBadge] = useState();

    const like = (acsiyaId) => {
        // Like tugmasi bosilganda ishlatiladigan logika
        // Misol uchun:
        if (badge === acsiyaId) {
            setBadge(null); // Agar shu aksiya nomidan like olib tashlansa, uni bekor qilamiz
        } else {
            setBadge(acsiyaId); // Aksiya nomidan like olib tashlansa, uni qo'shamiz
        }
    };

    return (
        <section className='pt-20 pb-14 bg-[#FBF8EC]'>
            <div className="container">
                {/* title */}
                <div className='flex justify-between mb-10'>
                    <h2 className='text-4xl  font-bold text-qorag'>Акции</h2>
                    <button className='p-2'>
                        Все покупки
                        <span className='ml-5'>≽</span>
                    </button>
                </div>
                
                <Swiper
                    className='py-2 px-2 grid grid-cols-4 '
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
                        <SwiperSlide key={acsiyadata.id} className='bg-white shadow-md relative rounded-nor '>
                            <Setlike acsiyadata={acsiyadata} like={badge === acsiyadata.id} qoshish={like} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Aksiya;
