import React from 'react'

const Footer = () => {
  return (
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
                <img className='h-15 w-15' src="../public/images/facebook-black.svg" alt="facebook_icon" />
                <img className='h-15 w-15' src="../public/images/twitter-black.svg" alt="twitter_icon" />
                <img className='h-15 w-15' src="../public/images/vimeo-black.svg" alt="vimeo_vimeo" />
                <img className='h-15 w-15' src="../public/images/youtube-black.svg" alt="youtube_icon" />
              </div>
              <button className='flex justify-around bg-pink-400 text-white w-36 py-2 px-4 rounded-md mb-4'>
                Donate
                <img className='' src="../public/images/heart.svg" alt="heart_icon"/>
              </button>
            </div>
          </div>
        </footer> 
  )
}

export default Footer