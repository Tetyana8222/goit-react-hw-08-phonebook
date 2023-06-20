import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const InitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlece = createSlice({
  name: 'auth',
  InitialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {},
  },
});
