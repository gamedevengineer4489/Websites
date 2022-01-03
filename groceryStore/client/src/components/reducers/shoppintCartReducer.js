import { CART_DRAFT, CHECKOUT } from "../actions/types";

export default (state = {items: [], total: 0}, action) => {
    switch(action.type) {
        case CART_DRAFT:
            let newCart = action.payload;
            let newestTotal = 0;
            for(var item of newCart.items)
            {
                newestTotal += item.productPrice;
            }
            let newestState = {...state, items: newCart, total: newestTotal }
            return newestState;
        case CHECKOUT:
            let newerState = {...state, items: [], total: 0 };
            return newerState
        default:
            return state;
    }
}