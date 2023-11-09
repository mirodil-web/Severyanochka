import React, { useState } from 'react'
import {Badge} from 'antd'
import { Link } from 'react-router-dom';
import Logo from '../../public/assets/logo.svg'
import Heart from '../../public/assets/heart.png'
import Shop from '../../public/assets/shopping-cart.png'
import Exit from '../../public/assets/Exit.svg'
import Logopro from '../../public/assets/logox.svg'
import Hamburger from '../../public/assets/icons8-hamburger-menu-48.png'


const Header = ({ cardLike, korzina }) => {

    const [badge, setBadge] = useState(5)
    const [open, setOpen] = useState(false)


    const [resNav, setResNav] = useState(false)


    return (
        <>

            <header className='py-5 shadow-md   sticky top-0 bg-white z-20'>

                {/* container */}
                <div className=' container '>

                    <div className="flex justify-between items-center mb-3 sm:m-0">

                        <div className='flex  items-center'>
                            {/* header logo */}
                            <Link to="/" className='mr-10'>
                                <img className='inline-block sm:w-16 minm:hidden' width={55} src={Logopro} alt="logo" />
                                <img className='hidden minm:block' width={152} height={32} src={Logo} alt="logo img" />
                            </Link>
                            {/* katalog block  div */}
                            <div className='flex items-center'>
                                <Link to='/katalog' className='hidden sm:inline-block rounded-nor bg-Yashil  text-white p-2 space-x-2 mr-4'>
                                    <span className='text-base font-normal'> Каталог</span>
                                </Link>
                                {/* modal */}
                                {open && <div onClick={() => setOpen(false)} className='w-full flex justify-center items-center h-full fixed left-0 bottom-0 z-20 '>
                                </div>
                                }
                                {open && <div className='app min-h-screen sm: flex shadow fixed bg-[#FCD5BACC] bottom-0 left-0 h-full w-full justify-center items-center z-10'>
                                    <div className='bg-white rounded-nor text-center px-5 sm:px-20 pt-7 sm:pt-16 pb-5 sm:pb-10   relative z-20'>
                                        <img src={Exit} onClick={() => setOpen(false)} className='cursor-pointer mb-8 absolute right-0 top-0' alt="Exit" />
                                        <h3 className=' text-xl sm:text-2xl font-bold mb-8'>Вход</h3>
                                        <div className='sm:mb-8 mb-5 text-left'>
                                            <label className='text-[#8F8F8F]' htmlFor="tel">Телефон</label><br />
                                            <input placeholder='+7  (   )' id='tel' className='border border-[#70C05B] shadow-xl rounded-nor  p-1.5  sm:p-3' type="tel" />
                                        </div>
                                        {/* bxod */}
                                        <button className='mb-8 p-2 sm:p-4 w-full text-[#FF6633] bg-[#FCD5BACC] rounded-nor'>Вход</button>
                                        {/* button block */}
                                        <div className='flex justify-between items-center'>
                                            <button className='rounded-nor text-xs border border-Yashil p-2 text-Yashil'>Регистрация</button>
                                            <button className='p-2 text-xs'>Забыли пароль?</button>
                                        </div>
                                    </div>
                                </div>
                                }
                            
                            </div>
                        </div>

                        <div className='flex items-center'>
                            {/* block div */}
                            <div className="flex items-center space-x-7 mr-10">
                                <Link className='hidden sm:inline-block' to='izbrozenoe'>
                                    <Badge count={`${cardLike.length}`}>
                                        <button className='flex flex-col justify-center items-center'>
                                            <img className='mb-2' src={Heart} width={24} height={24} alt="heart img" />
                                            <span>Избранное</span>
                                        </button>
                                    </Badge>
                                </Link>
                                <Link className='hidden sm:inline-block' to='korzina'>
                                    <Badge count={korzina.length}>
                                        <button className='flex flex-col justify-center items-center'>
                                            <img className='mb-2' src={Shop} width={24} height={24} alt="heart img" />
                                            <span>Корзина</span>
                                        </button>
                                    </Badge>
                                </Link>
                            </div>
                            <button onClick={() => setOpen(true)} className=' hidden sm:block hover:shadow-xl px-5 py-1 shadow-Yashil shadow-sm rounded-nor hover:bg-Yashil/50  border'>
                                <span className='font-bold'>Вход </span>
                            </button>
                        </div>

                        <button onClick={() => setResNav(true)} className='sm:hidden block'>
                            <img src={Hamburger} className='sm:w-10' width={30} alt="hamburger img" />
                        </button>
                    </div>

                </div>
                

              
                {/* responsive nav */}
                {resNav && <div className="w-full left-0 top-0  h-full fixed bg-blue-950/50 backdrop-blur-sm block lg:hidden">
                    <div className='w-[60%] h-full   bg-yellow-300 p-7  lg:items-center '>
                        <span onClick={() => setResNav(false)} className='absolute right-10 top-7 text-xl shadow rounded-full  p-1 px-2.5 shadow-yellow-500 text-blue-200'>⨉</span>
                        <div className="flex flex-col ">
                            <div className="">
                                <img className='mb-5' width={152} height={32} src={Logo} alt="logo img" />
                            </div>
                            <hr className='mb-5' />

                            <Link onClick={() => resNav(false)} to='/katalog' className='w-full hover:shadow-xl px-5 py-2 bg-Yashil shadow-cyan-600 shadow-sm rounded-nor hover:bg-Yashil/50  border mb-5 text-center'>
                                <span className='text-base font-bold'> Каталог</span>
                            </Link>

                            <div className="flex justify-between mb-5">
                                <Link onClick={() => setResNav(false)} className='mr-7' to='izbrozenoe'>
                                    <Badge  count={`${cardLike.length}`}>
                                        <button className='flex flex-col justify-center items-center'>
                                            <img className='mb-2' src={Heart} width={24} height={24} alt="heart img" />
                                            <span>Избранное</span>
                                        </button>
                                    </Badge>
                                </Link>
                                <Link onClick={() => setResNav(false)} className='' to='korzina'>
                                    <Badge count={`${korzina.length}`}>
                                        <button className='flex flex-col justify-center items-center'>
                                            <img className='mb-2' src={Shop} width={24} height={24} alt="heart img" />
                                            <span>Корзина</span>
                                        </button>
                                    </Badge>
                                </Link>
                            </div>
                            <div className="flex justify-center">
                                <button onClick={() => setOpen(true)} className=' w-full hover:shadow-xl px-5 py-2 bg-Yashil shadow-cyan-600 shadow-sm rounded-nor hover:bg-Yashil/50  border'>
                                    <span className='font-bold '>Вход </span>
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
                }
            </header>

        </>
    )
}

export default Header