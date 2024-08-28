import {configureStore} from '@reduxjs/toolkit'
import navbarReducer from '../features/navbarSlice';
import footerReducer from '../features/footerSlice';
import cartReducer from '../features/cartSlice';
export const store = configureStore({
   reducer: {
    headerState:navbarReducer,
    footerState:footerReducer,
    cartState : cartReducer,
   }
})