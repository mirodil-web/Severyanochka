import React from 'react'

const Filtr = () => {
  return (
      <div>
          <div className='mr-10 max-w-[272px] w-full'>
              <h3 className='font-bold p-2.5 bg-[#F3F2F1] w-full mb-10'>Фильтр</h3>

              <div>

                  <div className='flex justify-between items-center mb-3'>
                      <h4 className='text-base font-normal'>Цена</h4>
                      <button className='bg-[#F3F2F1] text-xs text-[#606060] p-2 rounded-nor'>Очистить</button>
                  </div>

                  <div className="flex justify-between mb-3">
                      <input value={1} className='max-w-[124px] border border-[#BFBFBF] rounded-nor py-2 px-4' type="text" placeholder='1' />
                      <span>{ }</span>
                      <input value={100} className='max-w-[124px] border border-[#BFBFBF] rounded-nor py-2 px-4' type="text" placeholder='100' />
                  </div>

                  <input className='flex justify-center' type="range" name="" id="" />


                  <button className='bg-[#FF6633] text-white rounded-nor w-full p-2'>Применить</button>
              </div>
          </div>
    </div>
  )
}

export default Filtr