import { SET_MOVIE_EXACT } from "../actions";

const initialStateFilm = {};

export const movieExactReduser = (state = initialStateFilm, action) => {
  switch (action.type) {
    case SET_MOVIE_EXACT:
      return { ...action.payload };
    default:
      return state;
  }
};
