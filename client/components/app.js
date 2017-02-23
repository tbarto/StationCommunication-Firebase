import React, { Component } from 'react';
import { connect } from 'react-redux';
//import * as actions from '../actions';
import Header from './Header';

export class App extends Component {

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default connect()(App);
