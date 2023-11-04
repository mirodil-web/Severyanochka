import React, { useState } from 'react'
import { acsiyadata } from '../store/data'
import Heart from '../../public/assets/heart.png'
import { Link } from 'react-router-dom'
import { Breadcrumbs } from '@material-tailwind/react'

const Vseaksi = () => {
    const [like, setLike] = useState(false);

    const toggleLike = (id) => {
        const [like, setLike] = useState(false);
        setLike(!like);
        // "like" o'zgaruvchisini o'zgartirish
        if (!like) {
            addLike(id)
        }
        else {
            removeLike(id)
        }
    };

    return (
        <div className='bg-[#f9f4e2] pb-14'>
            <div className="container ">

                <Breadcrumbs className='space-x-4 py-6'>
                    <Link className='mr-4 text-xs hover:text-yellow-600' to='/'>
                        Главная
                    </Link>

                    <span className=' text-xs ' >
                        Все покупки
                    </span>
                </Breadcrumbs>

                <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>

                    {
                        acsiyadata.map((acsiyadata) => {
                            return (
                                <li key={acsiyadata.id} className='shadow-lg bg-white rounded-nor'>
                                    <div className='p-2 relative rounded-nor'>

                                        <button onClick={() => toggleLike(acsiyadata.id)} className={`duration-500 shadow-lg absolute right-2 p-2 ${like ? 'bg-red-400 p-2' : 'bg-slate-200/50'} rounded-full`}>
                                            <img width={22} className='rounded-lg' height={22} src={Heart} alt="Heart icon" />
                                        </button>

                                        <Link to={`/carddata/${acsiyadata.id}`}>
                                            <img width={272} height={160} className='mx-auto h-[177px]' src={acsiyadata.img} alt="Card img" />
                                        </Link>
                                        <span className='bg-olov rounded-nor p-1 absolute bottom-2 text-white'>
                                            - 50%
                                        </span>
                                    </div>
                                    <div className='p-2 space-y-2'>
                                        <div>
                                            <div className='flex justify-between items-center'>
                                                <h3 className='font-bold text-lg text-qorag'>44,50 ₽</h3>
                                                <h4 className='text-base font-normal text-blue-950'>50,50 ₽</h4>
                                            </div>
                                            <div className='flex justify-between items-center'>
                                                <span className='text-xs text-gray-400 font-normal'>С картой</span>
                                                <span className='text-xs text-gray-400 font-normal'>Обычная</span>
                                            </div>
                                        </div>
                                        <p className='text-base font-normal text-qorag'>
                                            {acsiyadata.name}
                                        </p>
                                        <button className='p-2 border border-Yashil rounded-nor text-Yashil w-full'>{acsiyadata.button}</button>
                                    </div>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        </div>
    )
}

export default Vseaksi