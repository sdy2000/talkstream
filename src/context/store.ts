import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth/auth-slice";
import themeSlice from "./slices/theme/theme-slice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    theme: themeSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
