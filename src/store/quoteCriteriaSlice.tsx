import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InputForm } from "../components/views/QuoteCriteria";


const initialState: InputForm = {};

export const quoteCriteriaSlice = createSlice({
  name: "quoteCriteria",
  initialState,
  reducers: {
    submitQuoteCriteria: (_, action: PayloadAction<InputForm>) => {
      return action.payload;
    },
    clearQuoteCriteria: () => {
      return initialState;
    }
  }
});

export const { submitQuoteCriteria, clearQuoteCriteria } = quoteCriteriaSlice.actions;
export default quoteCriteriaSlice.reducer;
