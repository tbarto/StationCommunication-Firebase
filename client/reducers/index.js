import { combineReducers } from 'redux';
import companyReducer from './companies_reducer';

const rootReducer = combineReducers({
  companies: companyReducer
});

export default rootReducer;
