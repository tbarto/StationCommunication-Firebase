import React, {Component} from 'react';
import {Link} from 'react-router';

export default class App extends Component{
  render(){
    return(
      <div>
        <h1>ReactJS Socket io Restaurant Communication</h1>
        <Link to="/table/enter">to a table</Link>
        {this.props.children}

      </div>
    );
  }
}
