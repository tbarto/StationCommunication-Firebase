'use strict'

import {CALL_STATION, CLEAR_BUTTON, SET_ID} from '../actions/index';
import {SERVICE, WATER, CHECK} from '../components/table';

const INITIAL_STATE = {
  "tableId":"",
  "serviceEnabled": true,
  "waterEnabled": true,
  "checkEnabled": true
};

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case SET_ID:
      return {...state,tableId: action.payload};
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
      if(state.tableId == action.payload.tableNum){
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
      }else return state;
    default:
      return state;
  }
}
