import { OBTAIN_SOUVENIR_INVENTORY } from "../../actions/types";

export default (state = null, action) => {
    switch(action.type) {
        case OBTAIN_SOUVENIR_INVENTORY:
            return action.payload;
        default:
            return state;
    }
}