import {fbApp, fb} from '../utils/firebase';
import getUserId from '../utils/userInfo';

import _ from 'lodash';
import {
  FETCH_COMPANY,
  FETCH_DUTIES,
  CREATE_DUTY,
  DELETE_FUNCTION,
  FETCH_TABLES,
  CREATE_CALL,
  LISTEN_CALLS
} from './types';

export function fetchCompany() {
  const userUid = getUserId();
  return dispatch => {
    fb.ref('/company/'+ userUid).on('value', snapshot =>{
      dispatch({
        type: FETCH_COMPANY,
        payload: snapshot.val()
      });
    });
  };
}

export function fetchDuties() {
  const userUid = getUserId();
  return dispatch => {
    fb.ref('/functions/' + userUid).on('value', snapshot =>{
      dispatch({
        type: FETCH_DUTIES,
        payload: snapshot.val()
      });
    });
  };
}

export function createDuty(name) {
  const userUid = getUserId();
  return dispatch => fb.ref('/functions/' + userUid).push({"name": name});
}

export function deleteDuty(key) {
  const userUid = getUserId();
  return dispatch => fb.ref('/functions/' + userUid).child(key).remove();
}

/* Table Data*/
export function fetchTables() {
  const userUid = getUserId();
  console.log('fetching tables: '+userUid);
  return dispatch => {
    fb.ref('/tables/' + userUid).on('value', snapshot =>{
      dispatch({
        type: FETCH_TABLES,
        payload: snapshot.val()
      });
    });
  };
}

export function createTable(table) {
  const userUid = getUserId();
  return dispatch => fb.ref('/tables/' + userUid).push({"name": table});
}
export function deleteTable(key) {
  const userUid = getUserId();
  return dispatch => fb.ref('/tables/' + userUid).child(key).remove();
}

/*Button Functions*/
export function createCall(name, tid, tname) {
  const userUid = getUserId();
  //generate new id
  const newKey = fb.ref().child('calls').push().key;

  //create data to update
  let updatedData = {};
  updatedData['/calls/' + newKey] = {
    name: name,
    tid: tid,
    rid: userUid,
    tname: tname
  }
  updatedData['/restaurant_calls/' + userUid + '/' + newKey] = {
    name: name,
    tid: tid,
    tname: tname
  };
  updatedData['/table_calls/' + tid + '/' + newKey] = {
    name: name
  };

  //do the update
  return dispatch => fb.ref().update(updatedData);
}

export function listenCalls(tid) {
  return dispatch => fb.ref('/table_calls/' + tid).on('value', snapshot=>{
    dispatch({
      type: LISTEN_CALLS,
      payload: snapshot.val()
    })
  })
}
