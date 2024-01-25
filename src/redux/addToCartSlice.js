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
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
    },
  },
});

export const {addToCart, increaseQuantity, decreaseQuantity, removeItem} =
  addToCartSlice.actions;
export const selectTotalPrice = state => {
  return state.cart.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
};

export const selectCartItems = state => state.cart.items;

export default addToCartSlice.reducer;
