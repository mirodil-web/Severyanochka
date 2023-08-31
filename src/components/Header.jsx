import React from 'react'
import Logo from '../../public/assets/logo.svg'
import Menu from '../../public/assets/icons.png'
import Search from '../../public/assets/search-interface-symbol.png'
import Heart from '../../public/assets/heart.png'
import Kub from '../../public/assets/kub.svg'
import Shop from '../../public/assets/shopping-cart.png'
import Avatar from '../../public/assets/avatar.svg'
import Button from '../../public/assets/Button.svg'



const Header = () => {
    return (

        //   header
        <header className='py-5 shadow-md'>

            {/* container */}
            <div className='container flex justify-between items-center'>

                {/* header logo */}
                <a href="#">
                    <img src={Logo} alt="logo img" />
                </a>

                {/* katalog block  div */}
                <div className='flex items-center'>
                    <button className='rounded-nor bg-Yashil flex text-white p-2 space-x-2 mr-4'>
                        <img width={24} height={24} src={Menu} alt="Hamburger icon" />
                        <span className='text-base font-normal'> Каталог</span>
                    </button>

                    <div className='relative'>
                        <input className='p-2 border border-Yashil rounded-nor w-besh ' type="search" placeholder='Найти товар' />
                        <img width={22} height={22} className='absolute right-2 top-2 bg-white' src={Search} alt="Search img" />
                    </div>
                </div>

                {/* block div */}
                <div className="flex items-center space-x-7">
                    <button className='flex flex-col justify-center items-center'>
                        <img className='mb-2' src={Heart} width={24} height={24} alt="heart img" />
                        <span>Избранное</span>
                    </button>
                    <button className='flex-col flex justify-center items-center'>
                        <img className='mb-2' src={Kub} width={24} height={24} alt="heart img" />
                        <span>Заказы</span>
                    </button>
                    <button className='flex flex-col justify-center items-center'>
                        <img className='mb-2' src={Shop} width={24} height={24} alt="heart img" />
                        <span>Корзина</span>
                    </button>
                </div>

                    <button className='flex items-center'>
                        <img className='mr-2.5' src={Avatar} alt="User img" />
                        <span className='mr-2.5'> Алексей</span>
                         <img src={Button} alt="Button img" />
                    </button>

            </div>
        </header>
    )
}

export default Header