import React, { useState } from 'react'
import { acsiyadata } from '../store/data'
import { Link } from 'react-router-dom'
import { Breadcrumbs } from '@material-tailwind/react'
import SetlikeVseAksi from '../components/SetlikeVseAksi'

const Vseaksi = ({addLike6, removeLike6, addKorzina6}) => {
   

    return (
        <div className='bg-[#f9f4e2] pb-14'>
            <div className="container ">

                <Breadcrumbs className='space-x-4 py-6'>
                    <Link className='mr-4 text-xs hover:text-yellow-600' to='/'>
                        Главная
                    </Link>

                    <span className=' text-xs ' >
                        Все покупки
                    </span>
                </Breadcrumbs>

                <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>

                    {
                        acsiyadata.map((acsiyadata) => (
                            <SetlikeVseAksi key={acsiyadata.id} acsiyadata={acsiyadata} addLike6={addLike6} removeLike6={removeLike6} addKorzina6={addKorzina6} />
                        ))
                    }

                </ul>
            </div>
        </div>
    )
}

export default Vseaksi