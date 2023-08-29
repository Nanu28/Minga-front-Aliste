import React from 'react'

const Navbar = () => {
  return (
    <header className='flex justify-between p-6'>
    <img className='h-10 w-10 md:h-14 w-14' src="../public/images/menu.svg" alt="" />
    <img className='h-10 w-10 md:h-14 w-14' src="../public/images/logo-minga.svg" alt="" />
  </header>
  )
}

export default Navbar