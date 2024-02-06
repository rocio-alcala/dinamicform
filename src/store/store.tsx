import { configureStore } from "@reduxjs/toolkit";
import quoteCriteriaReducer from "./quoteCriteriaSlice";

export const store = configureStore({
  reducer: { quoteCriteria: quoteCriteriaReducer }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
