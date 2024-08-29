import React from 'react'
import './ProductCard.css'
import AddToCart from './../../buttons/add_to_cart/AddToCart';
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({id, imgUrl, altText, category, title, price }) => {
    const product = {id, imgUrl, altText, category, title, price };

    let showTitle = title.slice(0, 66);
    let showPrice = price*83;
    if (title.length > 66) {
        showTitle += '...';
    }

    return (
        <div className='product-card'>
            <Link to ={"/products/"+id} className="product-img">
                <img src={imgUrl} alt={altText} />
            </Link>
            <div className="product-details">
                <div className="product-details-top">

                    <div className="product-category">
                        {category}
                    </div >
                    <Link to ={"/products/"+id} className="product-title">
                        {showTitle}
                    </Link>
                </div>
                <div className="product-details-bottom">
                    <div style={{fontSize:'16px'}}>MRP</div>
                    <div className="product-price">&#8377; {showPrice}</div>
                    <div style={{fontSize:'14px',color:'#949494'}}>(incl. of all taxes)</div>
                    <div className="add-to-cart-btn">
                        <AddToCart product={product}/>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ProductCard
