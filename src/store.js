import { configureStore } from "@reduxjs/toolkit";
import frontEndReducer from './features/frontEnd';

export const store = configureStore({
  reducer : {
    frontEnd : frontEndReducer,
  },
})