import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/company';
//import FunctionItem from './company_function_item';
import DutyForm from './DutyForm';
import DutyList from './DutyList';

class Duties extends Component {

  render(){
    const rid = this.props.location.query['rid'];

    return(
      <div className="content">
        <h1>Duty Setup</h1>
        <DutyForm rid={rid} />
        <DutyList rid={rid} />
      </div>
    );
  }
}

export default connect(null, actions)(Duties);
