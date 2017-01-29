import React, {Component} from 'react';

export default class TableBuzzer extends Component{
  render(){
    return(
      <div>
        <button type="button" className="btn btn-primary btn-lg btn-block">Service</button>
        <button type="button" className="btn btn-primary btn-lg btn-block">Water</button>
        <button type="button" className="btn btn-primary btn-lg btn-block">Check</button>
      </div>
    );
  }
}
