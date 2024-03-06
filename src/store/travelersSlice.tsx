import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TravelersInputForm } from "../components/organisms/TravelersForm";

const initialState: TravelersInputForm = { policyHolder: {}};

export const travelersSlice = createSlice({
  name: "travelers",
  initialState,
  reducers: {
    submitTravelers: (_, action: PayloadAction<TravelersInputForm>) => {
      return action.payload;
    },
    clearTravelers: () => {
      return initialState;
    }
  }
});

export const { submitTravelers, clearTravelers } = travelersSlice.actions;
export default travelersSlice.reducer;