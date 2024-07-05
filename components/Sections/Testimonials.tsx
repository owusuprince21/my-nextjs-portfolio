import React from 'react'
import Title from '../Title'
import TestimonialCard from '../Cards/TestimonialCard'
import { TESTIMONIALS } from '../../constants/testimony'

const Testimonials = () => {
  return (
    <section className="mb-20"
>
        <Title label="Testimonials About Me"/>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10  p-6 '>
          {
          TESTIMONIALS.map((testimony, index)=>{
              const {name,message,image,title}=testimony
              return(
                <TestimonialCard key={index} name={name} title={title} message={message} image={image}/>
              )
            })
          }

        </div>
      
    </section>
  )
}

export default Testimonials
