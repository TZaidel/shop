import { createAsyncThunk } from '@reduxjs/toolkit';
import { clearToken, setToken } from '../../api/api';
import axios from 'axios';

axios.defaults.baseURL = 'http://176.37.226.184:8009';

export const registerThunk = createAsyncThunk(
  'register',
  async (credentials, thunkAPI) => {
    try {
      await axios.post('/api/register', credentials);
    } catch (error) {
      if (error.request.status === 409) {
        return thunkAPI.rejectWithValue('Email is already in use.');
      }

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/api/login', credentials);
      setToken(response.data.accessToken);
      return response.data;
    } catch (error) {
      if (error.request.status === 401) {
        return thunkAPI.rejectWithValue(
          "Email doesn't exist or password is incorrect. Please try again."
        );
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk('refresh', async (_, thunkAPI) => {
  const { auth } = thunkAPI.getState();

  const refreshToken = auth.refreshToken;

  if (!refreshToken) {
    return thunkAPI.rejectWithValue('No refresh token.');
  }

  try {
    const { data } = await axios.post('/api/refresh', { refreshToken });
    setToken(data.accessToken);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logoutThunk = createAsyncThunk(
  'logout',
  async (refreshToken, thunkAPI) => {
    try {
      await axios.post('/auth/logout', refreshToken);
      clearToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
