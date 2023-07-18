import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: false,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
});

// console.log(categoriesSlice);

export default categoriesSlice.reducer;
