import { combineReducers } from 'redux';
import companiesReducer from './companies_reducer';
import companyReducer from './company_reducer';
import AuthReducer from './auth';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  auth: AuthReducer,
  companies: companiesReducer,
  company: companyReducer,
  form: formReducer
});

export default rootReducer;
