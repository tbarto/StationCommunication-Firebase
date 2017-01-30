'use strict'

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {callReceived, clearCall} from '../actions/index';
import io from 'socket.io-client';

import {SERVICE, WATER, CHECK} from '../components/table';
const socket = io.connect();

class Station extends Component{

  componentDidMount(){
    console.log('component mounted');
    socket.on('call', this.props.callReceived);
  }

  renderCalls(){
    return this.props.station.calls.map((call, index) =>{
      return(
        <div
          key={index}
          className={`station-call ${call.type}`}
          onClick={this.props.clearCall.bind(this,socket,call,index)}>
          <div className="station-call-content">{call.tableNum}</div>
        </div>
      );
    });
  }
  render(){
    return(
      <div className="station-container">
        <h2>Communication Station</h2>
        <div>{this.renderCalls()}</div>
      </div>
    );
  }

}

function mapStateToProps(state){
    return {
      station: state.station
    };
}
export default connect(mapStateToProps, {callReceived, clearCall})(Station);
