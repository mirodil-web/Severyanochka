import React, { useState } from 'react'
import { katalogdata } from '../store/data'
import { Link, useParams } from 'react-router-dom'
import { Breadcrumbs } from '@material-tailwind/react'
import Heart from '../../public/assets/heart.png';


const Katalogresults = () => {

  const { id } = useParams()

  const data = katalogdata.find(e => e.id === parseInt(id))

  const [like, setLike] = useState(false); // "like" o'zgaruvchisi va uning o'zgarish funksiyasi


  return (
    <div>
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


        <ul className='grid grid-cols-4'>
          <li>
            <img src={data.cardimgr1} alt="img" />
          </li>
        </ul>

      </div>
    </div>
  )
}

export default Katalogresults