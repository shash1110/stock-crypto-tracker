import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Price {
  id: string;
  symbol: string;
  price: number;
}

interface PriceState {
  prices: Price[];
}

const initialState: PriceState = {
  prices: [],
};

export const fetchPrices = createAsyncThunk('prices/fetchPrices', async () => {
  const response = await axios.get('/api/prices');
  return response.data;
});

const priceSlice = createSlice({
  name: 'prices',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPrices.fulfilled, (state, action) => {
      state.prices = action.payload;
    });
  },
});

export default priceSlice.reducer;
