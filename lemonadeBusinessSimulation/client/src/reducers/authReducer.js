import { SIGN_IN } from "../actions/types";

export default (state = null, action) => {
    switch(action.type) {
        case SIGN_IN:
            return action.payload || false;
        default:
            return state;
    }
}