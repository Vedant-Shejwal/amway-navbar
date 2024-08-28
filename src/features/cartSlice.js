import { createSlice } from '@reduxjs/toolkit';

// Helper function to load state from localStorage
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('cartItems');
        if (serializedState === null) {
            return []; // Return default state if nothing is in localStorage
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return []; // Return default state if error occurs
    }
};

// Helper function to save state to localStorage
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cartItems', serializedState);
    } catch (err) {
        // Ignore write errors
    }
};

// Initial state with cartItems loaded from localStorage
const initialState = {
    cartItems: loadState(),
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            state.cartItems.push(action.payload);
            saveState(state.cartItems); // Save updated state to localStorage
        },
    },
});

export const { addCart } = cartSlice.actions;

export default cartSlice.reducer;
