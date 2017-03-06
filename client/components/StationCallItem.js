import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const style = {
  width: '100%',
  margin: 5,
  display: 'inline-block',
  padding:10
};

export default class StationView extends Component {

  render(){
    return (
      <Paper
        className="call"
        onClick={this.props.handleClick.bind(this)}
        style={style}
        zDepth={4}
        >
        <div>{this.props.call.tname}</div>
        <div>{this.props.call.name}</div>
      </Paper>
    );
  }
}
