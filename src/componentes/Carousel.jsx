import React, { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from './Arrow'
import axios from 'axios'

const Carousel = () => {
let [counter, setCounter] = useState(0)
let [categories, setCategories] = useState([])
let url = 'https://minga-back-vyqy.onrender.com/categories'


let prev = () => {
(counter!==0) ? (setCounter(counter-1)) : (setCounter(categories.length-1))
}
let next = () => {
(counter!==categories.length-1) ? (setCounter(counter+1)) : (setCounter(0))
} 
function getData(){
axios(url)
.then(res=>setCategories(res.data.categories))
.catch((err)=>console.log(err.message))
}
useEffect(()=>{
getData()
}, [])

  return (
    <section className='hidden md:flex justify-around md:my-6 bg-pink-400 max-h-screen  m-8 rounded-md'>
      <ArrowLeft left = {prev}/>
      <img className='h-60 -mt-8' src={categories[counter]?.character_photo} alt="character_carousel" />
      <img className='-mt-8 h-60 pb-4' src= {categories[counter]?.cover_photo} alt="poster_carousel" />
      <div className='w-80 m-8 text-white'>
        <h3 className='text-left flex font-semibold'>{categories[counter]?.name}</h3>
        <p className='text-left text-sm'>{categories[counter]?.description}</p>
      </div>
      <ArrowRight right = {next} />
    </section>
  )
}

export default Carousel