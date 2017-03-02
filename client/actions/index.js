import {fbApp, fb} from '../utils/firebase';
import _ from 'lodash';
import {browserHistory} from 'react-router';

import {
  FETCH_COMPANIES,
  DELETE_COMPANY,
  CREATE_COMPANY,
  SIGN_IN_USER,
  SIGN_OUT_USER,
  AUTH_ERROR,
  AUTH_USER
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

export function signInUser(credentials) {
  return function(dispatch) {
    fbApp.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(response => {
        dispatch(authUser());
        browserHistory.push('/restaurant');
      })
      .catch(error => {
        dispatch(authError(error));
      });
  }
}

export function signOutUser()
{
  console.log('signing out!');
  fbApp.auth().signOut();
  browserHistory.push('/');
  return function (dispatch){
    dispatch(authOut());
  }
}

export function signUpUser(credentials) {
  return function(dispatch) {
    fbApp.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(response => {
        dispatch(authUser());
        browserHistory.push('/restaurant');
      })
      .catch(error => {
        console.log(error);
        dispatch(authError(error));
      });
  }
}

export function authOut(){
  return {
    type: SIGN_OUT_USER
  }
}
export function verifyAuth() {
  return function (dispatch) {
    fbApp.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(authUser());
      } else {
        dispatch(authOut());
      }
    });
  }
}

export function authUser() {
  return {
    type: AUTH_USER
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
