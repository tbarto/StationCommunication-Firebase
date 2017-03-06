import React, { Component } from 'react';
import DutyForm from './DutyForm';
import DutyList from './DutyList';

class Duties extends Component {

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

export default Duties;
