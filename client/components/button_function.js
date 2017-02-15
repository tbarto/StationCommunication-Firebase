import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/company';
import _ from 'lodash';

class ButtonFunction extends Component {

  componentWillMount(){
      //this.props.fetchFunctions(this.props.params.rid);
  }


  render() {
    return (
      <div>
        <button onClick={this.props.createCall.bind(this,this.props.fn.name,this.props.rid,this.props.tid)}className="btn btn-primary btn-lg btn-block">{this.props.fn.name}</button>
      </div>
    );
  }
}

export default connect(null, actions)(ButtonFunction);
