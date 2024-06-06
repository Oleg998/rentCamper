import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './campers-operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchCars.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const {
  getCamper,
  fetchCampersLoading,
  fetchCampersSuccess,
  fetchCampersError,
} = campersSlice.actions;
export default campersSlice.reducer;
