import { createSlice } from "@reduxjs/toolkit";

interface authInitialState {
  userInfo:
    | {
        uid: string;
        email: string;
        name: string;
        photoURL: string;
      }
    | undefined;
}

const initialState: authInitialState = (() => {
  if (localStorage.getItem("user") === null) {
    localStorage.setItem(
      "user",
      JSON.stringify({
        user: undefined,
      })
    );
  }

  return JSON.parse(localStorage.getItem("user") || "") as authInitialState;
})();

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;

      localStorage.setItem("user", JSON.stringify(state));
    },
  },
  extraReducers: () => {},
});

export const { setUser } = AuthSlice.actions;

export default AuthSlice.reducer;
