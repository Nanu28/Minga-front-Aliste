import { useState } from 'react'

function App() {
  return (
    <>
      
      <div className='bg-[url("../public/images/background-home-naruto.svg")] bg-cover bg-center w-full md:bg-none'>   

        <nav className='flex justify-between p-6'>
          <img className='h-10 w-10 md:h-14 w-14' src="../public/images/menu.svg" alt="" />
          <img className='h-10 w-10 md:h-14 w-14' src="../public/images/logo-minga.svg" alt="" />
        </nav>

        <main>
          <section className='hidden md:flex justify-around md:my-6 bg-pink-400 max-h-screen  m-8 rounded-md'>
            <img className='w-10' src="../public/images/left-arrow.svg" alt="" />
            <img className='h-60 -mt-8' src="../public/images/character-carousel.svg" alt="" />
            <img className='-mt-8 h-60 pb-4' src="../public/images/poster-carousel.svg" alt="" />
            <div className='w-80 m-8 text-white'>
              <h3 className='text-left flex'>Shonen</h3>
              <p className='text-left text-sm'>Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
            </div>
            <img className='w-10' src="../public/images/right-arrow.svg" alt="" />
          </section>

          <section className='max-h-screen py-40 md:mb-4 md:bg-[url("../public/images/background-home-naruto.svg")] bg-cover bg-center mx-8 rounded-md'>
            <div className='gap-1 text-white flex flex-col justify-center items-center md:items-start md:pl-16'>
              <h1 className='text-4xl font-bold text-center lg:text-6xl'>Live the emotion of the manga</h1>
              <p className='text-center'>Find the perfect manga for you</p>
              <p className='hidden md:block'>#MingaForever🔥</p>
              <button className='text-white bg-pink-400 w-52 h-11 rounded-md md:hidden'>Explore</button>
              <button className='hidden md:block text-white bg-pink-400 w-52 h-11 rounded-md'>Sign In!</button>
            </div>
          </section>  
        </main>
    </div>

        <footer className='flex flex-col justify-center items-center gap-1 border-indigo-500/100 pb-3 mt-2 md:mx-8'>
          <div className='h-56 w-full bg-[url("../public/images/footer-minga.svg")] bg-cover bg-center'>
          </div>
          
          <div className='w-full flex flex-col items-center md:flex-row md:justify-around md:items-center'>
          <div className='flex flex-col md:flex-row items-center gap-4'>
            <a>Home</a>
            <a>Mangas</a>
          </div>
          <img className='h-12 w-12 m-8' src="../public/images/logo-minga.svg" alt="" />
            <div className='flex flex-col items-center gap-4'>        
              <div className='flex gap-4'>
                <img className='h-15 w-15' src="../public/images/facebook-black.svg" alt="" />
                <img className='h-15 w-15' src="../public/images/twitter-black.svg" alt="" />
                <img className='h-15 w-15' src="../public/images/vimeo-black.svg" alt="" />
                <img className='h-15 w-15' src="../public/images/youtube-black.svg" alt="" />
              </div>
              <button className='flex justify-around bg-pink-400 text-white w-36 py-2 px-4 rounded-md mb-4'>
                Donate
                <img className='' src="../public/images/heart.svg" alt=""/>
              </button>
            </div>
          </div>
        </footer> 
        
    </>
  )
}

export default App


