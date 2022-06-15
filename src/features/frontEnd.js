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
  return res.data;
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
      state.books.push(action.payload)
    })
  }
})
// console.log(bookSlice);

export default bookSlice.reducer;