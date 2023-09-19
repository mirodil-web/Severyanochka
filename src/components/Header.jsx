import React, { useState } from 'react'
import { Badge } from 'antd';
import { createRoot } from "react-dom/client";
import { Link } from 'react-router-dom';
import Logo from '../../public/assets/logo.svg'
import Menu from '../../public/assets/icons.png'
import Search from '../../public/assets/search-interface-symbol.png'
import Heart from '../../public/assets/heart.png'
import Kub from '../../public/assets/kub.svg'
import Shop from '../../public/assets/shopping-cart.png'
import Avatarx from '../../public/assets/avatar.svg'
import Buttonx from '../../public/assets/Button.svg'
import Exit from '../../public/assets/Exit.svg'


const Header = () => {

    const [badge, setBadge] = useState(5)
    const [open, setOpen] = useState(false)
    const [isOverflowhidden, setOverflowhidden] = useState()

    const toggleowerflow = () => {
        setOverflowhidden(!isOverflowhidden);
    }


    return (
        <header className='py-5 shadow-md'>

            {/* container */}
            <div className='container flex justify-between items-center'>

                {/* header logo */}
                <Link to="/">
                    <img width={152} height={32} src={Logo} alt="logo img" />
                </Link>

                {/* katalog block  div */}
                <div className='flex items-center'>

                    <Link to='katalog' className='rounded-nor bg-Yashil flex text-white p-2 space-x-2 mr-4'>
                        <img width={24} height={24} src={Menu} alt="Hamburger icon" />
                        <span className='text-base font-normal'> Каталог</span>
                    </Link>

                    {/* modal */}
                    {open && <div onClick={() => setOpen(false)} className='w-full flex justify-center items-center h-full fixed left-0 bottom-0 z-10 '>

                    </div>
                    }
                    {open && <div className='app min-h-screen flex fixed bg-[#FCD5BACC] bottom-0 left-0 h-full w-full justify-center items-center z-10'>
                        <div className='bg-white rounded-nor text-center px-20 pt-16 pb-10   relative z-20'>
                            <img src={Exit} onClick={() => setOpen(false)} className='cursor-pointer mb-8 absolute right-0 top-0' alt="Exit" />
                            <h3 className='text-2xl font-bold mb-8'>Вход</h3>
                            <div className='mb-8 text-left'>
                                <label className='text-[#8F8F8F]' htmlFor="tel">Телефон</label><br />
                                <input placeholder='+7  (   )' id='tel' className='border border-[#70C05B] shadow-2xl shadow-Yashil rounded-nor  p-3' type="tel" />
                            </div>
                            {/* bxod */}
                            <button className='mb-8 p-4 w-full text-[#FF6633] bg-[#FCD5BACC] rounded-nor'>Вход</button>

                            {/* button block */}
                            <div className='flex justify-between items-center'>
                                <button className='rounded-nor text-xs border border-Yashil p-2 text-Yashil'>Регистрация</button>
                                <button className='p-2 text-xs'>Забыли пароль?</button>
                            </div>

                        </div>
                    </div>
                    }

                    <div className='relative'>
                        <input className='p-2 border border-Yashil rounded-nor w-[470px] ' type="search" placeholder='Найти товар' />
                        <img width={22} height={22} className='absolute right-2 top-2 bg-white' src={Search} alt="Search img" />
                    </div>
                </div>

                {/* block div */}
                <div className="flex items-center space-x-7">

                    <Link to='izbrozenoe'>
                        <Badge count={5}>
                            <button className='flex flex-col justify-center items-center'>
                                <img className='mb-2' src={Heart} width={24} height={24} alt="heart img" />
                                <span>Избранное</span>
                            </button>
                        </Badge>
                    </Link>

                    <Link to='korzina'>
                        <Badge count={badge}>
                            <button className='flex flex-col justify-center items-center'>
                                <img className='mb-2' src={Shop} width={24} height={24} alt="heart img" />
                                <span>Корзина</span>
                            </button>
                        </Badge>
                    </Link>


                </div>

                <button onClick={() => setOpen(true)} className='flex items-center'>
                    <img width={40} height={40} className='mr-2.5' src={Avatarx} alt="User img" />
                    <span className='mr-2.5'> Алексей</span>
                    <img width={40} height={40} src={Buttonx} alt="Button img" />
                </button>

            </div>

        </header>
    )
}

export default Header