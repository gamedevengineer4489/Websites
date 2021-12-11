import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';
import usersReducer from './usersReducer';

// exporting a function
export default combineReducers({
    auth: authReducer,
    form: formReducer,
    users: usersReducer
});