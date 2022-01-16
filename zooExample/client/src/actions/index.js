import axios from 'axios';

import { OBTAIN_CLOTHES_INVENTORY, OBTAIN_FILM_INVENTORY, OBTAIN_GAMES_INVENTORY, OBTAIN_SOUVENIR_INVENTORY, SIGN_IN, ADD_TO_CART, CHECKOUT } from "./types";

export const signIn = () => async (dispatch) => {
    const res = await axios.get('/auth/google');

    dispatch({ type: SIGN_IN, payload: res.data });
}

export const getCurrentUser = () => async (dispatch) => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: SIGN_IN, payload: res.data });
}

export const obtainClothesInventory = () => async (dispatch) => {
    const res = await axios.get('/store/clothes');

    dispatch({ type: OBTAIN_CLOTHES_INVENTORY, payload: res.data });
}

export const obtainGamesInventory = () => async (dispatch) => {
    const res = await axios.get('/store/games');

    dispatch({ type: OBTAIN_GAMES_INVENTORY, payload: res.data });
}

export const obtainFilmInventory = () => async (dispatch) => {
    const res = await axios.get('/store/films');

    dispatch({ type: OBTAIN_FILM_INVENTORY, payload: res.data });
}

export const obtainSouvenirInventory = () => async (dispatch) => {
    const res = await axios.get('/store/souvenirs');

    dispatch({ type: OBTAIN_SOUVENIR_INVENTORY, payload: res.data });
}

export const addItemToCart = (item) => async (dispatch) => {
    const res = await axios.post('/store/addtoCart', item);

    dispatch({ type: ADD_TO_CART, payload: res.data });
}

export const getCart = () => async (dispatch) => {
    const res = await axios.get('/store/getCart');

    dispatch({ type: ADD_TO_CART, payload: res.data});
}

export const handleToken = (token, amount, items) => async dispatch => {
    await axios.post('/api/stripe', {token, amount, items} );
    dispatch({ type: CHECKOUT, payload: null });
};