import React, { useState } from 'react'
import './CartCard.css'
import { RxCross2 } from "react-icons/rx";
import ChangeQuantity from './../../buttons/change_quantity/ChangeQuantity';
import { useDispatch } from 'react-redux';
//import { removeItem} from '../../../features/cartSlice'
import { removeItem } from '../../../redux/cart/cartActions';
import Toast from "../../../components/toastMessage/Toast"
import { Link } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";


const CartCard = ({ id, image, quantity, category, title, price, totalPrice }) => {
    const product = { id, image, category, title, price, quantity };
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const [showToastMsg, setshowToastMsg] = useState({
        isShown: false,
        message: "",
        type: ""
    })

    const handleshowToast = (message, type) => {
        setshowToastMsg({
            isShown: true,
            message: message,
            type: type
        })
    }

    const handlecloseToast = () => {
        setshowToastMsg({
            isShown: false,
            message: "",
        })
    }
    const handleRemoveItem = () => {
        dispatch(removeItem(product.id));
        handleshowToast("Product Removed Successfully", "success")
    };


    let showTitle = title.slice(0, 66);
    const showPrice = Number((totalPrice).toFixed(2));
    if (title.length > 66) {
        showTitle += '...';
    }

    return (
        <div className='cart-card'>
            {loading && (<div style={{
                width: '100%', height: '100%', justifyContent: 'center', margin: '-20px -20px',
                alignItems: 'center', display: 'flex', padding: '-20px', borderRadius: '10px',
                backdropFilter: 'blur(2px)', backgroundColor: 'rgba(0,0,0,0.1)',
                position: 'absolute', zIndex: 999
            }}>
                <AiOutlineLoading3Quarters className="loading-icon" />
            </div>)}

            <div className="product-cart-top">
                <div className="cart-top-left">
                    <Link to={"/products/" + id} className="product-cart-img">
                        <img src={image} alt={title} />
                    </Link>
                    <div className="product-cart-details">
                        <div className='product-cart-quantity'>
                            {quantity}
                            <RxCross2 size={10} />
                        </div>
                        <div className='product-cart-desc'>
                            <Link to={"/products/" + id} className="product-cart-text"><p>{category}</p> {showTitle}</Link>

                            <div className="product-cart-price mobile">
                                MRP <strike style={{ color: 'grey' }}>$ {Number((totalPrice * 1.08).toFixed(2))}</strike>
                                <div className="product-cart-cost">
                                    $ {showPrice}
                                </div>
                                <div style={{ fontSize: '12px', color: '#949494' }}>(incl. of all taxes)</div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="cart-top-right">
                    <div className="change-quantity-btn">
                        <div className="cq">
                            <ChangeQuantity product={product} setLoading={setLoading} />
                        </div>
                    </div>
                    <div className="product-cart-price">
                        MRP <strike style={{ color: 'grey' }}>$ {Number((totalPrice * 1.08).toFixed(2))}</strike>
                        <div className="product-cart-cost">
                            $ {showPrice}
                        </div>
                        <div style={{ fontSize: '12px', color: '#949494' }}>(incl. of all taxes)</div>
                    </div>
                </div>
            </div>
            <div className="product-cart-bottom">
                <div className="remove-btn" onClick={handleRemoveItem}>
                    <u>Remove</u>
                </div>
                <div className="cq-mobile">
                    <ChangeQuantity product={product} setLoading={setLoading} />
                </div>
            </div>

            <Toast
                isShown={showToastMsg.isShown}
                message={showToastMsg.message}
                type={showToastMsg.type}
                onClose={handlecloseToast}
            />
        </div>
    )
}

export default CartCard
