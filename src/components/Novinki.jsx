import React from 'react'
import Heart from '../../public/assets/heart.png'
import Kolbasa from '../../public/assets/kolbasa.png'
import PaketKolbasa from '../../public/assets/kolbasapaket.png'
import Milk from '../../public/assets/milk.png'
import Sosiska from '../../public/assets/sosiska.png'

const Novinki = () => {
    return (
        <section className='py-14'>
            <div className="container">

                {/* title */}
                <div className='flex justify-between mb-10'>
                    <h2 className='text-4xl  font-bold text-qorag'>Новинки</h2>
                    <button className='p-2'>
                        Все новинки
                        <span className='ml-5'>≽</span>
                    </button>
                </div>

                {/* Card wrapper */}
                <div className='grid grid-cols-4 gap-10 '>

                    {/* Card 1 */}
                    <div className='bg-white shadow-xl rounded-nor '>
                        <div className='relative'>
                            <button className='absolute right-2 bg-slate-200/50 p-2
                             rounded-nor'>
                                <img width={22} height={22} src={Heart} alt="Heart icon" />
                            </button>
                            <img width={272} height={160} className='mx-auto' src={Kolbasa} alt="Card img" />
                        </div>
                        <div className='p-2 space-y-2'>

                            <div className='flex justify-between items-center mb-7'>
                                <h3 className='font-bold text-lg text-qorag'>599,99 ₽</h3>
                            </div>


                            <p className='text-base  font-normal text-qorag'>
                                Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»
                            </p>

                            {/* **************************** */}

                            {/* ****************** */}

                            <button className='p-2 border border-Yashil rounded-nor text-Yashil w-full'>В корзину</button>

                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className='bg-white shadow-xl rounded-nor '>
                        <div className='relative'>
                            <button className='absolute right-2 bg-slate-200/50 p-2
                             rounded-nor'>
                                <img width={22} height={22} src={Heart} alt="Heart icon" />
                            </button>
                            <img width={272} height={160} className='mx-auto' src={PaketKolbasa} alt="Card img" />
                        </div>
                        <div className='p-2 space-y-2'>

                            <div className='flex justify-between items-center mb-7'>
                                <h3 className='font-bold text-lg text-qorag'>44,50 ₽</h3>
                            </div>


                            <p className='text-base  font-normal text-qorag'>
                                Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...
                            </p>

                            {/* **************************** */}

                            {/* ****************** */}

                            <button className='p-2 border border-Yashil rounded-nor text-Yashil w-full'>В корзину</button>

                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className='bg-white shadow-xl rounded-nor '>
                        <div className='relative'>
                            <button className='absolute right-2 bg-slate-200/50 p-2
                             rounded-nor'>
                                <img width={22} height={22} src={Heart} alt="Heart icon" />
                            </button>
                            <img width={272} height={160} className='mx-auto' src={Sosiska} alt="Card img" />
                        </div>
                        <div className='p-2 space-y-2'>

                            <div className='flex justify-between items-center mb-7'>
                                <h3 className='font-bold text-lg text-qorag'>159,99 ₽</h3>
                            </div>


                            <p className='text-base  font-normal text-qorag'>
                                Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»
                            </p>

                            {/* **************************** */}

                            {/* ****************** */}

                            <button className='p-2 border border-Yashil rounded-nor text-Yashil w-full'>В корзину</button>

                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className='bg-white shadow-xl rounded-nor '>
                        <div className='relative'>
                            <button className='absolute right-2 bg-slate-200/50 p-2
                             rounded-nor'>
                                <img width={22} height={22} src={Heart} alt="Heart icon" />
                            </button>
                            <img width={272} height={160} className='mx-auto' src={Milk} alt="Card img" />
                        </div>
                        <div className='p-2 space-y-2'>
                            <div className='flex justify-between items-center mb-7'>
                                <h3 className='font-bold text-lg text-qorag'>49,39 ₽</h3>
                            </div>


                            <p className='text-base  font-normal text-qorag'>
                                Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»
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

export default Novinki