import { FETCH_POSTS_BLOG, ADD_NEW_POST, DELETE_BLOG } from "../actions/types";


export default function(state = [], action) {
    switch(action.type) {
        case FETCH_POSTS_BLOG:
            return action.payload;
        case ADD_NEW_POST:
            return [...state, action.payload];
        case DELETE_BLOG:
            return state.filter(blog => blog.Id !== action.payload);
        default:
            return state;
    }
}