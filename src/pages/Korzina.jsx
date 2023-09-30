import { Breadcrumbs } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Korzina = () => {
  return (
    <div className='pb-20'>
      <div className="container">
        <Breadcrumbs className='space-x-4 py-6'>
          <Link className='mr-4 text-xs hover:text-yellow-600' to='/'>
            Главная
          </Link>

          <Link className='mr-4 text-xs hover:text-yellow-600' to='/korzina'>
            Корзина
          </Link>
        </Breadcrumbs>

        <h2 className='text-6xl text-qorag font-bold mb-14'>Корзина</h2>
      </div>
    </div>
  )
}

export default Korzina