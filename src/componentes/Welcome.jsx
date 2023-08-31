import React from 'react'
import ButtonWelcome from './ButtonWelcome'

const Welcome = () => {
  return (
    <section className='max-h-screen py-40 md:mb-4 md:bg-[url("../public/images/background-home-naruto.svg")] bg-cover bg-center mx-8 rounded-md'>
      <div className='gap-1 text-white flex flex-col justify-center items-center md:items-start md:pl-16'>
        <h1 className='text-4xl font-bold text-center lg:text-6xl'>Live the emotion of the manga</h1>
        <p className='text-center'>Find the perfect manga for you</p>
        <p className='hidden md:block'>#MingaForever🔥</p>
        <ButtonWelcome/>
      </div>
    </section>
  )
}

export default Welcome
