import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartProductIds: []
  },
  reducers: {
    addToCart: (state, action) =>{
      state.cartProductIds = [action.payload, ...state.cartProductIds]
    },
    removeFromCart: (state, action) =>{
      const indexOfId = state.cartProductIds.indexOf(action.payload)
      state.cartProductIds.splice(indexOfId, 1)
    },
    clearAllCartItems: (state) =>{
      state.cartProductIds = []
    }
  }
})

export const { addToCart, removeFromCart, clearAllCartItems } = cartSlice.actions
export default cartSlice.reducer
