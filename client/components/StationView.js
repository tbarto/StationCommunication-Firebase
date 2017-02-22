import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/station';
import _ from 'lodash';
import StationCallItem from './StationCallItem';

class StationView extends Component {

  componentWillMount(){
    //start listening to restaurant-calls
    this.props.fetchCalls(this.props.location.query['rid']);
  }

  renderCalls(){
    const rid = this.props.location.query['rid'];
    return _.map(this.props.calls, (call, key) => {
      return(
        <StationCallItem
          handleClick={this.props.deleteCall.bind(this, rid, call.tid, key)}
          key={key}
          call={call} />
      );
    });
  }

  render(){
    return (
      <div>
        <h1 className="title">Station View</h1>
        {this.renderCalls()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { calls: state.company.calls };
}

export default connect(mapStateToProps, actions)(StationView);
