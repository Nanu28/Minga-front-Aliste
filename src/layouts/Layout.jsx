import Navbar from './Navbar'
import Home from '../pages/Home'
import React from 'react'

const Layout = (props) => {
    console.log(props)
  return (
    <>
    <Navbar/>
    <Home/>
    </>
  )
}

export default Layout