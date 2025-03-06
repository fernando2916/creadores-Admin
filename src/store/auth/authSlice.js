import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-autenticated",
    users: [],
    user: {},
    rol: {},
    token: {},
    loading: false,
    message: null,
    errorMessage: null,
  },
  reducers: {
    onCheckingUser: (state) => {
      state.status = "checking";
      state.user = {};
      state.loading = true;
    },
    onGetUser: (state, { payload }) => {
      state.users = payload.data
      state.loading = false;
    },

    onLogin: ( state, { payload }) => {
      state.status = 'Authenticated',
      state.user = payload.user,
      state.token = payload.token,
      state.message = payload.message
      state.errorMessage = null
      state.loading = false
    },
    onLoginFail: ( state, { payload }) => {
      state.status = 'Credenciales Incorrectas',
      state.user = {},
      state.token = {},
      state.message = null
      state.errorMessage = payload.message
      state.loading = false
    },

    onLogout: (state) => {
      state.status = "not-authenticated";
      state.user = {};
      state.token = {};
      state.errorMessage = null;
      state.message = null;
      state.loading = false;
    },

    clearErrorMessage: (state) => {
      state.message = null;
      state.errorMessage = null;
      state.status = "not-authenticated";
    },
  },
});

// Action creators are generated for each case reducer function
export const { onCheckingUser, onGetUser, onLogin, onLoginFail, onLogout, clearErrorMessage } =
  authSlice.actions;
