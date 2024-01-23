import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const addToCartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(
        item => item.id === newItem.id,
      );

      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += 1;
      } else {
        state.items.push({...newItem, quantity: 1});
      }
    },
    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === itemId);

      if (itemIndex !== -1) {
        state.items[itemIndex].quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === itemId);

      if (itemIndex !== -1) {
        if (state.items[itemIndex].quantity > 1) {
          state.items[itemIndex].quantity -= 1;
        }
      }
    },
  },
});

export const {addToCart, increaseQuantity, decreaseQuantity} =
  addToCartSlice.actions;
export const selectCartItems = state => state.cart.items;

export default addToCartSlice.reducer;
