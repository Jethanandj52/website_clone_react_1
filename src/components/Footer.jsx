import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <div className='mt-10 bg bg-zinc-300 px-10 py-5 rounded-2xl'>
        <div className='flex justify-between'>
            <div className='flex  justify-around gap-6 items-center'>
                <div className='text-2xl font-bold'>UPO</div>
                
                <div className='cursor-pointer'>
                      <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className='cursor-pointer'>
                       <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className='cursor-pointer'>
                      <FontAwesomeIcon icon={faGithub} />
                </div>
                <div className='cursor-pointer'>
                     <FontAwesomeIcon icon={faLinkedin} />
                </div>

            </div>
            <div className='border rounded    flex px-5'>
        <input type="text" name="" id="" placeholder='Enter Your Email' className='border-0 focus:border-none outline-none' />
        <div className='text-2xl'>&gt;</div>
    </div>
        </div>
        <div className='font-bold text-8xl mt-5 text-center'>
            LET'S Talks WITH US
        </div>
        <div className='flex justify-between mt-5 text-[14px]'>
            <div className=''>&copy; Copyright 2024. Fupo.com</div>
            <div className='flex justify-around gap-6'>
                <div><a href="">Home</a></div>
                <div><a href="">Shop</a></div>
                <div><a href="">Collections</a></div>
                <div><a href="">About </a></div>
                <div><a href="">Contact Us</a></div>
            </div>
        </div>
    </div>
  )
}

export default Footer