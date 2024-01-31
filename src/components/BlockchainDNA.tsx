'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

const BlockchainDNA = () => {
    const [active, setActive] = useState(1)

  return (
    <div className=' max-w-[80rem] box-content my-0 mx-auto py-0 px-10'>
        <section className=' bg-[#fff2e580]/50 bg-dna text-[#f28b24] rounded-[1.25rem] grid lg:grid-cols-2 grid-cols-1 bg-no-repeat min-h-[52.5rem] my-[3.75rem] mx-auto max-w-[80rem]' style={{ backgroundSize: '31.25rem', backgroundPositionX : ' right', backgroundPositionY: 'bottom 2.5rem'}}>
        <div className=' flex flex-col lg:pl-[8.75rem] pl-5 justify-start py-[100px]'>
                    <div className=' bg-[#fff2e5] text-[#f28b24] inline-flex items-center self-start mb-5 p-4 rounded-[1.25rem]'>
                    <svg width="32" height="32" fill="none"><path d="m26.229 6.53163 4.353 12.50847-14.582 2.9599-14.58203-2.9599 4.35297-12.50847c.73586-2.11453 2.72947-3.53163 4.96836-3.53163 2.9054 0 5.2607 2.35526 5.2607 5.26063 0-2.90537 2.3553-5.26063 5.2606-5.26063 2.2389 0 4.2325 1.4171 4.9684 3.53163z" fill="#f5a250" fill-opacity=".36"></path><g stroke="#f5a250" stroke-width="2"><path d="m16 22v-13.73937m0 13.73937-14.58203-2.9599 4.35297-12.50847c.73586-2.11453 2.72947-3.53163 4.96836-3.53163 2.9054 0 5.2607 2.35526 5.2607 5.26063m0 13.73937 14.582-2.9599-4.353-12.50847c-.7359-2.11453-2.7295-3.53163-4.9684-3.53163-2.9053 0-5.2606 2.35526-5.2606 5.26063" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="8.5" cy="21.5" fill="#fff" r="7.5"></circle><circle cx="23.5" cy="21.5" fill="#fff" r="7.5"></circle></g><path d="m11 21.5c0 .5523.4477 1 1 1s1-.4477 1-1zm-2.5-4.5c-.55228 0-1 .4477-1 1s.44772 1 1 1zm0 2c1.38071 0 2.5 1.1193 2.5 2.5h2c0-2.4853-2.0147-4.5-4.5-4.5z" fill="#f5a250"></path><path d="m26 21.5c0 .5523.4477 1 1 1s1-.4477 1-1zm-2.5-4.5c-.5523 0-1 .4477-1 1s.4477 1 1 1zm0 2c1.3807 0 2.5 1.1193 2.5 2.5h2c0-2.4853-2.0147-4.5-4.5-4.5z" fill="#f5a250"></path></svg>
                        <p className=' text-lg ml-[10px]'>Explore</p>
                    </div>
                    <h2 className=' m-0 mb-[1.875rem] max-w-[30.5rem] text-inherit text-[2.5rem] font-semibold'>Blockchain data is in our DNA</h2>
                    <div className=' mb-[1.875rem] max-w-[30.5rem]'>
                        <div className={`border border-[#fae4cd] mb-3 rounded-xl ${active === 1 ? 'bg-[#fff2e5]' : 'bg-[#fff8f2]'}`} onClick={() => setActive(1)}>
                            <h3 className={`text-base font-medium m-0 transition-colors ${active == 1 ? 'text-[#f28b24] cursor-default pt-4 pb-0 px-5' : 'py-4 px-5 cursor-pointer'}`}>Explore the top blockchains</h3>
                            <p className={` max-w-[80%] overflow-hidden text-base font-normal ${active === 1 ? 'max-h-full opacity-100 pt-2 px-5 pb-4 transition-all' : 'opacity-0 max-h-0 py-0 px-5 transition-none'}`}>Confirm transactions, analyze the market, or simply learn more about crypto.</p>
                        </div>
                        <div className={`border border-[#fae4cd] mb-3 rounded-xl ${active === 2 ? 'bg-[#fff2e5]' : 'bg-[#fff8f2]'}`} onClick={() => setActive(2)}>
                            <h3 className={`text-base font-medium m-0 transition-colors ${active == 2 ? 'text-[#f28b24] cursor-default pt-4 pb-0 px-5' : 'py-4 px-5 cursor-pointer'}`}>Powerful Blockchain Data API</h3>
                            <p className={` max-w-[80%] overflow-hidden text-base font-normal ${active === 2 ? 'max-h-full opacity-100 pt-2 px-5 pb-4 transition-all' : 'opacity-0 max-h-0 py-0 px-5 transition-none'}`}>We’ve powered exchanges, data analysts, enthusiasts, and more.</p>
                        </div>
                        <div className={`border border-[#fae4cd] mb-3 rounded-xl ${active === 3 ? 'bg-[#fff2e5]' : 'bg-[#fff8f2]'}`} onClick={() => setActive(3)}>
                            <h3 className={`text-base font-medium m-0 transition-colors ${active == 3 ? 'text-[#f28b24] cursor-default pt-4 pb-0 px-5' : 'py-4 px-5 cursor-pointer'}`}>Industry leading charts</h3>
                            <p className={` max-w-[80%] overflow-hidden text-base font-normal ${active === 3 ? 'max-h-full opacity-100 pt-2 px-5 pb-4 transition-all' : 'opacity-0 max-h-0 py-0 px-5 transition-none'}`}>From hashrate, to block details, to mining information, and more.</p>
                        </div>
                        <div className={`border border-[#fae4cd] mb-3 rounded-xl ${active === 4 ? 'bg-[#fff2e5]' : 'bg-[#fff8f2]'}`} onClick={() => setActive(4)}>
                            <h3 className={`text-base font-medium m-0 transition-colors ${active == 4 ? 'text-[#f28b24] cursor-default pt-4 pb-0 px-5' : 'py-4 px-5 cursor-pointer'}`}>Real-time crypto prices</h3>
                            <p className={` max-w-[80%] overflow-hidden text-base font-normal ${active === 4 ? 'max-h-full opacity-100 pt-2 px-5 pb-4 transition-all' : 'opacity-0 max-h-0 py-0 px-5 transition-none'}`}>Get the latest prices and charts along with key market signals.</p>
                        </div>
                    </div>
                    {/* <div className=' hidden'>
                        <div className=' text-inherit relative block box-border'>
                            <div className=' border border-[#0c6cf2] text-[#f28b24] left-0 flex items-center justify-center h-11 w-11 top-[460px] bottom-auto z-10 rounded-lg'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M15.8337 10H4.16699" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.0003 15.8346L4.16699 10.0013L10.0003 4.16797" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </div>
                            <div className=' overflow-hidden relative block'></div>
                        </div>
                    </div> */}
                    <Link href='#' className=' mt-auto w-fit inline-flex justify-center items-center py-3 px-[1.372rem] text-lg font-medium rounded-lg border-2 border-transparent cursor-pointer transition-all whitespace-nowrap bg-[#f28b24] text-white'>Explore Now</Link>
                </div>
                <div className=' flex flex-col justify-center lg:pl-[5rem] md:visible invisible'>
                    <div>
                        <div className=' h-full w-full relative flex items-center justify-center'>
                            <Image
                                alt='coin'
                                src={active === 1 ? 'https://www.blockchain.com/static/img/home/products/prod-explore-blockchains.png' : active === 2 ? '	https://www.blockchain.com/static/img/home/products/prod-explore-api.png' : active === 3 ? 'https://www.blockchain.com/static/img/home/products/prod-explore-charts.png' : 'https://www.blockchain.com/static/img/home/products/prod-explore-prices.png'}
                                width={active === 1 ? 841 : active === 2 ? 565 : active === 3 ? 767 : 927}
                                height={active === 1 ? 580 : active === 2 ? 546 : active === 3 ? 580 : 655}
                                className=' absolute border-none'
                            />
                        </div>
                    </div>
                </div>
        </section>
    </div>
  )
}

export default BlockchainDNA