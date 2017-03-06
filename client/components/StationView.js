import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/station';
import _ from 'lodash';
import StationCallItem from './StationCallItem';

class StationView extends Component {

  componentWillMount(){
    //start listening to restaurant-calls
    this.props.fetchCalls();
  }

  renderCalls(){
    return _.map(this.props.calls, (call, key) => {
      return(
        <div className="col span_2_of_12" key={key}>
          <StationCallItem
            handleClick={this.props.deleteCall.bind(this, call.tid, key)}
            call={call} />
        </div>
      );
    });
  }

  render(){
    return (
      <div className="bg">
        <div className="section group full-page">
          <div className="col span_12_of_12"><h1 className="title">Station View</h1></div>
          {this.renderCalls()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { calls: state.company.calls };
}

export default connect(mapStateToProps, actions)(StationView);
