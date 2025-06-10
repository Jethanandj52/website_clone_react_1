import React from 'react'
import packages from '../assets/package.svg'
import order from '../assets/order.svg'
import exchange from '../assets/exchange.svg'




 

const Cards = () => {
  return (
    <div className='mt-10 flex justify-around '>
        <div className='bg-zinc-300 w-100 p-10 rounded-2xl text-center h-70 leading-10 flex flex-col justify-center'>
        <div className=' flex justify-center items-center mb-5'>
            <img src={packages} alt="" width={80}  />

        </div>
        <div className='text-4xl '>Made To Order</div>
        <div>All pieces made to order for you</div>
        </div>
        
        <div className='bg-zinc-300 w-100 p-10 rounded-2xl text-center h-70 leading-10 flex flex-col justify-center'>
        <div className=''>
            <div className=' flex justify-center items-center mb-5'>
            <img src={order} alt="" width={80}  />

        </div>
        </div>
        <div className='text-4xl '>Free Delivery</div>
        <div>Free Delivery for order Word-wide</div>
        </div>

        <div className='bg-zinc-300 w-100 p-10 rounded-2xl text-center h-70 leading-10 flex flex-col justify-center'>
       <div className=' flex justify-center items-center mb-5'>
            <img src={exchange} alt="" width={80}  />

        </div>
        <div className='text-4xl '>Free Exchange</div>
        <div>Free Exchange on all products</div>
        </div>
    </div>
  )
}

export default Cards