import React, { Component } from 'react';
import {Link} from 'react-router';

//CSS modules
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const btnStyle={
  color: 'white'
}

class AppIndex extends Component {

  render() {
    return (
      <div className="bg">
        <div className="hero">
        <div className="section group">
          <div className="col span_3_of_12"></div>
          <div className="form col span_6_of_12">
            <h1>jeogiyo</h1>
            <h2>The Table Service Platform</h2>
            <div>
              <FlatButton
                label="Login"
                labelStyle={btnStyle}
                containerElement={<Link to="/login" />}
              />
              <FlatButton
                label="Sign Up"
                labelStyle={btnStyle}
                containerElement={<Link to="/signup" />}
              />
            </div>
          </div>
          <div className="col span_3_of_12"></div>
        </div>
      </div>
    </div>
    );
  }
}

export default AppIndex;
