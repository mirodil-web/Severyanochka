import { Breadcrumbs } from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Kontakt = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <div className="container">

        <Breadcrumbs className='space-x-4 py-6'>
          <Link className='mr-4 text-xs hover:text-yellow-600' to='/'>
            Главная
          </Link>

          <span className=' text-xs' >
            Контакты
          </span>
        </Breadcrumbs>

        <h2 className='text-4xl minm:text-5xl md:text-6xl font-bold mb-10'>Контакты</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 max-w-[736px] pb-14'>

          <div className='flex sm:mr-20  mb-5 sm:mb-0'>
            <span className='mr-2'>🏠</span>
            <div className='flex flex-col'>
              <span className='mb-4'>Бухгалтерия, склад</span>
              <a href="tel:+998887808882" className=' font-bold underline '>+7 82140 92619</a>
            </div>
          </div>

          <div className='flex '>
            <span className='mr-2'>%</span>
            <div className='flex flex-col'>
              <span className='mb-4'>Вопросы по системе лояльности</span>
              <a href="tel:+998887808882" className=' font-bold underline '>+7 908 716 33 97</a>
            </div>
          </div>
        </div>

        <section className='pt-14 pb-20'>

          {/* Tab links */}
          <div className="sm:space-x-4  mb-8">
            <button
              onClick={() => setActiveTab('tab1')}
              className={`p-2 rounded-nor mr-4 sm:mr-0  mb-4 sm:mb-0 ${activeTab === 'tab1' ? 'bg-Yashil text-white' : 'bg-gray-200 text-black'
                }`}
            >
              п.Щельяюр
            </button>
            <button
              onClick={() => setActiveTab('tab2')}
              className={`p-2 rounded-nor  mb-4 sm:mb-0 ${activeTab === 'tab2' ? 'bg-Yashil text-white' : 'bg-gray-200 text-black'
                }`}
            >
              д.Вертеп
            </button>
            <button
              onClick={() => setActiveTab('tab3')}
              className={`p-2 rounded-nor mr-4 sm:mr-0 ${activeTab === 'tab3' ? 'bg-Yashil text-white' : 'bg-gray-200 text-black'
                }`}
            >
              с.Краснобор
            </button>
            <button
              onClick={() => setActiveTab('tab4')}
              className={`p-2 rounded-nor ${activeTab === 'tab4' ? 'bg-Yashil text-white' : 'bg-gray-200 text-black'
                }`}
            >
              д.Диюр
            </button>
          </div>

         

          {/* Tab content */}
          <div>

            {/* tab1 */}
            {activeTab === 'tab1' && <div className='shadow-lg'>
              <iframe title="location" className='w-full h-48 sm:h-80  rounded-lg shadow-xl'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13326.250116622408!2d53.39292341933337!3d65.32264009514176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4472340bbf53f20d%3A0x6aaf90d406ef7886!2z0KnQtdC70YzRj9GO0YAsINCg0LXRgdC_LiDQmtC-0LzQuCwg0KDQvtGB0YHQuNGP!5e0!3m2!1sru!2s!4v1694002215444!5m2!1sru!2s">
              </iframe>
            </div>}

            {/* tab2 */}

            {activeTab === 'tab2' && <div className='shadow-lg'>
              <iframe title="location" className='w-full h-48 sm:h-80  rounded-lg shadow-xl'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13443.27342797773!2d53.156071985272916!3d65.2973271688945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x447249e2718cd461%3A0x25c0f625da4e30ed!2z0JLQtdGA0YLQtdC_LCDQoNC10YHQvy4g0JrQvtC80LgsINCg0L7RgdGB0LjRjywgMTY5NDcz!5e1!3m2!1sru!2s!4v1694003557071!5m2!1sru!2s">
              </iframe>
            </div>}

            {/* tab3 */}

            {activeTab === 'tab3' && <div className='shadow-lg'>
              <iframe title="location" className='w-full h-48 sm:h-80  rounded-lg shadow-xl'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13445.873179638436!2d53.269302569198764!3d65.29223009386234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x447235dd2ca590b3%3A0xc633232da326cfaf!2z0JrRgNCw0YHQvdC-0LHQvtGALCDQoNC10YHQvy4g0JrQvtC80LgsINCg0L7RgdGB0LjRjywgMTY5NDcz!5e1!3m2!1sru!2s!4v1694003673044!5m2!1sru!2s">
              </iframe>
            </div>}

            {/* tab4 */}

            {activeTab === 'tab4' && <div className='shadow-lg'>
              <iframe title="location" className='w-full h-48 sm:h-80  rounded-lg shadow-xl'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6727.174970850854!2d53.348351188391234!3d65.27560909829297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x447235aa69816fb7%3A0x7202220934f2d943!2z0JTQuNGO0YAsINCg0LXRgdC_LiDQmtC-0LzQuCwg0KDQvtGB0YHQuNGPLCAxNjk0NzE!5e1!3m2!1sru!2s!4v1694003729348!5m2!1sru!2s">
              </iframe>
            </div>}

          </div>

        </section>
      </div>
    </div>
  )
}

export default Kontakt