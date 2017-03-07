import React, { Component } from 'react';

export default class Dashboard extends Component {

  render(){

    return(
      <div className="content">
        <h1 className="title">Welcome to jeogiyo</h1>
        <section className="section group">
          <h2>Station</h2>
          <ul>
            <li>View and cancel all calls</li>
            <li>Open multiple stations to interact with calls</li>
          </ul>
        </section>
        <section>
          <h2>Duties</h2>
          <ul>
            <li>Add or remove typical restaurant duties</li>
          </ul>
        </section>
        <section>
          <h2>Tables</h2>
          <ul>
            <li>Add or remove tables</li>
            <li>Access each table directly</li>
          </ul>
        </section>
      </div>
    );
  }
}
