import {Types} from './cartTypes';
import cartInitialState from './cartInitialState';
import { saveState } from './cartUtils';

const cartReducer = (state = cartInitialState, action) => {
    switch (action.type) {
        case Types.ADD_CART: {
            const item = action.payload;
            const existingItem = state.cartItems.find(cartItem => cartItem.id === item.id);
            let newCartItems;

            if (existingItem) {
                newCartItems = state.cartItems.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1, totalPrice: cartItem.totalPrice + item.price }
                        : cartItem
                );
            } else {
                newCartItems = [
                    ...state.cartItems,
                    { ...item, quantity: 1, totalPrice: item.price }
                ];
            }

            const newTotalQuantity = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
            const newTotalCost = newCartItems.reduce((total, cartItem) => total + cartItem.totalPrice, 0);

            const newState = {
                ...state,
                cartItems: newCartItems,
                totalQuantity: newTotalQuantity,
                totalCost: newTotalCost
            };

            saveState(newState);
            return newState;
        }

        case Types.REDUCE_QUANTITY: {
            const itemId = action.payload;
            const newCartItems = state.cartItems
                .map(cartItem => {
                    if (cartItem.id === itemId) {
                        const newQuantity = cartItem.quantity - 1;
                        const newTotalPrice = cartItem.totalPrice - cartItem.price;

                        if (newQuantity === 0) {
                            return null;
                        }

                        return { ...cartItem, quantity: newQuantity, totalPrice: newTotalPrice };
                    }
                    return cartItem;
                })
                .filter(item => item !== null);

            const newTotalQuantity = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
            const newTotalCost = newCartItems.reduce((total, cartItem) => total + cartItem.totalPrice, 0);

            const newState = {
                ...state,
                cartItems: newCartItems,
                totalQuantity: newTotalQuantity,
                totalCost: newTotalCost
            };

            saveState(newState);
            return newState;
        }

        case Types.REMOVE_ITEM: {
            const itemId = action.payload;
            const newCartItems = state.cartItems.filter(cartItem => cartItem.id !== itemId);

            const newTotalQuantity = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
            const newTotalCost = newCartItems.reduce((total, cartItem) => total + cartItem.totalPrice, 0);

            const newState = {
                ...state,
                cartItems: newCartItems,
                totalQuantity: newTotalQuantity,
                totalCost: newTotalCost
            };

            saveState(newState);
            return newState;
        }

        default:
            return state;
    }
};

export default cartReducer;
