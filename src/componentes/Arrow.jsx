import React from 'react'

const ArrowLeft = (props) => {
  return (
    <img onClick={props.left} className='w-10 cursor-pointer' src="../public/images/left-arrow.svg" alt="left_arrow" />
  )
}

const ArrowRight = (props) => {
  return (
    <img onClick={props.right} className='w-10 cursor-pointer' src="../public/images/right-arrow.svg" alt="right_arrow" />
  )
}

export { ArrowLeft, ArrowRight }; 