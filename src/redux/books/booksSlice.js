import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  isloading: false,
  error: undefined,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
});

export default bookSlice.reducer;
