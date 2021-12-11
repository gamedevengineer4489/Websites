import { OBTAIN_ALL_USERS } from "../actions/types";

export default (state = [], action) => {
    switch(action.type) {
        case OBTAIN_ALL_USERS:
            return action.payload;
        default:
            return state;
    }
}