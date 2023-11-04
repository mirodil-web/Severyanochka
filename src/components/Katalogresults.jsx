import React, { useState } from 'react'
import { katalogdata } from '../store/data'
import { Link, useParams } from 'react-router-dom'
import { Breadcrumbs } from '@material-tailwind/react'
import Heart from '../../public/assets/heart.png';


const Katalogresults = ({addKorzina5, removeLike5, addLike5}) => {

  const { id } = useParams()

  const data = katalogdata.find(e => e.id === parseInt(id))

  const [like, setLike] = useState(false); // "like" o'zgaruvchisi va uning o'zgarish funksiyasi

  const toggleLike = (id) => {
    setLike(!like);
    // "like" o'zgaruvchisini o'zgartirish
    if (!like) {
      addLike5(id)
    }
    else {
      removeLike5(id)
    }
  };

  console.log(data);

  return (
    <div className='bg-[#f9f4e2] pb-14'>
      <div className="container">

        <Breadcrumbs className='space-x-4 py-6'>
          <Link className='mr-4 text-xs hover:text-yellow-600' to='/'>
            Главная
          </Link>

          <Link className='mr-4 text-xs hover:text-yellow-600' to='/katalog'>
            Каталог

          </Link>

          <span className=' text-xs ' >
            {data.ptitle}
          </span>
        </Breadcrumbs>


        <ul className='grid grid-cols-4 gap-5'>
         
          <li className='bg-white pt-2'>
            <div className='relative'>

              <button onClick={() => toggleLike(data.id)} className={`duration-500 shadow-lg absolute right-2 p-2 ${like ? 'bg-red-400 p-2' : 'bg-slate-200/50'} rounded-full`}>
                <img width={22} className='rounded-lg' height={22} src={Heart} alt="Heart icon" />
              </button>

              {/* <Link to={`/ranshedata/${ranshedata.id}`}> */}
              <img  className='mx-auto w-fuul' src={data.cardimgr1} alt="Card img" />

              {/* </Link> */}

            </div>
            <div className='p-2 space-y-2'>

              <div className='flex justify-between items-center mb-7'>
                <h3 className='font-bold text-lg text-qorag'>{data.price}</h3>
              </div>


              <p className='text-base  font-normal text-qorag'>
                {data.ptitle}
              </p>

              {/* **************************** */}

              {/* ****************** */}

              <button onClick={() => addKorzina5(data.id)} className='p-2 border border-Yashil rounded-nor text-Yashil w-full'>В корзину</button>
            </div>
          </li>

          <li className='bg-white pt-2'>
            <div className='relative'>

              <button onClick={() => toggleLike(data.id)} className={`duration-500 shadow-lg absolute right-2 p-2 ${like ? 'bg-red-400 p-2' : 'bg-slate-200/50'} rounded-full`}>
                <img width={22} className='rounded-lg' height={22} src={Heart} alt="Heart icon" />
              </button>

             
              <img className='mx-auto w-fuul' src={data.cardimgr1} alt="Card img" />
                    
              
              {/* <Link to={`/ranshedata/${ranshedata.id}`}> */}

              {/* </Link> */}

            </div>
            <div className='p-2 space-y-2'>

              <div className='flex justify-between items-center mb-7'>
                <h3 className='font-bold text-lg text-qorag'>{data.price}</h3>
              </div>


              <p className='text-base  font-normal text-qorag'>
                {data.ptitle}
              </p>

              {/* **************************** */}

              {/* ****************** */}

              <button onClick={() => addKorzina5(data.id)} className='p-2 border border-Yashil rounded-nor text-Yashil w-full'>В корзину</button>
            </div>
          </li>

          <li className='bg-white pt-2'>
            <div className='relative'>

              <button onClick={() => toggleLike(data.id)} className={`duration-500 shadow-lg absolute right-2 p-2 ${like ? 'bg-red-400 p-2' : 'bg-slate-200/50'} rounded-full`}>
                <img width={22} className='rounded-lg' height={22} src={Heart} alt="Heart icon" />
              </button>

              {/* <Link to={`/ranshedata/${ranshedata.id}`}> */}
              <img className='mx-auto w-fuul' src={data.cardimgr1} alt="Card img" />

              {/* </Link> */}

            </div>
            <div className='p-2 space-y-2'>

              <div className='flex justify-between items-center mb-7'>
                <h3 className='font-bold text-lg text-qorag'>{data.price}</h3>
              </div>


              <p className='text-base  font-normal text-qorag'>
                {data.ptitle}
              </p>

              {/* **************************** */}

              {/* ****************** */}

              <button onClick={() => addKorzina5(data.id)} className='p-2 border border-Yashil rounded-nor text-Yashil w-full'>В корзину</button>
            </div>
          </li>

          <li className='bg-white pt-2'>
            <div className='relative'>

              <button onClick={() => toggleLike(data.id)} className={`duration-500 shadow-lg absolute right-2 p-2 ${like ? 'bg-red-400 p-2' : 'bg-slate-200/50'} rounded-full`}>
                <img width={22} className='rounded-lg' height={22} src={Heart} alt="Heart icon" />
              </button>

              {/* <Link to={`/ranshedata/${ranshedata.id}`}> */}
              <img className='mx-auto w-fuul' src={data.cardimgr1} alt="Card img" />

              {/* </Link> */}

            </div>
            <div className='p-2 space-y-2'>

              <div className='flex justify-between items-center mb-7'>
                <h3 className='font-bold text-lg text-qorag'>{data.price}</h3>
              </div>


              <p className='text-base  font-normal text-qorag'>
                {data.ptitle}
              </p>

              {/* **************************** */}

              {/* ****************** */}

              <button onClick={() => addKorzina5(data.id)} className='p-2 border border-Yashil rounded-nor text-Yashil w-full'>В корзину</button>
            </div>
          </li>

          <li className='bg-white pt-2'>
            <div className='relative'>

              <button onClick={() => toggleLike(data.id)} className={`duration-500 shadow-lg absolute right-2 p-2 ${like ? 'bg-red-400 p-2' : 'bg-slate-200/50'} rounded-full`}>
                <img width={22} className='rounded-lg' height={22} src={Heart} alt="Heart icon" />
              </button>

              {/* <Link to={`/ranshedata/${ranshedata.id}`}> */}
              <img className='mx-auto w-fuul' src={data.cardimgr1} alt="Card img" />

              {/* </Link> */}

            </div>
            <div className='p-2 space-y-2'>

              <div className='flex justify-between items-center mb-7'>
                <h3 className='font-bold text-lg text-qorag'>{data.price}</h3>
              </div>


              <p className='text-base  font-normal text-qorag'>
                {data.ptitle}
              </p>

              {/* **************************** */}

              {/* ****************** */}

              <button onClick={() => addKorzina5(data.id)} className='p-2 border border-Yashil rounded-nor text-Yashil w-full'>В корзину</button>
            </div>
          </li>

          <li className='bg-white pt-2'>
            <div className='relative'>

              <button onClick={() => toggleLike(data.id)} className={`duration-500 shadow-lg absolute right-2 p-2 ${like ? 'bg-red-400 p-2' : 'bg-slate-200/50'} rounded-full`}>
                <img width={22} className='rounded-lg' height={22} src={Heart} alt="Heart icon" />
              </button>

              {/* <Link to={`/ranshedata/${ranshedata.id}`}> */}
              <img className='mx-auto w-fuul' src={data.cardimgr1} alt="Card img" />

              {/* </Link> */}

            </div>
            <div className='p-2 space-y-2'>

              <div className='flex justify-between items-center mb-7'>
                <h3 className='font-bold text-lg text-qorag'>{data.price}</h3>
              </div>


              <p className='text-base  font-normal text-qorag'>
                {data.ptitle}
              </p>

              {/* **************************** */}

              {/* ****************** */}

              <button onClick={() => addKorzina5(data.id)} className='p-2 border border-Yashil rounded-nor text-Yashil w-full'>В корзину</button>
            </div>
          </li>

          <li className='bg-white pt-2'>
            <div className='relative'>

              <button onClick={() => toggleLike(data.id)} className={`duration-500 shadow-lg absolute right-2 p-2 ${like ? 'bg-red-400 p-2' : 'bg-slate-200/50'} rounded-full`}>
                <img width={22} className='rounded-lg' height={22} src={Heart} alt="Heart icon" />
              </button>

              {/* <Link to={`/ranshedata/${ranshedata.id}`}> */}
              <img className='mx-auto w-fuul' src={data.cardimgr1} alt="Card img" />

              {/* </Link> */}

            </div>
            <div className='p-2 space-y-2'>

              <div className='flex justify-between items-center mb-7'>
                <h3 className='font-bold text-lg text-qorag'>{data.price}</h3>
              </div>


              <p className='text-base  font-normal text-qorag'>
                {data.ptitle}
              </p>

              {/* **************************** */}

              {/* ****************** */}

              <button onClick={() => addKorzina5(data.id)} className='p-2 border border-Yashil rounded-nor text-Yashil w-full'>В корзину</button>
            </div>
          </li>

          <li className='bg-white pt-2'>
            <div className='relative'>

              <button onClick={() => toggleLike(data.id)} className={`duration-500 shadow-lg absolute right-2 p-2 ${like ? 'bg-red-400 p-2' : 'bg-slate-200/50'} rounded-full`}>
                <img width={22} className='rounded-lg' height={22} src={Heart} alt="Heart icon" />
              </button>

              {/* <Link to={`/ranshedata/${ranshedata.id}`}> */}
              <img className='mx-auto w-fuul' src={data.cardimgr1} alt="Card img" />

              {/* </Link> */}

            </div>
            <div className='p-2 space-y-2'>

              <div className='flex justify-between items-center mb-7'>
                <h3 className='font-bold text-lg text-qorag'>{data.price}</h3>
              </div>


              <p className='text-base  font-normal text-qorag'>
                {data.ptitle}
              </p>

              {/* **************************** */}

              {/* ****************** */}

              <button onClick={() => addKorzina5(data.id)} className='p-2 border border-Yashil rounded-nor text-Yashil w-full'>В корзину</button>
            </div>
          </li>

        </ul>

      </div>
    </div>
  )
}

export default Katalogresults