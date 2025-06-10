import React from 'react'
import heroImg from '../Images/heroImg.jpg'

const Hero = () => {
    return (
   
      <div
      style={{ backgroundImage: `url(${heroImg})` }}
      className="bg-cover h-screen rounded-2xl mt-4 "
      >
        <div className='text-white p-2 text-9xl font-bold '>FURNITURE FOR NOW OR FOREVER</div>
        <div className='bg-white flex justify-between rounded-2xl p-5  m-3 mt-60' >
            <div>
                <div>Made By</div>
            <select name="" id="" className='border w-50 rounded p-1 mt-1 cursor-pointer'>
                    <option value="Wood" >Wood</option>
                    <option value="plastic" >Plastic</option>
                    <option value="iron" >Iron</option>
                    <option value="steel" >Steel</option>

                </select>
            </div>
            <div>
                 <div>Select Type</div>
            <select name="" id="" className='border w-50 rounded p-1 mt-1 cursor-pointer'>
                    <option value="sofa" >Sofa</option>
                    <option value="dinning table" >Dinning Table</option>
                    <option value="bed" >Bed</option>
                    <option value="pool" >Pool</option>

                </select>
            </div>
            <div>
                 <div>Price</div>
            <select name="" id="" className='border w-50 rounded p-1 mt-1 cursor-pointer'>
                    <option value='' >$129-$359</option>
                    <option value='' >$209-$409</option>
                    <option value='' >$529-$500</option>
                    <option value='' >$129-$359</option>

                </select>
            </div>
            <div>
                
                <button className='bg-black w-50 p-1 rounded text-white text-left cursor-pointer mt-7 font-bold px-2'>Search</button>
            </div>
        </div>

        </div>
       
 
  )
}

export default Hero
