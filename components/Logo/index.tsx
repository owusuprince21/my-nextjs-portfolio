import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Logo = () => {
    return (
        <>
            <Link href="/">
                <div className='flex items-center gap-3 '>
                <Image src="/logo1.png" alt="" className="w-[50px]" width={80} height={80} />
                <h2 className='font-bold text-2xl uppercase tracking-wider'>
                   DA GRIN
                </h2>
                </div>
            </Link>
        </>
    )
}

export default Logo
