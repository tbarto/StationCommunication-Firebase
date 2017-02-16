import fb from '../utils/firebase';
import _ from 'lodash';
import {
  FETCH_CALLS
} from './types';

export function fetchCalls(rid) {
  return dispatch => {
    fb.ref('/restaurant_calls/'+ rid).on('value', snapshot =>{
      dispatch({
        type: FETCH_CALLS,
        payload: snapshot.val()
      });
    });
  };
}
export function deleteCall(rid, tid, key) {
  let deletedData = {}

  deletedData['/calls/' + key] = null;
  deletedData['/restaurant_calls/' + rid + '/' + key] = null;
  deletedData['/table_calls/' + tid + '/' + key] = null;

  return dispatch => fb.ref().update(deletedData);
}
//return dispatch => fb.ref('/restaurant_calls/' + rid).child(key).remove();
