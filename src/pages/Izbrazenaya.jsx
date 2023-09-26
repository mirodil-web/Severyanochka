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
       
        
        <div className='grid grid-cols-4'>

        </div>

      </div>
    </section>
  )
}

export default Izbrazenaya