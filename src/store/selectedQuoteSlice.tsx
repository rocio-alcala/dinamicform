import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Quote } from "../components/views/Quotes";


const initialState: Quote = {};

export const selectedQuoteSlice = createSlice({
  name: "selectedQuote",
  initialState,
  reducers: {
    submitSelectedQuote: (_, action: PayloadAction<Quote>) => {
      return action.payload;
    },
    clearSelectedQuote: () => {
      return initialState;
    }
  }
});

export const { submitSelectedQuote, clearSelectedQuote } = selectedQuoteSlice.actions;
export default selectedQuoteSlice.reducer;
