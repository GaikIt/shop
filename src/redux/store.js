import { configureStore } from '@reduxjs/toolkit';
import cart from './slices/cartSlice';
import filterSlice from './slices/filterSlice';

export const store = configureStore({
    reducer: {
        filter: filterSlice,
        cart,
    },
})