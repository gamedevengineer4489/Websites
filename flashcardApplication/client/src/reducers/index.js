import { combineReducers } from "redux";
import authReducer from "./authReducer";
import decksReducer from "./decksReducer";
import {reducer as formReducer } from 'redux-form';
import deckWordsReducer from "./deckWordsReducer";
import deckDefinitionsReducer from "./deckDefinitionsReducer";

export default combineReducers({
    auth: authReducer,
    decks: decksReducer,
    form: formReducer,
    words: deckWordsReducer,
    definitions: deckDefinitionsReducer
})