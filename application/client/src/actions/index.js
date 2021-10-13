// From Stack Overflow
// Axios is used to send a web request whereas express is used to listen and serve these web requests. 
// In simple words, express is used to respond to the web requests sent by axios. 
// If you know about the fetch () method in javascript, axios is just an alternative to fetch ().

// importing the axios library
import axios from 'axios';

// import constants from types.js
import { FETCH_USER_GOOGLE, FETCH_USER_SPOTIFY } from './types';

// Use axios to send requests to our express server.
export const fetchUserSpotify = () => async (dispatch) => {
        const res = await axios.get('/api/current_user_spotify');

        dispatch({ type: FETCH_USER_SPOTIFY, payload: res.data });
}


export const fetchUserGoogle = () => async (dispatch) => {
        const res = await axios.get('/api/current_user_google');

        dispatch({ type: FETCH_USER_GOOGLE, payload: res.data });
}
