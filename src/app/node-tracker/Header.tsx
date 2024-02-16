import React from 'react'
import { FaGasPump } from "react-icons/fa6";
// import { FaGasPump } from 'react-icons/fa';
import { LuSunMedium } from "react-icons/lu";
import { FaEthereum } from "react-icons/fa6";

const Header = () => {
  return (
    <div className='w-full px-4 md:px-20 py-3 flex justify-between border-b'>
        <div className='flex gap-3 items-center'>
        <small className=' flex items-center md:text-[13px] text-[10px] gap-1 text-gray-600'>ETH Price <span className=' text-blue-600'>$2,701</span> <span className=' text-red-600'>(-0.79%)</span></small>
        <small className=' flex items-center md:text-[13px] text-[10px] gap-1 text-gray-400'><FaGasPump/> <span className='text-gray-600'>Gas:</span> <span className=' text-blue-600'>11 Gwei</span></small>
        </div>
        <div className='flex items-center gap-3'>
            <button type='button' className='p-2 border rounded-md text-sm text-blue-600'><LuSunMedium/></button>
            <button type='button' className='p-2 border rounded-md text-sm text-black'><FaEthereum/></button>
        </div>
    </div>
  )
}

export default Header