import React from 'react'
import {BsFacebook , BsGithub ,BsDiscord} from 'react-icons/bs'
import Link  from 'next/link'

const Footer = () => {
  return (
    <div>
        <div className='flex w-full items-center justify-between px-4 py-4 transition-all lg:px-10 lg:py-6'>
            <h2 className='w-64 text-xl font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-sm'>Vu. © 2023</h2>
            <div className='flex items-center space-x-4 md:space-x-5'>
                <h2 className='text-xl font-semibold text-[#e5e5e5] transition duration-200 hover:text-white hidden md:text-sm  md:block'>
                Contact me: 
                </h2>
                <Link className='scale-125 hover:scale-150 ease-in duration-600' href={'https://www.facebook.com/profile.php?id=100063781540097'}>
                <BsFacebook/>
                </Link>
                <Link className='scale-125 hover:scale-150 ease-in duration-600' href={'https://github.com/ngovanvu2003'}>
                <BsGithub/>
                </Link>
                <Link className='scale-125 hover:scale-150 ease-in duration-600' href={'https://github.com/ngovanvu2003'}>
                <BsDiscord/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer