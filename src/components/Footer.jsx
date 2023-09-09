import React from 'react'
import '../language/language'
import Logo from '../../public/assets/logox.svg'
import LogoIns from '../../public/assets/instagram.svg'
import LogoFacke from '../../public/assets/facebook.svg'
import LogoOk from '../../public/assets/ok.svg'
import LogoWk from '../../public/assets/vkontakte.svg'
import Telephone from '../../public/assets/phone.svg'
import Zasoviskiy from '../../public/assets/logo-zasovskiy-small-black.svg'



const Footer = () => {




    return (
        <footer className='bg-footerbg bg-[#f9f4e2] py-6'>
            <div className="container flex justify-between ">
                <a href="/">
                    <img src={Logo} alt="Logo" />

                </a>

                <nav>
                    <ul className='flex space-x-10 text-xs'>
                        <li>
                            <a href="#"> О компании</a>
                        </li>
                        <li>
                            <a href="#">Контакты</a>
                        </li>
                        <li>
                            <a href="#">Вакансии</a>
                        </li>
                        <li>
                            <a href="#">Статьи</a>
                        </li>
                        <li>
                            <a href="#">Политика обработки персональных данных</a>
                        </li>
                    </ul>
                </nav>


                <div className='flex items-start'>
                    <ul className='flex items-center space-x-4 mr-10'>
                        <li>
                            <a href="https://www.instagram.com/tolamirzayev_077/">
                                <img src={LogoIns} alt="Instagram logo" />
                            </a>
                        </li>
                        <li>
                            <a href="https://m.vk.com/">
                                <img src={LogoWk} alt="wk logo" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/profile.php?id=100089886710192">
                                <img src={LogoFacke} alt="Fackebok logo" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/tolamirzayev_077/">
                                <img src={LogoOk} alt="Ok logo" />
                            </a>
                        </li>
                    </ul>

                    <address className='flex flex-col '>

                        <div className='flex items-center mb-7'>
                            <img className='mr-2' src={Telephone} alt="Phone" />
                            <span>8 800 777 33 33</span>
                        </div>

                        <div className='flex items-center'>
                            <span className='mr-2'>Дизайн</span>
                            <img src={Zasoviskiy} alt="Dizayn" />
                        </div>
                    </address>
                </div>
            </div>
        </footer>
    )
}

export default Footer