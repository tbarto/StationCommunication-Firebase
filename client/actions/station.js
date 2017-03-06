import {fbApp, fb} from '../utils/firebase';
import getUserId from '../utils/userInfo';

import _ from 'lodash';
import {
  FETCH_CALLS
} from './types';


export function fetchCalls(rid) {
  const userUid = getUserId();
  return dispatch => {
    fb.ref('/restaurant_calls/'+ userUid).on('value', snapshot =>{
      dispatch({
        type: FETCH_CALLS,
        payload: snapshot.val()
      });
    });
  };
}
export function deleteCall(tid, key) {

  const userUid = getUserId();
  let deletedData = {}

  deletedData['/calls/' + key] = null;
  deletedData['/restaurant_calls/' + userUid + '/' + key] = null;
  deletedData['/table_calls/' + tid + '/' + key] = null;

  return dispatch => fb.ref().update(deletedData);
}
//return dispatch => fb.ref('/restaurant_calls/' + rid).child(key).remove();
