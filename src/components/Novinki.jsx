import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { novinkidata } from '../store/data'
import SetLikeNovinki  from './SetlikeNovinki';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const Novinki = ({ addLike2, removeLike2, addKorzina2 }) => {

    const [custom_swiper, set_swiper] = useState({});
    const nextSlide = () => {
        custom_swiper.slideNext();
    };
    const prevSlide = () => {
        custom_swiper.slidePrev();
    };

    const [like, setLike] = useState(false)
  
            return (
                <section className='py-14 bg-[#FBF8EC]'>
                    <div className="container">

                        {/* title */}
                        <div className='flex justify-between mb-10'>
                            <h2 className='md:text-4xl text-2xl  font-bold text-qorag'>Новинки</h2>
                            <div class="flex space-x-2 items-center rounded-nor text-2xl ">
                                <button onClick={prevSlide} class="hover:bg-Yashil hover:text-white py-0 px-2 rounded-nor duration-300">⇜</button>
                                <button onClick={nextSlide} class="hover:bg-Yashil hover:text-white py-0 px-2 rounded-nor duration-300">⇝</button>
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
                            className='py-2  px-2'
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

                            // onSlideChange={() => console.log('slide change')}
                            // onSwiper={(swiper) => console.log(swiper)}
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