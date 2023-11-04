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
         
          <li className='bg-white rounded-lg pt-2'>
            <div className='relative'>


              {/* <Link to={`/ranshedata/${ranshedata.id}`}> */}
              <img  className='mx-auto h-[177px]' src={data.cardimgr1} alt="Card img" />

              {/* </Link> */}

            </div>
            <div className='p-2 space-y-2'>

              <div className='flex justify-between items-center mb-7'>
                <h3 className='font-bold text-lg text-qorag'>{data.price}</h3>
              </div>


              <p className='text-lg  font-medium text-qorag'>
                {data.ptitle}
              </p>

              {/* **************************** */}

              {/* ****************** */}

            </div>
          </li>

          <li className='bg-white rounded-lg pt-2'>
            <div className='relative'>


              {/* <Link to={`/ranshedata/${ranshedata.id}`}> */}
              <img className='mx-auto h-[177px]' src={data.cardimgr2} alt="Card img" />

              {/* </Link> */}

            </div>
            <div className='p-2 space-y-2'>

              <div className='flex justify-between items-center mb-7'>
                <h3 className='font-bold text-lg text-qorag'>{data.price}</h3>
              </div>


              <p className='text-lg  font-medium text-qorag'>
                {data.ptitle}
              </p>

              {/* **************************** */}

              {/* ****************** */}

            </div>
          </li>

          <li className='bg-white rounded-lg pt-2'>
            <div className='relative'>


              {/* <Link to={`/ranshedata/${ranshedata.id}`}> */}
              <img className='mx-auto h-[177px]' src={data.cardimgr3} alt="Card img" />

              {/* </Link> */}

            </div>
            <div className='p-2 space-y-2'>

              <div className='flex justify-between items-center mb-7'>
                <h3 className='font-bold text-lg text-qorag'>{data.price}</h3>
              </div>


              <p className='text-lg  font-medium text-qorag'>
                {data.ptitle}
              </p>

              {/* **************************** */}

              {/* ****************** */}

            </div>
          </li>

          <li className='bg-white rounded-lg pt-2'>
            <div className='relative'>


              {/* <Link to={`/ranshedata/${ranshedata.id}`}> */}
              <img className='mx-auto h-[177px]' src={data.cardimgr4} alt="Card img" />

              {/* </Link> */}

            </div>
            <div className='p-2 space-y-2'>

              <div className='flex justify-between items-center mb-7'>
                <h3 className='font-bold text-lg text-qorag'>{data.price}</h3>
              </div>


              <p className='text-lg  font-medium text-qorag'>
                {data.ptitle}
              </p>

              {/* **************************** */}

              {/* ****************** */}

            </div>
          </li>

          <li className='bg-white rounded-lg pt-2'>
            <div className='relative'>


              {/* <Link to={`/ranshedata/${ranshedata.id}`}> */}
              <img className='mx-auto h-[177px]' src={data.cardimgr5} alt="Card img" />

              {/* </Link> */}

            </div>
            <div className='p-2 space-y-2'>

              <div className='flex justify-between items-center mb-7'>
                <h3 className='font-bold text-lg text-qorag'>{data.price}</h3>
              </div>


              <p className='text-lg  font-medium text-qorag'>
                {data.ptitle}
              </p>

              {/* **************************** */}

              {/* ****************** */}

            </div>
          </li>

          <li className='bg-white rounded-lg pt-2'>
            <div className='relative'>


              {/* <Link to={`/ranshedata/${ranshedata.id}`}> */}
              <img className='mx-auto h-[177px]' src={data.cardimgr6} alt="Card img" />

              {/* </Link> */}

            </div>
            <div className='p-2 space-y-2'>

              <div className='flex justify-between items-center mb-7'>
                <h3 className='font-bold text-lg text-qorag'>{data.price}</h3>
              </div>


              <p className='text-lg  font-medium text-qorag'>
                {data.ptitle}
              </p>

              {/* **************************** */}

              {/* ****************** */}

            </div>
          </li>

           <li className='bg-white rounded-lg pt-2'>
            <div className='relative'>


              {/* <Link to={`/ranshedata/${ranshedata.id}`}> */}
              <img className='mx-auto h-[177px]' src={data.cardimgr7} alt="Card img" />

              {/* </Link> */}

            </div>
            <div className='p-2 space-y-2'>

              <div className='flex justify-between items-center mb-7'>
                <h3 className='font-bold text-lg text-qorag'>{data.price}</h3>
              </div>


              <p className='text-lg  font-medium text-qorag'>
                {data.ptitle}
              </p>

              {/* **************************** */}

              {/* ****************** */}

            </div>
          </li>

          <li className='bg-white rounded-lg pt-2'>
            <div className='relative'>


              {/* <Link to={`/ranshedata/${ranshedata.id}`}> */}
              <img className='mx-auto h-[177px]' src={data.cardimgr8} alt="Card img" />

              {/* </Link> */}

            </div>
            <div className='p-2 space-y-2'>

              <div className='flex justify-between items-center mb-7'>
                <h3 className='font-bold text-lg text-qorag'>{data.price}</h3>
              </div>


              <p className='text-lg  font-medium text-qorag'>
                {data.ptitle}
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