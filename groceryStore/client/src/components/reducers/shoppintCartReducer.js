import { ADD_TO_SHOPPING_CART, CHECKOUT } from "../actions/types";

export default (state = {items: [], total: 0}, action) => {
    switch(action.type) {
        case ADD_TO_SHOPPING_CART:
            let newItem = action.payload;
            let newtotal = state.total + action.payload.productPrice;
            let newState = {...state, items: [...state.items, newItem], total: newtotal };
            return newState;
        case CHECKOUT:
            let newerState = {...state, items: [], total: 0 };
            return newerState
        default:
            return state;
    }
}