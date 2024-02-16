'use client'
import Link from 'next/link';
import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';
import { TbCurrencySolana } from 'react-icons/tb';

const SideNav = () => {

    const path = usePathname()
    const {prices} = useSelector((state: any)=> state.user)

    return (
        <div className=' flex absolute flex-col justify-between left-[250px] w-[250px] h-full p-2 overflow-hidden box-border bg-white transition-all z-10 md:flex md:relative md:top-0 md:left-0'>
            <div className=' relative flex flex-col w-full mt-[6px] mx-0 mb-1 pl-4 box-border'>
                <div className=' mr-2 text-xs font-semibold text-[#677184] font-sans'>Total Balance</div>
                <div className=' w-full my-2 min-w-full'>
                    <div className=' inline-flex relative w-full'>
                        <div className=' inline-flex fle-row  items-center justify-center cursor-pointer'>
                            <div className='inline'>
                                <div className=' text-[#353f52] font-semibold text-3xl text-right pr-4 font-mono'>${((prices[3]?.btc * parseFloat(prices[0]?.last))+ (prices[3]?.eth * parseFloat(prices[1]?.last)) + (prices[3]?.sol * parseFloat(prices[2]?.last))).toLocaleString()}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' flex flex-col h-full min-h-[600px] justify-between'>
                <div className=' flex items-start flex-col justify-around font-medium'>
                    <div className=' my-2 mx-4 box-border  w-full' style={{ width: 'calc(100%-32px)' }}>
                        <div className=' w-full h-[1px] bg-[#f0f2f7]'></div>
                    </div>
                    <Link href='/dashboard' className={`flex justify-start items-center h-12 py-0 px-4 mb-2 box-border   rounded font-semibold w-full transition-all outline-0 appearance-none ${path == '/dashboard' ? 'bg-[#d8ebfd]' : 'bg-white'}`}>
                        <span className={`text-2xl font-normal w-[26px] mr-[10px] cursor-pointer transition-colors ${path == '/dashboard' ? 'text-[#0c6cf2]' : 'text-[#98a1b2]'}`}>
                            <AiFillHome />
                        </span>
                        <span className={` whitespace-nowrap cursor-pointer transition-colors ${path == '/dashboard' ? 'text-[#0d3578]' : 'text-[#677184]'}`}>Home</span>
                    </Link>
                    <div className=' flex flex-row items-center ml-4 mb-1 box-content w-full' style={{ width: 'calc(100%-32px)' }}>
                        <div className=' font-semibold text-sm font-sans text-[#677184]'>Portfolio</div>
                        <div className=' my-2 mx-4 box-border  w-full' style={{ width: 'calc(100%-32px)' }}>
                            <div className=' w-full h-[1px] bg-[#f0f2f7]'></div>
                        </div>
                    </div>
                    <button 
                    // href='/coins'
                     className={` flex justify-start items-center h-12 py-0 px-4 mb-2 box-border rounded font-semibold w-full transition-all outline-0 appearance-none ${path == '/coins' ? 'bg-[#d8ebfd]' : 'bg-white'}`}>
                        <span className={`text-2xl font-normal w-[26px] mr-[10px] cursor-pointer transition-colors ${path == '/coins' ? 'text-[#ff9b2240]/25' : 'text-[#98a1b2]'}`}>
                            <FaBitcoin />
                        </span>
                        <span className={` whitespace-nowrap cursor-pointer transition-colors ${path == '/coins' ? 'text-[#353f52]' : 'text-[#677184]'}`}>Bitcoin</span>
                    </button>
                    <button 
                    // href='/coins'
                     className={` flex justify-start items-center h-12 py-0 px-4 mb-2 box-border rounded font-semibold w-full transition-all outline-0 appearance-none ${path == '/coins' ? 'bg-[#d8ebfd]' : 'bg-white'}`}>
                        <span className={`text-2xl font-normal w-[26px] mr-[10px] cursor-pointer transition-colors ${path == '/coins' ? 'text-[#ff9b2240]/25' : 'text-[#98a1b2]'}`}>
                            <FaEthereum />
                        </span>
                        <span className={` whitespace-nowrap cursor-pointer transition-colors ${path == '/coins' ? 'text-[#353f52]' : 'text-[#677184]'}`}>Ethereum</span>
                    </button>
                    <button 
                    // href='/coins'
                     className={` flex justify-start items-center h-12 py-0 px-4 mb-2 box-border rounded font-semibold w-full transition-all outline-0 appearance-none ${path == '/coins' ? 'bg-[#d8ebfd]' : 'bg-white'}`}>
                        <span className={`text-2xl font-normal w-[26px] mr-[10px] cursor-pointer transition-colors ${path == '/coins' ? 'text-[#ff9b2240]/25' : 'text-[#98a1b2]'}`}>
                            <TbCurrencySolana />
                        </span>
                        <span className={` whitespace-nowrap cursor-pointer transition-colors ${path == '/coins' ? 'text-[#353f52]' : 'text-[#677184]'}`}>Solana</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SideNav