'use strict'

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {callReceived, clearCall} from '../actions/index';
import io from 'socket.io-client';

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
          className="call"
          onClick={this.props.clearCall.bind(this,socket,call,index)}>
          <span>{call.tableNum}</span>
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
