import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

const initialState: { locale: "eng" | "kor" } = { locale: "kor" };

const localeSlicer = createSlice({
  name: "locale",
  initialState,
  reducers: {
    changeLocale: (state, action: PayloadAction<{ locale: "eng" | "kor" }>) => {
      const { locale } = action.payload;
      state.locale = locale;
    },
  },
});

// action disaptcher
export const { changeLocale } = localeSlicer.actions;

//selector
export const selectLocale = (state: RootState) => {
  return { ...state.locale };
};

export default localeSlicer.reducer;
