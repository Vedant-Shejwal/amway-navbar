import React, { useState } from 'react'
import './CartCard.css'
import { RxCross2 } from "react-icons/rx";
import ChangeQuantity from './../../buttons/change_quantity/ChangeQuantity';
import { useDispatch } from 'react-redux';
import { removeItem} from '../../../features/cartSlice'
import Toast from "../../../components/toastMessage/Toast"


const CartCard = ({ id, image, quantity, category, title, price,totalPrice }) => {
    const product = {id, image, category, title, price ,quantity};

    const dispatch = useDispatch();

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
            <div className="product-cart-top">
                <div className="cart-top-left">
                    <div className="product-cart-img">
                        <img src={image} alt={title} />
                    </div>
                    <div className="product-cart-details">
                        <div className='product-cart-quantity'>
                            {quantity}
                            <RxCross2 size={10} />
                        </div>
                        <div className="product-cart-text"><p>{category}</p> {showTitle}</div>
                    </div>
                </div>

                <div className="cart-top-right">
                    <div className="change-quantity-btn">
                        <div className="cq">
                            <ChangeQuantity  product={ product }/>
                        </div>
                    </div>
                    <div className="product-cart-price">
                        MRP
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
