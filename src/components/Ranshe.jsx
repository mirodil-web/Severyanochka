import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { ranshedata } from '../store/data'
import SetlikeRanshe from './SetlikeRanshe';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';



const Ranshe = ({ addLike3, removeLike3, addKorzina3 }) => {

    const [like, setLike] = useState(false)

    const [custom_swiper, set_swiper] = useState({});
    const nextSlide = () => {
        custom_swiper.slideNext();
    };
    const prevSlide = () => {
        custom_swiper.slidePrev();
    };

    
    return (
        <div>
            <section className='py-14  bg-[#FBF8EC]'>
                <div className="container">

                    {/* title */}
                    <div className='flex justify-between items-center mb-10'>
                        <h2 className='text-2xl md:text-4xl  font-bold text-qorag'>Покупали раньше</h2>
                        <div class="flex space-x-2 rounded-nor text-2xl ">
                            <button onClick={prevSlide} class="hover:bg-Yashil hover:text-white py-0 px-2 rounded-nor duration-300">⇽</button>
                            <button onClick={nextSlide} class="hover:bg-Yashil hover:text-white py-0 px-2 rounded-nor duration-300">⇾</button>
                        </div>
                    </div>

                    {/* Card wrapper */}
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        navigation={
                            true
                        }
                        onInit={(ev) => {
                            set_swiper(ev);
                        }}
                        className=' py-2 px-2'
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