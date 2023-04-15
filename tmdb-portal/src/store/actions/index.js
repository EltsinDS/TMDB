export const SET_PERSON_EXACT = 'SET_PERSON_EXACT';
export const SET_MOVIE_EXACT = 'SET_MOVIE_EXACT';

export const setPersonExatsActionCreator = actor => ({type: SET_PERSON_EXACT, payload: actor});
export const setMovieExactActionCreator = film => ({type: SET_MOVIE_EXACT, payload: film});

