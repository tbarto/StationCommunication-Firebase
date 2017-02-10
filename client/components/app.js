import React, { Component } from 'react';
import { connect } from 'react-redux';
//import * as actions from '../actions';

export default class App extends Component {

  render() {
    return (
      <div>
        <h1>Welcome to the app!</h1>
        {this.props.children}
      </div>
    );
  }
}

export default connect()(App);
