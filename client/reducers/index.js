import { combineReducers } from 'redux';
import companyReducer from './company_reducer';
import AuthReducer from './auth';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  auth: AuthReducer,
  company: companyReducer,
  form: formReducer
});

export default rootReducer;
