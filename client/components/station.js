'use strict'

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {callReceived, clearCall} from '../actions/index';
import io from 'socket.io-client';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
          <div className="station-call-content">table: {call.tableNum}</div>
        </div>
      );
    });
  }
  render(){
    const transitionOptions = {
        transitionName: 'fade',
        transitionEnterTimeout: 500,
        transitionLeaveTimeout: 500
    };

    return(
      <div className="station-container">
        <h2>Communication Station</h2>
        <h3>{this.props.station.calls.length<1? 'waiting for service call' : ''}</h3>

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
