import _ from 'lodash';
import React, { Component } from 'react';
import TableForm from '../containers/TableForm';
import TableList from '../containers/TableList';

export default class Tables extends Component {

  render(){
    return(
      <div className="content">
        <h1>Table Setup</h1>
        <TableForm />
        <TableList />
      </div>
    );
  }
}
