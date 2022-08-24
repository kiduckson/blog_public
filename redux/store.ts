import { Action, configureStore, combineReducers, ThunkAction, AnyAction } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

//slice
import toastReducer from "./toastSlice";

const combinedReducer = combineReducers({
  toast: toastReducer,
});

const reducer: typeof combinedReducer = (state, action: AnyAction) => {
  if (action.type === HYDRATE) {
    return {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
  } else {
    return combinedReducer(state, action);
  }
};

export const store = configureStore({ reducer });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

const makeStore = () => store;
export const wrapper = createWrapper(makeStore);
