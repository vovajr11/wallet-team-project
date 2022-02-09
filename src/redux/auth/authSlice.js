import { createSlice } from '@reduxjs/toolkit';
import { signInUser, signupUser, getCurrentUser } from './authAPI';
import { notificationTypes } from '../../components/Notification';

export const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, token: null, isAuth: false },

    extraReducers: builder => {
        builder
            .addCase(signInUser.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.isAuth = true;
            })
            .addCase(signInUser.rejected, (state, { payload }) => {
                notificationTypes.notificationError(payload.message);
            });

        builder
            .addCase(signupUser.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.isAuth = true;
            })
            .addCase(signupUser.rejected, (state, { payload }) => {
                notificationTypes.notificationError(payload.message);
            });

        builder.addCase(getCurrentUser.fulfilled, (state, { payload }) => {
            state.user = payload;
            state.isAuth = true;
        });
    },
});
