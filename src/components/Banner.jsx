import React from 'react'
import Link from 'next/link'

const Banner = () => {
  return (
    <section className=' bg-[#121d33] bg-banner bg-no-repeat text-white py-20 px-0' style={{ backgroundSize: '90rem', backgroundPositionX : '-0.0625rem' , backgroundPositionY: 'center'}}>
        <div className=' flex items-center justify-center box-content max-w-[62.5rem] my-0 mx-auto py-0 px-10'>
            <h2 className=' m-0 mr-8 text-[2.5rem] font-medium'>Let us take you from zero to crypto</h2>
                <Link href='#' className=' inline-flex justify-center items-center py-3 px-[1.375rem] text-lg font-normal rounded-lg border-[0.125rem] border-transparent cursor-pointer transition-all whitespace-nowrap bg-white text-[#0c6cf2] hover:bg-[#dfe3eb]'>Get Started</Link>
        </div>
    </section>
  )
}

export default Banner