import React from 'react'
import odam from '../../public/assets/people.png'
import bahor from '../../public/assets/bahor.png'
import food from '../../public/assets/food.png'


const Ctati = () => {

    return (
        <section className='py-14 '>
            <div className="container">

                {/* title */}
                <div className='flex justify-between mb-10'>
                    <h2 className='text-4xl  font-bold text-qorag'>Статьи</h2>
                    <button className='p-2'>
                        Все cтатьи
                        <span className='ml-5'>≽</span>
                    </button>
                </div>

                <ul className='grid grid-cols-3 gap-10'>
                    <li className='shadow-2xl shadow-pinkx/90 rounded-nor'>
                        <img className='w-full rounded-nor' src={odam} alt="Inson" />
                        <div className='p-2.5'>
                            <span className='text-xs font-normal text-[#8f8f8f]'>05.03.2021</span>
                            <h3 className='font-bold text-lg mb-2.5'>Режим использования масок и перчаток на территории магазинов</h3>
                            <p className='font-normal max-h-[120px] h-full  text-[#414141] mb-2.5'>Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.</p>
                            <button className='p-2 text-[#70C05B] rounded-nor bg-[#e5e5e5] hover:bg-Yashil hover:text-white duration-500'>Подробнее</button>
                        </div>
                    </li>

                    <li className='shadow-2xl shadow-pinkx/90 rounded-nor '>
                        <img className='w-full rounded-nor' src={bahor} alt="Inson" />
                        <div className='p-2.5'>
                            <span className='text-xs font-normal text-[#8f8f8f]'>05.03.2021</span>
                            <h3 className='font-bold text-lg mb-2.5'>Весеннее настроение для каждой</h3>
                            <p className='font-normal  h-[120px]  text-[#414141] mb-2.5'>8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий.</p>
                            <div className='flex items-end'>
                                <button className='p-2 text-[#70C05B] rounded-nor bg-[#e5e5e5] hover:bg-Yashil hover:text-white duration-500'>Подробнее</button>

                            </div>
                        </div>
                    </li>

                    <li className='shadow-2xl shadow-pinkx/90 rounded-nor'>
                        <img className='w-full rounded-nor' src={food} alt="Inson" />
                        <div className='p-2.5'>
                            <span className='text-xs font-normal text-[#8f8f8f]'>22.02.2020</span>
                            <h3 className='font-bold text-lg mb-2.5'>ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!</h3>
                            <div className=' h-120'>
                                <p className='font-normal text-[#414141] mb-2.5 h-[96x]'>Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле! кешбэк 10% баллами в апреле!</p>

                            </div>
                            <button className='p-2 text-[#70C05B] rounded-nor bg-[#e5e5e5] hover:bg-Yashil hover:text-white duration-500'>Подробнее</button>
                        </div>
                    </li>
                </ul>

            </div>
        </section>
    )
}

export default Ctati