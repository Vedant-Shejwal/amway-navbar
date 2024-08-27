import {configureStore} from '@reduxjs/toolkit'
import navbarReducer from '../features/navbarSlice';
import footerReducer from '../features/footerSlice';

export const store = configureStore({
   reducer: {
    headerState:navbarReducer,
    footerState:footerReducer,
   }
})