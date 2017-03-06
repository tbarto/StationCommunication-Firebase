import React, { Component } from 'react';

//CSS modules
import RaisedButton from 'material-ui/RaisedButton';

export default class TableDutyButton extends Component {

  render() {
    return (
      <div>
        <RaisedButton
          label={this.props.name}
          primary={true}
          disabled={this.props.isDisabled}
          onClick={this.props.handleClick.bind(this)}
          className="material-ui-button"
          fullWidth={true}/>
      </div>
    );
  }
}
