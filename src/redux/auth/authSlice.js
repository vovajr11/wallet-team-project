import { createSlice } from '@reduxjs/toolkit';
import { signInUser, signupUser, signOutUser, getCurrentUser } from './authAPI';
import { notificationTypes } from '../../components/Notification';

const initialState = { user: null, token: null, isAuth: false };

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,

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
            .addCase(signOutUser.fulfilled, () => {
                return { ...initialState };
            })
            .addCase(signOutUser.rejected, (state, { payload }) => {
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
