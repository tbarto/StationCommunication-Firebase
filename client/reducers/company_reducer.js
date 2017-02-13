import {
  FETCH_COMPANY,
  FETCH_FUNCTIONS,
  FETCH_TABLES
} from '../actions/types';

const INITIAL_STATE = {
  "company": {},
  "fns": {},
  "tables": {}
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_COMPANY:
      return {...state, "company": action.payload};
    case FETCH_FUNCTIONS:
      return {...state, "fns": action.payload};
    case FETCH_TABLES:
      return {...state, "tables": action.payload};
  }
  return state;
}
