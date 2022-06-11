import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arryItems : ['apple', 'banana', 'orange'],
  number : 4,
  total : 3,
  isLoading : true
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers : {
    clearCart : (state) => {
      state.number = state.number + 1;
    }
  }
})
console.log(cartSlice);
export const {clearCart} = cartSlice.actions

export default cartSlice.reducer;