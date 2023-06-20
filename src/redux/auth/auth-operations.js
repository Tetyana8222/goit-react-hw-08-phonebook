import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// register new user
createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    return data;
  } catch (error) {
    // error.message;
  }
});

const operations = {
  // register,
  // // logOut,
  // // logIn,
  // // fetchCurrentUser,
};
export default operations;
