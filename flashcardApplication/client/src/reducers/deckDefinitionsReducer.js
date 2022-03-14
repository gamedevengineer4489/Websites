import { FETCH_DECK_DEFINITIONS } from "../actions/types";

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_DECK_DEFINITIONS:
            let definitions = [];
            action.payload.map((card) => {
                let json = Object.values(card);
                definitions.push(json[0].replaceAll('_', ' '));
            });
            return definitions;
        default:
            return state;
    }
}