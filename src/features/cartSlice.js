import { createSlice } from '@reduxjs/toolkit';

// Helper function to load state from localStorage
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('cartState');
        if (serializedState === null) {
            return {
                cartItems: [],
                totalQuantity: 0,
                totalCost: 0,
            };
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return {
            cartItems: [],
            totalQuantity: 0,
            totalCost: 0,
        };
    }
};

// Helper function to save state to localStorage
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cartState', serializedState);
    } catch (err) {
        // Handle errors
    }
};

// Initial state with cartItems, totalQuantity, and totalPrice loaded from localStorage
const initialState = loadState();

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.cartItems.find(cartItem => cartItem.id === item.id);

            if (existingItem) {
                existingItem.quantity += 1;
                existingItem.totalPrice += item.price;
            } else {
                state.cartItems.push({ 
                    ...item, 
                    quantity: 1, 
                    totalPrice: item.price 
                });
            }

            // Update the total quantity and total price of all items in the cart
            state.totalQuantity = state.cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
            state.totalCost = state.cartItems.reduce((total, cartItem) => total + cartItem.totalPrice, 0);

            saveState(state);
        },

        // Reducer to reduce the quantity of a product
        reduceQuantity: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.cartItems.find(cartItem => cartItem.id === itemId);

            if (existingItem) {
                existingItem.quantity -= 1;
                existingItem.totalPrice -= existingItem.price;

                if (existingItem.quantity === 0) {
                    state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== itemId);
                }
            }

            // Update the total quantity and total price of all items in the cart
            state.totalQuantity = state.cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
            state.totalCost = state.cartItems.reduce((total, cartItem) => total + cartItem.totalPrice, 0);

            saveState(state);
        },

        // Reducer to remove an item by its ID
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== itemId);

            // Update the total quantity and total price of all items in the cart
            state.totalQuantity = state.cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
            state.totalCost = state.cartItems.reduce((total, cartItem) => total + cartItem.totalPrice, 0);

            saveState(state);
        },
    },
});

export const { addCart, reduceQuantity, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
