import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    item: [],
    totalPrice: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            const findItem = state.item.find(obj => obj.id === action.payload.id)
            if (findItem) {
                findItem.count++;
            } else {
                state.item.push({
                    ...action.payload,
                    count: 1,
                })
            }
            state.totalPrice = state.item.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum;
            }, 0)
        },
        minusItem(state, action) {
            const findItem = state.item.find(obj => obj.id === action.payload);
            if (findItem) {
                findItem.count--;
            }
        },
        removeItem(state, action) {
            state.item = state.item.filter(obj => obj.id !== action.payload);
        },
        clearItems(state) {
            state.item = [];
            state.totalPrice = 0;
        }
    },
})

export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;