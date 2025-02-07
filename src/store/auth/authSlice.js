import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-autenticated',
    user: {},
    toke: {},
  },
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {  } = authSlice.actions;