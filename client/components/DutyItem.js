import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/company';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';

class DutyItem extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.deleteDuty(this.props.id, this.props.rid);
  }

  render() {
    return (
      <TableRow>
        <TableRowColumn>{this.props.duty.name}</TableRowColumn>
        <TableRowColumn>
          <IconButton
            onClick={this.handleClick}>
            <i className="material-icons" >delete</i>
            </IconButton>
        </TableRowColumn>
      </TableRow>
    );
  }
}

export default connect(null, actions)(DutyItem);
