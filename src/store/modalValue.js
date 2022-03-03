import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openValue: false,
};

const modalValueSlice = createSlice({
  name: 'modalValue',
  initialState,
  reducers: {
    handleModalValue(state) {
      state.openValue = !state.openValue;
    },
  },
});

export const { handleModalValue } = modalValueSlice.actions;
export default modalValueSlice.reducer;
