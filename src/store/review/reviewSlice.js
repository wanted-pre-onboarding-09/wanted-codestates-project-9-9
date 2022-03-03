import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
};

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {},
  extraReducers: {},
});

export const { initializeForm } = reviewSlice.actions;
export default reviewSlice.reducer;
