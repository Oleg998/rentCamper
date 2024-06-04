import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filterLocation: '',
    details: {
      transmission:"",
      equipment: [],
      type: [],
    },
  },
  reducers: {
    setFilterLocation(state, action) {
      state.filterLocation = action.payload;
    },
    setDetails: (state, action) => {
      state.details = action.payload;
    },
  },
});

export const { setLocation, setDetails } = filterSlice.actions;
export default filterSlice.reducer;
