import { OBTAIN_FILM_INVENTORY } from "../../actions/types";

export default (state = null, action) => {
    switch(action.type) {
        case OBTAIN_FILM_INVENTORY:
            return action.payload;
        default:
            return state;
    }
}