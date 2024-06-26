import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = 'http://176.37.226.184:8009'

export const fetchProducts = createAsyncThunk('items/fetch', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/api/products')
    return response.data.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})