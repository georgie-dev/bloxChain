import Image from 'next/image'
import React from 'react'

const Buy = () => {
  return (
    <div className=' flex flex-col fixed right-6 bottom-[4.5rem] z-50 transition-all'>
        {/* <form className=' p-8 w-[23rem] rounded-lg shadow-md bg-white absolute bottom-[4.5rem] right-0 opacity-0 invisible transition-opacity' style={{animation: '0.3s ease 0s 1 normal forwards running'}}>
                <p className=' font-medium text-[#353f52] opacity-100 text-xl m-0'> Buy Crypto</p>
                <div className=' flex'>
                    <div className=' flex flex-col relative w-100 mt-2 mb-6'>
                        <div className=' flex items-center py-0 px-8 border-b border-[#dfe3eb] h-16 -m-8'>
                            <div className=' flex'>
                            <svg viewBox="0 0 32 32" height="32px" selectable="0" width="32px" class="sc-1pmbxjh-0 iBFEqE"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#F7931A"></circle><path fill="#FFF" fill-rule="nonzero" d="M23.189 14.02c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z"></path></g></svg>
                            <p className=' ml-4'> Bitcoin</p>
                            <svg viewBox="0 0 448 512" class="sc-1pmbxjh-0 etmIRa CryptoDropdown__ChevronDown-sc-1kwmqic-1 iPhjdB" height="12px" selectable="0" width="12px"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
        </form> */}
        <button className=' flex items-center justify-center rounded-[3rem] h-16 w-16 shadow-md self-end overflow-hidden font-medium text-white opacity-100 border-transparent px-4 bg-[#0c6cf2] hover:w-auto hover:transition-all hover:cursor-pointer hover:bg-[#0c6cf2] buy' style={{ animation: '6s ease 1s 1 normal none running'}}>
            <Image
            alt='coin'
            src='https://www.blockchain.com/static/img/spinningIcons.gif'
            width={50}
            height={40}
            className=' rounded-[50%] transition-all'
            />
            <p className=' w-0 invisible opacity-0 font-medium text-xl text-white whitespace-pre'> Buy Crypto</p>
        </button>
    </div>
  )
}

export default Buy