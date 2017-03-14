import React, { Component } from 'react';

//CSS modules
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {red400} from 'material-ui/styles/colors';

const style = {
  width: '100%',
  margin: 5,
  display: 'inline-block',
  padding:10,
  backgroundColor: '#A9F0D1',
  borderRadius: '50%'
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
          <span>{this.props.call.tname}...</span>
          <span>{this.props.call.name}</span>
      </Paper>
    );
  }
}
