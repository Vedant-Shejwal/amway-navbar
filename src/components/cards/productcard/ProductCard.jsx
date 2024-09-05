import React from 'react'
import './ProductCard.css'
import AddToCart from './../../buttons/add_to_cart/AddToCart';
import { Link } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useState } from 'react';


const ProductCard = ({ id, image, category, title, price, rating }) => {
    const product = { id, image, category, title, price };
    const [loading, setLoading] = useState(false);

    let showTitle = title.slice(0, 66);
    if (title.length > 66) {
        showTitle += '...';
    }

    const getBackgroundColor = (rating) => {
        if (rating >= 4.5) return '#00602B';
        if (rating >= 4.0) return '#92D14F';
        if (rating >= 3.0) return '#FEC923';
        if (rating >= 2.0) return '#FA9924';
        if (rating >= 1.0) return '#EA0001';
        return '#7B0100';
    };

    const backgroundColor = getBackgroundColor(rating);


    return (
        <div className='product-card'>
            {loading && (<div style={{
                width: '100%', height: '100%', justifyContent: 'center',
                alignItems: 'center', display: 'flex',borderRadius:'5px',
                backdropFilter: 'blur(2px)', backgroundColor: 'rgba(0,0,0,0.1)',
                position: 'absolute', zIndex: 999
            }}>
                <AiOutlineLoading3Quarters className="loading-icon" />
            </div>)}

            <Link to={"/products/" + id} className="product-img">

                <div className="rating" style={{ backgroundColor }}>
                    {rating}
                </div>
                <img src={image} alt={title} />
            </Link>
            <div className="product-details">
                <div className="product-details-top">

                    <div className="product-category">
                        {category}
                    </div >
                    <Link to={"/products/" + id} className="product-title">
                        {showTitle}
                    </Link>
                </div>
                <div className="product-details-bottom">
                    <div style={{ fontSize: '16px' }}>MRP <strike style={{ color: 'grey' }}>$ {Number((price * 1.08).toFixed(2))}</strike></div>
                    <div className="product-price">$ {price}</div>
                    <div style={{ fontSize: '14px', color: '#949494' }}>(incl. of all taxes)</div>
                    <div className="add-to-cart-btn" >
                        <AddToCart product={product} setLoading={setLoading}/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductCard
