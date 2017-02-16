import {
  FETCH_COMPANY,
  FETCH_FUNCTIONS,
  FETCH_TABLES,
  FETCH_CALLS,
  LISTEN_CALLS
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
    case FETCH_CALLS:
      return {...state, "calls": action.payload}
    case LISTEN_CALLS:
      return {...state, "buttonCalls": action.payload}
  }
  return state;
}
