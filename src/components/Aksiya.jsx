import React from 'react'
import CardImg1 from "../../public/assets/card-img1.png";
import Heart from "../../public/assets/heart.png";
import Milk from "../../public/assets/milk.png";
import Kolbasa from "../../public/assets/kolbasa.png";
import PaketKolbasa from "../../public/assets/kolbasapaket.png";
import Sosiska from "../../public/assets/sosiska.png";




const Aksiya = () => {
    return (
        <section className='pt-20 pb-14'>
            <div className="container">

                {/* title */}
                <div className='flex justify-between mb-10'>
                    <h2 className='text-4xl  font-bold text-qorag'>Акции</h2>
                    <button className='p-2'>
                        Все акции
                        <span className='ml-5'>≽</span>
                    </button>
                </div>

                {/* Card wrapper */}
                <div className='grid grid-cols-4 gap-10'>

                    {/* Card 1 */}
                    <div className='bg-white shadow-md relative'>
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
                    </div>

                    {/* Card 2 */}
                    <div className='bg-white shadow-md'>
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
                    </div>

                    {/* Card 3 */}
                    <div className='bg-white shadow-md'>
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
                    </div>

                    {/* Card 4 */}
                    <div className='bg-white shadow-md'>
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
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Aksiya