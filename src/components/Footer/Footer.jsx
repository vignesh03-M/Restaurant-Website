import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <>
        <div className='text-white mt-20'>
            <div data-aos="fade-down" 
            className='container bg-gradient-to-b
            from-primary to-primaryDark rounded-t-3xl'>
                    {/* Heading section */}
                    <h1 className='py-10 text-3xl font-bold
                    text-yellow text-center' >Contact Us</h1>
                    {/* grid section */}
                    <div className='grid grid-cols-1 sm:grid-cols-2
                    md:grid-cols-3 gap-14 border-b-2 border-white
                    pb-6'>
                        {/* Address section */}
                        <div className='text-center space-y-4'>
                            <div className='flex justify-center'>
                                <IoLocationSharp className='text-5xl'/>
                            </div>
                            <p>
                            1234 Culinary Avenue,
                            Foodie Town, FL 56789
                            </p>
                        </div>
                        {/* Email section */}
                        <div className='text-center space-y-4'>
                            <div className='flex justify-center'>
                                <MdEmail className='text-5xl'/>
                            </div>
                            <p>info@restaurant.com</p>
                            <p>contact@restaurant.com</p>
                        </div>
                        {/* Email section */}
                        <div className='text-center space-y-4'>
                            <div className='flex justify-center'>
                                <FaPhone className='text-5xl'/>
                            </div>
                            <div>
                                <p>(123) 456-7890</p>
                                <p>(987) 654-3210</p>
                            </div>
                        </div>
                    </div>   
                    {/* copyright sectioin */}
                    <div className='flex justify-between p-4
                    items-center'>
                        <p>© 2024 ABC. All rights reserved</p>
                        <div className='flex items-center gap-6'>
                            <a href='#'>Privacy Policy</a>
                            <a href='#'>Terms & conditions</a>
                        </div>
                    </div>

            </div>
        </div>
    </>
  )
}

export default Footer