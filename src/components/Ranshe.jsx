import React, { useState } from 'react'
import Heart from '../../public/assets/heart.png'
import PaketKolbasa2 from '../../public/assets/kolbasapaket2.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { ranshedata } from '../store/data'


const Ranshe = () => {

    const [like, setLike] = useState(false)
    const [cardLike, setCardLike] = useState([])

    const addLike = (i) => {
        const found = cardLike.find((e) => e.id === i)
    };

    const removeLike = (i) => {
        const updatedShop = cardLike.filter((e) => e.id !== i);
        setCardLike(updatedShop);

    }
        ;


    const qoshish = (e) => {
        setLike(!like)
        if (!like) {
            addLike(e)
        }
        else {
            removeLike(e)
        }
    }



    return (
        <div>
            <section className='py-14'>
                <div className="container">

                    {/* title */}
                    <div className='flex justify-between mb-10'>
                        <h2 className='text-4xl  font-bold text-qorag'>Покупали раньше</h2>
                        <button className='p-2'>
                            Все покупки
                            <span className='ml-5'>≽</span>
                        </button>
                    </div>

                    {/* Card wrapper */}
                    <Swiper className=' py-10'
                        spaceBetween={40}
                        slidesPerView={4}
                        autoplay={{
                            "delay": 500,
                            "disableOnInteraction": false
                        }}
                        loop={true}

                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >

                        {ranshedata.map((ranshedata) => {
                            return (
                                <SwiperSlide key={ranshedata.id} className='bg-white shadow-md rounded-nor '>
                                    <div className='relative'>
                                        <button onClick={() => qoshish(ranshedata.id)} className={`shadow-lg absolute right-2 p-2 ${like ? 'bg-red-500' : 'bg-slate-200/50'}
                                 rounded-full duration-500`}>
                                            <img width={22} className='  p-0.5' height={22} src={Heart} alt="Heart icon" />
                                        </button>
                                        <img width={272} height={160} className='mx-auto' src={ranshedata.img} alt="Card img" />
                                    </div>
                                    <div className='p-2 space-y-2'>

                                        <div className='flex justify-between items-center mb-7'>
                                            <h3 className='font-bold text-lg text-qorag'>{ ranshedata.price}</h3>
                                        </div>


                                        <p className='text-base  font-normal text-qorag'>
                                            {ranshedata.name}
                                        </p>

                                        {/* **************************** */}

                                        {/* ****************** */}

                                        <button className='p-2 border border-Yashil rounded-nor text-Yashil w-full'>В корзину</button>

                                    </div>
                                </SwiperSlide>
                            )
                        })}

                    </Swiper>

                </div>
            </section>
        </div>
    )
}

export default Ranshe