import React from 'react'
import './ScrollUp.css'
import { IoMdArrowRoundUp } from "react-icons/io";




const ScrollUp = () => {

    const scrollToTopSelling = () => {
        const topSellingSection = document.querySelector('.category-name');
        if (topSellingSection) {
          window.scrollTo({
            top: topSellingSection.offsetTop-110,
            behavior: 'smooth'
          });
        }
      };

  return (
    <div className='scroll_up_btn' onClick={scrollToTopSelling} >
      <div className="scroll-up-icon"><IoMdArrowRoundUp/></div>
    </div>
  )
}

export default ScrollUp
