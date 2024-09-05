import React from 'react'
import './AddToCart.css'
import { useDispatch } from 'react-redux';
// import { addCart } from '../../../features/cartSlice'
import Toast from "../../../components/toastMessage/Toast"
import { useState } from 'react';
import { addCart } from '../../../redux/cart/cartActions';

const AddToCart = ({ product, setLoading }) => {
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
    const handleAddToCart = () => {
        setLoading(true)
        setTimeout(() => {
            dispatch(addCart(product));
            // addCart(product)
            handleshowToast("Product Added Successfully", "success")
            setLoading(false)
        }, 1000);
    };

    return (
        <>
            <div className='atc-btn' onClick={handleAddToCart}>
                <div className="atc-text">
                    ADD TO CART
                </div>

            </div>

            <Toast
                isShown={showToastMsg.isShown}
                message={showToastMsg.message}
                type={showToastMsg.type}
                onClose={handlecloseToast}
            />
        </>
    )
}

export default AddToCart
