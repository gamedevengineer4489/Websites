import axios from 'axios';
import { SIGN_IN, SIGN_UP, OBTAIN_ALL_USERS } from './types';

// Axios is used to make requests to a backend server which in development in this case is localhost:5000/. 
// In production it would be on the same server or the same domain origin since http is stateless.

export const signin = function(formProps, callback) {
    return async function(dispatch) {
        
            const res = await axios.post('/auth/signin', formProps);
            console.log(res);
            // Response to the client-side from the backend server
            dispatch({ type: SIGN_IN, payload: res.data});
           
    }
}

export const getCurrentUser = () => async (dispatch) => {
    const res = await axios.get('/auth/currentUser');
    console.log(res);
    dispatch({ type: SIGN_IN, payload: res.data });
}

export const changePassword = (formProps) => async (dispatch) => {
    const res = await axios.patch('/auth/changePassword', formProps);
    console.log(res);
    dispatch({ type: SIGN_IN, payload: res.data });
}

export const addUserData = (formProps) => {
    return async function(dispatch) {
        const res = await axios.patch('/auth/addUserData', formProps);
        console.log(res);
        dispatch({ type: SIGN_IN, payload: res.data });
    }
}

export const addComment = (username, commenterUsername, email, profileImage, formProps) => {
    return async function(dispatch) {
        const res = await axios.patch('/auth/addComment', {username, commenterUsername, email, profileImage, comment: formProps});
        console.log(res);
        dispatch({ type: SIGN_IN, payload: res.data });
    }
}

export const addImageData = (formProps) => {
    return async function(dispatch) {
        const res = await axios.patch('/auth/addImageData', formProps);
        console.log(res);
        dispatch({ type: SIGN_IN, payload: res.data });
    }
}

export const signup = function(formProps, callback) {
    return async function(dispatch) {
        
            const res = await axios.post('/auth/signup', formProps);
            console.log(res);
            dispatch({ type: SIGN_UP, payload: res.data });
    }
}

// Obtain all users
export const obtainAllUsers = () => async (dispatch) => {
    const res = await axios.get('/auth/users');
    
    dispatch({type: OBTAIN_ALL_USERS, payload: res.data });
}

// sign out does not require an action creator since it is just a simple GET request that is handled on the backend server using (req, res). Here specifically req.logout();
