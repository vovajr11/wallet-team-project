import { createSlice } from '@reduxjs/toolkit';
import { fetchTransactions } from './transactionsAllAPI';

const getTransactionsSlice = createSlice({
    name: 'transactionsAll',
    initialState: { transactions: [] },
    extraReducers: builder => {
        builder.addCase(fetchTransactions.fulfilled, (state, action) => {
            state.transactions = action.payload;
        });
    },
});

export const transactionsReducer = getTransactionsSlice.reducer;
