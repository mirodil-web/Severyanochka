import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ctataidata } from '../store/data'
import { Breadcrumbs } from '@material-tailwind/react'

const Cdetail = () => {
  const { id } = useParams()
  const data = ctataidata.find(i => i.id === parseInt(id))

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className='pb-14'>

      <div className="container">

        <Breadcrumbs className='space-x-4 py-6'>
          <Link className='mr-4 text-xs hover:text-yellow-600' to='/'>
            Главная
          </Link>

          <span className='mr-4 text-xs ' >
            Статьи
          </span>
        </Breadcrumbs>


        <div>
          <img className='h-40  rounded-nor sm:h-80 w-full mb-2' src={data.img} alt="img" />
          <span className='text-xs font-normal text-[#8f8f8f]'>{data.span}</span>
          <h3 className='font-bold text-2xl mb-2.5'>{data.title}</h3>
          <p className='font-normal text-xl max-h-[120px] h-full  text-[#414141] mb-2.5'>{data.paragraf}</p>
        </div>

      </div>
      
    </div>
  )
}

export default Cdetail