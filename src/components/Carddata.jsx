import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { acsiyadata, katalogimgdata } from '../store/data'
import { Breadcrumbs } from '@material-tailwind/react'

const Carddata = () => {

  const { id } = useParams()

  const data = acsiyadata.find(e => e.id === parseInt(id))

  console.log(data);

  return (
    <div>
      <div className="container">

        <Breadcrumbs className='space-x-4 py-6'>
          <Link className='mr-4 text-xs hover:text-yellow-600' to='/'>
            Главная
          </Link>

          <Link to='/katalog' className='mr-4 text-xs ' >
            Каталог
          </Link>
        </Breadcrumbs>

        <h2 className='text-2xl font-bold'>{data.name}</h2>

        <div>

          <div>
            {
              acsiyadata.map((data) => {
                return (
                  <div key={data.id}>
                    <img src={data.imgx} alt="Img" />
                  </div>
                )
              })
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default Carddata