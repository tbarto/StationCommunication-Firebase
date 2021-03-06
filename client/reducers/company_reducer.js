import {
  FETCH_COMPANY,
  FETCH_DUTIES,
  FETCH_TABLES,
  FETCH_CALLS,
  LISTEN_CALLS,
  TOGGLE_NAV
} from '../actions/types';

const INITIAL_STATE = {
  "company": {},
  "duties": {},
  "tables": {},
  "navOpen": false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_COMPANY:
      return {...state, "company": action.payload};
    case FETCH_DUTIES:
      return {...state, "duties": action.payload};
    case FETCH_TABLES:
      return {...state, "tables": action.payload};
    case FETCH_CALLS:
      return {...state, "calls": action.payload}
    case LISTEN_CALLS:
      return {...state, "dutyCalls": action.payload}
    case TOGGLE_NAV:
      return {...state, "navOpen": !state.navOpen}
  }
  return state;
}
