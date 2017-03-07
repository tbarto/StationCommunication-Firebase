import {fb} from '../utils/firebase';
import getUserId from '../utils/userInfo';
import {
  LISTEN_CALLS
} from './types';

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
