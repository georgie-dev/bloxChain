'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

const Lightning = () => {

    const [active, setActive] = useState(1)

    return (
        <div className=' max-w-[80rem] box-content my-0 mx-auto py-0 px-10'>
            <section className=' bg-[#ecf5fe80] bg-lightning text-[#0c6cf2] rounded-[1.25rem] grid lg:grid-cols-2 grid-cols-1 bg-no-repeat min-h-[52.5rem] my-[3.75rem] mx-auto max-w-[80rem]' style={{ backgroundPositionX : ' left', backgroundPositionY: 'bottom 2.5rem'}}>
                <div className=' flex flex-col justify-center lg:pl-[8.75rem] md:visible invisible'>
                    <div>
                        <div className=' h-full w-full relative flex items-center justify-center'>
                            <Image
                                alt='coin'
                                src={active === 1 ? 'https://www.blockchain.com/static/img/home/products/prod-exchange-fiat-currencies.png' : active === 2 ? 'https://www.blockchain.com/static/img/home/products/prod-exchange-matching-engine.png' : active === 3 ? 'https://www.blockchain.com/static/img/home/products/prod-exchange-chat-support.png' : 'https://www.blockchain.com/static/img/home/products/ex-landing-margin-image.png'}
                                width={active === 1 ? 360 : active === 2 ? 560 : active === 3 ? 357 : 895}
                                height={active === 1 ? 542 : active === 2 ? 466 : active === 3 ? 510 : 611}
                                className=' absolute border-none'
                            />
                        </div>
                    </div>
                </div>
                <div className=' flex flex-col lg:pl-[5rem] pl-4 justify-start py-[100px]'>
                    <div className=' bg-[#ecf5fe] text-[#3d89f5] inline-flex items-center self-start mb-5 p-4 rounded-[1.25rem]'>
                        <svg width="137" height="32" className=' h-8 w-8' fill="none"><mask id="a" height="30" maskUnits="userSpaceOnUse" width="30" x="1" y="1"><rect fill="#c4c4c4" height="28" rx="3" stroke="#f5a250" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="28" x="2" y="2"></rect></mask><g mask="url(#a)" stroke="#0c6cf2" strokeWidth="2"><g strokeLinecap="round"><rect fill="#fff" height="28" rx="3" strokeLinejoin="round" width="28" x="2" y="2"></rect><path d="m27 7 3-1v24h-28v-5l3-7 4 1 7-8 7-1z" fill="#0c6cf2" fillOpacity=".36" strokeLinejoin="round"></path><path d="m16 16v14"></path><path d="m9 22v8"></path><path d="m16 2v4"></path><path d="m23 14v16"></path></g><circle cx="16" cy="11" fill="#fff" r="2"></circle></g></svg>
                        <p className=' text-lg ml-[10px]'>Exchange</p>
                    </div>
                    <h2 className=' m-0 mb-[1.875rem] max-w-[30.5rem] text-[2.5rem] font-semibold'>Lightning-fast crypto trading</h2>
                    <div className=' mb-[1.875rem] max-w-[30.5rem]'>
                        <div className={`border border-[#ded8fd] mb-3 rounded-xl ${active === 1 ? 'bg-[#ecf5fe]' : 'bg-[#f5fafe]'}`} onClick={() => setActive(1)}>
                            <h3 className={`text-base font-medium m-0 transition-colors ${active == 1 ? 'text-[#0c6cf2] cursor-default pt-4 pb-0 px-5' : 'py-4 px-5 cursor-pointer'}`}>Trade in 3 fiat currencies</h3>
                            <p className={` max-w-[80%] overflow-hidden text-base font-normal ${active === 1 ? 'max-h-full opacity-100 pt-2 px-5 pb-4 transition-all' : 'opacity-0 max-h-0 py-0 px-5 transition-none'}`}>The Exchange supports USD, EUR, and GBP.</p>
                        </div>
                        <div className={`border border-[#ded8fd] mb-3 rounded-xl ${active === 2 ? 'bg-[#ecf5fe]' : 'bg-[#f5fafe]'}`} onClick={() => setActive(2)}>
                            <h3 className={`text-base font-medium m-0 transition-colors ${active == 2 ? 'text-[#0c6cf2] cursor-default pt-4 pb-0 px-5' : 'py-4 px-5 cursor-pointer'}`}>A matching engine that can keep up with you</h3>
                            <p className={` max-w-[80%] overflow-hidden text-base font-normal ${active === 2 ? 'max-h-full opacity-100 pt-2 px-5 pb-4 transition-all' : 'opacity-0 max-h-0 py-0 px-5 transition-none'}`}>The world’s fastest crypto matching engine, built by and for traders.</p>
                        </div>
                        <div className={`border border-[#ded8fd] mb-3 rounded-xl ${active === 3 ? 'bg-[#ecf5fe]' : 'bg-[#f5fafe]'}`} onClick={() => setActive(3)}>
                            <h3 className={`text-base font-medium m-0 transition-colors ${active == 3 ? 'text-[#0c6cf2] cursor-default pt-4 pb-0 px-5' : 'py-4 px-5 cursor-pointer'}`}>24/7 live chat support</h3>
                            <p className={` max-w-[80%] overflow-hidden text-base font-normal ${active === 3 ? 'max-h-full opacity-100 pt-2 px-5 pb-4 transition-all' : 'opacity-0 max-h-0 py-0 px-5 transition-none'}`}>Chat with customer support directly in the Exchange, anytime.</p>
                        </div>
                        <div className={`border border-[#ded8fd] mb-3 rounded-xl ${active === 4 ? 'bg-[#ecf5fe]' : 'bg-[#f5fafe]'}`} onClick={() => setActive(4)}>
                            <h3 className={`text-base font-medium m-0 transition-colors ${active == 4 ? 'text-[#0c6cf2] cursor-default pt-4 pb-0 px-5' : 'py-4 px-5 cursor-pointer'}`}>Margin Trading</h3>
                            <p className={` max-w-[80%] overflow-hidden text-base font-normal ${active === 4 ? 'max-h-full opacity-100 pt-2 px-5 pb-4 transition-all' : 'opacity-0 max-h-0 py-0 px-5 transition-none'}`}>5x your position with margin trading</p>
                        </div>
                    </div>
                    {/* <div className=' hidden'>
                        <div className=' text-inherit relative block box-border'>
                            <div className=' border border-[#0c6cf2] text-[#0c6cf2] left-0 flex items-center justify-center h-11 w-11 top-[460px] bottom-auto z-10 rounded-lg'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M15.8337 10H4.16699" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10.0003 15.8346L4.16699 10.0013L10.0003 4.16797" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </div>
                            <div className=' overflow-hidden relative block'></div>
                        </div>
                    </div> */}
                    <Link href='#' className=' mt-auto w-fit inline-flex justify-center items-center py-3 px-[1.372rem] text-lg font-medium rounded-lg border-2 border-transparent cursor-pointer transition-all whitespace-nowrap bg-[#0c6cf2] text-white'>Trade Now</Link>
                </div>
            </section>
        </div>
    )
}

export default Lightning