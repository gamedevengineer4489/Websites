import { FETCH_POSTS_BLOG, ADD_NEW_POST } from "../actions/types";

export default function(state = [], action) {
    switch(action.type) {
        // case FETCH_POSTS_BLOG:
        //     return action.payload;
        case ADD_NEW_POST:
            return [...state, action.payload];
        default:
            return state;
    }
}