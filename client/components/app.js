import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../containers/Header';

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
