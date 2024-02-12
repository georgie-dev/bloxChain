'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'

interface Crypto {
  open: string,
  high: string,
  low: string,
  last: string,
  volume: string,
  volume_30day: string,
}

const Intro = () => {

  const [data, setData] = useState<Crypto[]>([])


  useEffect(() => {
    const crypto = ['BTC', 'ETH', 'XLM', 'SOL']
    const fetchData = async () => {
      try {
        const cryptoData = await Promise.all(
          crypto.map(async (item) => {
            const response = await axios.get(`https://api.pro.coinbase.com/products/${item}-USD/stats`);
            return response.data;
          })
        );
        setData(cryptoData);
        // console.log(cryptoData)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className=' bg-[#144699] bg-intro bg-no-repeat bg-cover bg-bottom text-white'>
        <div className=' box-content max-w-[62.5rem] my-0 mx-auto py-0 px-10'>
          <div className=' max-w-[46.6875rem] py-[10.625rem]'>
            <h1 className=' text-white mb-6 text-5xl font-semibold'>Be early to the future of finance</h1>
            <p className=' mb-8 text-2xl font-medium'>Buy Bitcoin, Ethereum, and other leading cryptocurrencies on a platform trusted by millions.</p>
            <form className=' flex gap-4'>
              {/* <label for='email' className=' focus:active:overflow-hidden focus:active:h-[1px] focus:active:absolute focus:active:whitespace-nowrap focus::active:w-[1px]'>Your email address</label> */}
              <input type='email' autoComplete='on' id='email' placeholder='Your email address' name='email' className=' w-full max-w-96 bg-white/10 border-none rounded-lg py-3 px-4 font-normal text-xl text-white overflow-visible placeholder:text-white placeholder:text-sm' />
              <Link href='/signup' className=' bg-[#ecf5fe] text-[#0c6cf2] text-sm inline-flex justify-center items-center py-3 px-5 font-medium rounded-lg cursor-pointer transition-all whitespace-nowrap'>Sign Up</Link>
            </form>
          </div>
        </div>
      </div>
      <div className=' box-content max-w-[62.5rem] my-0 mx-auto py-0 px-10'>
        <div className=' relative flex justify-center w-full mt-[-70px]'>
          <div className=' flex flex-col items-end max-w-[62.5rem] w-full'>
            <div className=' w-full'>
              <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 rounded-lg w-full mb-5'>
                <Link href='#' className=' bg-white-grade rounded-lg text-[##121d33] min-w-0 p-5 transition-all' style={{ boxShadow: 'rgb(103 113 133 / 20%) 0.75rem 1.5rem 4rem 0rem' }}>
                  <div className=' flex items-start justify-between mb-2'>
                    <div className=' flex-shrink-0'>
                      <Image
                        alt='coin'
                        src="https://www.blockchain.com/static/img/prices/prices-btc.svg"
                        className=' w-10 h-10 border-none'
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className=' flex items-start justify-end flex-wrap max-w-[170px] gap-2'>
                      <button className=' bg-[#efecfe] rounded border-none text-[#5322e5] cursor-pointer font-medium py-1 px-2 text-sm transition-all'>Buy</button>
                      <button className='bg-[#e6faec] rounded border-none text-[#00994c] cursor-pointer font-medium py-1 px-2 text-sm transition-all'> Trade</button>
                    </div>
                  </div>
                  <div className=' flex mb-1'>
                    <p className=' font-medium text-base text-black'>Bitcoin</p>
                    <p className=' text-[#677185] ml-2 font-medium text-base'>BTC</p>
                  </div>
                  <div className=' flex'>
                    <p className=' font-medium text-base text-black'>${parseFloat(data[0]?.last).toLocaleString()}</p>
                    <p className={`ml-2 font-medium text-base ${(((data[0]?.last - data[0]?.open) / data[0]?.open) * 100).toFixed(2) < 0 ? 'text-[#ff443a]' : 'text-[#00b26b]'}`}>{(((data[0]?.last - data[0]?.open) / data[0]?.open) * 100).toFixed(2)}%</p>
                  </div>
                  <div className=' hidden mt-2'></div>
                </Link>
                <Link href='#' className=' bg-white-grade rounded-lg text-[##121d33] min-w-0 p-5 transition-all' style={{ boxShadow: 'rgb(103 113 133 / 20%) 0.75rem 1.5rem 4rem 0rem' }}>
                  <div className=' flex items-start justify-between mb-2'>
                    <div className=' flex-shrink-0'>
                      <Image
                        alt='coin'
                        src="https://www.blockchain.com/static/img/prices/prices-eth.svg"
                        className=' w-10 h-10 border-none'
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className=' flex items-start justify-end flex-wrap max-w-[170px] gap-2'>
                      <button className=' bg-[#efecfe] rounded border-none text-[#5322e5] cursor-pointer font-medium py-1 px-2 text-sm transition-all'>Buy</button>
                      <button className='bg-[#e6faec] rounded border-none text-[#00994c] cursor-pointer font-medium py-1 px-2 text-sm transition-all'> Trade</button>
                    </div>
                  </div>
                  <div className=' flex mb-1'>
                    <p className=' font-medium text-base text-black'>Ethereum</p>
                    <p className=' text-[#677185] ml-2 font-medium text-base'>ETH</p>
                  </div>
                  <div className=' flex'>
                    <p className=' font-medium text-base text-black'>${parseFloat(data[1]?.last).toLocaleString()}</p>
                    <p className={`ml-2 font-medium text-base ${(((data[1]?.last - data[1]?.open) / data[1]?.open) * 100).toFixed(2) < 0 ? 'text-[#ff443a]' : 'text-[#00b26b]'}`}>{(((data[1]?.last - data[1]?.open) / data[1]?.open) * 100).toFixed(2)}%</p>
                  </div>
                  <div className=' hidden mt-2'></div>
                </Link>
                <Link href='#' className=' bg-white-grade rounded-lg text-[##121d33] min-w-0 p-5 transition-all' style={{ boxShadow: 'rgb(103 113 133 / 20%) 0.75rem 1.5rem 4rem 0rem' }}>
                  <div className=' flex items-start justify-between mb-2'>
                    <div className=' flex-shrink-0'>
                      <Image
                        alt='coin'
                        src="	https://www.blockchain.com/static/img/prices/prices-xlm.svg"
                        className=' w-10 h-10 border-none'
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className=' flex items-start justify-end flex-wrap max-w-[170px] gap-2'>
                      <button className=' bg-[#efecfe] rounded border-none text-[#5322e5] cursor-pointer font-medium py-1 px-2 text-sm transition-all'>Buy</button>
                      <button className='bg-[#e6faec] rounded border-none text-[#00994c] cursor-pointer font-medium py-1 px-2 text-sm transition-all'> Trade</button>
                    </div>
                  </div>
                  <div className=' flex mb-1'>
                    <p className=' font-medium text-base text-black'>Stellar</p>
                    <p className=' text-[#677185] ml-2 font-medium text-base'>XLM</p>
                  </div>
                  <div className=' flex'>
                    <p className=' font-medium text-base text-black'>${parseFloat(data[2]?.last).toFixed(2)}</p>
                    <p className={`ml-2 font-medium text-base ${(((data[2]?.last - data[2]?.open) / data[2]?.open) * 100).toFixed(2) < 0 ? 'text-[#ff443a]' : 'text-[#00b26b]'}`}>{(((data[2]?.last - data[2]?.open) / data[2]?.open) * 100).toFixed(2)}%</p>
                  </div>
                  <div className=' hidden mt-2'></div>
                </Link>
                <Link href='#' className=' bg-white-grade rounded-lg text-[##121d33] min-w-0 p-5 transition-all' style={{ boxShadow: 'rgb(103 113 133 / 20%) 0.75rem 1.5rem 4rem 0rem' }}>
                  <div className=' flex items-start justify-between mb-2'>
                    <div className=' flex-shrink-0'>
                      <Image
                        alt='coin'
                        src="https://www.blockchain.com/static/img/prices/prices-sol.svg"
                        className=' w-10 h-10 border-none'
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className=' flex items-start justify-end flex-wrap max-w-[170px] gap-2'>
                      <button className=' bg-[#efecfe] rounded border-none text-[#5322e5] cursor-pointer font-medium py-1 px-2 text-sm transition-all'>Buy</button>
                      <button className='bg-[#e6faec] rounded border-none text-[#00994c] cursor-pointer font-medium py-1 px-2 text-sm transition-all'> Trade</button>
                    </div>
                  </div>
                  <div className=' flex mb-1'>
                    <p className=' font-medium text-base text-black'>Solana</p>
                    <p className=' text-[#677185] ml-2 font-medium text-base'>SOL</p>
                  </div>
                  <div className=' flex'>
                    <p className=' font-medium text-base text-black'>${parseFloat(data[3]?.last).toLocaleString()}</p>
                    <p className={`ml-2 font-medium text-base ${(((data[3]?.last - data[3]?.open) / data[3]?.open) * 100).toFixed(2) < 0 ? 'text-[#ff443a]' : 'text-[#00b26b]'}`}>{(((data[3]?.last - data[3]?.open) / data[3]?.open) * 100).toFixed(2)}%</p>
                  </div>
                  <div className=' hidden mt-2'></div>
                </Link>
              </div>
              <div className=' flex justify-between flex-wrap w-full'>
                <Link href='#' className=' inline-flex justify-center items-center font-medium cursor-pointer bg-none transition-all whitespace-nowrap rounded-none text-[#121d33] p-0 text-sm'>
                  More prices
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4.16797 10H15.8346" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 4.16797L15.8333 10.0013L10 15.8346" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Intro