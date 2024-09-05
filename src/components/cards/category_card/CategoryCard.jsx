import React from 'react'
import './CategoryCard.css'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const CategoryCard = ({categoryName,imgUrl,color}) => {
    
    return (
        <div className='category-card'>

            <div className="category-card-top">
                <Link to ={"/products/category/"+categoryName} className="category-card-dp" style={{ backgroundColor: color }}>
                    {/* <img src={imgUrl} /> */}
                </Link>
            </div>
            <div className="category-card-bottom">
                <Link to ={"/products/category/"+categoryName} className="category-card-link">
                    <div className="category-card-text">
                        {categoryName}
                    </div>
                    <div className="category-card-icon" >
                        <HiOutlineArrowNarrowRight/>
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default CategoryCard
