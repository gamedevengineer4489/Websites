import axios from 'axios';

import { OBTAIN_USER_DATA, SIGN_IN, CHANGE_USER_DATA } from "./types";

export const signIn = () => async (dispatch) => {
    const res = await axios.get('/auth/google');
    
    dispatch({ type: SIGN_IN, payload: res.data });
}

export const obtainUserData = (id) => async (dispatch) => {
    const res = await axios.get(`/auth/obtainUser/${id}`);
    dispatch({ type: OBTAIN_USER_DATA, payload: res.data });
}

export const changeUserData = (id, propertyToChange, amountToSet, additionalPropertyToChange, amountToSetAdditional) => async (dispatch) => {
    const res = await axios.patch(`/auth/changeUserData/${id}`, { id, propertyToChange, additionalPropertyToChange, amountToSet, amountToSetAdditional });
    console.log(res);
    dispatch({ type: CHANGE_USER_DATA, payload: res.data });
}

export const getCurrentUser = () => async (dispatch) => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: SIGN_IN, payload: res.data });
}