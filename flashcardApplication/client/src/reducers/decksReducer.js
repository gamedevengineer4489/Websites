import _ from 'lodash';

import { CREATE_DECK, DELETE_DECK, FETCH_DECKS } from "../actions/types";

export default (state = [], action) => {
    switch(action.type) {
        case CREATE_DECK:
            var array = _.uniq(action.payload.map((card) => Object.values(card)[0]));
            return array;
        case FETCH_DECKS:
            var array = _.uniq(action.payload.map((card) => Object.values(card)[0]));
            return array;
        case DELETE_DECK:
            var array = _.uniq(action.payload.map((card) => Object.values(card)[0]));
            return array;
        default:
            return state;
    }
}