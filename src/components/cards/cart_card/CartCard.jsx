import React from 'react'
import './CartCard.css'


const CartCard = ({ item }) => {
    return (
        <div className='cart-card'>
            <div className="product-cart-top">
                <div className="cart-top-left">
                    <div className="product-cart-img">
                    <img src={item.image || "https://via.placeholder.com/150"} alt={item.title} />
                    </div>
                    <div className="product-cart-details">
                        <div className="product-cart-text"><b>{item.category}</b> {item.title}</div>
                    </div>
                </div>

                <div className="cart-top-right">
                    <div className="product-cart-price">
                        MRP
                        <div className="product-cart-cost">
                            {item.price}
                        </div>
                        (incl. of all taxes)
                    </div>
                    </div>
            </div>
            <div className="product-cart-bottom">
                <button>remove</button>
            </div>
        </div>
    )
}

export default CartCard
