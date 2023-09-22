import { Breadcrumbs } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Odamlar from '../../public/assets/Vector.png'
import Group from '../../public/assets/GroupDev.png'
import Logo from '../../public/assets/logoG.png'


const About = () => {
  return (
      <section className=''>
          <div className="container">
              <Breadcrumbs className='space-x-4 py-6'>
                  <Link className='mr-4 text-xs hover:text-yellow-600' to='/'>
                      Главная
                  </Link>
                  
                  <span className='mr-4 text-xs ' >
                      О компании
                  </span>
              </Breadcrumbs>

              <div className='p-8 relative flex pt-10 pb-16'>
                  <div className='max-w-[669px] w-full'>
                      <h2 className='text-6xl font-bold font-Rubik text-qorag mb-4'>О компании</h2>
                      <p className='text-2xl font-bold  text-[#f63]'>Мы непрерывно развиваемся <br /> иработаем над совершенствованием сервиса, заботимся о наших клиентах, <br /> стремимся к лучшему будущему.</p>
                  </div>

                  <img width={669} height={341} className='  right-0 top-0' src={Odamlar} alt="Odamlar" />
                  <img className='absolute right-10 bottom-16' src={Group} alt="Odamlar" />

                  
              </div>

              <ul className='flex justify-between py-14'>
                  <li className=''>
                          <p className='text-xl font-normal mb-4'>Мы занимаемся <br /> розничной торговлей</p>
                          <h3 className="font-bold text-2xl">Более 20 лет.</h3>
                  </li>
                  <li className=''>
                      <p className='text-xl font-normal mb-4'>Основная миссия компании</p>
                      <h3 className="font-bold text-2xl">Максимальное качество <br /> товаров и услуг по <br /> доступной цене.</h3>
                  </li>
                  <li className=''>
                      <p className='text-xl font-normal mb-4'>Отличительная черта нашей сети</p>
                      <h3 className="font-bold text-2xl">Здоровая и полезная продукция <br /> местного производства внаших <br /> магазинах.</h3>
                  </li>
              </ul>

              <div className='py-14  flex items-center justify-around'>
                  <img width={127} height={103} src={Logo} alt="Logo" />

                  <div className='py-7 px-10 rounded-nor bg-[#E5FFDE]'> 
                      <h2 className='text-[#70C05B] text-2xl font-bold'> Спасибо за то, что вы с нами. Северяночка, везет всегда!</h2>
                  </div>
              </div>
          </div>
    </section>
  )
}

export default About