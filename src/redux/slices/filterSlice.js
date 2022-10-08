import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoryId: 0,
    sort: {
        name: 'популярности',
        sortProperty: 'rating'
    }
};

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload;
        },
        setSortSelect(state, action) {
            state.sort = action.payload;
        }
    },
})

export const { setCategoryId, setSortSelect } = filterSlice.actions;

export default filterSlice.reducer;