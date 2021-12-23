import authReducer from "./authReducer";
import {reducer as formReducer} from 'redux-form';
import { combineReducers } from "redux";
import storeReducer from "./storeReducer";
import shoppingCartReducer from "./shoppintCartReducer";

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    store: storeReducer,
    shoppingCart: shoppingCartReducer
});