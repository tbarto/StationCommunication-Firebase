import React, { Component } from 'react';

//CSS modules
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';

export default class DutyItem extends Component {

  render() {
    return (
      <TableRow>
        <TableRowColumn>{this.props.duty.name}</TableRowColumn>
        <TableRowColumn>
          <IconButton
            onClick={this.props.handleClick.bind(this)}>
            <i className="material-icons" >delete</i>
            </IconButton>
        </TableRowColumn>
      </TableRow>
    );
  }
}
