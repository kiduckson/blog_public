import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface ToastStateType {
  type?: string | null;
  title?: string | null;
  isOpen?: boolean;
}

const initialState: ToastStateType = {
  type: "",
  title: " ",
  isOpen: false,
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    openToast: (state, action: PayloadAction<ToastStateType>) => {
      console.log("open");
      const { type, title } = action.payload;
      state.title = title ? title : "";
      state.type = type ? type : "";
      state.isOpen = true;
    },
    closeToast: (state) => {
      console.log("close");

      state.isOpen = false;
    },
  },
});

// action disaptcher
export const { openToast, closeToast } = toastSlice.actions;

//selector
export const selectToast = (state: RootState) => {
  return { title: state.toast.title, type: state.toast.type, isOpen: state.toast.isOpen };
};

export default toastSlice.reducer;
