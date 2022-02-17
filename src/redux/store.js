import { configureStore } from '@reduxjs/toolkit';
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

export const store = configureStore({
    reducer: {
        session: persistReducer(authPersistConfig, authSlice.reducer),
        transaction: transactionReducer,
        summary: summaryReducer,
        global: globalReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [PERSIST],
            },
        }),
});

export const persistor = persistStore(store);
