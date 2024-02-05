import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InputForm } from "../components/organisms/QuoteForm";

const initialState: InputForm = {};

export const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    submitQuote: (state, action: PayloadAction<InputForm>) => {
      state = action.payload;
      return state;
    },
    clearQuote: (state) => {
      state = initialState;
      return state;
    }
  }
});

export const { submitQuote, clearQuote } = quoteSlice.actions;
export default quoteSlice.reducer;
