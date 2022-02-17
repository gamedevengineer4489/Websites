import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userAccountReducer from "./userAccountReducer";
import upgradesReducer from "./upgradesReducer";
import rentReducer from "./rentReducer";

export default combineReducers({
    auth: authReducer,
    user: userAccountReducer,
    upgrades: upgradesReducer,
    rent: rentReducer
})