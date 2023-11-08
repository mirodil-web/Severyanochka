import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { novinkidata } from '../store/data'
import SetLikeNovinki  from './SetlikeNovinki';
import { Link } from 'react-router-dom';

const Novinki = ({ addLike2, removeLike2, addKorzina2 }) => {
    const [like, setLike] = useState(false)
  
            return (
                <section className='py-14 bg-[#FBF8EC]'>
                    <div className="container">

                        {/* title */}
                        <div className='flex justify-between mb-10'>
                            <h2 className='md:text-4xl text-2xl  font-bold text-qorag'>Новинки</h2>
                            {/* <Link className='p-2'>
                                Все новинки
                                <span className='ml-5'>≽</span>
                            </Link> */}
                        </div>

                        {/* Card wrapper */}
                        <Swiper className='py-2  px-2'
                            spaceBetween={40}
                            slidesPerView={1}
                            autoplay={{
                                "delay": 2500,
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

                            {novinkidata.map((novinkidata) => (
                                    <SwiperSlide key={novinkidata.id} className='bg-white shadow-md rounded-nor pt-4'>
                                       <SetLikeNovinki addLike2={addLike2} novinkidata={novinkidata} removeLike2={removeLike2} addKorzina2={addKorzina2} />
                                    </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                </section>
            )
        }
    
// }

export default Novinki