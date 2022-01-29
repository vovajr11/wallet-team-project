import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './authActions';

const user = createReducer(null, {
    [authActions.registerSuccess]: (_, { payload }) => payload.user,
    [authActions.loginSuccess]: (_, { payload }) => payload.user,
    [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
    [authActions.registerSuccess]: (_, { payload }) => payload.token,
    [authActions.loginSuccess]: (_, { payload }) => payload.token,
});

const isAuth = createReducer(false, {
    [authActions.registerSuccess]: () => true,
    [authActions.loginSuccess]: () => true,
    [authActions.getCurrentUserSuccess]: () => true,
});

export default combineReducers({
    user,
    token,
    isAuth,
});
