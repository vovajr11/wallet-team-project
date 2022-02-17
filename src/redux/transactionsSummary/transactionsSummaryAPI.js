import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://wallet.goit.ua/api';

export const getTransactionsSummary = createAsyncThunk(
    'transactionsSummary/getTransactionsSummary',
    async (credentials, { rejectWithValue }) => {
        try {
            const res = await axios.get('/transactions-summary', credentials);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
