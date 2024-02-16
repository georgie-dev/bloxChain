'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IoMdRefresh } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { logout } from '@/store/user';
import { usePathname } from 'next/navigation';
import { setError } from '@/store/user';

const Header = () => {

    const dispatch = useDispatch()
    const path = usePathname()

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        location.reload()
        console.log('Button clicked!', event);
    };

    const signOut =()=>{
        dispatch(logout())
        setError('Logout Successful')
    }

    return (
        <div className=' flex-grow-0 flex-shrink-0 bg-white basis-[60px]'>
            <div className=' w-full box-border bg-white/10 flex justify-between items-center py-0 px-[22px] border-b border-gray-50 h-14'>
                <div className=' flex items-center'>
                    <div className=' flex items-center'>
                        <Link
                            href='/'
                            className=' h-[25px] w-[25px] '
                        >
                            <Image
                                src='/bc-icon.svg'
                                width={25}
                                height={0}
                                className='w-[25px] h-auto'
                                alt='icon'
                            />
                        </Link>
                    </div>
                    <ul className=' list-none flex items-stretch m-0 p-0 pl-6 cursor-pointer'>
                        <li className=' py-[10px] px-2 flex items-center'>
                            <Link href='/dashboard' className={` rounded p-[10px] transition-colors hover:bg-[#ecf5fe] hover:text-[#0c6cf2] ${path == '/dashboard' ? 'bg-[#ecf5fe] text-[#0c6cf2]' : 'text-[#677184]' }`}>
                                <div className=' flex gap-1 items-center m-0'>
                                    <div className=' py-[0.625rem]'>
                                        <span className=' font-medium text-sm text-start'>Home</span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li className=' py-[10px] px-2 flex items-center'>
                            <Link href='/dashboard' className=' rounded p-[10px] text-[#677184] transition-colors hover:active:bg-[#ecf5fe] hover:active:text-[#0c6cf2]'>
                                <div className=' flex gap-1 items-center m-0'>
                                    <div className=' py-[0.625rem]'>
                                        <span className=' font-medium text-sm text-start'>Prices</span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className=' flex items-center'>
                    <ul className=' list-none flex items-stretch m-0 p-0 pl-6 cursor-pointer text-gray-400'>
                        <li className=' flex items-center py-[10px] px-2'>
                            <button onClick={handleClick} className=' flex items-center relative transition-colors h-10 bg-transparent min-w-full w-auto p-0'>
                                <IoMdRefresh />
                            </button>
                        </li>
                        <li className=' flex items-center py-[10px] px-2'>
                            <button onClick={signOut} className=' flex items-center relative transition-colors h-10 bg-transparent min-w-full w-auto p-0'>
                                <AiOutlineLogout />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header