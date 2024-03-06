import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { QuoteProduct } from "../models/quote";

const initialState: QuoteProduct = { quote_code: "", name: "", guarantees: [] };

export const selectedQuoteSlice = createSlice({
  name: "selectedQuote",
  initialState,
  reducers: {
    submitSelectedQuote: (_, action:PayloadAction<QuoteProduct>) => {
      return action.payload;
    },
    clearSelectedQuote: () => {
      return initialState;
    }
  }
});

export const { submitSelectedQuote, clearSelectedQuote } =
  selectedQuoteSlice.actions;
export default selectedQuoteSlice.reducer;
