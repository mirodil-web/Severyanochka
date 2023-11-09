import React, { useRef,useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { acsiyadata } from '../store/data';
import Setlike from './Setlike';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Aksiya = ({ addLike, cardLike, removeLike, addKorzina}) => {
    const [badge, setBadge] = useState();
    const like = (acsiyaId) => {
        
        if (badge === acsiyaId) {
            setBadge(null); // Agar shu aksiya nomidan like olib tashlansa, uni bekor qilamiz
        } else {
            setBadge(acsiyaId); // Aksiya nomidan like olib tashlansa, uni qo'shamiz
        }
    };

    useEffect(() => {
        const stylesheet = document.styleSheets[0];
        stylesheet.insertRule(".swiper-pagination-bullet-active { background: #000 !important;}", 0);
    }, []);

    

    return (
        <section className='pt-20 pb-14 bg-[#FBF8EC]'>
            <div className="container">
                {/* title */}
                <div className='flex justify-between items-center mb-10'>
                    <h2 className='md:text-4xl text-2xl  font-bold text-qorag'>Акции  </h2>
                    
                    {/* <div class="bloc">
                        <div class="swiper-button-next">→</div>
                        <div class="swiper-button-prev swiper-button-disabled">←</div>
                    </div> */}
                </div>
                
                <Swiper
                    // pagination={{
                    //     type: 'progressbar',
                    // }}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation={
                        true
                    }
                    scrollbar={{ draggable: true }}
                    className='py-2 px-2  grid grid-cols-4 mySwiper'
                    slidesPerView={1}
                    spaceBetween={40}
                    autoplay={{
                        delay: 2500,
                        // disableOnInteraction: false,
                        
                    }}
                    loop={true}
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
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                >
                    {acsiyadata.map((acsiyadata) => (
                        <div>
                        <SwiperSlide key={acsiyadata.id} className='bg-white shadow-md relative rounded-nor block w-full h-full '>
                            <Setlike acsiyadata={acsiyadata} addKorzina={addKorzina} addLike={addLike} removeLike={removeLike} like={badge === acsiyadata.id} />
                            </SwiperSlide>
                            
                            <div className="swiper-button-next">Next</div>
                            <div className="swiper-button-prev">Prev</div>

                        </div>
                        
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Aksiya;
