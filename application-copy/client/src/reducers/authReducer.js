import { FETCH_USER_GOOGLE, FETCH_USER_SPOTIFY } from "../actions/types";

// A reducer is a simple Javscript function that takes two arguments - the current state and an action - and returns a new state based on both arguments.

// Notice how in javascript there are no strong types and variables can be declared without stating whether the variable is a string or an int or a Big Int.
    
export default function(state = null, action) {
    switch(action.type) {
        case FETCH_USER_GOOGLE:
            // return the data contained on the payload property or false if no data was contained on the payload. In this scenario, a value of false
            // would be returned if the user is not signed-in to the application.
            return action.payload || false;
        case FETCH_USER_SPOTIFY:
            return action.payload || false;
        default:
            return state;
        // A reducer can never return an undefined value. If this happens an error will occur. 
    }
}