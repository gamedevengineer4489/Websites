import axios from 'axios';
import { SIGN_IN, SIGN_UP, OBTAIN_INVENTORY, CHECKOUT, OBTAIN_COFFEE, CART_DRAFT, REMOVE_FROM_CART } from './types';

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

export const changePassword = (formProps) => async (dispatch) => {
    const res = await axios.patch('/auth/changePassword', formProps);

    dispatch({ type: SIGN_IN, payload: res.data });
}

export const getInventory = () => async (dispatch) => {
    const res = await axios.get('/store/inventory');

    dispatch({ type: OBTAIN_INVENTORY, payload: res.data });
}

export const getCoffee = () => async (dispatch) => {
    const res = await axios.get('/coffee/inventory');

    dispatch({ type: OBTAIN_COFFEE, payload: res.data });
}

export const addToCartDraft = (item) => async (dispatch) => {
    const res = await axios.post('/store/cart', item);

    dispatch({ type: CART_DRAFT, payload: res.data });
}

export const removeFromCart = (item) => async (dispatch) => {
    const res = await axios.patch('/store/cart', item);

    dispatch({ type: REMOVE_FROM_CART, payload: res.data });
}

export const getCart = () => async (dispatch) => {
    const res = await axios.get('/store/getCart');

    dispatch({ type: CART_DRAFT, payload: res.data});
}



export const handleToken = (token, amount, items) => async dispatch => {
    await axios.post('/api/stripe', {token, amount, items} );
    // local storage is bad. let's not use it.
    localStorage.clear();
    dispatch({ type: CHECKOUT, payload: null });
};

