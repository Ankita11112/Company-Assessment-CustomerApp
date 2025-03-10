import { configureStore } from "@reduxjs/toolkit";
import customersReducer from "../features/CustomersSlice";

export const store = configureStore({
    reducer: {
        customers: customersReducer,
    }
});