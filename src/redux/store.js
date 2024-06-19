import { applyMiddleware, combineReducers, createStore } from "redux";
import genreReducer from "./reducer/genreReducer";
import movieReducer from "./reducer/movieReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  genres: genreReducer,
  movies: movieReducer,
});

export default createStore(rootReducer,applyMiddleware(thunk));
