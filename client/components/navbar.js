import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class NavBar extends Component {
  render(){
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo center">Logo</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><a href="#">Home</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
