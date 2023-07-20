import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const appId = 'Pv07lkhuAJvBV0UHCald';
const appId = '8jyxEDElW0vb1k0o9GE1';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';

const initialState = {
  bookItems: [],
  isloading: true,
};

export const getBookItems = createAsyncThunk('books/getBookItems', async (thunkAPI) => {
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
    thunkAPI.dispatch(getBookItems());
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export const removeBookItem = createAsyncThunk('books/removeBookItem', async (id, thunkAPI) => {
  try {
    const response = await axios.delete(`${url}/${appId}/books/${id}`, id);
    thunkAPI.dispatch(getBookItems());
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
      .addCase(getBookItems.pending, (state) => {
        state.isloading = true;
      })
      .addCase(getBookItems.fulfilled, (state, action) => {
        state.isloading = false;
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
      .addCase(getBookItems.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(addBookItem.pending, (state) => {
        state.isloading = true;
      })
      .addCase(addBookItem.fulfilled, (state) => {
        state.isloading = false;
      })
      .addCase(addBookItem.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(removeBookItem.pending, (state) => {
        state.isloading = true;
      })
      .addCase(removeBookItem.fulfilled, (state) => {
        state.isloading = false;
      })
      .addCase(removeBookItem.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      });
  },
});

export const { addNewBook, removeItem } = bookSlice.actions;

export default bookSlice.reducer;
