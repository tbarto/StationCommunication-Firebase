import React, { Component } from 'react';
import { connect } from 'react-redux';
//import * as actions from '../actions';

export default class CompanyAdmin extends Component {

  render() {
    return (
      <div>
        <h1>Welcome to the Company Admin!</h1>
      </div>
    );
  }
}

export default connect()(CompanyAdmin);
