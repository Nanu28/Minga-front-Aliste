import Navbar from './Navbar'
import Home from '../pages/Home'
import Footer from '../componentes/Footer'
import React from 'react'

const Layout = (props) => {
    console.log(props)
  return (
    <>
    <div className='bg-[url("../public/images/background-mobile-home-naruto.svg")] bg-cover bg-start w-full md:bg-none'> 
    <Navbar/>
      {props.children}
    </div>
    <Footer/>
    </>
  )
}

export default Layout