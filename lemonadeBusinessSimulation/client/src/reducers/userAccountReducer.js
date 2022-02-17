import { OBTAIN_USER_DATA, CHANGE_USER_DATA } from "../actions/types";

export default (state = null, action) => {
    switch(action.type) {
        case OBTAIN_USER_DATA:
            return action.payload;
        case CHANGE_USER_DATA:
            return action.payload;
        default:
            return state;
    }
}