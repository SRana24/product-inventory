import {combineReducers} from 'redux';
import addToCartReducer from './AddToCartSlice';
import toggleFavorite from './favouritesSlice';

const rootReducer = combineReducers({
  cart: addToCartReducer,
  favourites: toggleFavorite,
});

export default rootReducer;
