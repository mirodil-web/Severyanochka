import React from 'react'
import PageNotFoundimg from '../../public/assets/404.png'
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
      <div className='bg-[#ede8e8] pb-11 md:pb-14'>
          <div className="container flex justify-center items-center flex-col">
              <img className='w-[450px]' src={PageNotFoundimg} alt="404 img" />
              <Link to='/' className='bg-orange-400 text-white font-bold px-3 py-2 rounded-nor'> Back to Home page</Link>
          </div>
    </div>
  )
}

export default PageNotFound;
