import { OBTAIN_COFFEE } from "../actions/types";

export default (state = null, action) => {
    switch(action.type) {
        case OBTAIN_COFFEE:
            return action.payload || null;
        default:
            return state;
    }
}