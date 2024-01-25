import {combineReducers} from 'redux';
import addToCartReducer from './AddToCartSlice';

const rootReducer = combineReducers({
  cart: addToCartReducer,
});

export default rootReducer;
