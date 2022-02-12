import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://wallet.goit.ua/api';

const token = {
    set(token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common['Authorization'] = '';
    },
};

export const signupUser = createAsyncThunk(
    'auth/signupUser',
    async (credentials, { rejectWithValue }) => {
        try {
            const res = await axios.post('/auth/sign-up', credentials);
            token.set(res.data.token);

            return res.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);

export const signInUser = createAsyncThunk(
    'auth/signInUser',
    async (credentials, { rejectWithValue }) => {
        try {
            const res = await axios.post('/auth/sign-in', credentials);
            token.set(res.data.token);

            return res.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);

export const getCurrentUser = createAsyncThunk(
    'auth/getCurrentUser',
    async (_, { getState }) => {
        const {
            session: { token: persistedToken },
        } = getState();

        if (persistedToken) {
            token.set(persistedToken);
            const res = await axios.get('/users/current');

            return res.data;
        }

        throw new Error('The user is not authorized');
    },
);
