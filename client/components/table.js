'use strict'

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {callService, clearButton} from '../actions/index';
import io from 'socket.io-client';

const socket = io.connect();

export const SERVICE = 'SERVICE';
export const WATER = 'WATER';
export const CHECK = 'CHECK';

class TableBuzzer extends Component{

  componentWillMount(){
    //create connection with server by calling action creator
    //this.props.ioConnect();
  }

  componentDidMount(){
    //console.log('component mounted and connections exists? ' + (this.props.buttons.socket != null));
    //console.log('props after mounting: ' + JSON.stringify(this.props.buttons));
    if(socket){
      socket.on('clearCall',this.props.clearButton);
    }
  }
  test(data){
    console.log(data);
  }

  test2(){
    console.log('table emitting a call');
    socket.emit('call',{"tableNum":12,"type": "WATER"})
  }
  clearServiceRecieved(data){
    //check if table matches this table
    //call clearService to enable button again
  }

  render(){
    const tableID = this.props.params.id;
    const serviceCall = {tableNum: tableID, type: SERVICE};
    const waterCall = {tableNum: tableID, type: WATER};
    const checkCall = {tableNum: tableID, type: CHECK};

    return(
      <div className="table-container">
        <h2>Welcome Table {tableID}</h2>
        <button type="button" onClick ={this.props.callService.bind(this, socket,serviceCall)} className="btn btn-primary btn-lg btn-block" disabled = {!this.props.table.serviceEnabled}>Service</button>
        <button type="button" onClick ={this.props.callService.bind(this, socket,waterCall)} className="btn btn-primary btn-lg btn-block" disabled = {!this.props.table.waterEnabled}>Water</button>
        <button type="button" onClick ={this.props.callService.bind(this, socket,checkCall)} className="btn btn-primary btn-lg btn-block" disabled = {!this.props.table.checkEnabled}>Check</button>
      </div>
    );
  }
}

function mapStateToProps(state){
    return {
      table: state.table
    };
}
export default connect(mapStateToProps, {callService, clearButton})(TableBuzzer);
