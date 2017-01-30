'use strict'

import {CALL_RECEIVED, CLEAR_CALL} from '../actions/index';

const INITIAL_STATE = {
  "calls": []
};

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case CALL_RECEIVED:
      let newCalls = [...state.calls, action.payload];
      return {...state, calls: newCalls};
    case CLEAR_CALL:
      let allCalls = state.calls.filter((call,index)=>{
        return (index != action.payload.index);
      });
      return {...state, calls: allCalls};
    default:
      return state;
  }
}
