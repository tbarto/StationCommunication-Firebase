'use strict'

import {CALL_STATION, CLEAR_BUTTON} from '../actions/index';
import {SERVICE, WATER, CHECK} from '../components/table';

const INITIAL_STATE = {
  "serviceEnabled": true,
  "waterEnabled": true,
  "checkEnabled": true
};

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case CALL_STATION:
      switch(action.payload){
        case SERVICE:
          return {...state, serviceEnabled: !state.serviceEnabled};
        case WATER:
          return {...state, waterEnabled: !state.waterEnabled};
        case CHECK:
          return {...state, checkEnabled: !state.checkEnabled};
        default:
          return state;
      }
    case CLEAR_BUTTON:
      switch( action.payload.type){
        case SERVICE:
          return {...state, serviceEnabled: !state.serviceEnabled};
        case WATER:
          return {...state, waterEnabled: !state.waterEnabled};
        case CHECK:
          return {...state, checkEnabled: !state.checkEnabled};
        default:
          return state;
      }
    default:
      return state;
  }
}
