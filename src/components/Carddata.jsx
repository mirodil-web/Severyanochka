import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { acsiyadata, ranshedata } from '../store/data'
import { Breadcrumbs } from '@material-tailwind/react'
import Korzina from '../../public/assets/shopping-cart.png'
import Heart from '../../public/assets/heart.png'
// import Swiper from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'


const Carddata = () => {

  const { id } = useParams()

  const data = acsiyadata.find(e => e.id === parseInt(id))

  const [like, setLike] = useState(false)
  const [cardLike, setCardLike] = useState([])

  const addLike = (i) => {
    const found = cardLike.find((e) => e.id === i);
    if (!found) {
      setCardLike([...cardLike, { id: i }]);
    }
  };


  const removeLike = (i) => {
    const updatedShop = cardLike.filter((e) => e.id !== i);
    setCardLike(updatedShop);
  };


  const qoshish = (e) => {
    setLike(!like);
    if (!like) {
      addLike(e);
    } else {
      removeLike(e);
    }
  };

  return (
    <div className='bg-[#FBF8EC]'>
      <div className="container">

        <Breadcrumbs className='space-x-4 py-6'>
          <Link className='mr-4 text-xs hover:text-yellow-600' to='/'>
            Главная
          </Link>

          <Link to='/katalog' className='mr-4 text-xs hover:text-yellow-600 ' >
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

        <div className='grid grid-cols-1 sm:grid-cols-2 pb-14'>
          <div className='flex mb-10 sm:mb-0'>

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

            <div className='sm:mr-10 bg-white rounded-nor pt-5 px-5 sm:pt-10 sm:px-10 flex flex-col   shadow-md'>
              <div className='flex justify-end'>
                <span className='bg-olov text-right rounded-nor px-2 py-1 mb-10 text-white text-base'>{data.chegirma}</span>

              </div>
              <img className='w-[404px] h-[136px] sm:w-[504px] sm:h-[296px]' src={data.img} alt="img" />
            </div>
          </div>

          <div className='sm:max-w-[476px] w-full'>
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


            <button className='w-full p-4 text-white text-2xl rounded-nor bg-olov flex items-center mb-2'>
              <img src={Korzina} width={32} height={32} alt="korzina" className=' ' />
              <div className='text-center w-full'>

                {data.button}
              </div>
            </button>


            <div className='flex justify-center'>

              <div className='flex  items-center p-2 mb-2'>
                <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" width="24" height="12" viewBox="0 0 24 12" fill="none">
                  <path d="M23.1883 0.666611H0.811961C0.343143 0.666611 -0.0396916 1.05823 0.0033005 1.52051C0.494639 7.0113 5.67826 11.3333 12.0001 11.3333C18.322 11.3333 23.5056 7.01332 23.997 1.52051C24.0379 1.05823 23.6571 0.666611 23.1883 0.666611Z" fill="#70C05B" />
                </svg>
                <p className='text-sm text-[#70C05B]'>Вы получаете<strong> 10 бонусов</strong></p>
              </div>

            </div>

            <div className='flex justify-center mb-6'>
              <div className='flex  items-center p-2' >
                <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2778 3.3842C13.2821 2.21815 10.8173 2.19959 8.80431 3.33546C8.56381 3.47116 8.25884 3.38621 8.12313 3.14572C7.98743 2.90522 8.07238 2.60025 8.31288 2.46454C10.6356 1.15392 13.4796 1.17534 15.7823 2.52079C18.085 3.86623 19.5 6.3333 19.4986 9.00026L18.9986 9H19.4986V9.00026V13C19.4986 13.2761 19.2747 13.5 18.9986 13.5C18.7225 13.5 18.4986 13.2761 18.4986 13V9L18.4986 8.99975C18.4998 6.68838 17.2734 4.55026 15.2778 3.3842ZM6.00937 5.33572C6.25474 5.46239 6.35096 5.764 6.22429 6.00937C5.74707 6.93372 5.49869 7.95911 5.5 8.99937L5.5 9L5.5 14C5.5 14.9793 5.09777 15.8647 4.44949 16.5H17C17.2761 16.5 17.5 16.7239 17.5 17C17.5 17.2761 17.2761 17.5 17 17.5H2C1.72386 17.5 1.5 17.2761 1.5 17C1.5 16.7239 1.72386 16.5 2 16.5C3.38071 16.5 4.5 15.3807 4.5 14V9.00025M10.0191 20.5675C10.258 20.4289 10.5639 20.5103 10.7025 20.7491C10.9708 21.2117 11.4652 21.4965 12 21.4965C12.5348 21.4965 13.0292 21.2117 13.2975 20.7491C13.4361 20.5103 13.742 20.4289 13.9809 20.5675C14.2197 20.7061 14.3011 21.012 14.1625 21.2509C13.7153 22.0219 12.8913 22.4965 12 22.4965C11.1087 22.4965 10.2847 22.0219 9.8375 21.2509C9.69894 21.012 9.78025 20.7061 10.0191 20.5675Z" fill="#414141" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L23.3536 22.6464C23.5488 22.8417 23.5488 23.1583 23.3536 23.3536C23.1583 23.5488 22.8417 23.5488 22.6464 23.3536L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#414141" />
                </svg>
                <p className='text-sm text-[#606060]'>Уведомить о снижении цены</p>
              </div>
            </div>


            <table className='w-full'>
              <tr className='bg-[#F3F2F1] p-2'>
                <td className='p-2 text-xs'>Бренд</td>
                <td className='p-2 text-xs font-bold'>ПРОСТОКВАШИНО</td>
              </tr>
              <tr className='p-2'>
                <td className='p-2 text-xs'>Страна производителя</td>
                <td className='p-2 text-xs font-bold'>Россия</td>
              </tr>
              <tr className='bg-[#F3F2F1] p-2'>
                <td className='p-2 text-xs'>Упаковка</td>
                <td className='p-2 text-xs font-bold'>180 г</td>
              </tr>
            </table>

          </div>

        </div>

      </div>


      <section className='py-14'>
        <div className="container">
          <h2 className='text-qorag font-bold text-4xl mb-10'>Отзывы</h2>
          <hr />

          <div className='py-5'>
            <h3 className='font-bold text-qorag text-lg mb-4'>Ваша оценка</h3>
            <textarea cols="30" rows="7" className='border px-4 py-2 border-yellow-500/50 rounded-nor mb-4 w-full' placeholder='Отзыв'></textarea>
            <button className='p-2 text-[#FF6633] bg-[#FCD5BA]'>Отправить отзыв</button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Carddata