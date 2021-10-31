// The import is in brackets since in the documentation combineReducers is exported as a function instead of being exported using export default.

// combineReducers is a function that turns an object whose values are different reducer functions, into a single reducer function.
// It will call every child render, and gather their results into a single state object, whose keys correspond to the keys of the passed reducer functions.

import { combineReducers } from "redux";
import authReducer from "./authReducer";
import blogReducer from "./blogReducer";
import otherUserBlogsReducer from "./otherUserBlogsReducer";
import otherUserReducer from "./otherUserReducer";
import userReducer from "./userReducer";
// No brackets here because authReducer was exported using export default.

export default combineReducers({
    auth: authReducer,
    blogs: blogReducer,
    other: otherUserReducer,
    otherBlogs: otherUserBlogsReducer,
    users: userReducer
});