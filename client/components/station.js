import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions/station';

class Station extends Component {

  componentWillMount(){
    //start listening to restaurant-calls
    this.props.fetchCalls(this.props.location.query['rid']);
  }

  renderCalls(){
    const rid = this.props.location.query['rid'];
    return _.map(this.props.calls, (call, key) => {
      return(
        <li onClick={this.props.deleteCall.bind(this, rid, call.tid, key)} key={key}>{call.tname}...{call.name}</li>
      );
    });
  }

  render() {
    return (
      <div>
        Welcome to a station view
        <ul>
          {this.renderCalls()}
        </ul>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { calls: state.company.calls };
}

export default connect(mapStateToProps, actions)(Station);
