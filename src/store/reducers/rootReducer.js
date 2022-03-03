import {combineReducers} from 'redux';
import cartReducer from './cart';
import favReducer from './favourites';

export default combineReducers({
    cart: cartReducer,
    fav: favReducer
})