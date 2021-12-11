import { SIGN_IN, SIGN_UP } from "../actions/types";

export default (state = null, action) => {
    switch(action.type) {
        case SIGN_IN:
            return action.payload || false;
        case SIGN_UP:
            return action.payload || false;
        default:
            return state;
    }
}

// By default the state is null. If the user fails to log-in or sign-up the state is set to false. The state would be false if the backend server fails to send data back to the client. The magic of javascript in which there are no strong types. A milder
// This would mean that the information provided on the client side is false. Therefore the state is set to false.
// version of this exists in object-oriented programming languages like C#, where objects can be abstracted to objects.
// I wonder what the version of this would be in C++ or C#.
