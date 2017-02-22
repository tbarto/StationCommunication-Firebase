import fb from '../utils/firebase';
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

export function fetchDuties(rid) {
  return dispatch => {
    fb.ref('/functions/' + rid).on('value', snapshot =>{
      dispatch({
        type: FETCH_DUTIES,
        payload: snapshot.val()
      });
    });
  };
}

export function createDuty(name,rid) {
  return dispatch => fb.ref('/functions/' + rid).push({"name": name});
}
export function deleteDuty(key, rid) {
  return dispatch => fb.ref('/functions/' + rid).child(key).remove();
}

/* Table Data*/
export function fetchTables(rid) {
  console.log('rid: '+ rid);
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

/*Button Functions*/
export function createCall(name,rid, tid, tname) {
  //generate new id
  const newKey = fb.ref().child('calls').push().key;

  //create data to update
  let updatedData = {};
  updatedData['/calls/' + newKey] = {
    name: name,
    tid: tid,
    rid: rid,
    tname: tname
  }
  updatedData['/restaurant_calls/' + rid + '/' + newKey] = {
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
