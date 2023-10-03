import React, { useState } from 'react';
import Heart from '../../public/assets/heart.png';
import { Link } from 'react-router-dom';

const Setlike = ({ acsiyadata }) => {
    const [like, setLike] = useState(false); // "like" o'zgaruvchisi va uning o'zgarish funksiyasi

    const toggleLike = () => {
        setLike(!like); // "like" o'zgaruvchisini o'zgartirish
    };

    return (
        <div>
            <div className='p-2 relative'>
                <button onClick={toggleLike} className={`duration-500 shadow-lg absolute right-2 p-2 ${like ? 'bg-red-400 p-2' : 'bg-slate-200/50'} rounded-full`}>
                    <img width={22} className='rounded-lg' height={22} src={Heart} alt="Heart icon" />
                </button>
                <Link to={`/carddata/${acsiyadata.id}`}>
                    <img width={272} height={160} className='mx-auto' src={acsiyadata.img} alt="Card img" />
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
        </div>
    );
}

export default Setlike;
