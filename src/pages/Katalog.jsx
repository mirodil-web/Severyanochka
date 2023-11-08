import { Breadcrumbs } from '@material-tailwind/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { katalogdata } from '../store/data'

const Katalog = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='bg-[#FBF8EC]'>
      <div className="container">

        <Breadcrumbs className='space-x-4 py-6'>
          <Link className='mr-4 text-xs hover:text-yellow-600' to='/'>
            Главная
          </Link>

          <span className=' text-xs ' >
            Каталог
          </span>
        </Breadcrumbs>

        <h2 className='text-4xl minm:text-5xl md:text-6xl font-bold mb-14 text-qorag'>Каталог</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 pb-20 gap-10'>

            {/* card1 */}
          
          {katalogdata.map((katalogdata) => {
            return (
              <Link key={katalogdata.id} to={`/katalogresults/${katalogdata.id}`} className='rounded-nor h-[200px]  relative  '>
                <img src={katalogdata.img} className='w-full rounded-nor h-full '  alt="img" />
                <div className='pt-20 pl-2.5 pb-2 absolute text-white   font-bold text-lg bg-gradient-to-t from-[#70C05B] rounded-nor   w-full bottom-0'>
                  <h3 >{ katalogdata.ptitle}</h3>
                </div>
              </Link> 
           )
         }) }

        </div>

      </div>
    </div>
  )
}

export default Katalog