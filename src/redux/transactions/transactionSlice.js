import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = { value: 0 };

const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
        addTransaction: (state, action) => {
            state.transactions.push(action.payload);
        },
        getTransactions: (state, action) => {
            state.transactions = action.payload;
        },
    },
});

export const { addTransaction, getTransactions } = transactionSlice.actions;
export default transactionSlice.reducer;
