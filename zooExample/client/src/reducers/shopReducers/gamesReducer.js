import { OBTAIN_GAMES_INVENTORY } from "../../actions/types";

export default (state = null, action) => {
    switch(action.type) {
        case OBTAIN_GAMES_INVENTORY:
            return action.payload;
        default:
            return state;
    }
}