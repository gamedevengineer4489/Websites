import { OBTAIN_CLOTHES_INVENTORY } from "../../actions/types";

export default (state = null, action) => {
    switch(action.type) {
        case OBTAIN_CLOTHES_INVENTORY:
            return action.payload;
        default:
            return state;
    }
}