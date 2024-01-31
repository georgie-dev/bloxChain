'use client'
import React from 'react'
import Image from 'next/image'
import { FaRegCircleUser } from "react-icons/fa6";
import { UseSelector, useSelector } from 'react-redux';
import Link from 'next/link';

const Navigation = () => {
  const {userDetails} = useSelector((state : any)=> state.user)

  return (
    <div className='w-full px-20 py-3 flex justify-between border-b'>
        <Link href='#'>
        <Image
        alt='user'
        src='/logo-etherscan.svg'
        width={150}
        height={1500}
        />
        </Link>
        <Link href='#' className='flex items-center text-black gap-1'>
            <button type='button' className='p-2'><FaRegCircleUser/></button>
            {/* <small className=' text-sm text-ellipsis w-1 font-medium'>{userDetails?.wallet}</small> */}
            <small className=' text-sm font-medium'>$0.00</small>
        </Link>
    </div>
  )
}

export default Navigation