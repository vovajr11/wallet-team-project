import { createSlice } from "@reduxjs/toolkit";
import { getTransactionsSummary } from "./transactionsSummaryAPI";


const getTransactionsSummarySlice = createSlice({
    name: "TransactionsSUMMARRY",
    initialState: {},
    extraReducers: builder => {
        builder.addCase(getTransactionsSummary.fulfilled, (state, { payload }) => {
            state.transactions = payload;
        })
    }
}
);

export const summaryReducer = getTransactionsSummarySlice.reducer;