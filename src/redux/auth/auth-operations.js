import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

//налаштування заголовка Authorization у запитах Axios.
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// register new user
const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    // error.message;
  }
});
// log in existed user
const logIn = createAsyncThunk('auth/logIn', async credentials => {
  try {
    const { data } = await axios.post('/users/logIn', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    // error.message;
  }
});

const logOut = createAsyncThunk('auth/loyOut', async credentials => {
  try {
    const { data } = await axios.post('/users/logOut', credentials);
    token.unset();
    return data;
  } catch (error) {}
});

const authOperations = {
  register,
  logIn,
  logOut,
  // // logIn,
  // // fetchCurrentUser,
};

export default authOperations;
