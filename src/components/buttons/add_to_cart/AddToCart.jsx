import React from 'react'
import './AddToCart.css'
import { useDispatch } from 'react-redux';
import {addCart} from '../../../features/cartSlice' 


const AddToCart = ({product}) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
      dispatch(addCart(product));
    };
    
  return (
    <div className='atc-btn' onClick={handleAddToCart}>
      <div className="text">ADD TO CART</div>
    </div>
  )
}

export default AddToCart
