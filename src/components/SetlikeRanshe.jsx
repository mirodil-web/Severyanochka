import React, { useState } from 'react'
import Heart from '../../public/assets/heart.png';
import { Link } from 'react-router-dom';

const SetlikeRanshe = ({ addLike3, removeLike3, addKorzina3, ranshedata }) => {
    const [like, setLike] = useState(false);

    const toggleLike = (id) => {
        setLike(!like);
        // "like" o'zgaruvchisini o'zgartirish
        if (!like) {
            addLike3(id)
        }
        else {
            removeLike3(id)
        }
    };


  return (
      <div>
          <div className='relative'>
              <button onClick={() => toggleLike(ranshedata.id)} className={`shadow-lg absolute rounded-full right-2 p-2 ${like ? 'bg-red-400' : 'bg-slate-200/50'}
                                 rounded-full duration-500`}>
                  <img width={22} className=' rounded-lg ' height={22} src={Heart} alt="Heart icon" />
              </button>

              <Link to={`/ranshedata/${ranshedata.id}`}>
                  <img width={272} height={160} className='mx-auto h-[177px]' src={ranshedata.img} alt="Card img" />

              </Link>

          </div>
          <div className='p-2 space-y-2'>

              <div className='flex justify-between items-center mb-7'>
                  <h3 className='font-bold text-lg text-qorag'>{ranshedata.price} ₽</h3>
              </div>


              <p className='text-base  font-normal text-qorag'>
                  {ranshedata.name}
              </p>

              {/* **************************** */}

              {/* ****************** */}

              <button onClick={() => addKorzina3(ranshedata.id)} className='p-2 border hover:bg-olov hover:text-white hover:border-none transition-delay-500 border-Yashil rounded-nor text-Yashil w-full'>В корзину</button>

          </div>
    </div>
  )
}

export default SetlikeRanshe