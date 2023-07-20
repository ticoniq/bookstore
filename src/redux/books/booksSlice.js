import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const appId = '8jyxEDElW0vb1k0o9GE1';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';

const initialState = {
  bookItems: [],
  isLoading: true,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (thunkAPI) => {
  try {
    const response = await axios(`${url}/${appId}/books`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export const addBookItem = createAsyncThunk('books/addNewBook', async (data, thunkAPI) => {
  try {
    const response = await axios.post(`${url}/${appId}/books`, data);
    thunkAPI.dispatch(fetchBooks());
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export const removeBookItem = createAsyncThunk('books/removeBookItem', async (id, thunkAPI) => {
  try {
    const response = await axios.delete(`${url}/${appId}/books/${id}`, id);
    thunkAPI.dispatch(fetchBooks());
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addNewBook: (state, action) => {
      state.bookItems.push(action.payload);
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.bookItems = state.bookItems.filter((item) => item.id !== itemId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        const data = Object.keys(action.payload).map((item) => {
          const book = {};
          book.author = action.payload[item][0].author;
          book.category = action.payload[item][0].category;
          book.title = action.payload[item][0].title;
          book.item_id = item;
          return book;
        });
        state.books = data;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addBookItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addBookItem.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addBookItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(removeBookItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeBookItem.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(removeBookItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { addNewBook, removeItem } = bookSlice.actions;

export default bookSlice.reducer;
