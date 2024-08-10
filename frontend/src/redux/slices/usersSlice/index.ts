import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UsersSlice } from "./types";

const initialState: UsersSlice = {
  username: "",
  token: "",
};

export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authenticate: (state, action: PayloadAction<UsersSlice>) => {
      state.username = action.payload.username;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.username = "";
      state.token = "";
    },
  },
});

export const { authenticate, logout } = usersSlice.actions;
export default usersSlice.reducer;
