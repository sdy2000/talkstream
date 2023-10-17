import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth/auth-slice";
import themeSlice from "./slices/theme/theme-slice";
import modalSlice from "./slices/modal/modal-slice";
import meetingsSlice from "./slices/meeting/meeting-slice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    theme: themeSlice,
    modal: modalSlice,
    meetings: meetingsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
