import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { Session } from "@supabase/gotrue-js/src/lib/types";

export type SessionStateType = {
  session: Session | null;
};

const initialState: SessionStateType = { session: null };

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    updateSession: (state, action: PayloadAction<SessionStateType>) => {
      const { session } = action.payload;
      state.session = session;
    },
  },
});

// action dispatcher
export const { updateSession } = sessionSlice.actions;
//selector
export const selectSession = (state: RootState) => state.session.session;

export default sessionSlice.reducer;
