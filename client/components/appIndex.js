import React, {Component} from 'react';
import {Link} from 'react-router';

export default class AppIndex extends Component{
  render(){
    return(
      <div className="index-container">
        <h1>ReactJS Socket-io Restaurant Communication</h1>
        <ul className="list-group">
          <li className="list-group-item"><Link to="/table/100">to Demo Table #100</Link></li>
          <li className="list-group-item"><Link to="/table/200">to Demo Table #200</Link></li>
          <li className="list-group-item"><Link to="/table/300">to Demo Table #300</Link></li>
          <li className="list-group-item"><Link to="/station">to Demo Station</Link></li>
        </ul>
      </div>
    );
  }
}
