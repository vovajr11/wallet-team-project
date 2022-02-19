import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isModalAddTransactionOpen: false,
    isModalLogoutOpen: false,
};

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setIsModalAddTransactionOpen: (state, action) => {
            state.isModalAddTransactionOpen = action.payload;
        },
        setIsModalLogoutOpen: (state, action) => {
            state.isModalLogoutOpen = action.payload;
        },
    },
});

export const { setIsModalAddTransactionOpen, setIsModalLogoutOpen } =
    globalSlice.actions;
export const globalReducer = globalSlice.reducer;
