import axios from 'axios';
import { SIGN_IN, SIGN_UP, OBTAIN_INVENTORY, ADD_TO_SHOPPING_CART, CHECKOUT } from './types';

export const signin = (formProps) => async (dispatch) => {
    const res = await axios.post('/auth/signin', formProps);

    dispatch({ type: SIGN_IN, payload: res.data });
}

export const signup = (formProps) => async (dispatch) => {
    console.log(formProps);
    const res = await axios.post('/auth/signup', formProps);

    dispatch({ type: SIGN_UP, payload: res.data });
}

export const getCurrentUser = () => async (dispatch) => {
    const res = await axios.get('/auth/currentUser');

    dispatch({ type: SIGN_IN, payload: res.data });
}

export const getInventory = () => async (dispatch) => {
    const res = await axios.get('/store/inventory');

    dispatch({ type: OBTAIN_INVENTORY, payload: res.data });
}

export const addToShoppingCart = (item) => async (dispatch) => {
    dispatch({ type: ADD_TO_SHOPPING_CART, payload: item });
}

export const handleToken = (token, amount) => async dispatch => {
    const res = await axios.post('/api/stripe', {token, amount} );
    
    dispatch({ type: CHECKOUT, payload: null });
};

