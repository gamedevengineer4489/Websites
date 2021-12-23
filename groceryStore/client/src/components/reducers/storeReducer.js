import { OBTAIN_INVENTORY } from "../actions/types";

export default (state = null, action) => {
    switch(action.type) {
        case OBTAIN_INVENTORY:
            return action.payload || null;
        default:
            return state;
    }
}