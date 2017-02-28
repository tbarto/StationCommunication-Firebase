import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const style = {
  width: '100%',
  margin: 5,
  display: 'inline-block',
  padding:10
};

class StationView extends Component {

  render(){
    return (
      <Paper
        onClick={this.props.handleClick.bind(this)}
        style={style}
        zDepth={4}
        >
        {`${this.props.call.tname}...${this.props.call.name}`}
      </Paper>
    );
  }
}

export default StationView;

// <RaisedButton
//   label={`${this.props.call.tname}...${this.props.call.name}`}
//   onClick={this.props.handleClick.bind(this)}
//   primary={true}
//   className="material-ui-button"
//   />
