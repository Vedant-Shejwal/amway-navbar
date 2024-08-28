import React from 'react'
import './Banner.css'

const Banner = ({imgUrl,altText}) => {
  return (
    <div className='banner'>
      <img src={imgUrl} alt={altText} />
    </div>
  )
}

export default Banner
