import React, { FC } from 'react'
import Image from 'next/image'

interface ITestimony {
    name: string,
    message: string,
    image: string
    title:string
}

const TestimonialCard: FC<ITestimony> = ({ name, message, image,title }) => {
    const styles = {
        background: "rgba(169, 169, 169, 0.2)"
    }
    return (
        <div style={{ background: styles.background }} className='border-2 border-gray-600 relative rounded-md p-6 px-10'>
            <Image className='absolute -top-6 -left-6 w-16 h-16' src={image} alt={name} width={100} height={100} />
            <p>
                {message}
            </p>
            <div className='pt-3 flex flex-col items-end'>
                <h3 className='font-bold'>
                    {name}
                </h3>
                <span>
                    {title}
                </span>
            </div>
        </div>
    )
}

export default TestimonialCard
