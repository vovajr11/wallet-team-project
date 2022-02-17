import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, PERSIST } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authSlice } from './auth/authSlice';
import { transactionReducer } from './transactions/transactionsSlice';
import { globalReducer } from './global/globalSlice';
import { summaryReducer } from './transactionsSummary/transactionsSummarySlice';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

const combinedReducer = combineReducers({
    session: persistReducer(authPersistConfig, authSlice.reducer),
    transaction: transactionReducer,
    summary: summaryReducer,
    global: globalReducer,
});

const rootReducer = (state, action) => {
    if (action.type === 'auth/signOutUser/fulfilled') {
        state = undefined;
    }

    return combinedReducer(state, action);
};

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [PERSIST],
            },
        }),
});

export const persistor = persistStore(store);
