import React, {Component} from 'react';
import {Link} from 'react-router';

export default class AppIndex extends Component{
  render(){
    return(
      <div className="index-container">
        <h1>Real-Time Restaurant Communication Station</h1>
        <h2>ReactJS - NodeJS - socket.io</h2>
        <ul className="list-group">
          <li className="list-group-item"><Link to="/table/100">to Demo Table #100</Link></li>
          <li className="list-group-item"><Link to="/table/200">to Demo Table #200</Link></li>
          <li className="list-group-item"><Link to="/table/300">to Demo Table #300</Link></li>
          <li className="list-group-item"><Link to="/station">to Demo Station</Link></li>
        </ul>
        <p>This is a demo version of a software-based restaurant table paging system similar to those that are popular in Korea and shown in the image below.</p>
        <p> The demo station is meant to run on a large screen, and the demo tables are meant to run on a small screen.</p>
        <img src="https://ae01.alicdn.com/kf/HTB1pM2DLpXXXXchXpXXq6xXFXXXC/Wireless-waiter-call-button-system-call-buzzer-system-Restaurant-Waiter-Call-System-hotel-bar-KTV-guest.jpg" />
      </div>
    );
  }
}
