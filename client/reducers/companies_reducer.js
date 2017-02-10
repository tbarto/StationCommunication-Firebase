import _ from 'lodash';
import {
  FETCH_COMPANIES,
  CREATE_COMPANY,
  DELETE_COMPANY
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_COMPANIES:
      return action.payload;
    case CREATE_COMPANY:
      return { ...state, ...action.payload };
    case DELETE_COMPANY:
      return _.omit(state, action.payload);
  }

  return state;
}
