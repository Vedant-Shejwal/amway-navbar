import React from 'react'
import './ProductCard.css'
import AddToCart from './../../buttons/add_to_cart/AddToCart';
import { Link } from "react-router-dom";

const ProductCard = ({id, image, category, title, price }) => {
    const product = {id, image, category, title, price };

    let showTitle = title.slice(0, 66);
    if (title.length > 66) {
        showTitle += '...';
    }

    return (
        <div className='product-card'>
            <Link to ={"/products/"+id} className="product-img">
                <img src={image} alt={title} />
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
                    <div style={{fontSize:'16px'}}>MRP <strike style={{color:'grey'}}>$ {Number((price*1.08).toFixed(2))}</strike></div>
                    <div className="product-price">$ {price}</div>
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
