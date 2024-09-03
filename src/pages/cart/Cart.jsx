import React from 'react'
import './Cart.css'
import { useSelector } from 'react-redux';
import { TbShoppingCartSearch } from "react-icons/tb";
import GeneralBtn from '../../components/buttons/general_btn/GeneralBtn';
import { useEffect } from 'react';
import CartCard from './../../components/cards/cart_card/CartCard';



const Cart = () => {
    const { cartItems, totalCost, totalQuantity } = useSelector((state) => state.cartState);

    const calculateRoundingValue = (price) => {
        const roundedPrice = Math.floor(price);
        return (price - roundedPrice).toFixed(2);
    };
    const roundingValue = calculateRoundingValue(totalCost - 1.12);
    const showPrice = (totalCost - 1.12 - roundingValue).toFixed(2);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);


    return (

        <div className="cart">
            {cartItems.length <= 0 && (
                <div className='empty-cart'>
                    <div className='cart-title'>Your Cart</div>
                    <div className='cart-msg'>There are no items in your cart. Would you like to explore some products?</div>
                    <div className="empty-cart-bottom">

                        <div className="search-cart-icon"><TbShoppingCartSearch /></div>
                        <div className="shop-now-btn">
                            <GeneralBtn type={'white'} gen_btn_text={'SHOP NOW'} redirect={'/'} />
                        </div>
                    </div>
                </div>
            )}
            {cartItems.length > 0 && (
                <>
                    <div className='cart-items'>
                        <div className="cart-items-details">
                            <h2>Your Cart</h2>
                            <p>Total Items: {totalQuantity}</p>
                        </div>
                        <div className="cart-product-list">
                            {cartItems.map((item) => (
                                <CartCard
                                key={item.id}
                                    id={item.id}
                                    image={item.image}
                                    quantity={item.quantity}
                                    category={item.category}
                                    title={item.title}
                                    totalPrice={item.totalPrice}
                                    price={item.price}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="cart-checkout">
                        <div className="checkout-summary">
                            <div className="checkout-price">
                                <div className="checkout-price-left">
                                    <h2>You Pay</h2>
                                    <u> <a>View Our Order Policy</a></u>
                                </div>
                                <div className="checkout-price-right">
                                    <h2>$ {showPrice}</h2>
                                    <p>(incl. of all taxes)</p>
                                </div>
                            </div>
                            <div className="order-summary">
                                <div className="summary-item total-price">
                                    <p>Total price</p>
                                    <span>MRP $ {Number((totalCost * 1.08).toFixed(2))}</span>
                                </div>
                                <div className="summary-item discount">
                                    <p>Distributor price discount</p>
                                    <span>- $ {Number((totalCost * 0.08).toFixed(2))}</span>
                                </div>
                                <div className="summary-item promotion">
                                    <p>Promotion</p>
                                    <span>- $ 1.12</span>
                                </div>
                                <div className="summary-item">
                                    <p>Delivery charges</p>
                                    <div style={{display:'flex'}}><p style={{ color: 'darkgreen', fontWeight: '700' }} span>Free </p>  <strike>$ 50.00</strike></div>
                                </div>
                                <div className="summary-item rounding-amount">
                                    <p>Rounding Item amount</p>
                                    <span>- $ {roundingValue}</span>
                                </div>
                                <div className="summary-item before-taxes">
                                    <p>Price before taxes</p>
                                    <span>$ {Number((showPrice * 0.85).toFixed(2))}</span>
                                </div>
                                <div className="summary-item taxes">
                                    <p>Taxes</p>
                                    <span>$ {Number((showPrice * 0.15).toFixed(2))}</span>
                                </div>
                            </div>
                            <div className="checkout-btn">
                                <GeneralBtn type={'black'} gen_btn_text={'CHECKOUT'} redirect={'/checkout'} />
                            </div>

                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Cart
