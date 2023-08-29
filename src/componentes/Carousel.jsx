import React from 'react'
import { ArrowLeft, ArrowRight } from './Arrow'

const Carousel = () => {
  return (
    <section className='hidden md:flex justify-around md:my-6 bg-pink-400 max-h-screen  m-8 rounded-md'>
      <ArrowLeft />
      <img className='h-60 -mt-8' src="../../public/images/character-carousel.svg" alt="character_carousel" />
      <img className='-mt-8 h-60 pb-4' src="../../public/images/poster-carousel.svg" alt="poster_carousel" />
      <div className='w-80 m-8 text-white'>
        <h3 className='text-left flex'>Shonen</h3>
        <p className='text-left text-sm'>Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
      </div>
      <ArrowRight />
    </section>
  )
}

export default Carousel