import { ADD_TO_CART, CHECKOUT } from "../../actions/types";

export default (state = {items: [], total: null}, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            let newCart = action.payload;
            let newestTotal = 0;
            for(var items of newCart.items)
            {
                newestTotal += items.productPrice;
            }
            let newState = {...state, items: newCart, total: newestTotal.toFixed(2)};
            return newState;
        case CHECKOUT:
            let newerState = {...state, items: [], total: 0 };
            return newerState;
        default:
            return state;
    }
}