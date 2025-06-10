import React from 'react'
import shopImg from '../Images/shopImg.avif'
import upArrow1 from '../assets/upArrow1.svg'
import letsTalk from '../Images/letsTalk.jpg'

const Shop = () => {
  return (
    <div className='mt-8'>
        <div className='text-6xl font-bold pb-10 border-b-2'>Shop By Room</div>
        <div className='flex justify-between text-2xl   pb-3 border-b-2 mt-5'>
            <div>01 Living Room</div>
            <div ><img src={upArrow1} alt="" /></div>
        </div>

        <div className='flex justify-between text-2xl   pb-3 border-b-2 mt-5'>
            <div>02 Bedroom</div>
                    <div ><img src={upArrow1} alt="" /></div>

        </div>

        <div className='flex justify-between text-2xl font-bold pb-3 border-b-2 mt-5'>
            <div>03 Dinning Room</div>
                       <div ><img src={upArrow1} alt="" /></div>

        </div>

        <div className='flex justify-between text-2xl  pb-3 border-b-2 mt-5'>
            <div>04 Office Room</div>
                      <div ><img src={upArrow1} alt="" /></div>

        </div>

        <div className='flex justify-between text-2xl   pb-3 border-b-2 mt-5'>
            <div>05 Kitchen Room</div>
                       <div ><img src={upArrow1} alt="" /></div>

        </div>
         
         <div className='w-50 absolute '>
            <img src={shopImg} alt=""  className='rounded-2xl rotate-30 -translate-y-60 translate-x-130 ' />
         </div>

 <div className='mt-5    rounded w-full h-150 p-4 bg-center bg-no-repeat'  style={{
    backgroundImage: `url(${letsTalk})`,
    backgroundSize: "cover",
      
  }}>

<div className='mt-10 text-white text-7xl font-bold w-150'>LETS'S TALK WITH US </div>
<div className='absolute -bottom-840 right-30'>

<div className='bg-white w-70 p-5 rounded-2xl cursor-pointer font-bold '>Subscribte to Our Newsletter for More Information </div>
<div className='bg-white w-70 p-5 rounded-2xl cursor-pointer font-bold mt-10'>
    <div >Get all update about our store. Just subsribe and get all news instantly. </div>
    <div className='border rounded p-2 mt-5 flex'>
        <input type="text" name="" id="" placeholder='Enter Your Email' className='border-0 focus:border-none outline-none' />
        <div className='text-2xl'>&gt;</div>
    </div>
</div>
</div>
 </div>
    </div>

  )
}

export default Shop