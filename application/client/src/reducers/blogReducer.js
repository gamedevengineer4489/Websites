import { FETCH_POSTS_BLOG } from "../actions/types";

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_POSTS_BLOG:
            return action.payload;
        default:
            return state;
    }
}