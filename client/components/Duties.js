import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/company';
//import FunctionItem from './company_function_item';
import DutyForm from './DutyForm';
import DutyList from './DutyList';

class Duties extends Component {

  render(){
    return(
      <div>
        <h1>Duties</h1>
        <DutyForm rid={this.props.rid} />
        <DutyList rid={this.props.rid} />
      </div>
    );
  }
}

export default connect(null, actions)(Duties);
