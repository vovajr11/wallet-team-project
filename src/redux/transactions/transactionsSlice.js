import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { notificationTypes } from '../../components/Notification';

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
                amount:
                    values.type === 'EXPENSE'
                        ? values.amount * -1
                        : values.amount,
            };

            delete transactions.isExpenseType;

            const response = await axios.post('/transactions', transactions);
            return response.data;
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
        builder
            .addCase(fetchTransactions.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(fetchTransactions.rejected, (state, { payload }) => {
                notificationTypes.notificationError(payload.message);
            });
        builder
            .addCase(createTransaction.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(createTransaction.rejected, (state, { payload }) => {
                notificationTypes.notificationError(payload.message[0]);
            });
    },
});

export const {
    addTransaction = createTransaction,
    getTransactions = fetchTransactions,
} = transactionsSlice.actions;
export const transactionReducer = transactionsSlice.reducer;
