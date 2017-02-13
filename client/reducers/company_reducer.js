import {
  FETCH_COMPANY,
  FETCH_FUNCTIONS
} from '../actions/types';

const INITIAL_STATE = {
  "company": {
    "name": ''
  },
  "fns": {}
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_COMPANY:
      return {...state.company, "company": action.payload};
    case FETCH_FUNCTIONS:
      return {...state.fns, "fns": action.payload};
  }
  return state;
}
