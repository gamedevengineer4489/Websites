import { FETCH_USERS_BLOG, ADD_NEW_USER } from "../actions/types";
import _ from "lodash";

export default function(state = [], action) {
    switch(action.type) {
        // case FETCH_USERS_BLOG:
        //     return [ ...state, action.payload ]
        case ADD_NEW_USER:
            return [ ...state, action.payload ]
        default:
            return state;
    }
}