import {useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { acsiyadata } from '../store/data';
import Setlike from './Setlike';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Aksiya = ({removeLike, addLike, addKorzina}) => {
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

    const [custom_swiper, set_swiper] = useState({});
    const nextSlide = () => {
        custom_swiper.slideNext();
    };
    const prevSlide = () => {
        custom_swiper.slidePrev();
    };
console.log(like);
    

    return (
        <section className='pt-20 pb-14 bg-[#FBF8EC]'>
            <div className="container">
                {/* title */}
                <div className='flex justify-between items-center mb-10'>
                    <h2 className='md:text-4xl text-2xl  font-bold text-qorag'>Акции  </h2>
                    
                    <div className="flex space-x-2 items-center rounded-nor text-2xl ">
                        <button onClick={prevSlide} className="hover:bg-Yashil hover:text-white py-0 px-2  rounded-nor duration-300">⇠</button>
                        <button onClick={nextSlide} className="hover:bg-Yashil hover:text-white py-0 px-2 rounded-nor duration-300">⇢</button>
                    </div>
                </div>
                
                <Swiper
                    // pagination={{
                    //     type: 'progressbar',
                    // }}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation={
                        true
                    }
                    className='py-2 px-2  grid grid-cols-4 mySwiper'
                    slidesPerView={1}
                    spaceBetween={40}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
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
                    onInit={(ev) => {
                        set_swiper(ev);
                    }}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                >
                    {acsiyadata.map((acsiyadata) => (
                        <div key={acsiyadata.id}>
                        <SwiperSlide  className='bg-white shadow-md relative rounded-nor block w-full h-full '>
                            <Setlike acsiyadata={acsiyadata} addKorzina={addKorzina} addLike={addLike} removeLike={removeLike} like={badge === acsiyadata.id} />
                            </SwiperSlide>
                        </div>
                        
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Aksiya;
