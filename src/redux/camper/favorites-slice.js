import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
    reducers: {
        addFavorites(state, { payload }) {
            state.push(payload);
        },
        removeFavorites(state, { payload }) {
            return state.filter(item => item._id !== payload);
        },
    },
});

export default favoritesSlice.reducer;
export const { addFavorites, removeFavorites } = favoritesSlice.actions;