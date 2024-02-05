import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "../store/quoteSlice";

export const store = configureStore({ reducer: { quote: quoteReducer } });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
