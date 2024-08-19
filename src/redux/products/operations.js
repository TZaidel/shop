import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiProduct } from '../../api/api';

export const fetchProducts = createAsyncThunk(
  '/api/products/t-shirts',
  async (page = 1, thunkAPI) => {
    const params = new URLSearchParams({
      page,
      limit: 40,
    });
    try {
      const response = await apiProduct.get('/api/products/t-shirts/', {
        params,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
