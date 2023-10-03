import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { acsiyadata } from '../store/data'
import { Breadcrumbs } from '@material-tailwind/react'
import Korzina from '../../public/assets/shopping-cart.png'
import Heart from '../../public/assets/heart.png'


const Carddata = () => {

  const { id } = useParams()

  const data = acsiyadata.find(e => e.id === parseInt(id))

  console.log(data);

  return (
    <div className='bg-[#FBF8EC]'>
      <div className="container">

        <Breadcrumbs className='space-x-4 py-6'>
          <Link className='mr-4 text-xs hover:text-yellow-600' to='/'>
            Главная
          </Link>

          <Link to='/katalog' className='mr-4 text-xs ' >
            Каталог
          </Link>

          <span className='mr-4 text-xs ' >
            {data.name}
          </span>


        </Breadcrumbs>

        <h2 className='text-2xl font-bold mb-4'>{data.name}</h2>

        <div className='mb-4 flex items-center'>
          <span className='text-xs text-qorag mr-6'>арт. 371431</span>

          <span className='underline text-sm text-qorag  mr-6'>3 отзыва</span>

          <button className='flex items-center mr-6 text-xs text-[#606060] p-2'>
            <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 5C14.5 3.067 16.067 1.5 18 1.5C19.933 1.5 21.5 3.067 21.5 5C21.5 6.933 19.933 8.5 18 8.5C16.067 8.5 14.5 6.933 14.5 5ZM18 2.5C16.6193 2.5 15.5 3.61929 15.5 5C15.5 6.38071 16.6193 7.5 18 7.5C19.3807 7.5 20.5 6.38071 20.5 5C20.5 3.61929 19.3807 2.5 18 2.5Z" fill="#414141" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 12C2.5 10.067 4.067 8.5 6 8.5C7.933 8.5 9.5 10.067 9.5 12C9.5 13.933 7.933 15.5 6 15.5C4.067 15.5 2.5 13.933 2.5 12ZM6 9.5C4.61929 9.5 3.5 10.6193 3.5 12C3.5 13.3807 4.61929 14.5 6 14.5C7.38071 14.5 8.5 13.3807 8.5 12C8.5 10.6193 7.38071 9.5 6 9.5Z" fill="#414141" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 19C14.5 17.067 16.067 15.5 18 15.5C19.933 15.5 21.5 17.067 21.5 19C21.5 20.933 19.933 22.5 18 22.5C16.067 22.5 14.5 20.933 14.5 19ZM18 16.5C16.6193 16.5 15.5 17.6193 15.5 19C15.5 20.3807 16.6193 21.5 18 21.5C19.3807 21.5 20.5 20.3807 20.5 19C20.5 17.6193 19.3807 16.5 18 16.5Z" fill="#414141" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.15792 13.2583C8.29695 13.0197 8.60307 12.939 8.84166 13.078L15.6717 17.058C15.9103 17.197 15.991 17.5031 15.8519 17.7417C15.7129 17.9803 15.4068 18.061 15.1682 17.922L8.33819 13.942C8.0996 13.803 8.01889 13.4969 8.15792 13.2583Z" fill="#414141" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8418 6.25799C15.981 6.49649 15.9004 6.80266 15.6619 6.94184L8.84194 10.9218C8.60344 11.061 8.29727 10.9805 8.15808 10.742C8.0189 10.5035 8.09941 10.1973 8.33791 10.0582L15.1579 6.07816C15.3964 5.93897 15.7026 6.01948 15.8418 6.25799Z" fill="#414141" />
            </svg>
            Поделиться
          </button>

          <button className='flex items-center text-xs text-[#606060] p-2'>
            <img className='mr-2' src={Heart} width={20} height={20} alt="heart img" />
            В избраное
          </button>
        </div>

        <div className='flex justify-between pb-14'>

          <ul className='mr-4 space-y-4'>
            <li className='rounded-nor shadow-md py-4 bg-white px-2' >
              <img src={data.img} width={86} height={64} alt="Img" />
            </li>
            <li className='rounded-nor shadow-md py-4 bg-white px-2'>
              <img src={data.img} width={86} height={64} alt="Img" />
            </li>
            <li className='rounded-nor shadow-md py-4 bg-white px-2'>
              <img src={data.img} width={86} height={64} alt="Img" />
            </li>
            <li className='rounded-nor shadow-md py-4 bg-white px-2'>
              <img src={data.img} width={86} height={64} alt="Img" />
            </li>
            <li className='rounded-nor shadow-md py-4 bg-white px-2'>
              <img src={data.img} width={86} height={64} alt="Img" />
            </li>
          </ul>

          <div className='mr-10 bg-white rounded-nor pt-10 px-10 flex flex-col  shadow-md'>
            <div className='flex justify-end'>
              <span className='bg-olov text-right rounded-nor px-2 py-1 mb-10 text-white text-base'>{data.chegirma}</span>

            </div>
            <img src={data.img} width={504} height={496} alt="img" />
          </div>

          <div className='max-w-[476px] w-full'>
            <div className='flex justify-between'>
              <div>
                <h3 className='text-2xl font-normal mb-1.5'>{data.price}</h3>
                <span className='text-xs font-normal text-gray-400'>Обычная цена</span>
              </div>

              <div className='mb-4'>
                <h3 className='text-4xl font-bold text-right'>{data.price2}</h3>
                <span className='text-xs font-normal text-gray-400'>С картой Северяночки </span>
              </div>
            </div>


            <div>
              <button className='w-full p-4 text-white text-2xl rounded-nor bg-olov flex items-center '>
                <img src={Korzina} width={32} height={32} alt="korzina" className=' ' />
                <div className='text-center w-full'>

                  {data.button}
                </div>
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Carddata