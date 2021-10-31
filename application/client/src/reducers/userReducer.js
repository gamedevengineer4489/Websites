import { OBTAIN_ALL_USERS } from "../actions/types";


// Obtain all users
export default function(state = [], action) {
    switch(action.type)
    {
        case OBTAIN_ALL_USERS:
            return action.payload;
        default:
            return state;
    }
}