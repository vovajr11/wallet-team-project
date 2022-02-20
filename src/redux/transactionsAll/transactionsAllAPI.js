import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://wallet.goit.ua/api/';

export const fetchTransactions = createAsyncThunk(
    'transactionsAll/fetchTransactions',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${URL}transactions`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);
