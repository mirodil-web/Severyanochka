import { Breadcrumbs } from '@material-tailwind/react'
import React, { useEffect } from 'react'
import Phone from '../../public/assets/phone.svg'
import { Link } from 'react-router-dom'

const Vakansi = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <section className='pb-20'>
            <div className="container">

                <Breadcrumbs className='space-x-4 py-6'>
                    <Link className='mr-4 text-xs hover:text-yellow-600' to='/'>
                        Главная
                    </Link>

                    <span className='text-xs '>
                        Вакансии
                    </span>
                </Breadcrumbs>

                <h2 className='font-Rubik text-4xl minm:text-5xl md:text-6xl font-bold text-qorag mb-14'>Вакансии</h2>

                <ul className='grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2  gap-10'>

                    <li className='bg-white shadow-lg p-8 rounded-nor' >
                        <h3 className='text-2xl font-bold mb-4'>Должность</h3>
                        <div className='mb-4'>
                           <h4 className='text-lg font-normal mb-2'>Требования</h4>
                            <p className='text-base'>Текст про требования текст про требования текст про требования текст про требования текст про требования</p>
                        </div>

                        <div className='mb-4'>
                            <h4 className='text-lg font-normal mb-2'>Обязанности</h4>
                            <p className='text-base'>Текст про обязаности текст про обязаности текст про обязаности текст про обязаности текст про обязаности</p>
                        </div>

                        <div className='mb-4'>
                            <h4 className='text-lg font-normal mb-2'>Условия</h4>
                            <p className='text-base'>Текст про условия текст про условия текст про условия текст про условия текст про условия текст про условия</p>
                        </div>


                        <div>
                            <span className='text-lg mb-3'>Звоните</span>
                            <div className='flex items-center'>
                                <img className='mr-2' src={Phone} alt="phone img " />
                                <span className='underline'>+7 904 271 35 90</span>
                            </div>
                        </div>
                    </li>

                    <li className='bg-white shadow-lg p-8 rounded-nor' >
                        <h3 className='text-2xl font-bold mb-4'>Должность</h3>
                        <div className='mb-4'>
                            <h4 className='text-lg font-normal mb-2'>Требования</h4>
                            <p className='text-base'>Текст про требования текст про требования текст про требования текст про требования текст про требования</p>
                        </div>

                        <div className='mb-4'>
                            <h4 className='text-lg font-normal mb-2'>Обязанности</h4>
                            <p className='text-base'>Текст про обязаности текст про обязаности текст про обязаности текст про обязаности текст про обязаности</p>
                        </div>

                        <div className='mb-4'>
                            <h4 className='text-lg font-normal mb-2'>Условия</h4>
                            <p className='text-base'>Текст про условия текст про условия текст про условия текст про условия текст про условия текст про условия</p>
                        </div>


                        <div>
                            <span className='text-lg mb-3'>Звоните</span>
                            <div className='flex items-center'>
                                <img className='mr-2' src={Phone} alt="phone img " />
                                <span className='underline'>+7 904 271 35 90</span>
                            </div>
                        </div>
                    </li>

                    <li className='bg-white shadow-lg p-8 rounded-nor' >
                        <h3 className='text-2xl font-bold mb-4'>Должность</h3>
                        <div className='mb-4'>
                            <h4 className='text-lg font-normal mb-2'>Требования</h4>
                            <p className='text-base'>Текст про требования текст про требования текст про требования текст про требования текст про требования</p>
                        </div>

                        <div className='mb-4'>
                            <h4 className='text-lg font-normal mb-2'>Обязанности</h4>
                            <p className='text-base'>Текст про обязаности текст про обязаности текст про обязаности текст про обязаности текст про обязаности</p>
                        </div>

                        <div className='mb-4'>
                            <h4 className='text-lg font-normal mb-2'>Условия</h4>
                            <p className='text-base'>Текст про условия текст про условия текст про условия текст про условия текст про условия текст про условия</p>
                        </div>


                        <div>
                            <span className='text-lg mb-3'>Звоните</span>
                            <div className='flex items-center'>
                                <img className='mr-2' src={Phone} alt="phone img " />
                                <span className='underline'>+7 904 271 35 90</span>
                            </div>
                        </div>
                    </li>

                    

                    <li className='bg-white shadow-lg p-8 rounded-nor' >
                        <h3 className='text-2xl font-bold mb-4'>Должность</h3>
                        <div className='mb-4'>
                           <h4 className='text-lg font-normal mb-2'>Требования</h4>
                            <p className='text-base'>Текст про требования текст про требования текст про требования текст про требования текст про требования</p>
                        </div>

                        <div className='mb-4'>
                            <h4 className='text-lg font-normal mb-2'>Обязанности</h4>
                            <p className='text-base'>Текст про обязаности текст про обязаности текст про обязаности текст про обязаности текст про обязаности</p>
                        </div>

                        <div className='mb-4'>
                            <h4 className='text-lg font-normal mb-2'>Условия</h4>
                            <p className='text-base'>Текст про условия текст про условия текст про условия текст про условия текст про условия текст про условия</p>
                        </div>


                        <div>
                            <span className='text-lg mb-3'>Звоните</span>
                            <div className='flex items-center'>
                                <img className='mr-2' src={Phone} alt="phone img " />
                                <span className='underline'>+7 904 271 35 90</span>
                            </div>
                        </div>
                    </li>

                    <li className='bg-white shadow-lg p-8 rounded-nor' >
                        <h3 className='text-2xl font-bold mb-4'>Должность</h3>
                        <div className='mb-4'>
                            <h4 className='text-lg font-normal mb-2'>Требования</h4>
                            <p className='text-base'>Текст про требования текст про требования текст про требования текст про требования текст про требования</p>
                        </div>

                        <div className='mb-4'>
                            <h4 className='text-lg font-normal mb-2'>Обязанности</h4>
                            <p className='text-base'>Текст про обязаности текст про обязаности текст про обязаности текст про обязаности текст про обязаности</p>
                        </div>

                        <div className='mb-4'>
                            <h4 className='text-lg font-normal mb-2'>Условия</h4>
                            <p className='text-base'>Текст про условия текст про условия текст про условия текст про условия текст про условия текст про условия</p>
                        </div>


                        <div>
                            <span className='text-lg mb-3'>Звоните</span>
                            <div className='flex items-center'>
                                <img className='mr-2' src={Phone} alt="phone img " />
                                <span className='underline'>+7 904 271 35 90</span>
                            </div>
                        </div>
                    </li>

                    <li className='bg-white shadow-lg p-8 rounded-nor' >
                        <h3 className='text-2xl font-bold mb-4'>Должность</h3>
                        <div className='mb-4'>
                            <h4 className='text-lg font-normal mb-2'>Требования</h4>
                            <p className='text-base'>Текст про требования текст про требования текст про требования текст про требования текст про требования</p>
                        </div>

                        <div className='mb-4'>
                            <h4 className='text-lg font-normal mb-2'>Обязанности</h4>
                            <p className='text-base'>Текст про обязаности текст про обязаности текст про обязаности текст про обязаности текст про обязаности</p>
                        </div>

                        <div className='mb-4'>
                            <h4 className='text-lg font-normal mb-2'>Условия</h4>
                            <p className='text-base'>Текст про условия текст про условия текст про условия текст про условия текст про условия текст про условия</p>
                        </div>


                        <div>
                            <span className='text-lg mb-3'>Звоните</span>
                            <div className='flex items-center'>
                                <img className='mr-2' src={Phone} alt="phone img " />
                                <span className='underline'>+7 904 271 35 90</span>
                            </div>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </section>
    )
}

export default Vakansi