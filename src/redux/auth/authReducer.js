import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './authActions';

const initialUserState = { username: null, email: null };

const user = createReducer(initialUserState, {
    [authActions.registerSuccess]: (_, { payload }) => payload.user,
});

const token = createReducer(null, {
    [authActions.registerSuccess]: (_, { payload }) => payload.token,
});

const isAuth = createReducer(false, {
    [authActions.registerSuccess]: (_, { payload }) => true,
});

export default combineReducers({
    user,
    token,
    isAuth,
});
