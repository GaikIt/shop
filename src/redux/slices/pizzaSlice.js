import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzaStatus',
    async (params) => {
        const { sortBy, order, category, search, currentPage } = params;
        const { data } = await axios.get(`https://632741ec5731f3db9956538d.mockapi.io/item?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`);
        return data;
    }
)


const initialState = {
    item: [],
    status: 'loading'
};

export const pizzaSlice = createSlice({
    name: "pizza",
    initialState,
    reducers: {
        setItems(state, action) {
            state.item = action.payload;
        },


    },
    extraReducers: {
        [fetchPizzas.pending]: (state, action) => {
            state.status = 'Loading'
            state.item = []
        },
        [fetchPizzas.fulfilled]: (state, action) => {
            state.item = action.payload;
            state.status = 'success'
        },
        [fetchPizzas.rejected]: (state, action) => {
            state.status = 'error';
            state.item = [];
        },
    },
})

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;