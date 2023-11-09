import React from 'react'
import { ctataidata } from '../store/data'
import { Link } from 'react-router-dom'


const Ctati = () => {

    return (
        <section id='stati' className='py-14 bg-[#FBF8EC] '>
            <div className="container">

                {/* title */}
                <div className='flex justify-center mb-10'>
                    <h2 className='text-2xl md:text-4xl  font-bold text-qorag'>Статьи</h2>
                    
                </div>

                <ul className='grid grid-cols-1 md:grid-cols-3 gap-10'>

                    {
                        ctataidata.map((ctataidata) => {
                            return (

                                <li key={ctataidata.id} className='shadow-xl hover:shadow-pinkx/90 rounded-nor relative'>
                                    <img className='w-full rounded-nor h-32 sm:h-48 ' src={ctataidata.img} alt="Inson" />
                                    <div className='p-2.5'>
                                        <span className='text-xs font-normal text-[#8f8f8f]'>{ctataidata.span}</span>
                                        <h3 className='font-bold text-lg mb-2.5'>{ctataidata.title}</h3>
                                        <p className='font-normal max-h-[120px] h-full text-[#414141] mb-2.5'>{ctataidata.paragraf}</p>

                                        <div className="flex items-end relativa py-3">
                                            <div className='absolute bottom-3'>
                                                <Link to={`cdetail/${ctataidata.id}`} className=' p-2 text-[#70C05B] rounded-nor bg-[#e5e5e5] hover:bg-Yashil hover:text-white duration-500'>Подробнее</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                            )
                        })
                    }

                </ul>

            </div>
        </section>
    )
}

export default Ctati