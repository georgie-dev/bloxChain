'use client'
import React, {useState} from 'react'
import Link from 'next/link'
import { BiMenu } from 'react-icons/bi'
import { Sidebar } from '.'
import Image from 'next/image'

const Nav = () => {

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
        <div className='w-full my-0 mx-auto z-20 flex flex-col border-b border-[#ffffff33]/20 bg-[#121d33] sticky top-0'>
            <div className=' box-border my-0 mx-auto max-w-[80rem] flex items-center justify-between py-0 px-4 w-full h-[4.75rem]'>

            <Link href='name'>
                <Image
                alt='logo'
                src='/xBlockchain.png'
                width={432}
                height={48}
                priority
                />
            </Link>
            <div className=' w-full justify-end flex items-center gap-5'>
                <Link href='/login' className=' border-2 border-white bg-transparent text-white rounded-lg hover:shadow-inner py-3 px-4 text-sm font-medium hidden md:flex hover:text-[#ccd2de] hover:border-[#ccd2de]'>Log In</Link>
                <Link href='/signup' className=' bg-white text-[#121d33] rounded-lg py-3 px-4 text-sm font-medium hidden md:flex hover:bg-[#dfe3eb]'>Sign Up</Link>
                <BiMenu size={20} onClick={toggleSidebar} className=' md:hidden block text-white'/>
            </div>
            </div>
        </div>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </>
    )
}

export default Nav