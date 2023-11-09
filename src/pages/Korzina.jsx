import { Breadcrumbs } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Korzina = ({ korzina, setKorzina, addCartPul  }) => {

  const Delete = (i) => {
    const upDataShop = korzina.filter((up) => up.id != i)
    setKorzina(upDataShop)
  }

  const [pul, setPul] = useState(true)
  const [narxi, setNarxi] = useState(0)
   const [miqdor, setMiqdor] = useState(1)

  const CardNarxi = () => {
    let pu = 0;
    korzina.forEach((e) => {
      pu += e.price * e.miqdor
    });
    setNarxi(pu)
  };

  useEffect(() => {
    CardNarxi()
  }, [korzina])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='pb-20 bg-[#f9f4e2]'>
      
      <div className={`container ${korzina.length >= 0 ? 'block' : 'hidden'}`}>
        <Breadcrumbs className='space-x-4 py-6'>
          <Link className='mr-4 text-xs hover:text-yellow-600' to='/'>
            Главная
          </Link>

          <Link className='mr-4 text-xs hover:text-yellow-600' to='/korzina'>
            Корзина
          </Link>
        </Breadcrumbs>

        <h2 className='text-4xl minm:text-5xl md:text-6xl text-qorag font-bold mb-5 md:mb-14'>Корзина</h2>

        <div className={`flex mb-7 ${korzina.length === 0 ? 'hidden' : 'block'}`} >
          <button onClick={() => Delete(korzina)} className='text-red-600 text-sm md:text-base'>Убрать все</button>
        </div>

        <div  className={`flex flex-col justify-between lg:flex-row ${korzina.length === 0 ? 'hidden' : 'block'}`} >

          <div className='mb-10 '>
            <ul className='space-y-5 mr-7'>
              {
                korzina.map((card) => {
                  return (
                    <li key={card.id} className='bg-white rounded-nor shadow-md  flex-col max-w-4xl w-full flex md:flex-row justify-between p-2'>

                      <div className='flex mb-5 md:mb-0'>
                        <img width={80} height={60} className='shadow-lg py-3 px-2 mr-3' src={card.img} alt="img" />
                        <div className='flex flex-col justify-between'>
                          <h3 className='text-base'>{card.name}</h3>
                          <p className='text-xs'> <b> {card.price} </b>  за шт.</p>
                        </div>
                      </div>

                      <div className='flex items-center md:items-start justify-between'>
                        <div className='bg-Yashil rounded-nor text-white px-3 py-1 text-2xl flex items-center font-normal mr-7 space-x-5'>

                          {}
                          <button onClick={() => addCartPul(card, -1)} >-</button>
                          <span className='text-sm'>{card.miqdor}</span>
                          <button onClick={() => addCartPul(card, 1)}>+</button>

                        </div>

                        <div className='flex flex-col justify-between  items-center h-full'>
                          <strong className='text-lg'>{card.price} ₽</strong>

                          <button onClick={() => Delete(card.id)} className='bg-red-600 hover:bg-red-500 text-white text-sm rounded-nor px-2 py-1'>
                            Delete
                          </button>

                        </div>

                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>

          <div className={`w-full lg:w-[400px]  ${korzina.length === 0 ? 'hidden' : 'block'}`}>
            <div className='w-full'>
              <div className='flex justify-between'>
              <h3 className='font-normal text-base mb-5'>Количество карт    </h3>
              <span className='font-bold'>{korzina.length}</span>
              </div>
              <hr className='mb-6' />
              <div>
                <div className='flex justify-between'>
                  <p className='text-[#8F8F8F]'>Итог</p>
                  <p className='font-bold text-2xl'>{narxi} ₽</p>
                  {/* 888888888888888888888888888888888********************** jami narxi ^ */}
                </div>
                <div className='flex  items-center justify-center p-2 mb-2'>
                  <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" width="24" height="12" viewBox="0 0 24 12" fill="none">
                    <path d="M23.1883 0.666611H0.811961C0.343143 0.666611 -0.0396916 1.05823 0.0033005 1.52051C0.494639 7.0113 5.67826 11.3333 12.0001 11.3333C18.322 11.3333 23.5056 7.01332 23.997 1.52051C24.0379 1.05823 23.6571 0.666611 23.1883 0.666611Z" fill="#70C05B" />
                  </svg>
                  <p className='text-sm text-[#70C05B]'>Вы получаете<strong> 10 бонусов</strong></p>
                </div>
              </div>
            </div>

          </div>

        </div>


        <div className={`container  flex flex-col items-center ${korzina.length === 0 ? 'block' : 'hidden'}`}>

          <svg className='w-80 mb-5' viewBox="656 573 264 182" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink">
            <rect id="bg-line" stroke="none" fill-opacity="0.2" fill="#FFE100" fill-rule="evenodd" x="656" y="624" width="206" height="38" rx="19"></rect>
            <rect id="bg-line" stroke="none" fill-opacity="0.2" fill="#FFE100" fill-rule="evenodd" x="692" y="665" width="192" height="29" rx="14.5"></rect>
            <rect id="bg-line" stroke="none" fill-opacity="0.2" fill="#FFE100" fill-rule="evenodd" x="678" y="696" width="192" height="33" rx="16.5"></rect>
            <g id="shopping-bag" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(721.000000, 630.000000)">
              <polygon id="Fill-10" fill="#FFA800" points="4 29 120 29 120 0 4 0"></polygon>
              <polygon id="Fill-14" fill="#FFE100" points="120 29 120 0 115.75 0 103 12.4285714 115.75 29"></polygon>
              <polygon id="Fill-15" fill="#FFE100" points="4 29 4 0 8.25 0 21 12.4285714 8.25 29"></polygon>
              <polygon id="Fill-33" fill="#FFA800" points="110 112 121.573723 109.059187 122 29 110 29"></polygon>
              <polygon id="Fill-35" fill-opacity="0.5" fill="#FFFFFF" points="2 107.846154 10 112 10 31 2 31"></polygon>
              <path d="M107.709596,112 L15.2883462,112 C11.2635,112 8,108.70905 8,104.648275 L8,29 L115,29 L115,104.648275 C115,108.70905 111.7365,112 107.709596,112" id="Fill-36" fill="#FFE100"></path>
              <path d="M122,97.4615385 L122,104.230231 C122,108.521154 118.534483,112 114.257931,112 L9.74206897,112 C5.46551724,112 2,108.521154 2,104.230231 L2,58" id="Stroke-4916" stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
              <polyline id="Stroke-4917" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" points="2 41.5 2 29 122 29 122 79"></polyline>
              <path d="M4,50 C4,51.104 3.104,52 2,52 C0.896,52 0,51.104 0,50 C0,48.896 0.896,48 2,48 C3.104,48 4,48.896 4,50" id="Fill-4918" fill="#000000"></path>
              <path d="M122,87 L122,89" id="Stroke-4919" stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
              <polygon id="Stroke-4922" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" points="4 29 120 29 120 0 4 0"></polygon>
              <path d="M87,46 L87,58.3333333 C87,71.9 75.75,83 62,83 L62,83 C48.25,83 37,71.9 37,58.3333333 L37,46" id="Stroke-4923" stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
              <path d="M31,45 C31,41.686 33.686,39 37,39 C40.314,39 43,41.686 43,45" id="Stroke-4924" stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
              <path d="M81,45 C81,41.686 83.686,39 87,39 C90.314,39 93,41.686 93,45" id="Stroke-4925" stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
              <path d="M8,0 L20,12" id="Stroke-4928" stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
              <path d="M20,12 L8,29" id="Stroke-4929" stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
              <path d="M20,12 L20,29" id="Stroke-4930" stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
              <path d="M115,0 L103,12" id="Stroke-4931" stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
              <path d="M103,12 L115,29" id="Stroke-4932" stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
              <path d="M103,12 L103,29" id="Stroke-4933" stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
            </g>
            <g id="glow" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(768.000000, 615.000000)">
              <rect id="Rectangle-2" fill="#000000" x="14" y="0" width="2" height="9" rx="1"></rect>
              <rect fill="#000000" transform="translate(7.601883, 6.142354) rotate(-12.000000) translate(-7.601883, -6.142354) " x="6.60188267" y="3.14235449" width="2" height="6" rx="1"></rect>
              <rect fill="#000000" transform="translate(1.540235, 7.782080) rotate(-25.000000) translate(-1.540235, -7.782080) " x="0.54023518" y="6.28207994" width="2" height="3" rx="1"></rect>
              <rect fill="#000000" transform="translate(29.540235, 7.782080) scale(-1, 1) rotate(-25.000000) translate(-29.540235, -7.782080) " x="28.5402352" y="6.28207994" width="2" height="3" rx="1"></rect>
              <rect fill="#000000" transform="translate(22.601883, 6.142354) scale(-1, 1) rotate(-12.000000) translate(-22.601883, -6.142354) " x="21.6018827" y="3.14235449" width="2" height="6" rx="1"></rect>
            </g>
            <polygon id="plus" stroke="none" fill="#7DBFEB" fill-rule="evenodd" points="689.681239 597.614697 689.681239 596 690.771974 596 690.771974 597.614697 692.408077 597.614697 692.408077 598.691161 690.771974 598.691161 690.771974 600.350404 689.681239 600.350404 689.681239 598.691161 688 598.691161 688 597.614697"></polygon>
            <polygon id="plus" stroke="none" fill="#EEE332" fill-rule="evenodd" points="913.288398 701.226961 913.288398 699 914.773039 699 914.773039 701.226961 917 701.226961 917 702.711602 914.773039 702.711602 914.773039 705 913.288398 705 913.288398 702.711602 911 702.711602 911 701.226961"></polygon>
            <polygon id="plus" stroke="none" fill="#FFA800" fill-rule="evenodd" points="662.288398 736.226961 662.288398 734 663.773039 734 663.773039 736.226961 666 736.226961 666 737.711602 663.773039 737.711602 663.773039 740 662.288398 740 662.288398 737.711602 660 737.711602 660 736.226961"></polygon>
            <circle id="oval" stroke="none" fill="#A5D6D3" fill-rule="evenodd" cx="699.5" cy="579.5" r="1.5"></circle>
            <circle id="oval" stroke="none" fill="#CFC94E" fill-rule="evenodd" cx="712.5" cy="617.5" r="1.5"></circle>
            <circle id="oval" stroke="none" fill="#8CC8C8" fill-rule="evenodd" cx="692.5" cy="738.5" r="1.5"></circle>
            <circle id="oval" stroke="none" fill="#3EC08D" fill-rule="evenodd" cx="884.5" cy="657.5" r="1.5"></circle>
            <circle id="oval" stroke="none" fill="#66739F" fill-rule="evenodd" cx="918.5" cy="681.5" r="1.5"></circle>
            <circle id="oval" stroke="none" fill="#C48C47" fill-rule="evenodd" cx="903.5" cy="723.5" r="1.5"></circle>
            <circle id="oval" stroke="none" fill="#A24C65" fill-rule="evenodd" cx="760.5" cy="587.5" r="1.5"></circle>
            <circle id="oval" stroke="#66739F" stroke-width="2" fill="none" cx="745" cy="603" r="3"></circle>
            <circle id="oval" stroke="#EFB549" stroke-width="2" fill="none" cx="716" cy="597" r="3"></circle>
            <circle id="oval" stroke="#FFE100" stroke-width="2" fill="none" cx="681" cy="751" r="3"></circle>
            <circle id="oval" stroke="#3CBC83" stroke-width="2" fill="none" cx="896" cy="680" r="3"></circle>
            <polygon id="diamond" stroke="#C46F82" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" points="886 705 889 708 886 711 883 708"></polygon>
            <path d="M736,577 C737.65825,577 739,578.34175 739,580 C739,578.34175 740.34175,577 742,577 C740.34175,577 739,575.65825 739,574 C739,575.65825 737.65825,577 736,577 Z" id="bubble-rounded" stroke="#3CBC83" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>
          </svg>

          <h2 className='font-mono font-bold text-xl text-red-600'>Empty-card 😳</h2>
        </div>

      </div>

    </div>
  )
}

export default Korzina