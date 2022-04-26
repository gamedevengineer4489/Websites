import axios from 'axios';
import { FETCH_USER, CREATE_DECK, FETCH_DECKS, FETCH_DECK_WORDS, FETCH_DECK_DEFINITIONS, DELETE_DECK } from './types';

export const getUser = () => async (dispatch) => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
}

export const createDeck = (deckname, firstword, firstworddefinition, googleid, emailaddress) => async (dispatch) => {
    const res = await axios.post('/api/createDeck', {deckname, googleid, emailaddress, firstword, firstworddefinition});
    dispatch({ type: CREATE_DECK, payload: res.data });
}

export const fetchDecks = () => async (dispatch) => {
    const res = await axios.get(`/api/fetchDecks`);
    dispatch({ type: FETCH_DECKS, payload: res.data });
}

export const fetchDeckWords = (deckname) => async(dispatch) => {
    const res = await axios.get(`/api/fetchDeck/words/${deckname}`)
    dispatch({ type: FETCH_DECK_WORDS, payload: res.data });
}

export const fetchDeckDefinitions = (deckname) => async(dispatch) => {
    const res = await axios.get(`/api/fetchDeck/definitions/${deckname}`)
    dispatch({ type: FETCH_DECK_DEFINITIONS, payload: res.data });
}

export const deleteDeck = (deckname) => async(dispatch) => {
    const res = await axios.delete(`/api/fetchDeck/${deckname}`)
    dispatch({ type: DELETE_DECK, payload: res.data });
}