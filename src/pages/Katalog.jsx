import { Breadcrumbs } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Katalog = () => {
  return (
    <div className='#FBF8EC'>
      <div className="container">

        <Breadcrumbs className='space-x-4 py-6'>
          <Link className='mr-4 text-xs hover:text-yellow-600' to='/'>
            Главная
          </Link>

          <span className=' text-xs ' >
            Каталог
          </span>
        </Breadcrumbs>

        <h2 className='text-6xl font-bold mb-14 text-qorag'>Каталог</h2>

        <div className='grid grid-cols-4 pb-20 gap-10'>

            {/* card1 */}
          <div className='rounded-nor h-[200px] relative bg-molokoSir bg-no-repeat  col-span-2 '>
            <div className='pt-20 pl-2.5 pb-2 absolute text-white   font-bold text-lg bg-gradient-to-t from-[#70C05B] rounded-nor   w-full bottom-0'>
              <h3>Молоко, сыр, яйцо</h3>
            </div>
          </div>

          {/* card2 */}
          <div className='rounded-nor h-[200px] relative bg-non bg-auto  '>
            <div className='pt-20 pl-2.5 pb-2 absolute text-white  font-bold text-lg bg-gradient-to-t from-yellow-500 rounded-nor   w-full bottom-0'>
              <h3>Хлеб</h3>
            </div>
          </div>

          {/* card3 */}
          <div className='rounded-nor h-[200px] relative bg-molokoSir bg-auto  '>
            <div className='pt-20 pl-2.5 pb-2 absolute text-white  font-bold text-lg bg-gradient-to-t from-[#70C05B] rounded-nor   w-full bottom-0'>
              <h3>Фрукты и овощи</h3>
            </div>
          </div>

          {/* card4 */}
          <div className='rounded-nor h-[200px] relative bg-molokoSir bg-auto  '>
            <div className='pt-20 pl-2.5 pb-2 absolute text-white  font-bold text-lg bg-gradient-to-t from-[#70C05B] rounded-nor   w-full bottom-0'>
              <h3>Замороженные продукты</h3>
            </div>
          </div>

          {/* card5*/}
          <div className='rounded-nor h-[200px] relative bg-molokoSir bg-auto  '>
            <div className='pt-20 pl-2.5 pb-2 absolute text-white  font-bold text-lg bg-gradient-to-t from-[#70C05B] rounded-nor   w-full bottom-0'>
              <h3>Напитки</h3>
            </div>
          </div>

          {/* card6 */}
          <div className='rounded-nor h-[200px] relative bg-molokoSir bg-auto  '>
            <div className='pt-20 pl-2.5 pb-2 absolute text-white  font-bold text-lg bg-gradient-to-t from-[#70C05B] rounded-nor   w-full bottom-0'>
              <h3>Кондитерские изделия</h3>
            </div>
          </div>

          {/* card7 */}
          <div className='rounded-nor h-[200px] relative bg-molokoSir bg-auto  '>
            <div className='pt-20 pl-2.5 pb-2 absolute text-white  font-bold text-lg bg-gradient-to-t from-[#70C05B] rounded-nor   w-full bottom-0'>
              <h3>Чай, кофе</h3>
            </div>
          </div>

          {/* card8 */}
          <div className='rounded-nor h-[200px] relative bg-molokoSir bg-auto  '>
            <div className='pt-20 pl-2.5 pb-2 absolute text-white  font-bold text-lg bg-gradient-to-t from-[#70C05B] rounded-nor   w-full bottom-0'>
              <h3>Бакалея</h3>
            </div>
          </div>

          {/* card9 */}
          <div className='rounded-nor h-[200px] relative bg-molokoSir bg-auto  '>
            <div className='pt-20 pl-2.5 pb-2 absolute text-white  font-bold text-lg bg-gradient-to-t from-[#70C05B] rounded-nor   w-full bottom-0'>
              <h3>Здоровое питание</h3>
            </div>
          </div>

          {/* card10 */}
          <div className='rounded-nor h-[200px] relative bg-molokoSir bg-auto col-span-2 '>
            <div className='pt-20 pl-2.5 pb-2 absolute text-white  font-bold text-lg bg-gradient-to-t from-[#70C05B] rounded-nor   w-full bottom-0'>
              <h3>Зоотовары</h3>
            </div>
          </div>

          {/* card11 */}
          <div className='rounded-nor h-[200px] relative bg-molokoSir bg-auto  '>
            <div className='pt-20 pl-2.5 pb-2 absolute text-white  font-bold text-lg bg-gradient-to-t from-[#70C05B] rounded-nor   w-full bottom-0'>
              <h3>Детское питание</h3>
            </div>
          </div>

          {/* card12 */}
          <div className='rounded-nor h-[200px] relative bg-molokoSir bg-auto col-span-2 '>
            <div className='pt-20 pl-2.5 pb-2 absolute text-white  font-bold text-lg bg-gradient-to-t from-[#70C05B] rounded-nor   w-full bottom-0'>
              <h3>Мясо, птица, колбаса</h3>
            </div>
          </div>

          {/* card13 */}
          <div className='rounded-nor h-[200px] relative bg-molokoSir bg-auto  '>
            <div className='pt-20 pl-2.5 pb-2 absolute text-white  font-bold text-lg bg-gradient-to-t from-[#70C05B] rounded-nor   w-full bottom-0'>
              <h3>Непродовольственные товары</h3>
            </div>
          </div>



        </div>

      </div>
    </div>
  )
}

export default Katalog