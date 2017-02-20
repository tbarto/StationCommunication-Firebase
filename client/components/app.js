import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar';
//import * as actions from '../actions';

export class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

export default connect()(App);
