import { combineReducers } from "redux";
import authReducer from "./authReducer";
import animalReducer from "./animalReducer";
import clothesReducer from "./shopReducers/clothesReducer";
import filmsReducer from "./shopReducers/filmsReducer";
import gamesReducer from "./shopReducers/gamesReducer";
import souvenirReducer from "./shopReducers/souvenirReducer";
import cartReducer from "./shopReducers/cartReducer";

export default combineReducers({
    auth: authReducer,
    animals: animalReducer,
    clothes: clothesReducer,
    films: filmsReducer,
    games: gamesReducer,
    souvenirs: souvenirReducer,
    cart: cartReducer
})