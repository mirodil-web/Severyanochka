import React from 'react'
import Karta from '../../public/assets/Karta.png'
import BbImg from '../../public/assets/bgimgx.png'


const Pridlojeniya = () => {
    return (
        <section className='py-14 bg-[#FBF8EC]'>
            <div className="container">
                <h2 className='font-bold text-4xl mb-10'>Специальные предложения</h2>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>

                    {/* card 1 */}
                    <div className='rounded-nor bg-pinkx flex'>

                        <div className='pl-10 pt-8'>
                            <h3 className='text-2xl font-bold '>Оформите карту «Северяночка»</h3>
                            <p className='font-normal leading-6'>И получайте бонусы при покупке в магазинах и на сайте</p>
                        </div>

                        <img src={Karta} alt="Karta img" />

                    </div>

                    {/* card 2 */}
                    <div className='rounded-nor bg-[#E5FFDE] flex justify-between'>

                        <div className='pl-10 pt-8'>
                            <h3 className='text-2xl font-bold '>Покупайте <br /> акционные товары</h3>
                            <p className='font-normal leading-6'>И получайте вдвое больше <br /> бонусов</p>
                        </div>

                        <img className='pt-4 pr-10' src={BbImg} alt="bg img" />

                    </div>


                </div>
            </div>
        </section>
    )
}

export default Pridlojeniya