'use strict'

import io from 'socket.io-client';

export const SET_ID = 'SET_ID';
export const CALL_STATION = 'CALL_STATION';
export const CLEAR_BUTTON = 'CLEAR_BUTTON';
export const CALL_RECEIVED = 'CALL_RECEIVED';
export const CLEAR_CALL = 'CLEAR_CALL';

export function setId(tableId){
  return{
    type: SET_ID,
    payload: tableId
  }
}
export function callService(socket, table){
    socket.emit('call',table);
    return{
      type: CALL_STATION,
      payload: table.type
    };
}

export function clearButton(data){
  return{
    type: CLEAR_BUTTON,
    payload: data
  };
}

export function callReceived(table){
  return{
    type: CALL_RECEIVED,
    payload: table
  };
}

export function clearCall(socket, call, index){
  socket.emit('clearCall', call);
  return{
    type: CLEAR_CALL,
    payload: {"call": call, "index": index}
  }
}
