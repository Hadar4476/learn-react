import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

const login = (state) => {
  state.isAuthenticated = true;
};

const logout = (state) => {
  state.isAuthenticated = false;
};

// allow state mutation

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login,
    logout,
  },
});

export default authSlice;
