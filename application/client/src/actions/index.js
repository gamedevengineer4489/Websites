// From Stack Overflow
// Axios is used to send a web request whereas express is used to listen and serve these web requests. 
// In simple words, express is used to respond to the web requests sent by axios. 
// If you know about the fetch () method in javascript, axios is just an alternative to fetch ().

// importing the axios library
import axios from 'axios';
import jsonPlaceholder from '../api/jsonPlaceholder';
import _ from 'lodash';


// import constants from types.js
import { FETCH_USER_GOOGLE, FETCH_USER_SPOTIFY, FETCH_POSTS_BLOG, FETCH_USERS_BLOG, REMOVE_UNDEFINED_VALUES, ADD_NEW_POST, ADD_NEW_USER } from './types';

// Use axios to send requests to our express server.
export const fetchUserSpotify = () => async (dispatch) => {
        const res = await axios.get('/api/current_user_spotify');
        console.log(res.data);
        // res.data.email = ""
        // res.data.spotifyUserName = ""
        
        dispatch({ type: FETCH_USER_SPOTIFY, payload: res.data });
}


export const fetchUserGoogle = () => async (dispatch) => {
        const res = await axios.get('/api/current_user_google');
        console.log(res.data);
        
        dispatch({ type: FETCH_USER_GOOGLE, payload: res.data });
}

export const fetchUsersBlog = (id) => async (dispatch) => {
        const res = await jsonPlaceholder.get(`/users/${id}`);
        console.log(res.data);
        
        dispatch({ type: FETCH_USERS_BLOG, payload: res.data });
}

export const fetchPostsBlog = () => async (dispatch) => {
        const res = await jsonPlaceholder.get('/posts');
        
        dispatch({ type: FETCH_POSTS_BLOG, payload: res.data });
}

export const fetchPostsAndUsersBlog = () => async (dispatch, getState) => {
        // The fetchPostsBlog already utilizes the reducer, no need to specify anymore details.
        //await dispatch(removeUndefinedValues());
        await dispatch(fetchPostsBlog());
        
        // redux Thunk contains an additional function in addition to dispatch
        // This function is the getState() function.

        // Using the lodash library
        // Always have to use the dispatch function when returning a function.
        _.chain(getState().blogs).map('userId').uniq().forEach(id => dispatch(fetchUsersBlog(id))).value();
}

// Add a new post. This new post uses the display name stored in this application's state.
export const removeUndefinedValues = () => async (dispatch) => {
        

        dispatch({ type: REMOVE_UNDEFINED_VALUES });
}

export const addNewPost = (title, body, userId, email, userName) => async (dispatch) => {
        const newPost = { userId: userId, username: userName, email: email, body: body, title: title };
        const result = await axios.post('/api/blog_posts', newPost);
        console.log(result);
        dispatch({ type: ADD_NEW_POST, payload: newPost});
}

export const addNewUser = (title, body, userId, email, userName) => async (dispatch) => {
        const newUser = { id: userId, username: userName, email: email }

        dispatch({ type: ADD_NEW_USER, payload: newUser});
}



