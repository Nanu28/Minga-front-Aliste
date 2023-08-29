import Welcome from '../componentes/Welcome'
import Carousel from '../componentes/Carousel'
import React from 'react'

const home = () => {
  return (
    <main>
     <Carousel/>
     <Welcome/>
    </main>
  )
}

export default home