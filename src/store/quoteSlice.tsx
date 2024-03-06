import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Quote } from "../models/quote";

const initialState: Quote = { quote_expire_at: "", products: [], context: {} };

export const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    submitQuote: (_, action: PayloadAction<Quote>) => {
      return action.payload;
    },
    clearQuote: () => {
      return initialState;
    }
  }
});

export const { submitQuote, clearQuote } = quoteSlice.actions;
export default quoteSlice.reducer;
