import React from 'react'
import './ChangeQuantity.css'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import Toast from "../../../components/toastMessage/Toast"
// import { addCart ,reduceQuantity} from '../../../features/cartSlice'
import { addCart, reduceQuantity } from '../../../redux/cart/cartActions';

const ChangeQuantity = ({ product, setLoading }) => {

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
    const handleReduceQuantity = () => {
        setLoading(true)
        setTimeout(() => {
            dispatch(reduceQuantity(product.id));
            setLoading(false)
            handleshowToast("Product Removed Successfully", "success")
        }, 1000);
    };

    const handleAddToCart = () => {
        setLoading(true)
        setTimeout(() => {
            dispatch(addCart(product));
            setLoading(false)
            handleshowToast("Product Added Successfully", "success")
        }, 1000);
    };

    return (
        <div className='cq-btn'>
            <div className="cq-btn-decrease"><CiCircleMinus onClick={handleReduceQuantity} /></div>
            <div className="cq-btn-amount">{product.quantity}</div>
            <div className="cq-btn-increase" onClick={handleAddToCart}><CiCirclePlus /></div>

            <Toast
                isShown={showToastMsg.isShown}
                message={showToastMsg.message}
                type={showToastMsg.type}
                onClose={handlecloseToast}
            />
        </div>
    )
}

export default ChangeQuantity
