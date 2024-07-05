import React from 'react'

const FooterBanner = () => {

    return (
        <div style={{ background: "rgba(169, 169, 169, 0.2)" }} className='mx-auto max-w-6xl h-[350px] md:h-[400px] rounded-lg flex text-center  gap-4 items-center justify-center flex-col my-10'>
            <h2 className='text-[2.5em] md:text-[5em] font-semibold md:leading-[80px] '>Do you want <br/> to explore you business?</h2>
            <button className='bg-[#222] rounded-[30px] p-2 px-6'>
                powusu050@gmail.com
            </button>
        </div>
    )
}

export default FooterBanner
