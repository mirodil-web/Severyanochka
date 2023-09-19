import React from 'react'
import CardImg1 from "../../public/assets/card-img1.png";
import Heart from "../../public/assets/heart.png";
import Milk from "../../public/assets/milk.png";
import Kolbasa from "../../public/assets/kolbasa.png";
import PaketKolbasa from "../../public/assets/kolbasapaket.png";
import Sosiska from "../../public/assets/sosiska.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';



import 'swiper/css';




const Aksiya = () => {
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

                    {/* Card 1 */}
                    <SwiperSlide className='bg-white shadow-md relative'>
                        <div className='p-2 relative'>
                            <button className='absolute right-2 bg-slate-200/50 p-2
                             rounded-nor'>
                                <img width={22} height={22} src={Heart} alt="Heart icon" />
                            </button>
                            <img width={272} height={160} className='mx-auto' src={CardImg1} alt="Card img" />
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
                                Г/Ц Блинчики с мясом вес, <br /> Россия
                            </p>

                            {/* **************************** */}

                            {/* ****************** */}

                            <button className='p-2 border border-Yashil rounded-nor text-Yashil w-full'>В корзину</button>

                        </div>
                    </SwiperSlide>

                    {/* Card 2 */}
                    <SwiperSlide className='bg-white shadow-md'>
                        <div className='p-2 relative'>
                            <button className='absolute right-2 bg-slate-200/50 p-2
                             rounded-nor'>
                                <img width={22} height={22} src={Heart} alt="Heart icon" />
                            </button>
                            <img width={272} height={160} className='mx-auto' src={Milk} alt="Card img" />
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
                                Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...
                            </p>

                            {/* **************************** */}

                            {/* ****************** */}

                            <button className='p-2 border border-Yashil rounded-nor text-Yashil w-full'>В корзину</button>

                        </div>
                    </SwiperSlide>

                    {/* Card 3 */}
                    <SwiperSlide className='bg-white shadow-md'>
                        <div className='p-2 relative'>
                            <button className='absolute right-2 bg-slate-200/50 p-2
                             rounded-nor'>
                                <img width={22} height={22} src={Heart} alt="Heart icon" />
                            </button>
                            <img width={272} height={160} className='mx-auto' src={PaketKolbasa} alt="Card img" />
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
                                Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...
                            </p>

                            {/* **************************** */}

                            {/* ****************** */}

                            <button className='p-2 border border-Yashil rounded-nor text-Yashil w-full'>В корзину</button>

                        </div>
                    </SwiperSlide>

                    {/* Card 4 */}
                    <SwiperSlide className='bg-white shadow-md'>
                        <div className='p-2 relative'>
                            <button className='absolute right-2 bg-slate-200/50 p-2
                             rounded-nor'>
                                <img width={22} height={22} src={Heart} alt="Heart icon" />
                            </button>
                            <img width={272} height={160} className='mx-auto' src={Sosiska} alt="Card img" />
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
                                Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...
                            </p>

                            {/* **************************** */}

                            {/* ****************** */}

                            <button className='p-2 border border-Yashil rounded-nor text-Yashil w-full'>В корзину</button>

                        </div>
                    </SwiperSlide>

                    {/* Card 1 */}
                    <SwiperSlide className='bg-white shadow-md relative'>
                        <div className='p-2 relative'>
                            <button className='absolute right-2 bg-slate-200/50 p-2
                             rounded-nor'>
                                <img width={22} height={22} src={Heart} alt="Heart icon" />
                            </button>
                            <img width={272} height={160} className='mx-auto' src={CardImg1} alt="Card img" />
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
                                Г/Ц Блинчики с мясом вес, <br /> Россия
                            </p>

                            {/* **************************** */}

                            {/* ****************** */}

                            <button className='p-2 border border-Yashil rounded-nor text-Yashil w-full'>В корзину</button>

                        </div>
                    </SwiperSlide>

                    {/* Card 2 */}
                    <SwiperSlide className='bg-white shadow-md'>
                        <div className='p-2 relative'>
                            <button className='absolute right-2 bg-slate-200/50 p-2
                             rounded-nor'>
                                <img width={22} height={22} src={Heart} alt="Heart icon" />
                            </button>
                            <img width={272} height={160} className='mx-auto' src={Milk} alt="Card img" />
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
                                Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...
                            </p>

                            {/* **************************** */}

                            {/* ****************** */}

                            <button className='p-2 border border-Yashil rounded-nor text-Yashil w-full'>В корзину</button>

                        </div>
                    </SwiperSlide>

                    {/* Card 3 */}
                    <SwiperSlide className='bg-white shadow-md'>
                        <div className='p-2 relative'>
                            <button className='absolute right-2 bg-slate-200/50 p-2
                             rounded-nor'>
                                <img width={22} height={22} src={Heart} alt="Heart icon" />
                            </button>
                            <img width={272} height={160} className='mx-auto' src={PaketKolbasa} alt="Card img" />
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
                                Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...
                            </p>

                            {/* **************************** */}

                            {/* ****************** */}

                            <button className='p-2 border border-Yashil rounded-nor text-Yashil w-full'>В корзину</button>

                        </div>
                    </SwiperSlide>

                    {/* Card 4 */}
                    <SwiperSlide className='bg-white shadow-md'>
                        <div className='p-2 relative'>
                            <button className='absolute right-2 bg-slate-200/50 p-2
                             rounded-nor'>
                                <img width={22} height={22} src={Heart} alt="Heart icon" />
                            </button>
                            <img width={272} height={160} className='mx-auto' src={Sosiska} alt="Card img" />
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
                                Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...
                            </p>

                            {/* **************************** */}

                            {/* ****************** */}

                            <button className='p-2 border border-Yashil rounded-nor text-Yashil w-full'>В корзину</button>

                        </div>
                    </SwiperSlide>

                </Swiper>

            </div>
        </section>
    )
}

export default Aksiya