import Navbar from './Navbar'
import Home from '../pages/Home'
import Footer from '../componentes/Footer'
import React from 'react'

const Layout = (props) => {
    console.log(props)
  return (
    <>
    <Navbar/>
      {props.children}
    <Footer/>
    </>
  )
}

export default Layout