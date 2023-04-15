import {
  SET_PERSON_EXACT
} from '../actions';

const initialStateActor = {};

export const personExactReducer = (state = initialStateActor, action) => {
  switch (action.type) {
    case SET_PERSON_EXACT:
      return { ...action.payload };
    default:
      return state;
  }
};
