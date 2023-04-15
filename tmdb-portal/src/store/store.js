import { combineReducers, createStore, applyMiddleware } from "redux";
import { movieExactReduser } from "./reducers/movieExactReducer";
import { personExactReducer } from "./reducers/personExactReducer";

export const rootReducer = combineReducers({
  detailsFilm: movieExactReduser,
  detailsActor: personExactReducer,
});

export const store = createStore(rootReducer, applyMiddleware());
