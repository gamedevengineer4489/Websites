import authReducer from "./authReducer";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import surveysReducer from "./surveysReducer";

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    surveys: surveysReducer
});