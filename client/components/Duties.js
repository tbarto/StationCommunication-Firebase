import React, { Component } from 'react';
import DutyForm from '../containers/DutyForm';
import DutyList from '../containers/DutyList';

export default class Duties extends Component {
  render(){
    return(
      <div className="content">
        <h1>Duty Setup</h1>
        <DutyForm />
        <DutyList />
      </div>
    );
  }
}
