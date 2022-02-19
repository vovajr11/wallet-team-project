import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://wallet.goit.ua/api';

export const fetchTransactions = createAsyncThunk(
    'transactionsAll/fetchTransactions',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('/transactions');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);

export const createTransaction = createAsyncThunk(
    'transactions/createTransaction',
    async ({ values, categoriesObj }, { rejectWithValue }) => {
        try {
            const transactions = {
                ...values,
                categoryId: categoriesObj[values.categoryId],
            };

            console.log(transactions, 'transactions');

            // const response = await axios.post('/transactions', transactions);
            // return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);

const initialState = { items: [] };

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchTransactions.fulfilled, (state, action) => {
            state.items = action.payload;
        });
        builder.addCase(createTransaction.fulfilled, (state, action) => {
            console.log(action.payload, 'action.payload');
            state.items.push(action.payload);
        });
    },
});

export const {
    addTransaction = createTransaction,
    getTransactions = fetchTransactions,
} = transactionsSlice.actions;
export const transactionReducer = transactionsSlice.reducer;
