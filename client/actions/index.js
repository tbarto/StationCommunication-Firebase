import {fbApp, fb} from '../utils/firebase';
import _ from 'lodash';
import {browserHistory} from 'react-router';

import {
  SIGN_IN_USER,
  SIGN_OUT_USER,
  AUTH_ERROR,
  AUTH_USER
} from './types';

export function signInUser(credentials) {
  return function(dispatch) {
    fbApp.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(response => {
        dispatch(authUser());
        browserHistory.push('/dashboard');
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
        browserHistory.push('/dashboard');
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
  console.log('calling verifyAuth on load');
  return function (dispatch) {
    fbApp.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('there is a user');
        dispatch(authUser());
      } else {
        console.log('there is not a user');
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
