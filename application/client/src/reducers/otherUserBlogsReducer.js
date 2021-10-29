import { FETCH_OTHER_USER_BLOGS } from "../actions/types";

export default function(state = [], action) {
    switch(action.type)
    {
        case FETCH_OTHER_USER_BLOGS:
            return action.payload;
        default:
            return state;
    }
}