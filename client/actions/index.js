import fb from '../utils/firebase';
import _ from 'lodash';
import {
  FETCH_COMPANIES,
  DELETE_COMPANY,
  CREATE_COMPANY
} from './types';

export function fetchCompanies() {
  return dispatch => {
    fb.ref('/company').on('value', snapshot =>{
      dispatch({
        type: FETCH_COMPANIES,
        payload: snapshot.val()
      });
    });
  };
}

export function createCompany(company) {
  return dispatch => fb.ref('company').push({"name": company});
}

export function deleteCompany(key) {
  return dispatch => fb.ref('company').child(key).remove();
}
