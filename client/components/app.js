import React, { Component } from 'react';
import { connect } from 'react-redux';
//import * as actions from '../actions';

export default class App extends Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default connect()(App);
