import { combineReducers } from 'redux';
import companiesReducer from './companies_reducer';
import companyReducer from './company_reducer';

const rootReducer = combineReducers({
  companies: companiesReducer,
  company: companyReducer
});

export default rootReducer;
