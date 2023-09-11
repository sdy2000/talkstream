import { createSlice } from "@reduxjs/toolkit";

interface authInitialState {}

const initialState: authInitialState = {};

type Props = {};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export const {} = AuthSlice.actions;

export default AuthSlice.reducer;
