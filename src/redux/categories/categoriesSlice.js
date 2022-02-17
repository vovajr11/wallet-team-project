import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://wallet.goit.ua/api';

export const getCategories = createAsyncThunk(
    'categories/getCategory',
    async (_, { dispatch, rejectWithValue }) => {
        try {
            const response = await axios.get('/transaction-categories');
            dispatch(returnCategories(response));
            
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);
  
  const initialState = { categories: null };
  
  const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
      getCategory: (state, action) => {
        state.categories = action.payload;
      },
    },
  });
 
  export const { returnCategories } = categoriesSlice.actions;
  export const categoriesReducer = categoriesSlice.reducer;
  