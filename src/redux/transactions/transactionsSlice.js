import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://wallet.goit.ua/api';

export const createTransaction = createAsyncThunk(
    'transactions/createTransaction',
    async (transactions, { rejectWithValue }) => {
        try {
            const response = await axios.post('/transactions', transactions);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);

const initialState = { value: null };

const transactionsSlice = createSlice({
    name: 'transactions',
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

export const { addTransaction, getTransactions } = transactionsSlice.actions;
export const transactionReducer = transactionsSlice.reducer;
