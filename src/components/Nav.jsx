import React from 'react'
import user from '../assets/user.svg'
import store from '../assets/store.svg'

import menu from '../assets/menu.svg'


const Nav = () => {
  return (
    <div >
    <div className='flex justify-between bg-zinc-700 p-5 pt-5 pb-5 text-white rounded-2xl items-center'>
        <div className='flex justify-between w-100'  >
             <div><a href="">Home</a></div>
             <div><a href="">Shop</a></div>
             <div> <a href="">Collection</a></div>
             <div><a href="">About</a></div>

             <div><a href="">Contact</a></div>
        </div>
        <div className='w-30 text-4xl font-bold'>UPO</div>
        <div className='w-50 flex justify-around'>
            <div className='text-white cursor-pointer'>
              <img src={store} alt=""className='w-6' />

            </div>
            <div className='text-white cursor-pointer'>
              <img src={user} alt="" className='w-6'/>
            </div>
            <div className='text-white cursor-pointer'>
              <img src={menu} alt="" className='w-6' />

            </div>
        </div>
    </div>
    </div>
  )
}

export default Nav