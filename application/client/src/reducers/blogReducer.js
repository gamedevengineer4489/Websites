import { FETCH_POSTS_BLOG, ADD_NEW_POST, DELETE_BLOG } from "../actions/types";
import _ from 'lodash';

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_POSTS_BLOG:
            return action.payload;
        case ADD_NEW_POST:
            console.log(state);
            return [...state, action.payload];
        case DELETE_BLOG:
            console.log(state);
            state.map(blog => console.log(blog.Id));
            return state.filter(blog => blog.Id != action.payload);
        default:
            return state;
    }
}