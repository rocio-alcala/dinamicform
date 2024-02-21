import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InputForm } from "../components/organisms/QuoteForm";

const initialState: InputForm = {};

export const travelersSlice = createSlice({
  name: "travelers",
  initialState,
  reducers: {
    submitTravelers: (_, action: PayloadAction<InputForm>) => {
      return action.payload;
    },
    clearTravelers: () => {
      return initialState;
    }
  }
});

export const { submitTravelers, clearTravelers } = travelersSlice.actions;
export default travelersSlice.reducer;