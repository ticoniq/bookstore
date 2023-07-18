import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categoriesSlice';
import booksReducer from './books/booksSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    book: booksReducer,
  },
});

export default store;
