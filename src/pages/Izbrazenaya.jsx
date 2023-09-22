import { Breadcrumbs } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Filtr from '../components/Filtr'

const Izbrazenaya = () => {
  return (
    <section className='pb-20'>
      <div className="container">

        <Breadcrumbs className='space-x-4 py-6'>
          <Link className='mr-4 text-xs hover:text-yellow-600' to='/'>
            Главная
          </Link>

          <span className='text-xs '>
            Избраное
          </span>
        </Breadcrumbs>

        <h2 className='text-6xl font-bold mb-14'>Избраное</h2>
        <div className='flex'>

          {/* left block */}
          <Filtr />

          {/* right block */}
          <div>

            <div className='mb-10'>
              <button>Цена от 99 до 2599 </button>
              <button>Очистить</button>
            </div>

            <div  className='flex justify-center'>
              <div className='grid grid-cols-3 gap-10'>

              </div>

              <div className='flex justify-center items-center'>

              <button className='p-4 bg-[#F3F2F1] text-2xl rounded-nor flex justify-center'>Показать ещё</button>
              </div>
            </div>


          </div>

        </div>

      </div>
    </section>
  )
}

export default Izbrazenaya