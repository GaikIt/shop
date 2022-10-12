import { configureStore } from '@reduxjs/toolkit';
import cart from './slices/cartSlice';
import filterSlice from './slices/filterSlice';
import pizza from './slices/pizzaSlice';


export const store = configureStore({
    reducer: {
        filter: filterSlice,
        cart,
        pizza,

    },
})