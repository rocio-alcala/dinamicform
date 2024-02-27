import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Quote } from "../components/views/Quotes";


const initialState: Quote[] = [];

export const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    submitQuote: (_, action: PayloadAction<Quote[]>) => {
      return action.payload;
    },
    clearQuote: () => {
      return initialState;
    }
  }
});

export const { submitQuote, clearQuote } = quoteSlice.actions;
export default quoteSlice.reducer;
