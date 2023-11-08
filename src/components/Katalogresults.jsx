import React, { useEffect, useState } from 'react'
import { katalogdata } from '../store/data'
import { Link, useParams } from 'react-router-dom'
import { Breadcrumbs } from '@material-tailwind/react'
import Heart from '../../public/assets/heart.png';


const Katalogresults = ({ addKorzina5, removeLike5, addLike5 }) => {

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


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


        <ul className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5 '>

          <li className='bg-white rounded-lg p-1.5'>
            <div className='relative'>


              {/* <Link to={`/ranshedata/${ranshedata.id}`}> */}
              <img className='mx-auto h-[177px]' src={data.cardimgr1} alt="Card img" />

              {/* </Link> */}

            </div>
            <div className='p-2 space-y-2'>

              <div className='flex justify-between items-center mb-3'>
                <h3 className='font-bold text-lg text-qorag'>{data.price1} ₽</h3>
              </div>


              <p className='text-lg  font-medium text-qorag'>
                {data.ptitle1}
              </p>

              {/* **************************** */}

              {/* ****************** */}

            </div>
          </li>

          <li className='bg-white rounded-lg p-1.5'>
            <div className='relative'>


              {/* <Link to={`/ranshedata/${ranshedata.id}`}> */}
              <img className='mx-auto h-[177px]' src={data.cardimgr2} alt="Card img" />

              {/* </Link> */}

            </div>
            <div className='p-2 space-y-2'>

              <div className='flex justify-between items-center mb-3'>
                <h3 className='font-bold text-lg text-qorag'>{data.price2} ₽</h3>
              </div>


              <p className='text-lg  font-medium text-qorag'>
                {data.ptitle2}
              </p>

              {/* **************************** */}

              {/* ****************** */}

            </div>
          </li>

          <li className='bg-white rounded-lg p-1.5'>
            <div className='relative'>


              {/* <Link to={`/ranshedata/${ranshedata.id}`}> */}
              <img className='mx-auto h-[177px]' src={data.cardimgr3} alt="Card img" />

              {/* </Link> */}

            </div>
            <div className='p-2 space-y-2'>

              <div className='flex justify-between items-center mb-3'>
                <h3 className='font-bold text-lg text-qorag'>{data.price3} ₽</h3>
              </div>


              <p className='text-lg  font-medium text-qorag'>
                {data.ptitle3}
              </p>

              {/* **************************** */}

              {/* ****************** */}

            </div>
          </li>

          <li className='bg-white rounded-lg p-1.5'>
            <div className='relative'>


              {/* <Link to={`/ranshedata/${ranshedata.id}`}> */}
              <img className='mx-auto h-[177px]' src={data.cardimgr4} alt="Card img" />

              {/* </Link> */}

            </div>
            <div className='p-2 space-y-2'>

              <div className='flex justify-between items-center mb-3'>
                <h3 className='font-bold text-lg text-qorag'>{data.price4} ₽</h3>
              </div>


              <p className='text-lg  font-medium text-qorag'>
                {data.ptitle4}
              </p>

              {/* **************************** */}

              {/* ****************** */}

            </div>
          </li>

          <li className='bg-white rounded-lg p-1.5'>
            <div className='relative'>


              {/* <Link to={`/ranshedata/${ranshedata.id}`}> */}
              <img className='mx-auto h-[177px]' src={data.cardimgr5} alt="Card img" />

              {/* </Link> */}

            </div>
            <div className='p-2 space-y-2'>

              <div className='flex justify-between items-center mb-3'>
                <h3 className='font-bold text-lg text-qorag'>{data.price5} ₽</h3>
              </div>


              <p className='text-lg  font-medium text-qorag'>
                {data.ptitle5}
              </p>

              {/* **************************** */}

              {/* ****************** */}

            </div>
          </li>

          <li className='bg-white rounded-lg p-1.5'>
            <div className='relative'>


              {/* <Link to={`/ranshedata/${ranshedata.id}`}> */}
              <img className='mx-auto h-[177px]' src={data.cardimgr6} alt="Card img" />

              {/* </Link> */}

            </div>
            <div className='p-2 space-y-2'>

              <div className='flex justify-between items-center mb-3'>
                <h3 className='font-bold text-lg text-qorag'>{data.price6} ₽</h3>
              </div>


              <p className='text-lg  font-medium text-qorag'>
                {data.ptitle6}
              </p>

              {/* **************************** */}

              {/* ****************** */}

            </div>
          </li>

          <li className='bg-white rounded-lg p-1.5'>
            <div className='relative'>


              {/* <Link to={`/ranshedata/${ranshedata.id}`}> */}
              <img className='mx-auto h-[177px]' src={data.cardimgr7} alt="Card img" />

              {/* </Link> */}

            </div>
            <div className='p-2 space-y-2'>

              <div className='flex justify-between items-center mb-3'>
                <h3 className='font-bold text-lg text-qorag'>{data.price7} ₽</h3>
              </div>


              <p className='text-lg  font-medium text-qorag'>
                {data.ptitle7}
              </p>

              {/* **************************** */}

              {/* ****************** */}

            </div>
          </li>

          <li className='bg-white rounded-lg p-1.5'>
            <div className='relative'>


              {/* <Link to={`/ranshedata/${ranshedata.id}`}> */}
              <img className='mx-auto h-[177px]' src={data.cardimgr8} alt="Card img" />

              {/* </Link> */}

            </div>
            <div className='p-2 space-y-2'>

              <div className='flex justify-between items-center mb-3'>
                <h3 className='font-bold text-lg text-qorag'>{data.price8} ₽</h3>
              </div>


              <p className='text-lg  font-medium text-qorag'>
                {data.ptitle8}
              </p>

              {/* **************************** */}

              {/* ****************** */}

            </div>
          </li>


        </ul>

      </div>
    </div>
  )
}

export default Katalogresults