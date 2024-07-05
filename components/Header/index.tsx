import React from 'react'
import Logo from '../Logo'
import { ROUTES } from '../../constants/routes'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
    const router = useRouter()
    return (
        <header className={` mx-auto bg-[#222] lg:px-10 flex justify-between z-10 px-6 h-[5em] items-center sticky top-0`}>
            <Logo />
            <div className='flex items-center gap-10'>
                <nav className=' hidden lg:flex gap-x-10 text-[18px] font-semibold'>
                    {
                        ROUTES.map(route => {
                            const { name, pathname } = route
                            return (
                                <div className={router.pathname === pathname ? 'navlink' : "link"} key={name} >
                                    <Link href={pathname}>
                                        <p className='py-2'>
                                            {name}
                                        </p>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </nav>
                {/* <Link className='gradient-border-button' href="#" >
                    Download CV
                </Link> */}
               
            </div>

        </header>
    )
}

export default Header
