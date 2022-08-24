import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface ToastStateType {
  type?: "SUCCESS" | "ERROR" | "WARNING" | "NONE";
  title?: string;
  isOpen?: boolean;
}

const initialState: ToastStateType = {
  type: "NONE",
  title: " ",
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    toggleToast: (state, action: PayloadAction<ToastStateType>) => {
      const { type, title } = action.payload;
      state.title = title;
      state.type = type;
      state.isOpen = true;
    },
  },
});

// action disaptcher
export const { toggleToast } = toastSlice.actions;

//selector
export const selectCount = (state: RootState) => {
  state.toast.title, state.toast.type;
};

export default toastSlice.reducer;
