import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class StationView extends Component {

  render(){
    return (
      <RaisedButton
        label={`${this.props.call.tname}...${this.props.call.name}`}
        onClick={this.props.handleClick.bind(this)}
        primary={true}
        className="material-ui-button"
        />
    );
  }
}

export default StationView;
