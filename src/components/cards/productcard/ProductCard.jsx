import React from 'react'
import './ProductCard.css'
import AddToCart from './../../buttons/add_to_cart/AddToCart';

const ProductCard = ({id, imgUrl, altText, category, title, price }) => {
    const product = {id, imgUrl, altText, category, title, price };
    return (
        <div className='product-card'>
            <div className="product-img">
                <img src={imgUrl} alt={altText} />
            </div>
            <div className="product-details">
                <div className="product-details-top">

                    <div className="product-category">
                        {category}
                    </div >
                    <div className="product-title">
                        {title}
                    </div>
                </div>
                <div className="product-details-bottom">
                    <div style={{fontSize:'16px'}}>MRP</div>
                    <div className="product-price">&#8377; {price}</div>
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
