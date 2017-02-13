import fb from '../utils/firebase';
import _ from 'lodash';
import {
  FETCH_COMPANY,
  FETCH_FUNCTIONS,
  CREATE_FUNCTION,
  DELETE_FUNCTION,
  FETCH_TABLES
} from './types';

export function fetchCompany(id) {
  return dispatch => {
    fb.ref('/company/'+ id).on('value', snapshot =>{
      dispatch({
        type: FETCH_COMPANY,
        payload: snapshot.val()
      });
    });
  };
}

export function fetchFunctions(rid) {
  return dispatch => {
    fb.ref('/functions/' + rid).on('value', snapshot =>{
      dispatch({
        type: FETCH_FUNCTIONS,
        payload: snapshot.val()
      });
    });
  };
}

export function createFunction(fn,rid) {
  return dispatch => fb.ref('/functions/' + rid).push({"name": fn});
}
export function deleteFunction(key, rid) {
  return dispatch => fb.ref('/functions/' + rid).child(key).remove();
}

/* Table Data*/
export function fetchTables(rid) {
  console.log('fetching tables');
  return dispatch => {
    fb.ref('/tables/' + rid).on('value', snapshot =>{
      dispatch({
        type: FETCH_TABLES,
        payload: snapshot.val()
      });
    });
  };
}

export function createTable(table,rid) {
  return dispatch => fb.ref('/tables/' + rid).push({"name": table});
}
export function deleteTable(key, rid) {
  return dispatch => fb.ref('/tables/' + rid).child(key).remove();
}
