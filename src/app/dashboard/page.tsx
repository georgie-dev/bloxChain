'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import { Chart } from '.';
import axios from 'axios'
import { FaBitcoin } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux'
import { setPrices } from '@/store/user';

const Dashboard = () => {

    interface ChartData {
        time_period_start: string,
        time_period_end: string,
        time_open: string,
        time_close: string,
        rate_open: number,
        rate_high: number,
        rate_low: number,
        rate_close: number,
    }

    interface Crypto {
        open: string,
        high: string,
        low: string,
        last: string,
        volume: string,
        volume_30day: string,
    }

    interface Coins {
        btc: string,
        eth: string,
        sol: string,
        id: number,
        user: number,
    }


    const [timeSeries, setTimeSeries] = useState('1HRS')
    const [chartData, setChartData] = useState([])
    const [cryptoData, setCryptoData] = useState<Coins[]>([])
    const [data, setData] = useState<Crypto[]>([])

    const dispatch = useDispatch()

    const { userDetails } = useSelector((state: any) => state.user)
    const [input, setInput] = useState("BTC");

    const handleChange = (event: any) => {
        const value = event.target.value;
        setInput(value);
    };

    useEffect(() => {
        const fetchChartData = async () => {
            try {
                const response = await axios.get(`https://rest.coinapi.io/v1/exchangerate/${input}/USD/history?period_id=${timeSeries}&limit=24`, {
                    headers: {
                        Accept: 'text/plain',
                        'X-CoinAPI-Key': 'D6B94034-7024-401C-A5CA-08B62FA12A93'
                    }
                })
                const rateCloseArray = response?.data.map((item: ChartData) => item.rate_close);
                // console.log(rateCloseArray)
                setChartData(rateCloseArray.reverse())
            } catch (error) {
                console.log(error)
            }
        }

        const fetchData = async () => {
            const crypto = ['BTC', 'ETH', 'SOL']
            try {
                const cryptoData = await Promise.all(
                    crypto.map(async (item) => {
                        const response = await axios.get(`https://api.pro.coinbase.com/products/${item}-USD/stats`);
                        return response.data;
                    })
                );
                setData(cryptoData);
                console.log(cryptoData)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        const fetchCryptoData = async () => {
            try {
                const response = await axios.get(`https://blokchain.onrender.com/data/?user=${userDetails?.id}`)

                setCryptoData(response?.data)
                console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
        fetchCryptoData()
        fetchChartData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeSeries, input])

    useEffect(() => {
        const dataLoad = [
            ...data,
            cryptoData[0]
        ]
        console.log(dataLoad)

        dispatch(setPrices(dataLoad))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cryptoData, data])

    return (
        <div className=' relative flex flex-row justify-start items-start h-full w-full overflow-y-auto'>
            <div className=' box-border w-full h-full'>
                <section className=' w-full flex flex-col lg:flex-row'>
                    <div className=' w-full box-border mb-6 flex-grow-[2] flex-shrink basis-[0%] lg:mr-6'>
                        <div className=' w-full flex flex-col box-border rounded-lg pt-6 px-6 border border-solid border-[#f0f2f7]'>
                            <div className=' mb-2 flex items-center justify-between'>
                                <div className=' font-sans font-semibold text-base capitalize text-[#353f52] block'>Holdings</div>
                            </div>
                            <div className=' flex flex-1 flex-col'>
                                <div className=' flex flex-auto py-5 px-0 flex-col justify-center min-h-10'>
                                    <div className=' hover:cursor-pointer'>
                                        <div className=' flex items-center justify-between'>
                                            <div className=' flex gap-1 items-center'>
                                                <Image
                                                    alt='coin'
                                                    src="https://www.blockchain.com/static/img/prices/prices-btc.svg"
                                                    className=' w-10 h-10 border-none'
                                                    width={40}
                                                    height={40}
                                                />
                                                <div className=' text-xl font-medium text-[#353f52] font-sans'>Bitcoin</div>
                                            </div>
                                            <div className=' flex flex-col items-end'>
                                                <div className=' flex flex-row justify-start items-center'>
                                                    <div className=' font-sans font-medium text-[#353f52] cursor-pointer block text-base'>${(parseFloat(cryptoData[0]?.btc) * parseFloat(data[0]?.last)).toLocaleString()}</div>
                                                </div>
                                                <div className=' mt-[5px] flex flex-row justify-start items-center'>
                                                    <div className=' text-xs whitespace-nowrap font-sans font-medium text-[#98a1b2] block cursor-pointer'>{parseFloat(cryptoData[0]?.btc)?.toFixed(3)} BTC</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=' flex flex-auto py-5 px-0 flex-col justify-center min-h-10'>
                                    <div className=' hover:cursor-pointer'>
                                        <div className=' flex items-center justify-between'>
                                            <div className=' flex gap-1 items-center'>
                                                <Image
                                                    alt='coin'
                                                    src="https://www.blockchain.com/static/img/prices/prices-eth.svg"
                                                    className=' w-10 h-10 border-none'
                                                    width={40}
                                                    height={40}
                                                />
                                                <div className=' text-xl font-medium text-[#353f52] font-sans'>Ethereum</div>
                                            </div>
                                            <div className=' flex flex-col items-end'>
                                                <div className=' flex flex-row justify-start items-center'>
                                                    <div className=' font-sans font-medium text-[#353f52] cursor-pointer block text-base'>${(parseFloat(cryptoData[0]?.eth) * parseFloat(data[1]?.last)).toLocaleString()}</div>
                                                </div>
                                                <div className=' mt-[5px] flex flex-row justify-start items-center'>
                                                    <div className=' text-xs whitespace-nowrap font-sans font-medium text-[#98a1b2] block cursor-pointer'>{parseFloat(cryptoData[0]?.eth)?.toFixed(3)} ETH</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=' flex flex-auto py-5 px-0 flex-col justify-center min-h-10'>
                                    <div className=' hover:cursor-pointer'>
                                        <div className=' flex items-center justify-between'>
                                            <div className=' flex gap-1 items-center'>
                                                <Image
                                                    alt='coin'
                                                    src="https://www.blockchain.com/static/img/prices/prices-sol.svg"
                                                    className=' w-10 h-10 border-none'
                                                    width={40}
                                                    height={40}
                                                />
                                                <div className=' text-xl font-medium text-[#353f52] font-sans'>Solana</div>
                                            </div>
                                            <div className=' flex flex-col items-end'>
                                                <div className=' flex flex-row justify-start items-center'>
                                                    <div className=' font-sans font-medium text-[#353f52] cursor-pointer block text-base'>${(parseFloat(cryptoData[0]?.sol) * parseFloat(data[2]?.last)).toLocaleString()}</div>
                                                </div>
                                                <div className=' mt-[5px] flex flex-row justify-start items-center'>
                                                    <div className=' text-xs whitespace-nowrap font-sans font-medium text-[#98a1b2] block cursor-pointer'>{parseFloat(cryptoData[0]?.sol)?.toFixed(3)} SOL</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' w-full box-border my-6 lg:mt-0 flex-1 flex-grow-[3]'>
                        <div className=' flex flex-col justify-between sticky top-0 right-0 items-center w-full rounded-lg box-border mb-9 border border-solid border-[#f0f2f7]'>
                            <div className=' flex flex-col justify-between w-full mb-4 smd:flex-row'>
                                <div className=' flex mb-4 flex-col smd:m-0 smd:items-start'>
                                    <div className=' pt-4 pl-4 w-fit flex justify-center smd:justify-start'>
                                        <div className=' relative w-full h-auto z-[initial] bg-white'>
                                            <div className=' relative box-border font-medium font-sans text-base'>
                                                <div className=' border-[0px] shadow-none text-[#353f52] bg-white cursor-pointer min-h-12 rounded-lg items-center flex flex-wrap relative transition-all box-border outline-0'>
                                                    <div className=' overflow-hidden flex items-center flex-1 flex-wrap py-[2px] px-2 relative box-border'>
                                                        <div className=' flex flex-row justify-start items-center w-full h-full box-border text-ellipsis'>
                                                            <span className=' text-[#ff9c22] text-[22px] font-normal first:mr-1 cursor-[inherit] flex'>
                                                                {
                                                                    input === 'BTC' ?
                                                                        <Image
                                                                            alt='coin'
                                                                            src="https://www.blockchain.com/static/img/prices/prices-btc.svg"
                                                                            className=' w-5 h-5 border-none'
                                                                            width={20}
                                                                            height={20}
                                                                        /> :
                                                                        input === 'ETH' ?
                                                                            <Image
                                                                                alt='coin'
                                                                                src="https://www.blockchain.com/static/img/prices/prices-eth.svg"
                                                                                className=' w-5 h-5 border-none'
                                                                                width={20}
                                                                                height={20}
                                                                            />
                                                                            :
                                                                            <Image
                                                                                alt='coin'
                                                                                src="https://www.blockchain.com/static/img/prices/prices-sol.svg"
                                                                                className=' w-5 h-5 border-none'
                                                                                width={20}
                                                                                height={20}
                                                                            />
                                                                }
                                                            </span>
                                                            <div className=' flex font-sans font-medium text-lg text-black cursor-pointer'>
                                                                <select
                                                                    className=' text-black transform-[initial] relative max-w-none top-[initial] mx-[2px] overflow-hidden text-ellipsis whitespace-nowrap box-border border-none focus:border-none'
                                                                    name='coin'
                                                                    value={input}
                                                                    onChange={handleChange}
                                                                >
                                                                    <option value='BTC'>Bitcoin (BTC)</option>
                                                                    <option value='ETH'>Ethereum (ETH)</option>
                                                                    <option value='SOL'>Solana (SOL)</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' ml-0 smd:ml-6'>
                                        <div className=' font-sans font-semibold text-2xl text-black'>${input === 'BTC' ? parseFloat(data[0]?.last).toLocaleString() : input === 'ETH' ? parseFloat(data[1]?.last).toLocaleString() : parseFloat(data[2]?.last).toLocaleString()}</div>
                                    </div>
                                    <div className=' mt-2 ml-0 smd:ml-6'>
                                        <div className=' font-medium text-sm whitespace-nowrap text-[#677184] font-sans'>
                                            <span className={`font-semibold ${(parseFloat(data[0]?.last) - parseFloat(data[0]?.open)) < 0 ? 'text-[#ff443a]' : 'text-[#00994c]'}`}>{`$${ input === 'BTC' ? `${(parseFloat(data[0]?.last) - parseFloat(data[0]?.open)).toLocaleString()} (${(((parseFloat(data[0]?.last) - parseFloat(data[0]?.open)) / parseFloat(data[0]?.open)) * 100).toFixed(2)})` : input === 'ETH' ? `${(parseFloat(data[1]?.last) - parseFloat(data[1]?.open)).toLocaleString()} (${(((parseFloat(data[1]?.last) - parseFloat(data[1]?.open)) / parseFloat(data[1]?.open)) * 100).toFixed(2)})` : `${(parseFloat(data[2]?.last) - parseFloat(data[2]?.open)).toLocaleString()} (${(((parseFloat(data[2]?.last) - parseFloat(data[2]?.open)) / parseFloat(data[2]?.open)) * 100).toFixed(2)})` }%`}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=' flex flex-col w-full mb-6 smd:flex-row'>
                                <div className=' relative h-[300px] w-full flex items-center justify-center'>
                                    <Chart data={chartData} />
                                </div>
                            </div>
                            <div className='flex flex-col w-full mb-6 smd:flex-row justify-end'>
                                <div className=' smd:mr-6 smd:mb-6 my-0 mx-6 flex flex-row justify-start items-center rounded-lg bg-[#f0f2f7]'>
                                    <button onClick={() => { setTimeSeries('1HRS') }} className={` relative py-3 px-5 font-sans font-semibold text-sm text-center w-1/2 m-[2px] cursor-pointer rounded-md transition-colors shadow-md shadow-[#05183d1a] hover:text-[#0c6cf2] ${timeSeries === '1HRS' ? 'bg-white text-[#0c6cf2]' : ' text-[#98a1b2]'}`}>1D</button>
                                    <button onClick={() => { setTimeSeries('1DAY') }} className={` relative py-3 px-5 font-sans font-semibold text-sm text-center w-1/2 m-[2px] cursor-pointer transition-colors hover:text-[#0c6cf2] ${timeSeries === '1DAY' ? 'bg-white text-[#0c6cf2]' : ' text-[#98a1b2]'}`}>1W</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Dashboard