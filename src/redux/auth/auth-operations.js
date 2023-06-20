import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// register new user
const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    return data;
  } catch (error) {
    // error.message;
  }
});
// log in existed user
const logIn = createAsyncThunk('auth/logIn', async credentials => {
  try {
    const { data } = await axios.post('/users/logIn', credentials);
    return data;
  } catch (error) {
    // error.message;
  }
});

const authOperations = {
  register,
  logIn,
  // // logOut,
  // // logIn,
  // // fetchCurrentUser,
};

export default authOperations;
