import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../api/axios';

export const fetchFrontEnd = createAsyncThunk('get/frontEnd', 
  async(_query, _page) => {
  const res = await axios.get('', {
    params: {
      query: _query,
      page: _page
    }
  })

  if (res.data) {
    return res.data.documents;
  } else {
    return console.error('오류 발생');
  }
})

const initialState = {
  books: [],
  loading: 'Loading...'
}

const bookSlice = createSlice({
  name: 'frontEnd',
  initialState,
  reducers : { },
  extraReducers: (builder) => {
    builder.addCase(fetchFrontEnd.fulfilled, (state, action) => {
      const bookList = action.payload;
      [...bookList].map((book) => {
        return state.books.push(book)
      })
    })
  }
})
// console.log(bookSlice);

export default bookSlice.reducer;