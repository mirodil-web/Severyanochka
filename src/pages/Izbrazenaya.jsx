import { Breadcrumbs } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Izbrazenaya = ({cardLike}) => {
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

        <h2 className='text-6xl font-bold mb-14 text-qorag'>Избраное</h2>
       
        
        <ul className='grid grid-cols-4'>
          {
            cardLike.map((card) => {
              return (
                <li key={card.id}>
                     <img src={card.img} alt="" />
                </li>
              )
            })
         }
        </ul>

      </div>
    </section>
  )
}

export default Izbrazenaya