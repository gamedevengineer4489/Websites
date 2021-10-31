// From Stack Overflow
// Axios is used to send a web request whereas express is used to listen and serve these web requests. 
// In simple words, express is used to respond to the web requests sent by axios. 
// If you know about the fetch () method in javascript, axios is just an alternative to fetch ().

// importing the axios library
import axios from 'axios';
import jsonPlaceholder from '../api/jsonPlaceholder';
import _ from 'lodash';



// import constants from types.js
import { FETCH_USER_GOOGLE, FETCH_USER_SPOTIFY, FETCH_POSTS_BLOG, FETCH_USERS_BLOG, REMOVE_UNDEFINED_VALUES, ADD_NEW_POST, ADD_NEW_USER, FETCH_USER_LOCAL, DELETE_BLOG, FETCH_USER_STEAM, FETCH_OTHER_USER, FETCH_OTHER_USER_BLOGS } from './types';

// Use axios to send requests to our express server.
export const fetchUserSpotify = () => async (dispatch) => {
        const res = await axios.get(`/api/current_user`);
        console.log(res.data);

        
        dispatch({ type: FETCH_USER_SPOTIFY, payload: res.data });
}

export const fetchUserSteam = () => async (dispatch) => {
        const res = await axios.get(`/api/current_user`);
        console.log(res.data);

        
        dispatch({ type: FETCH_USER_STEAM, payload: res.data });
}


export const fetchUserGoogle = () => async (dispatch) => {
        const res = await axios.get(`/api/current_user`);
        console.log(res.data);
        
        dispatch({ type: FETCH_USER_GOOGLE, payload: res.data });
}

export const fetchUsersBlog = (id) => async (dispatch) => {
        const res = await jsonPlaceholder.get(`/users/${id}`);
        console.log(res.data);
        
        dispatch({ type: FETCH_USERS_BLOG, payload: res.data });
}

export const fetchPostsBlog = () => async (dispatch) => {
        //const res = await jsonPlaceholder.get('/posts');
        const res = await axios.get(`/api/blog_posts`);
        console.log(res.data);
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
        _.chain(getState().blogs).map('userId').uniq().value();
}

// Add a new post. This new post uses the display name stored in this application's state.
export const removeUndefinedValues = () => async (dispatch) => {
        

        dispatch({ type: REMOVE_UNDEFINED_VALUES });
}

export const addNewPost = (title, body, userId, email, userName, date_created, Id) => async (dispatch) => {
        const newPost = { userId: userId, username: userName, email: email, body: body, title: title, date_created: date_created, Id: Id, likes: 0, dislikes: 0  };
        const result = await axios.post('/api/blog_posts', newPost);

        dispatch({ type: ADD_NEW_POST, payload: newPost});
}



export const addNewUserCustom = function(username, password, firstName, lastName, email, imageURL, avatar) {
        return async function(dispatch) {
                const newUser = { username, password, firstName, lastName, email, imageURL, avatar };
                const res = await axios.post('/api/register', newUser);
                 
                dispatch({ type: ADD_NEW_USER, payload: newUser});
                 
        }
}

export const likePost = (Id) => async (dispatch) => {
        const res = axios.patch(`/api/list/likes/${Id}`);
        // console.log(res.data);

        dispatch({ type: FETCH_POSTS_BLOG, payload: res.data })
}


export const dislikePost = function(Id) {
        return async (dispatch) => {
                console.log(Id);
                const res = await axios.patch(`/api/list/dislikes/${Id}`);
                // console.log(res.data);

                dispatch({ type: FETCH_POSTS_BLOG, payload: res.data })
        }
}

export const editPost = function(blogID, title, body) {
        return async (dispatch) => {
                console.log(blogID);
                const res = await axios.patch(`/api/blog_posts/edit/${blogID}`, {title : title, body: body});
                // console.log(res.data);

                dispatch({ type: FETCH_POSTS_BLOG, payload: res.data })
        }
}

export const signInLocal = (username, password) => async (dispatch) => {
        const data = {"username": username, "password": password}
        const res = await axios.post('/auth/local', data);
         
        dispatch({ type: FETCH_USER_LOCAL, payload: res.data });
}


export const postUserLocal = (auth) => async (dispatch) => {
        const res = await axios.post('/api/current_user', auth);
        console.log(res.data);
        
        dispatch({ type: FETCH_USER_LOCAL, payload: res.data });
}

export const fetchUserLocal = (id) => async (dispatch) => {
        const res = await axios.get(`/api/current_user/${id}`);
        
        dispatch({ type: FETCH_USER_LOCAL, payload: res.data });
}

export const fetchUserOther = (id) => async (dispatch) => {
        const res = await axios.get(`/api/user/${id}`);
        
        dispatch({ type: FETCH_OTHER_USER, payload: res.data });
}

export const fetchBlogsOther = (id) => async (dispatch) => {
        const res = await axios.get(`/api/blog/${id}`);
        
        dispatch({ type: FETCH_OTHER_USER_BLOGS, payload: res.data });
}

export const deleteBlog = (id) => async(dispatch) => {
        
        const res = await axios.delete(`/api/blog_posts/${id}`);

        dispatch({ type: DELETE_BLOG, payload: id });

}

export const submitComment = (comment, username, email, id, otherId) => async(dispatch) => {
        const res = await axios.patch(`/api/blog/${id}`, { comment: comment, username: username, email: email, id: id});
        console.log(res.data);
        dispatch(fetchBlogsOther(otherId));

}





