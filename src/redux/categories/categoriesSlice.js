import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://wallet.goit.ua/api';

export const getCategories = createAsyncThunk(
    'categories/getCategory',
    async (credentials, { dispatch, rejectWithValue }) => {
        try {
            const response = await axios.get(
                '/transaction-categories',
                credentials,
            );
            

            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);

const initialState = { items: [] };

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    extraReducers: builder => {
      builder.addCase(getCategories.fulfilled, (state, {payload}) => {
        state.items = payload;
      })
    }
      
});

export const categoriesReducer = categoriesSlice.reducer;
