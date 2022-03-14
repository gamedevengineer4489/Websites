import { FETCH_DECK_WORDS } from "../actions/types";

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_DECK_WORDS:
            let words = [];
            action.payload.map((card) => {
                let json = Object.values(card);
                words.push(json[0].replace('_', ' '));
            })
            return words;
        default:
            return state;
    }
}